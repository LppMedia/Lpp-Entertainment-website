import React, { useState, useEffect } from 'react';
import { SpiralAnimation } from './ui/spiral-animation';
import { motion } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show entry button after a delay
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    // Auto-complete after full animation loop (approx 15s) or user patience limit
    const autoFinishTimer = setTimeout(() => {
      onComplete();
    }, 14000);

    // Scroll listener to speed up/skip
    const handleScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 20) {
        onComplete();
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoFinishTimer);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black"
    >
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1000 ease-out w-full text-center px-4
          ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <button
          onClick={onComplete}
          className="
            text-white text-3xl md:text-5xl tracking-[0.05em] uppercase font-bold font-display
            transition-all duration-700
            hover:tracking-[0.1em] hover:text-primary-light active:scale-95
          "
        >
          Bienvenido a <span className="text-primary italic">Lpp Entertainment</span>
        </button>
      </div>

      <div className="absolute bottom-12 left-0 right-0 text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.5em] animate-pulse">
        Scroll para entrar
      </div>
    </motion.div>
  );
};

export default IntroOverlay;