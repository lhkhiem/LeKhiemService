"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { siteData } from '../../../lib/data';
import styles from './PortfolioGallery.module.css';

export default function PortfolioGallery() {
  const { portfolio } = siteData;
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProjects = activeCategory === "Tất cả" 
    ? portfolio.projects 
    : portfolio.projects.filter(p => p.category === activeCategory);

  return (
    <section className={`section-padding ${styles.portfolio}`} id="portfolio">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{portfolio.title} <span className="glow-text">{portfolio.titleHighlight}</span></h2>
          <p className={styles.sectionSubtitle}>{portfolio.subtitle}</p>
        </div>

        <div className={styles.filterTabs}>
          {portfolio.categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.galleryGrid}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  {/* Using standard img for quick mockup, next/image is better for prod */}
                  <img src={project.img} alt={project.title} loading="lazy" />
                  <div className={styles.projectOverlay}>
                    <a href="#" className={styles.viewBtn}>
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
