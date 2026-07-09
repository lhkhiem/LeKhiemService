"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';
import { siteData } from '../../../lib/data';
import styles from './ProcessTimeline.module.css';

const iconMap: any = {
  Search, PenTool, Code, CheckCircle
};

export default function ProcessTimeline() {
  const { process } = siteData;

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
          <h2 className={styles.sectionTitle}>{process.title} <span className="glow-text">{process.titleHighlight}</span></h2>
          <p className={styles.sectionSubtitle}>{process.subtitle}</p>
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
          
          {process.steps.map((step, index) => {
            const IconComponent = iconMap[step.iconName];
            return (
              <div key={index} className={styles.timelineItem}>
                <motion.div 
                  className={styles.timelineIcon}
                  initial={{ scale: 0, opacity: 0, backgroundColor: 'var(--bg-main)' }}
                  whileInView={{ scale: 1, opacity: 1, backgroundColor: 'var(--accent-primary)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {IconComponent && <IconComponent size={28} />}
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
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
