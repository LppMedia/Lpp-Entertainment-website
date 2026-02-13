import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" } : {}}
      className={`
        relative overflow-hidden
        bg-white/20 
        backdrop-blur-lg 
        border border-white/40 
        shadow-lg 
        rounded-2xl
        ${className}
      `}
    >
      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;