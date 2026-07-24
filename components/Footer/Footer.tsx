"use client";

import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { siteData } = useContent();
  const { footer, header } = siteData;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Lê Khiêm Logo" className={styles.logoImg} />
            <div>
              <span>{header.logoText1}</span>{header.logoText2}<span className="glow-text">.</span>
            </div>
          </Link>
          <p className={styles.description}>
            {footer.description}
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <h4 className={styles.columnTitle}>{footer.quickLinksTitle}</h4>
          <ul>
            {header.navLinks.map((link, idx) => (
              <li key={idx}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        
        <div className={styles.footerContact}>
          <h4 className={styles.columnTitle}>{footer.contactTitle}</h4>
          <ul>
            <li>Email: {footer.email}</li>
            <li>Điện thoại: {footer.phone}</li>
            <li>Địa chỉ: {footer.address}</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
