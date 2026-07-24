"use client";

import React from 'react';
import { HeaderData, NavLink } from '@/lib/data';
import styles from '../Admin.module.css';
import { Plus, Trash2, Layout, Link as LinkIcon } from 'lucide-react';

interface HeaderFormProps {
  data: HeaderData;
  onChange: (data: HeaderData) => void;
}

export default function HeaderForm({ data, onChange }: HeaderFormProps) {
  const handleTextChange = (field: keyof HeaderData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleNavLinkChange = (index: number, field: keyof NavLink, value: string) => {
    const newLinks = [...data.navLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange({ ...data, navLinks: newLinks });
  };

  const addNavLink = () => {
    onChange({
      ...data,
      navLinks: [...data.navLinks, { name: 'Mục mới', href: '#section' }],
    });
  };

  const removeNavLink = (index: number) => {
    const newLinks = data.navLinks.filter((_, i) => i !== index);
    onChange({ ...data, navLinks: newLinks });
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <Layout size={20} color="#00f2fe" /> Logo & Cấu Hình Header
          </h3>
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Logo Từ Thứ 1 (Vd: Lê)</label>
            <input
              type="text"
              className={styles.textInput}
              value={data.logoText1}
              onChange={(e) => handleTextChange('logoText1', e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Logo Từ Thứ 2 (Vd: Khiêm)</label>
            <input
              type="text"
              className={styles.textInput}
              value={data.logoText2}
              onChange={(e) => handleTextChange('logoText2', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Nút Kêu Gọi Hành Động (CTA Button Text)</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.ctaButton}
            onChange={(e) => handleTextChange('ctaButton', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <LinkIcon size={20} color="#00f2fe" /> Danh Sách Menu Điều Hướng (Nav Links)
          </h3>
        </div>

        {data.navLinks.map((link, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Link #{index + 1}: {link.name}</span>
              <button
                type="button"
                className={styles.deleteItemBtn}
                onClick={() => removeNavLink(index)}
              >
                <Trash2 size={14} /> Xóa
              </button>
            </div>

            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Tên Hiển Thị</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={link.name}
                  onChange={(e) => handleNavLinkChange(index, 'name', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Liên Kết Anchor (href)</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={link.href}
                  onChange={(e) => handleNavLinkChange(index, 'href', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addNavLink}>
          <Plus size={18} /> Thêm Mục Menu Mới
        </button>
      </div>
    </div>
  );
}
