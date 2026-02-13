import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-background py-6 rotate-1 relative z-20 border-y border-white/5 shadow-2xl shadow-black">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="font-display text-5xl text-white mx-8 tracking-tighter italic">IDENTIDAD PRIMERO</span>
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,45,149,0.5)]"></span>
            <span className="font-display text-5xl text-white/40 mx-8 tracking-tighter uppercase">IMPACTO POR SIEMPRE</span>
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;