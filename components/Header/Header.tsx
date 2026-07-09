"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <span>Lê</span>Khiêm<span className="glow-text">.</span>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#about" className={styles.navLink}>Giới thiệu</a></li>
            <li><a href="#services" className={styles.navLink}>Dịch vụ</a></li>
            <li><a href="#portfolio" className={styles.navLink}>Dự án</a></li>
            <li><a href="#process" className={styles.navLink}>Quy trình</a></li>
          </ul>
          <a href="#contact" className={styles.ctaButton}>Liên hệ ngay</a>
        </nav>
      </div>
    </header>
  );
}
