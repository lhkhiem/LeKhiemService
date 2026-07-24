"use client";

import React from 'react';
import { FooterData } from '@/lib/data';
import styles from '../Admin.module.css';
import { PhoneCall } from 'lucide-react';

interface FooterFormProps {
  data: FooterData;
  onChange: (data: FooterData) => void;
}

export default function FooterForm({ data, onChange }: FooterFormProps) {
  const handleChange = (field: keyof FooterData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          <PhoneCall size={20} color="#00f2fe" /> Thông Tin Chân Trang & Liên Hệ (Footer & Contact)
        </h3>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Mô Tả Thương Hiệu Ở Chân Trang (Description)</label>
        <textarea
          rows={3}
          className={styles.textareaInput}
          value={data.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </div>

      <div className={styles.grid2}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Tiêu Đề Cột Link Nhanh</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.quickLinksTitle}
            onChange={(e) => handleChange('quickLinksTitle', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Tiêu Đề Cột Liên Hệ</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.contactTitle}
            onChange={(e) => handleChange('contactTitle', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.grid3}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Email Liên Hệ</label>
          <input
            type="email"
            className={styles.textInput}
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Số Điện Thoại / Zalo</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Địa Chỉ / Khu Vực Hoạt Động</label>
          <input
            type="text"
            className={styles.textInput}
            value={data.address}
            onChange={(e) => handleChange('address', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Thông Tin Bản Quyền (Copyright Text)</label>
        <input
          type="text"
          className={styles.textInput}
          value={data.copyright}
          onChange={(e) => handleChange('copyright', e.target.value)}
        />
      </div>
    </div>
  );
}
