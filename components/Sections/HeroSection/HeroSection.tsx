"use client";

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            👋 Xin chào, tôi là
          </motion.p>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Lê Khiêm<span className="glow-text">.</span>
          </motion.h1>
          
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Chuyên gia Kiến tạo <span className={styles.highlight}>Giao diện Số</span> & Trải nghiệm Người dùng
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Tôi thiết kế và phát triển các trang web hiện đại, tối ưu tốc độ và mang đậm dấu ấn thương hiệu cá nhân/doanh nghiệp. Giúp bạn nâng tầm hiện diện trên Internet.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#portfolio" className={styles.primaryBtn}>Xem Dự Án</a>
            <a href="#contact" className={styles.secondaryBtn}>Liên Hệ Ngay</a>
          </motion.div>
        </motion.div>
        
        {/* We can add a 3D element, an abstract shape, or a professional photo here */}
        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          <div className={styles.glowCircle}></div>
          <div className={styles.imagePlaceholder}>
            {/* If user provides image, we will put it here. Using a nice tech abstract for now */}
            <div className={styles.abstractShape}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
