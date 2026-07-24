"use client";

import React, { useRef } from 'react';
import { SiteData } from '@/lib/data';
import styles from '../Admin.module.css';
import { Download, Upload, RefreshCw, ShieldAlert, Key } from 'lucide-react';

interface SettingsFormProps {
  siteData: SiteData;
  onImport: (importedData: SiteData) => void;
  onReset: () => void;
}

export default function SettingsForm({ siteData, onImport, onReset }: SettingsFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `lekhiem_service_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.header && parsed.hero) {
            onImport(parsed as SiteData);
          } else {
            alert("File JSON không hợp lệ hoặc thiếu cấu trúc dự án.");
          }
        } catch {
          alert("Lỗi đọc file JSON: File bị lỗi định dạng.");
        }
      };
    }
  };

  return (
    <div>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <Download size={20} color="#00f2fe" /> Sao Lưu & Phục Hồi Dữ Liệu (Backup & Import JSON)
          </h3>
        </div>

        <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '20px' }}>
          Bạn có thể xuất file sao lưu JSON dữ liệu hiện tại để lưu trữ hoặc nhập dữ liệu từ một file JSON đã sao lưu trước đó.
        </p>

        <div className={styles.grid2}>
          <div>
            <button type="button" className={styles.addItemBtn} onClick={handleExportJSON} style={{ borderColor: '#00f2fe' }}>
              <Download size={18} /> Export File Sao Lưu (.json)
            </button>
          </div>

          <div>
            <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              className={styles.addItemBtn}
              onClick={() => fileInputRef.current?.click()}
              style={{ borderColor: '#4facfe', color: '#4facfe' }}
            >
              <Upload size={18} /> Import Dữ Liệu Từ File (.json)
            </button>
          </div>
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            <Key size={20} color="#00f2fe" /> Bảo Mật & Mật Khẩu Admin
          </h3>
        </div>

        <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '12px' }}>
          Mật khẩu đăng nhập Admin hiện tại mặc định là <code style={{ color: '#00f2fe', background: 'rgba(0, 242, 254, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>admin123</code>.
        </p>
        <p style={{ color: '#8b949e', fontSize: '14px' }}>
          Để thay đổi mật khẩu đăng nhập Admin thành mật khẩu riêng của bạn, vui lòng mở file <code style={{ color: '#fff' }}>.env.local</code> ở thư mục gốc và thêm dòng:
        </p>
        <pre style={{ background: '#0d1117', border: '1px solid #30363d', padding: '12px', borderRadius: '8px', color: '#00f2fe', marginTop: '10px', fontSize: '13px' }}>
          ADMIN_PASSWORD=MatKhauBaoMatCuaBan123
        </pre>
      </div>

      <div className={styles.formCard} style={{ borderColor: 'rgba(248, 81, 73, 0.4)' }}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle} style={{ color: '#f85149' }}>
            <ShieldAlert size={20} color="#f85149" /> Khôi Phục Về Dữ Liệu Mặc Định Nguồn
          </h3>
        </div>

        <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '20px' }}>
          Hành động này sẽ xóa các chỉnh sửa hiện tại và khôi phục lại toàn bộ thông tin ban đầu của website.
        </p>

        <button
          type="button"
          className={styles.deleteItemBtn}
          style={{ padding: '12px 20px', fontSize: '14px', fontWeight: '600' }}
          onClick={() => {
            if (confirm("Bạn có chắc chắn muốn khôi phục dữ liệu về mặc định ban đầu không? Thao tác này không thể hoàn tác.")) {
              onReset();
            }
          }}
        >
          <RefreshCw size={16} /> Khôi Phục Dữ Liệu Mặc Định
        </button>
      </div>
    </div>
  );
}
