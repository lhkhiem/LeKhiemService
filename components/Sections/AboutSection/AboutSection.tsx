"use client";

import { motion } from 'framer-motion';
import { Code, Layout, Lightbulb } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={`section-padding ${styles.about}`} id="about">
      <div className="container">
        <motion.div 
          className={styles.aboutHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Về <span className="glow-text">Tôi</span></h2>
          <p className={styles.sectionSubtitle}>Kết hợp thẩm mỹ thiết kế và tư duy lập trình</p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Real photo can go here */}
            <div className={styles.photoPlaceholder}>
              <div className={styles.overlay}></div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className={styles.paragraph}>
              Với nhiều năm kinh nghiệm trong lĩnh vực phát triển Web, tôi không chỉ viết code mà còn tạo ra <strong>trải nghiệm</strong>. Tôi tin rằng một giao diện đẹp phải đi đôi với hiệu năng tối ưu và cấu trúc chặt chẽ.
            </motion.p>
            <motion.p variants={itemVariants} className={styles.paragraph}>
              Mục tiêu của tôi là giúp các cá nhân và doanh nghiệp xây dựng sự hiện diện mạnh mẽ, chuyên nghiệp trên nền tảng số thông qua những sản phẩm vượt trên cả sự mong đợi.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.coreValues}>
              <div className={styles.valueItem}>
                <div className={styles.iconBox}><Layout size={24} /></div>
                <div>
                  <h3>Thiết kế Độc bản</h3>
                  <p>Giao diện được thiết kế may đo riêng biệt, không dùng template rập khuôn.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.iconBox}><Code size={24} /></div>
                <div>
                  <h3>Code Sạch & Tối ưu</h3>
                  <p>Chuẩn SEO, tốc độ tải trang nhanh nhạy trên mọi thiết bị di động.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.iconBox}><Lightbulb size={24} /></div>
                <div>
                  <h3>Giải pháp Thực tế</h3>
                  <p>Tập trung vào hiệu quả chuyển đổi và giải quyết bài toán kinh doanh.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
