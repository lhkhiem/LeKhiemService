"use client";

import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import styles from './FloatingWidget.module.css';

export default function FloatingWidget() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { siteData } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const cleanPhone = siteData.footer.phone ? siteData.footer.phone.replace(/[^0-9]/g, '') : '';

  return (
    <div className={styles.widgetContainer}>
      <a href={`tel:${cleanPhone}`} className={styles.callButton} aria-label="Gọi ngay">
        <div className={styles.radarEffect}></div>
        <Phone size={24} color="white" />
      </a>
      
      <a href={`https://zalo.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className={styles.zaloButton} aria-label="Chat Zalo">
        <span className={styles.zaloText}>Zalo</span>
      </a>

      <button 
        className={`${styles.topButton} ${showTopBtn ? styles.show : ''}`} 
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
