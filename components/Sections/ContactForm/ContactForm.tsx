"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    alert('Cảm ơn bạn! Thông tin đã được gửi thành công.');
  };

  return (
    <section className={`section-padding ${styles.contact}`} id="contact">
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Sẵn Sàng <span className="glow-text">Bắt Đầu?</span></h2>
          <p className={styles.sectionSubtitle}>Hãy để lại thông tin, tôi sẽ liên hệ lại ngay.</p>
        </motion.div>

        <div className={styles.contactWrapper}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Thông tin liên hệ</h3>
            <p className={styles.infoDesc}>Bạn có ý tưởng tuyệt vời? Hãy cùng nhau biến nó thành hiện thực!</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <h4>Điện thoại / Zalo</h4>
                  <p>0999.999.999</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>hi@lekhiem.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <h4>Khu vực</h4>
                  <p>Hồ Chí Minh, Việt Nam (Nhận làm việc từ xa)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Họ và Tên</label>
              <input type="text" id="name" required placeholder="Ví dụ: Nguyễn Văn A" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Số điện thoại</label>
              <input type="tel" id="phone" required placeholder="09xxxxxxx" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Nhu cầu của bạn (Tùy chọn)</label>
              <textarea id="message" rows={4} placeholder="Hãy mô tả ngắn gọn về dự án của bạn..."></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              <span>Gửi Yêu Cầu</span>
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
