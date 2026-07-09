"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
              <label htmlFor="name">Họ và Tên <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="name" required placeholder="Ví dụ: Nguyễn Văn A" value={formData.name} onChange={handleChange} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
              <input type="email" id="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Số điện thoại</label>
              <input type="tel" id="phone" placeholder="09xxxxxxx" value={formData.phone} onChange={handleChange} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Nhu cầu của bạn (Tùy chọn) <span style={{color: 'red'}}>*</span></label>
              <textarea id="message" rows={4} required placeholder="Hãy mô tả ngắn gọn về dự án của bạn..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? (
                <><span>Đang gửi...</span><Loader2 size={18} className="animate-spin" /></>
              ) : status === 'success' ? (
                <><span>Gửi Thành Công!</span><CheckCircle2 size={18} /></>
              ) : (
                <><span>Gửi Yêu Cầu</span><Send size={18} /></>
              )}
            </button>
            {status === 'error' && <p style={{color: 'red', marginTop: '10px', fontSize: '14px'}}>Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
