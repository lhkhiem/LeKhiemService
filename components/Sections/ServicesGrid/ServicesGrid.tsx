"use client";

import { motion } from 'framer-motion';
import { MonitorSmartphone, Search, Palette, Rocket } from 'lucide-react';
import { siteData } from '../../../lib/data';
import styles from './ServicesGrid.module.css';

const iconMap: any = {
  MonitorSmartphone, Palette, Search, Rocket
};

export default function ServicesGrid() {
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
          {services.items.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <motion.div 
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
