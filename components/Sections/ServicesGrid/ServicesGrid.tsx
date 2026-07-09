"use client";

import { motion } from 'framer-motion';
import { MonitorSmartphone, Search, Palette, Rocket } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Thiết kế Web Responsive",
    description: "Tạo ra các trang web tương thích hoàn hảo trên mọi thiết bị, từ điện thoại đến màn hình desktop siêu lớn."
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX & Branding",
    description: "Nghiên cứu và thiết kế trải nghiệm người dùng, mang lại giao diện trực quan, bắt mắt và giữ chân khách hàng."
  },
  {
    icon: <Search size={32} />,
    title: "Tối ưu chuẩn SEO",
    description: "Cấu trúc website thân thiện với bộ máy tìm kiếm (Google), giúp tăng thứ hạng tự nhiên cho doanh nghiệp."
  },
  {
    icon: <Rocket size={32} />,
    title: "Tối ưu Hiệu năng (Speed)",
    description: "Áp dụng các công nghệ hiện đại nhất (Next.js, Server Components) để web load trong nháy mắt."
  }
];

export default function ServicesGrid() {
  return (
    <section className={`section-padding ${styles.services}`} id="services">
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Các Dịch Vụ <span className="glow-text">Cốt Lõi</span></h2>
          <p className={styles.sectionSubtitle}>Những gì tôi có thể làm để giúp dự án của bạn cất cánh.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
