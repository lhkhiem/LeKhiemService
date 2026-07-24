"use client";

import { motion } from 'framer-motion';
import { useContent } from '@/context/ContentContext';
import { DynamicIcon } from '@/components/Admin/IconPicker';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  const { siteData } = useContent();
  const { services } = siteData;

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
          <h2 className={styles.sectionTitle}>{services.title} <span className="glow-text">{services.titleHighlight}</span></h2>
          <p className={styles.sectionSubtitle}>{services.subtitle}</p>
        </motion.div>

        <div className={styles.grid}>
          {services.items.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <DynamicIcon name={service.iconName} size={32} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
