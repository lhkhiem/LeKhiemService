"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { siteData } = useContent();
  const { header } = siteData;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Lê Khiêm Logo" className={styles.logoImg} />
          <div>
            <span>{header.logoText1}</span>{header.logoText2}<span className="glow-text">.</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {header.navLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className={styles.navLink}>{link.name}</a></li>
            ))}
          </ul>
          <a href="#contact" className={styles.ctaButton}>{header.ctaButton}</a>
        </nav>
      </div>
    </header>
  );
}
