"use client";

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag } from 'lucide-react';
import { ProjectItem } from '@/lib/data';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [project, handleEscape]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className={styles.closeBtn} onClick={onClose} aria-label="Đóng">
              <X size={20} />
            </button>

            <div className={styles.body}>
              {/* LEFT — Image */}
              <div className={styles.imageCol}>
                <div className={styles.mainImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.img} alt={project.title} />
                  <div className={styles.categoryBadge}>
                    <Tag size={12} />
                    {project.category}
                  </div>
                </div>

                {/* Gallery thumbs (nếu có) */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className={styles.gallery}>
                    {project.gallery.map((url, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={url} alt={`${project.title} screenshot ${i + 1}`} />
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT — Info */}
              <div className={styles.infoCol}>
                <h2 className={styles.title}>{project.title}</h2>

                {project.description && (
                  <p className={styles.description}>{project.description}</p>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className={styles.techSection}>
                    <h4 className={styles.techLabel}>Tech Stack</h4>
                    <div className={styles.techTags}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className={styles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.actions}>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveBtn}
                    >
                      <ExternalLink size={16} />
                      Xem Live Demo
                    </a>
                  ) : (
                    <span className={styles.noLive}>
                      Demo không khả dụng
                    </span>
                  )}
                  <button className={styles.closeTextBtn} onClick={onClose}>
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
