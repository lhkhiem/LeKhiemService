"use client";

import React from 'react';
import { HeroData } from '@/lib/data';
import styles from '../Admin.module.css';
import { Zap } from 'lucide-react';

interface HeroFormProps {
  data: HeroData;
  onChange: (data: HeroData) => void;
}

export default function HeroForm({ data, onChange }: HeroFormProps) {
  const handleChange = (field: keyof HeroData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          <Zap size={20} color="#00f2fe" /> Hero Section (Đầu Trang)
        </h3>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Lời Chào (Greeting)</label>
        <input
          type="text"
          className={styles.textInput}
          value={data.greeting}
          onChange={(e) => handleChange('greeting', e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Tên Chính (Title)</label>
        <input
          type="text"
          className={styles.textInput}
          value={data.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>

      <div className={styles.grid3}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Phụ Đề Đầu</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Phụ Đề Nổi Bật (Gradient Text)</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.subtitleHighlight}
            onChange={(e) => handleChange('subtitleHighlight', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Phụ Đề Cuối</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.subtitleEnd}
            onChange={(e) => handleChange('subtitleEnd', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Mô Tả Chi Tiết (Description)</label>
        <textarea
          rows={4}
          className={styles.textareaInput}
          value={data.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </div>

      <div className={styles.grid2}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Nút Chính (Primary Button Label)</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.primaryBtn}
            onChange={(e) => handleChange('primaryBtn', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Nút Phụ (Secondary Button Label)</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.secondaryBtn}
            onChange={(e) => handleChange('secondaryBtn', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
