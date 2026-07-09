"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { siteData } from '../../../lib/data';
import styles from './HeroSection.module.css';

const networkNodes = [
  { id: 0, cx: 100, cy: 100, r: 12, isCenter: true },
  { id: 1, cx: 100, cy: 40, r: 6 },
  { id: 2, cx: 152, cy: 70, r: 6 },
  { id: 3, cx: 152, cy: 130, r: 6 },
  { id: 4, cx: 100, cy: 160, r: 6 },
  { id: 5, cx: 48, cy: 130, r: 6 },
  { id: 6, cx: 48, cy: 70, r: 6 },
  { id: 7, cx: 100, cy: 10, r: 4 },
  { id: 8, cx: 178, cy: 55, r: 4 },
  { id: 9, cx: 178, cy: 145, r: 4 },
  { id: 10, cx: 100, cy: 190, r: 4 },
  { id: 11, cx: 22, cy: 145, r: 4 },
  { id: 12, cx: 22, cy: 55, r: 4 },
  { id: 13, cx: 190, cy: 100, r: 3 },
  { id: 14, cx: 10, cy: 100, r: 3 },
  { id: 15, cx: 140, cy: 30, r: 3 },
  { id: 16, cx: 60, cy: 30, r: 3 },
  { id: 17, cx: 140, cy: 170, r: 3 },
  { id: 18, cx: 60, cy: 170, r: 3 }
];

const networkConnections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
  [1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12],
  [2, 13], [3, 13], [5, 14], [6, 14],
  [7, 8], [8, 13], [13, 9], [9, 10], [10, 11], [11, 14], [14, 12], [12, 7],
  [7, 2], [8, 1], [9, 4], [10, 3], [11, 6], [12, 5],
  [15, 1], [15, 8], [16, 1], [16, 12], [17, 4], [17, 9], [18, 4], [18, 11]
];

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { hero } = siteData;

  // Mượt mà hóa chuyển động chuột
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Giới hạn góc xoay 3D (±25 độ)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [25, -25]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {hero.greeting}
          </motion.p>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {hero.title}<span className="glow-text">.</span>
          </motion.h1>
          
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {hero.subtitle} <span className={styles.highlight}>{hero.subtitleHighlight}</span> {hero.subtitleEnd}
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {hero.description}
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#portfolio" className={styles.primaryBtn}>{hero.primaryBtn}</a>
            <a href="#contact" className={styles.secondaryBtn}>{hero.secondaryBtn}</a>
          </motion.div>
        </motion.div>
        
        {/* Visual Section */}
        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          style={{ perspective: 1200 }}
        >
          <div className={styles.glowCircle}></div>
          <motion.div 
            className={styles.imagePlaceholder}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              cursor: "pointer"
            }}
          >
            {/* Tương tác 3D HUD (Holographic Head-Up Display) */}
            <div className={styles.networkContainer} style={{ transform: "translateZ(60px)" }}>
              <svg viewBox="0 0 200 200" className={styles.networkSvg}>
                <g className={styles.connections}>
                  {networkConnections.map((conn, idx) => {
                    const n1 = networkNodes[conn[0]];
                    const n2 = networkNodes[conn[1]];
                    return (
                      <line 
                        key={idx} 
                        x1={n1.cx} y1={n1.cy} 
                        x2={n2.cx} y2={n2.cy} 
                      />
                    );
                  })}
                </g>
                <g className={styles.nodes}>
                  {networkNodes.map((node) => (
                    <circle 
                      key={node.id} 
                      cx={node.cx} 
                      cy={node.cy} 
                      r={node.r} 
                      className={node.isCenter ? styles.centerNode : styles.node}
                      style={{ 
                        transformOrigin: `${node.cx}px ${node.cy}px`,
                        animationDelay: `${node.id * 0.15}s`
                      }}
                    />
                  ))}
                </g>
              </svg>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
