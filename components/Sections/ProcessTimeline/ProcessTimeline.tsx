"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';
import styles from './ProcessTimeline.module.css';

const steps = [
  {
    icon: <Search size={28} />,
    title: "1. Khảo sát & Tư vấn",
    description: "Tìm hiểu yêu cầu, phân tích mục tiêu kinh doanh và đề xuất giải pháp kỹ thuật tối ưu nhất."
  },
  {
    icon: <PenTool size={28} />,
    title: "2. Phác thảo (UI/UX)",
    description: "Thiết kế wireframe, mockup và prototype để thống nhất giao diện trước khi lập trình."
  },
  {
    icon: <Code size={28} />,
    title: "3. Tinh chỉnh kỹ thuật",
    description: "Lập trình frontend/backend, tối ưu hiệu năng, SEO và các hiệu ứng chuyển động mượt mà."
  },
  {
    icon: <CheckCircle size={28} />,
    title: "4. Bàn giao & Hỗ trợ",
    description: "Kiểm thử (Testing) kỹ lưỡng trên nhiều thiết bị, bàn giao mã nguồn và hướng dẫn sử dụng."
  }
];

export default function ProcessTimeline() {
  return (
    <section className={`section-padding ${styles.process}`} id="process">
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Quy Trình <span className="glow-text">Làm Việc</span></h2>
          <p className={styles.sectionSubtitle}>Minh bạch, chuyên nghiệp và bám sát mục tiêu.</p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}>
            <motion.div 
              className={styles.timelineProgress}
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <motion.div 
                className={styles.timelineIcon}
                initial={{ scale: 0, opacity: 0, backgroundColor: 'var(--bg-main)' }}
                whileInView={{ scale: 1, opacity: 1, backgroundColor: 'var(--accent-primary)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {step.icon}
              </motion.div>
              
              <motion.div 
                className={`${styles.timelineContent} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              >
                <div className={styles.contentCard}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
