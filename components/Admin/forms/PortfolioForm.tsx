"use client";

import React from 'react';
import { PortfolioData, ProjectItem } from '@/lib/data';
import styles from '../Admin.module.css';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';

interface PortfolioFormProps {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
}

export default function PortfolioForm({ data, onChange }: PortfolioFormProps) {
  const handleTextChange = (field: keyof PortfolioData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newCat = [...data.categories];
    newCat[index] = value;
    onChange({ ...data, categories: newCat });
  };

  const addCategory = () => {
    onChange({
      ...data,
      categories: [...data.categories, 'Danh mục mới'],
    });
  };

  const removeCategory = (index: number) => {
    const newCat = data.categories.filter((_, i) => i !== index);
    onChange({ ...data, categories: newCat });
  };

  const handleProjectChange = (index: number, field: keyof ProjectItem, value: string | number) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange({ ...data, projects: newProjects });
  };

  const addProject = () => {
    const nextId = data.projects.length > 0 ? Math.max(...data.projects.map(p => p.id)) + 1 : 1;
    const defaultCat = data.categories.length > 1 ? data.categories[1] : (data.categories[0] || 'Website');
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: nextId,
          title: 'Dự án mới',
          category: defaultCat,
          img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    onChange({ ...data, projects: newProjects });
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <FolderGit2 size={20} color="#00f2fe" /> Quản Lý Section Portfolio (Dự Án)
          </h3>
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Tiêu Đề (Title)</label>
            <input
              type="text"
              className={styles.textInput}
              value={data.title}
              onChange={(e) => handleTextChange('title', e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Tiêu Đề Nổi Bật (Title Highlight)</label>
            <input
              type="text"
              className={styles.textInput}
              value={data.titleHighlight}
              onChange={(e) => handleTextChange('titleHighlight', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Phụ Đề (Subtitle)</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.subtitle}
            onChange={(e) => handleTextChange('subtitle', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Danh Mục Lọc Dự Án (Categories)</h3>
        </div>

        <div className={styles.grid2}>
          {data.categories.map((cat, index) => (
            <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <input
                type="text"
                className={styles.textInput}
                value={cat}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
              />
              {cat !== 'Tất cả' && (
                <button
                  type="button"
                  className={styles.deleteItemBtn}
                  onClick={() => removeCategory(index)}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        <button type="button" className={styles.addItemBtn} onClick={addCategory}>
          <Plus size={18} /> Thêm Danh Mục Mới
        </button>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Danh Sách Dự Án Tiêu Biểu ({data.projects.length})</h3>
        </div>

        {data.projects.map((proj, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Dự án #{proj.id}: {proj.title}</span>
              <button
                type="button"
                className={styles.deleteItemBtn}
                onClick={() => removeProject(index)}
              >
                <Trash2 size={14} /> Xóa Dự Án
              </button>
            </div>

            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Tên Dự Án</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={proj.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Danh Mục</label>
                <select
                  className={styles.selectInput}
                  value={proj.category}
                  onChange={(e) => handleProjectChange(index, 'category', e.target.value)}
                >
                  {data.categories.filter(c => c !== 'Tất cả').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>URL Hình Ảnh Dự Án (Image URL)</label>
              <input
                type="text"
                className={styles.textInput}
                value={proj.img}
                onChange={(e) => handleProjectChange(index, 'img', e.target.value)}
              />
              {proj.img && (
                <div>
                  <label className={styles.inputLabel} style={{ marginTop: '8px', fontSize: '12px' }}>Xem Trước Hình Ảnh:</label>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className={styles.imgPreview}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x400?text=Lỗi+Ảnh'; }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addProject}>
          <Plus size={18} /> Thêm Dự Án Mới
        </button>
      </div>
    </div>
  );
}
