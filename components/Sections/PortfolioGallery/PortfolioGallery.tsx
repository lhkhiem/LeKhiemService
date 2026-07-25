"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import { ProjectItem } from '@/lib/data';
import ProjectModal from './ProjectModal';
import styles from './PortfolioGallery.module.css';

export default function PortfolioGallery() {
  const { siteData } = useContent();
  const { portfolio } = siteData;
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Reset activeCategory về "Tất cả" nếu category đang chọn không còn tồn tại
  useEffect(() => {
    if (!portfolio.categories.includes(activeCategory)) {
      setActiveCategory("Tất cả");
    }
  }, [portfolio.categories, activeCategory]);

  const filteredProjects = activeCategory === "Tất cả"
    ? portfolio.projects
    : portfolio.projects.filter((p) => p.category === activeCategory);

  return (
    <>
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
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={styles.projectImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.img} alt={project.title} loading="lazy" />
                    <div className={styles.projectOverlay}>
                      <div className={styles.viewBtn}>
                        <Eye size={22} />
                        <span>Xem chi tiết</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className={styles.projectTags}>
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className={styles.projectTag}>{tech}</span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className={styles.projectTagMore}>+{project.techStack.length - 3}</span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
