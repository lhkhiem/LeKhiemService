"use client";

import React from 'react';
import { ServicesData, ServiceItem } from '@/lib/data';
import styles from '../Admin.module.css';
import { IconPickerSelect } from '../IconPicker';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

interface ServicesFormProps {
  data: ServicesData;
  onChange: (data: ServicesData) => void;
}

export default function ServicesForm({ data, onChange }: ServicesFormProps) {
  const handleTextChange = (field: keyof ServicesData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleItemChange = (index: number, field: keyof ServiceItem, value: string) => {
    const newItems = [...data.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...data, items: newItems });
  };

  const addItem = () => {
    onChange({
      ...data,
      items: [
        ...data.items,
        { iconName: 'MonitorSmartphone', title: 'Dịch vụ mới', desc: 'Mô tả chi tiết dịch vụ này...' },
      ],
    });
  };

  const removeItem = (index: number) => {
    const newItems = data.items.filter((_, i) => i !== index);
    onChange({ ...data, items: newItems });
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <Briefcase size={20} color="#00f2fe" /> Quản Lý Tiêu Đề Dịch Vụ
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
          <h3 className={styles.cardTitle}>Danh Sách Các Dịch Vụ ({data.items.length})</h3>
        </div>

        {data.items.map((item, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Dịch vụ #{index + 1}: {item.title}</span>
              <button
                type="button"
                className={styles.deleteItemBtn}
                onClick={() => removeItem(index)}
              >
                <Trash2 size={14} /> Xóa Dịch Vụ
              </button>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Biểu Tượng (Icon)</label>
              <IconPickerSelect
                value={item.iconName}
                onChange={(icon) => handleItemChange(index, 'iconName', icon)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Tên Dịch Vụ</label>
              <input
                type="text"
                className={styles.textInput}
                value={item.title}
                onChange={(e) => handleItemChange(index, 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Mô Tả Chi Tiết Dịch Vụ</label>
              <textarea
                rows={3}
                className={styles.textareaInput}
                value={item.desc}
                onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
              />
            </div>
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addItem}>
          <Plus size={18} /> Thêm Dịch Vụ Mới
        </button>
      </div>
    </div>
  );
}
