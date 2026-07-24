"use client";

import React from 'react';
import { AboutData, CoreValue } from '@/lib/data';
import styles from '../Admin.module.css';
import { IconPickerSelect } from '../IconPicker';
import { User, Plus, Trash2, ShieldCheck } from 'lucide-react';

interface AboutFormProps {
  data: AboutData;
  onChange: (data: AboutData) => void;
}

export default function AboutForm({ data, onChange }: AboutFormProps) {
  const handleTextChange = (field: keyof AboutData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleParagraphChange = (index: number, value: string) => {
    const newParas = [...data.paragraphs];
    newParas[index] = value;
    onChange({ ...data, paragraphs: newParas });
  };

  const addParagraph = () => {
    onChange({
      ...data,
      paragraphs: [...data.paragraphs, 'Thêm nội dung đoạn văn bản mới ở đây...'],
    });
  };

  const removeParagraph = (index: number) => {
    const newParas = data.paragraphs.filter((_, i) => i !== index);
    onChange({ ...data, paragraphs: newParas });
  };

  const handleValueChange = (index: number, field: keyof CoreValue, value: string) => {
    const newValues = [...data.coreValues];
    newValues[index] = { ...newValues[index], [field]: value };
    onChange({ ...data, coreValues: newValues });
  };

  const addCoreValue = () => {
    onChange({
      ...data,
      coreValues: [
        ...data.coreValues,
        { iconName: 'Zap', title: 'Giá trị mới', desc: 'Mô tả chi tiết giá trị này...' },
      ],
    });
  };

  const removeCoreValue = (index: number) => {
    const newValues = data.coreValues.filter((_, i) => i !== index);
    onChange({ ...data, coreValues: newValues });
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <User size={20} color="#00f2fe" /> Giới Thiệu Bản Thân (About Section)
          </h3>
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Tiêu Đề Thường (Title)</label>
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
          <h3 className={styles.cardTitle}>Các Đoạn Văn Giới Thiệu</h3>
        </div>

        {data.paragraphs.map((para, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Đoạn văn #{index + 1}</span>
              {data.paragraphs.length > 1 && (
                <button
                  type="button"
                  className={styles.deleteItemBtn}
                  onClick={() => removeParagraph(index)}
                >
                  <Trash2 size={14} /> Xóa
                </button>
              )}
            </div>
            <textarea
              rows={3}
              className={styles.textareaInput}
              value={para}
              onChange={(e) => handleParagraphChange(index, e.target.value)}
            />
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addParagraph}>
          <Plus size={18} /> Thêm Đoạn Văn Mới
        </button>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <ShieldCheck size={20} color="#00f2fe" /> Giá Trị Cốt Lõi (Core Values)
          </h3>
        </div>

        {data.coreValues.map((val, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Giá trị #{index + 1}: {val.title}</span>
              <button
                type="button"
                className={styles.deleteItemBtn}
                onClick={() => removeCoreValue(index)}
              >
                <Trash2 size={14} /> Xóa
              </button>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Biểu tượng (Icon)</label>
              <IconPickerSelect
                value={val.iconName}
                onChange={(icon) => handleValueChange(index, 'iconName', icon)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Tiêu đề giá trị</label>
              <input
                type="text"
                className={styles.textInput}
                value={val.title}
                onChange={(e) => handleValueChange(index, 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Mô tả</label>
              <textarea
                rows={2}
                className={styles.textareaInput}
                value={val.desc}
                onChange={(e) => handleValueChange(index, 'desc', e.target.value)}
              />
            </div>
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addCoreValue}>
          <Plus size={18} /> Thêm Thẻ Giá Trị Cốt Lõi
        </button>
      </div>
    </div>
  );
}
