"use client";

import React from 'react';
import styles from './Admin.module.css';
import { 
  Layout, Zap, User, Briefcase, FolderGit2, GitCommit, 
  PhoneCall, Settings, ExternalLink, LogOut, ShieldCheck 
} from 'lucide-react';

export type AdminTab = 'header' | 'hero' | 'about' | 'services' | 'portfolio' | 'process' | 'footer' | 'settings';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
}

export default function AdminSidebar({ activeTab, onTabChange, onLogout }: AdminSidebarProps) {
  const tabs: { id: AdminTab; label: string; icon: React.ElementType }[] = [
    { id: 'header', label: 'Header & Navigation', icon: Layout },
    { id: 'hero', label: 'Hero Section', icon: Zap },
    { id: 'about', label: 'About & Core Values', icon: User },
    { id: 'services', label: 'Services Grid', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio Gallery', icon: FolderGit2 },
    { id: 'process', label: 'Process Timeline', icon: GitCommit },
    { id: 'footer', label: 'Footer & Contact', icon: PhoneCall },
    { id: 'settings', label: 'Backup & Settings', icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarTitle}>
          <ShieldCheck size={26} color="#00f2fe" /> Admin Control
        </div>
        <div className={styles.sidebarSub}>Quản lý nội dung Lê Khiêm Service</div>
      </div>

      <ul className={styles.navList}>
        {tabs.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id} className={styles.navItem}>
              <button
                type="button"
                className={`${styles.navBtn} ${isActive ? styles.active : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                <IconComp size={18} />
                <span>{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className={styles.sidebarFooter}>
        <a href="/" target="_blank" rel="noopener noreferrer" className={styles.previewBtn}>
          <ExternalLink size={16} /> Xem Trang Chủ
        </a>

        <button type="button" className={styles.logoutBtn} onClick={onLogout}>
          <LogOut size={16} /> Đăng Xuất
        </button>
      </div>
    </aside>
  );
}
