"use client";

import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { SiteData } from '@/lib/data';
import styles from '@/components/Admin/Admin.module.css';
import AdminSidebar, { AdminTab } from '@/components/Admin/AdminSidebar';
import HeaderForm from '@/components/Admin/forms/HeaderForm';
import HeroForm from '@/components/Admin/forms/HeroForm';
import AboutForm from '@/components/Admin/forms/AboutForm';
import ServicesForm from '@/components/Admin/forms/ServicesForm';
import PortfolioForm from '@/components/Admin/forms/PortfolioForm';
import ProcessForm from '@/components/Admin/forms/ProcessForm';
import FooterForm from '@/components/Admin/forms/FooterForm';
import SettingsForm from '@/components/Admin/forms/SettingsForm';
import { Save, Loader2, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

export default function AdminPage() {
  const { siteData, isLoading, isSaving, saveData, resetToDefault } = useContent();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('admin_authenticated') === 'true';
    }
    return false;
  });

  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<AdminTab>('header');
  const [draftData, setDraftData] = useState<SiteData>(siteData);
  const [prevSiteData, setPrevSiteData] = useState<SiteData>(siteData);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Sync draftData during render when siteData updates from server
  if (siteData !== prevSiteData) {
    setPrevSiteData(siteData);
    setDraftData(siteData);
  }

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      const result = await res.json();

      if (result.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
      } else {
        setAuthError(result.message || 'Mật khẩu không đúng!');
      }
    } catch {
      setAuthError('Không thể kết nối đến máy chủ.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPasswordInput('');
  };

  const handleSaveAll = async () => {
    const success = await saveData(draftData);
    if (success) {
      showToast('Đã lưu tất cả thay đổi thành công!', 'success');
    } else {
      showToast('Có lỗi xảy ra khi lưu dữ liệu!', 'error');
    }
  };

  const handleReset = async () => {
    const success = await resetToDefault();
    if (success) {
      showToast('Đã khôi phục dữ liệu mặc định thành công!', 'success');
    } else {
      showToast('Lỗi khôi phục dữ liệu!', 'error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <div className={styles.loginIcon}>
              <Shield size={32} />
            </div>
            <h1 className={styles.loginTitle}>Admin Login</h1>
            <p className={styles.loginSub}>Đăng nhập để quản lý nội dung các section</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Mật khẩu Admin</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  className={styles.textInput}
                  placeholder="Nhập mật khẩu (Mặc định: admin123)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                />
              </div>
            </div>

            {authError && (
              <p style={{ color: '#f85149', fontSize: '13px', marginBottom: '16px', textAlign: 'left' }}>
                {authError}
              </p>
            )}

            <button type="submit" className={styles.loginBtn} disabled={isLoggingIn}>
              {isLoggingIn ? 'Đang xác thực...' : 'Đăng Nhập Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.authContainer}>
        <div style={{ textAlign: 'center', color: '#00f2fe' }}>
          <Loader2 size={40} className="animate-spin" style={{ margin: '0 auto 16px auto' }} />
          <p>Đang tải dữ liệu trang Admin...</p>
        </div>
      </div>
    );
  }

  const tabTitles: Record<AdminTab, { title: string; subtitle: string }> = {
    header: { title: 'Header & Menu Điều Hướng', subtitle: 'Tùy chỉnh Logo, danh sách Menu chính và Nút kêu gọi hành động' },
    hero: { title: 'Hero Section (Đầu Trang)', subtitle: 'Chỉnh sửa lời chào, tiêu đề lớn, phụ đề và các nút mở đầu' },
    about: { title: 'Giới Thiệu & Giá Trị Cốt Lõi', subtitle: 'Quản lý thông tin bản thân, đoạn giới thiệu và các thẻ giá trị' },
    services: { title: 'Danh Sách Dịch Vụ Cốt Lõi', subtitle: 'Thêm, xóa và chỉnh sửa thông tin các dịch vụ cung cấp' },
    portfolio: { title: 'Portfolio (Dự Án Tiêu Biểu)', subtitle: 'Quản lý các danh mục dự án và danh sách hình ảnh sản phẩm' },
    process: { title: 'Quy Trình Làm Việc (Timeline)', subtitle: 'Tùy chỉnh các bước trong quy trình phục vụ khách hàng' },
    footer: { title: 'Footer & Thông Tin Liên Hệ', subtitle: 'Cập nhật Email, SĐT, Địa chỉ và bản quyền trang web' },
    settings: { title: 'Cấu Hình & Sao Lưu Dữ Liệu', subtitle: 'Xuất/Nhập file JSON backup và tùy chọn khôi phục mặc định' },
  };

  return (
    <div className={styles.adminContainer}>
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onLogout={handleLogout}
      />

      <main className={styles.mainContent}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.pageTitle}>{tabTitles[activeTab].title}</h1>
            <p className={styles.pageSubtitle}>{tabTitles[activeTab].subtitle}</p>
          </div>

          <button
            type="button"
            className={styles.saveGlobalBtn}
            onClick={handleSaveAll}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Đang Lưu...
              </>
            ) : (
              <>
                <Save size={18} /> Lưu Tất Cả Thay Đổi
              </>
            )}
          </button>
        </div>

        {activeTab === 'header' && (
          <HeaderForm
            data={draftData.header}
            onChange={(header) => setDraftData({ ...draftData, header })}
          />
        )}

        {activeTab === 'hero' && (
          <HeroForm
            data={draftData.hero}
            onChange={(hero) => setDraftData({ ...draftData, hero })}
          />
        )}

        {activeTab === 'about' && (
          <AboutForm
            data={draftData.about}
            onChange={(about) => setDraftData({ ...draftData, about })}
          />
        )}

        {activeTab === 'services' && (
          <ServicesForm
            data={draftData.services}
            onChange={(services) => setDraftData({ ...draftData, services })}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioForm
            data={draftData.portfolio}
            onChange={(portfolio) => setDraftData({ ...draftData, portfolio })}
          />
        )}

        {activeTab === 'process' && (
          <ProcessForm
            data={draftData.process}
            onChange={(process) => setDraftData({ ...draftData, process })}
          />
        )}

        {activeTab === 'footer' && (
          <FooterForm
            data={draftData.footer}
            onChange={(footer) => setDraftData({ ...draftData, footer })}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsForm
            siteData={draftData}
            onImport={(imported) => {
              setDraftData(imported);
              saveData(imported);
              showToast('Đã nhập và lưu dữ liệu mới từ file!', 'success');
            }}
            onReset={handleReset}
          />
        )}
      </main>

      {toast && (
        <div
          className={`${styles.toast} ${
            toast.type === 'success' ? styles.toastSuccess : styles.toastError
          }`}
        >
          {toast.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
