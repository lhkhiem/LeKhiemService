"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './PortfolioGallery.module.css';

const categories = ["Tất cả", "Website", "UI/UX App", "Landing Page"];

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "Website", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop" },
  { id: 2, title: "Fintech Dashboard", category: "UI/UX App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "SaaS Landing Page", category: "Landing Page", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  { id: 4, title: "Real Estate Portal", category: "Website", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" },
  { id: 5, title: "Health Tracker App", category: "UI/UX App", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, title: "Event Promo Page", category: "Landing Page", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" }
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProjects = activeCategory === "Tất cả" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className={`section-padding ${styles.portfolio}`} id="portfolio">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Dự Án <span className="glow-text">Tiêu Biểu</span></h2>
          <p className={styles.sectionSubtitle}>Khám phá những sản phẩm tôi đã thực hiện.</p>
        </div>

        <div className={styles.filterTabs}>
          {categories.map((category) => (
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
