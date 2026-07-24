"use client";

import { motion, Variants } from 'framer-motion';
import { useContent } from '@/context/ContentContext';
import { DynamicIcon } from '@/components/Admin/IconPicker';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { siteData } = useContent();
  const { about } = siteData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
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
          <h2 className={styles.sectionTitle}>{about.title} <span className="glow-text">{about.titleHighlight}</span></h2>
          <p className={styles.sectionSubtitle}>{about.subtitle}</p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
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
            {about.paragraphs.map((para, idx) => (
              <motion.p key={idx} variants={itemVariants} className={styles.paragraph} dangerouslySetInnerHTML={{ __html: para }} />
            ))}

            <motion.div variants={itemVariants} className={styles.coreValues}>
              {about.coreValues.map((val, idx) => (
                <div key={idx} className={styles.valueItem}>
                  <div className={styles.iconBox}>
                    <DynamicIcon name={val.iconName} size={24} />
                  </div>
                  <div>
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
