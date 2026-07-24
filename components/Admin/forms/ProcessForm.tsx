"use client";

import React from 'react';
import { ProcessData, ProcessStep } from '@/lib/data';
import styles from '../Admin.module.css';
import { IconPickerSelect } from '../IconPicker';
import { GitCommit, Plus, Trash2 } from 'lucide-react';

interface ProcessFormProps {
  data: ProcessData;
  onChange: (data: ProcessData) => void;
}

export default function ProcessForm({ data, onChange }: ProcessFormProps) {
  const handleTextChange = (field: keyof ProcessData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleStepChange = (index: number, field: keyof ProcessStep, value: string) => {
    const newSteps = [...data.steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    onChange({ ...data, steps: newSteps });
  };

  const addStep = () => {
    const stepNum = data.steps.length + 1;
    onChange({
      ...data,
      steps: [
        ...data.steps,
        {
          iconName: 'Search',
          title: `${stepNum}. Bước làm việc mới`,
          desc: 'Mô tả chi tiết về bước làm việc này...',
        },
      ],
    });
  };

  const removeStep = (index: number) => {
    const newSteps = data.steps.filter((_, i) => i !== index);
    onChange({ ...data, steps: newSteps });
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <GitCommit size={20} color="#00f2fe" /> Section Quy Trình Làm Việc (Process Timeline)
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
          <h3 className={styles.cardTitle}>Các Bước Trong Quy Trình ({data.steps.length})</h3>
        </div>

        {data.steps.map((step, index) => (
          <div key={index} className={styles.itemBox}>
            <div className={styles.itemHeader}>
              <span className={styles.itemTitle}>Bước #{index + 1}: {step.title}</span>
              <button
                type="button"
                className={styles.deleteItemBtn}
                onClick={() => removeStep(index)}
              >
                <Trash2 size={14} /> Xóa Bước
              </button>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Biểu Tượng (Icon)</label>
              <IconPickerSelect
                value={step.iconName}
                onChange={(icon) => handleStepChange(index, 'iconName', icon)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Tiêu Đề Bước</label>
              <input
                type="text"
                className={styles.textInput}
                value={step.title}
                onChange={(e) => handleStepChange(index, 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Mô Tả Chi Tiết Bước</label>
              <textarea
                rows={3}
                className={styles.textareaInput}
                value={step.desc}
                onChange={(e) => handleStepChange(index, 'desc', e.target.value)}
              />
            </div>
          </div>
        ))}

        <button type="button" className={styles.addItemBtn} onClick={addStep}>
          <Plus size={18} /> Thêm Bước Quy Trình Mới
        </button>
      </div>
    </div>
  );
}
