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
  const safeData: PortfolioData = {
    title: data?.title || '',
    titleHighlight: data?.titleHighlight || '',
    subtitle: data?.subtitle || '',
    categories: data?.categories || ['Tất cả', 'Website', 'UI/UX App', 'Landing Page'],
    projects: data?.projects || [],
  };

  const handleTextChange = (field: keyof PortfolioData, value: string) => {
    onChange({ ...safeData, [field]: value });
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newCat = [...safeData.categories];
    newCat[index] = value;
    onChange({ ...safeData, categories: newCat });
  };

  const addCategory = () => {
    onChange({
      ...safeData,
      categories: [...safeData.categories, 'Danh mục mới'],
    });
  };

  const removeCategory = (index: number) => {
    const newCat = safeData.categories.filter((_, i) => i !== index);
    onChange({ ...safeData, categories: newCat });
  };

  const handleProjectChange = (index: number, field: keyof ProjectItem, value: string | number) => {
    const newProjects = [...safeData.projects];
    const targetProject = newProjects[index];
    if (targetProject) {
      newProjects[index] = {
        ...targetProject,
        [field]: field === 'id' ? (Number(value) || targetProject.id) : value,
      };
    }
    onChange({ ...safeData, projects: newProjects });
  };

  const handleTechStackChange = (index: number, value: string) => {
    const newProjects = [...safeData.projects];
    const targetProject = newProjects[index];
    if (targetProject) {
      newProjects[index] = {
        ...targetProject,
        techStack: value.split(',').map((t) => t.trim()).filter(Boolean),
      };
    }
    onChange({ ...safeData, projects: newProjects });
  };

  const addProject = () => {
    const maxId = safeData.projects.reduce((max, p) => {
      const pId = Number(p.id);
      return !isNaN(pId) && pId > max ? pId : max;
    }, 0);
    const nextId = maxId + 1;

    const validCategories = safeData.categories.filter((c) => c !== 'Tất cả');
    const defaultCat = validCategories.length > 0 ? validCategories[0] : 'Website';

    onChange({
      ...safeData,
      projects: [
        ...safeData.projects,
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
    const newProjects = safeData.projects.filter((_, i) => i !== index);
    onChange({ ...safeData, projects: newProjects });
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
              value={safeData.title}
              onChange={(e) => handleTextChange('title', e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Tiêu Đề Nổi Bật (Title Highlight)</label>
            <input
              type="text"
              className={styles.textInput}
              value={safeData.titleHighlight}
              onChange={(e) => handleTextChange('titleHighlight', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Phụ Đề (Subtitle)</label>
          <input
            type="text"
            className={styles.textInput}
            value={safeData.subtitle}
            onChange={(e) => handleTextChange('subtitle', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Danh Mục Lọc Dự Án (Categories)</h3>
        </div>

        <div className={styles.grid2}>
          {safeData.categories.map((cat, index) => (
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
          <h3 className={styles.cardTitle}>Danh Sách Dự Án Tiêu Biểu ({safeData.projects.length})</h3>
        </div>

        {safeData.projects.map((proj, index) => {
          const categoryOptions = Array.from(
            new Set([
              ...safeData.categories.filter((c) => c !== 'Tất cả'),
              ...(proj.category ? [proj.category] : []),
            ])
          );

          return (
            <div key={proj.id ?? index} className={styles.itemBox}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>
                  Dự án #{proj.id ?? index + 1}: {proj.title || 'Chưa đặt tên'}
                </span>
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
                    value={proj.title || ''}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Danh Mục</label>
                  <select
                    className={styles.selectInput}
                    value={proj.category || ''}
                    onChange={(e) => handleProjectChange(index, 'category', e.target.value)}
                  >
                    {categoryOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>URL Hình Ảnh Dự Án (Image URL)</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={proj.img || ''}
                  onChange={(e) => handleProjectChange(index, 'img', e.target.value)}
                />
                {proj.img && (
                  <div>
                    <label className={styles.inputLabel} style={{ marginTop: '8px', fontSize: '12px' }}>
                      Xem Trước Hình Ảnh:
                    </label>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={proj.img}
                      alt={proj.title || 'Dự án'}
                      className={styles.imgPreview}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://placehold.co/600x400?text=L%E1%BB%97i+%E1%BA%A2nh';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Mô Tả Ngắn (Description)</label>
                <textarea
                  className={styles.textInput}
                  rows={3}
                  style={{ resize: 'vertical', minHeight: '80px' }}
                  value={proj.description || ''}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  placeholder="Mô tả ngắn về dự án, kết quả đạt được..."
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Tech Stack (phân cách bằng dấu phẩy)</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={(proj.techStack || []).join(', ')}
                  onChange={(e) => handleTechStackChange(index, e.target.value)}
                  placeholder="Next.js, TypeScript, PostgreSQL, ..."
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Link Demo Live (để trống nếu không có)</label>
                <input
                  type="url"
                  className={styles.textInput}
                  value={proj.liveUrl || ''}
                  onChange={(e) => handleProjectChange(index, 'liveUrl', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          );
        })}

        <button type="button" className={styles.addItemBtn} onClick={addProject}>
          <Plus size={18} /> Thêm Dự Án Mới
        </button>
      </div>
    </div>
  );
}
