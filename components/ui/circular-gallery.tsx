import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

// Define the type for a single gallery item
export interface GalleryItem {
  id: string | number;
  title: string;
  category: string;
  image?: string;
  video?: string;
  description: string;
  // Extended project detail data
  projectDetails?: {
    client: string;
    year: string;
    duration: string;
    role: string;
    challenge: string;
    solution: string;
    results: string[];
    tools: string[];
    gallery: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

// Project Detail Modal
const ProjectDetailModal: React.FC<{
  item: GalleryItem | null;
  onClose: () => void;
}> = ({ item, onClose }) => {
  const details = item?.projectDetails;

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0e0e12]/95 backdrop-blur-2xl shadow-2xl"
        initial={{ scale: 0.85, y: 60, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,45,149,0.3) transparent',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 mr-4 mt-4"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/7] overflow-hidden rounded-t-3xl">
          {item.video ? (
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/30 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <motion.span
              className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold tracking-[0.25em] uppercase bg-primary/20 border border-primary/30 rounded-full backdrop-blur-md text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {item.category}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-7xl font-display uppercase leading-[0.85] tracking-tighter italic text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {item.title}
            </motion.h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-10">
          {/* Meta bar */}
          {details && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {[
                { label: 'Cliente', value: details.client },
                { label: 'Año', value: details.year },
                { label: 'Duración', value: details.duration },
                { label: 'Rol', value: details.role },
              ].map((meta, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block mb-1">{meta.label}</span>
                  <span className="text-sm font-semibold text-white/90">{meta.value}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Descripción del Proyecto</h3>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">{item.description}</p>
          </motion.div>

          {details && (
            <>
              {/* Challenge & Solution */}
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3">El Reto</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{details.challenge}</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">La Solución</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{details.solution}</p>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Resultados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {details.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      <span className="text-sm text-white/60">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              {details.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Galería</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {details.gallery.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
                        <img src={img} alt={`${item.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Testimonial */}
              {details.testimonial && (
                <motion.div
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/[0.06] rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl font-serif italic text-white/70 leading-relaxed mb-4">
                    "{details.testimonial.quote}"
                  </p>
                  <div>
                    <span className="text-sm font-bold text-white/80">{details.testimonial.author}</span>
                    <span className="text-xs text-white/30 block mt-0.5">{details.testimonial.role}</span>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};


// ====== HORIZONTAL SCROLL GALLERY ======

interface HorizontalGalleryProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

const HorizontalScrollGallery: React.FC<HorizontalGalleryProps> = ({ items, onItemClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    let lastProgress = 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;

          const scrolled = -rect.top;
          const totalScrollable = sectionHeight - viewportHeight;

          if (totalScrollable > 0) {
            const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
            // Only update if change is significant (reduces repaints)
            if (Math.abs(progress - lastProgress) > 0.001) {
              setScrollProgress(progress);
              lastProgress = progress;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardWidth = isMobile ? 280 : 420;
  const cardGap = isMobile ? 24 : 40;
  const totalTrackWidth = items.length * (cardWidth + cardGap);
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalTrackWidth - viewportWidth + 80);
  const translateX = -scrollProgress * maxTranslate;

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${Math.max(200, items.length * 35)}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Header */}
        <div className="absolute top-12 md:top-20 w-full text-center z-30 px-4 pointer-events-none">
          <motion.span
            className="text-primary font-sans text-xs font-bold tracking-[0.4em] mb-4 block uppercase opacity-80"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
          >
            Portafolio Selecto
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase italic leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            TRABAJOS <span className="text-secondary italic">DESTACADOS</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xs md:text-sm text-white/40 max-w-md mx-auto font-medium uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Haz click en cualquier proyecto para ver los detalles
          </motion.p>
        </div>

        {/* Scrolling track */}
        <div className="w-full flex items-center" style={{ paddingTop: isMobile ? '100px' : '60px' }}>
          <div
            ref={trackRef}
            className="flex items-center"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'none',
              willChange: 'transform',
              paddingLeft: isMobile ? '24px' : '8vw',
              paddingRight: isMobile ? '24px' : '8vw',
              gap: `${cardGap}px`,
            }}
          >
            {items.map((item, i) => {
              // Simplified card animation for better performance
              const cardCenter = i * (cardWidth + cardGap) + cardWidth / 2;
              const viewCenter = -translateX + viewportWidth / 2;
              const distance = Math.abs(cardCenter - viewCenter);
              const maxDistance = viewportWidth;
              const normalizedDistance = Math.min(distance / maxDistance, 1);

              // Reduced floating effect
              const floatY = Math.sin(i * 0.5) * (isMobile ? 4 : 8);

              // Scale: closest to center is biggest
              const scale = 1 - normalizedDistance * 0.1;

              // Subtle rotation
              const rotateZ = (cardCenter - viewCenter) / maxDistance * 1.5;

              return (
                <motion.div
                  key={item.id}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{
                    width: `${cardWidth}px`,
                    height: isMobile ? '360px' : '520px',
                    transform: `translateY(${floatY}px) scale(${scale}) rotate(${rotateZ}deg)`,
                    willChange: 'transform',
                  }}
                  onClick={() => onItemClick(item)}
                  whileHover={{ scale: scale * 1.05, y: floatY - 10 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                >
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/[0.08] bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10 group-hover:shadow-[0_0_60px_-10px]">
                    {/* Media */}
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                      />
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/5 transition-all duration-700" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 text-white">
                      <span className="inline-block px-4 py-1.5 mb-4 text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:text-primary transition-all duration-500">
                        {item.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-display uppercase leading-[0.9] mb-3 tracking-tighter italic text-white group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm font-medium tracking-wide text-white/80 line-clamp-2 leading-relaxed group-hover:text-white transition-all duration-500">
                        {item.description}
                      </p>

                      {/* "View project" indicator */}
                      <div className="mt-5 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-primary">Ver Proyecto</span>
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Top-right number */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                      <span className="text-xs font-bold text-white/30 font-display">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <div className="w-48 md:w-64 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
            {Math.round(scrollProgress * items.length)}/{items.length} — Scroll para explorar
          </span>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-[20%] right-[5%] w-3 h-3 rounded-full bg-primary/20 blur-[1px] pointer-events-none"
          style={{ transform: `translateY(${Math.sin(scrollProgress * Math.PI * 6) * 30}px)`, transition: 'transform 0.3s ease' }}
        />
        <div className="absolute bottom-[30%] left-[8%] w-2 h-2 rounded-full bg-secondary/20 blur-[1px] pointer-events-none"
          style={{ transform: `translateY(${Math.cos(scrollProgress * Math.PI * 5) * 25}px)`, transition: 'transform 0.3s ease' }}
        />
        <div className="absolute top-[40%] left-[3%] w-1.5 h-1.5 rounded-full bg-accent/15 blur-[0.5px] pointer-events-none"
          style={{ transform: `translateY(${Math.sin(scrollProgress * Math.PI * 3 + 1) * 20}px)`, transition: 'transform 0.3s ease' }}
        />
      </div>
    </div>
  );
};


// ====== MAIN EXPORT (backward-compatible) ======

// We keep CircularGallery as the export name for backward compatibility
const CircularGallery = React.forwardRef<HTMLDivElement, {
  items: GalleryItem[];
  radius?: number;
  scrollSensitivity?: number;
  className?: string;
}>(({ items, className }, ref) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleItemClick = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <HorizontalScrollGallery items={items} onItemClick={handleItemClick} />

      <AnimatePresence>
        {selectedItem && (
          <ProjectDetailModal item={selectedItem} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
});

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };