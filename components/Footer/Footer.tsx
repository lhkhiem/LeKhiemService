import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <span>Lê</span>Khiêm<span className="glow-text">.</span>
          </Link>
          <p className={styles.description}>
            Chuyên gia thiết kế & phát triển giao diện web, mang đến giải pháp số toàn diện và tối ưu trải nghiệm người dùng.
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <h4 className={styles.columnTitle}>Liên Kết Nhanh</h4>
          <ul>
            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#portfolio">Dự án</a></li>
            <li><a href="#process">Quy trình</a></li>
          </ul>
        </div>
        
        <div className={styles.footerContact}>
          <h4 className={styles.columnTitle}>Liên Hệ</h4>
          <ul>
            <li>Email: hi@lekhiem.com</li>
            <li>Điện thoại: 0999.999.999</li>
            <li>Địa chỉ: TP. Hồ Chí Minh, Việt Nam</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lê Khiêm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
