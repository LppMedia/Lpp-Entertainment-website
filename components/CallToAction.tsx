import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 relative bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="max-w-7xl mx-auto rounded-[3.5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
      >
        {/* Background Animation & Aurora */}
        <div className="absolute inset-0 bg-mesh-flow opacity-20 pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-secondary/30 rounded-full blur-[120px] animate-float [animation-delay:-3s]"></div>

        <div className="relative z-10">
          <span className="text-primary font-sans text-xs font-bold tracking-[0.5em] mb-8 block uppercase opacity-80">
            Let's Collaborate
          </span>
          <h2 className="font-display text-6xl md:text-9xl text-white mb-12 leading-[0.8] tracking-tighter uppercase italic">
            ¿LISTO PARA EL <br />
            <span className="text-secondary italic not-italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PRÓXIMO NIVEL?</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-xl mx-auto mb-16 font-medium uppercase tracking-[0.2em] leading-relaxed">
            Construyamos una carrera con visión, <span className="text-white font-bold italic font-serif text-2xl">alma</span> y resultados reales.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/form/KFiuqFDFGzBcqv1JKkWG"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-6 bg-white text-black font-display text-2xl rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] inline-block"
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white">Iniciar Proyecto</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;