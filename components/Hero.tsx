import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation values
  // Start significantly smaller to let text breathe
  const startWidth = isMobile ? "45%" : "18%";
  const startHeight = isMobile ? "25vh" : "30vh";

  // End at ~70% of viewport instead of full screen
  const endWidth = isMobile ? "90%" : "70vw";
  const endHeight = isMobile ? "55vh" : "70vh";

  const width = useTransform(scrollYProgress, [0, 0.4], [startWidth, endWidth]);
  const height = useTransform(scrollYProgress, [0, 0.4], [startHeight, endHeight]);

  // Smooth out the border radius change
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["1rem", "1.5rem"]);

  // Parallax for text - fades out later so it stays visible longer
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Aurora Mesh Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-mesh-flow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-mesh-flow [animation-delay:-5s]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent-gold/10 blur-[100px] rounded-full animate-mesh-flow [animation-delay:-10s]" />
        </div>

        {/* Background Text Layer */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col justify-between py-12 md:py-16 z-0 pointer-events-none select-none"
        >
          {/* Top Text */}
          <div className="flex-1 flex items-start justify-center pt-8 md:pt-12 w-full px-4">
            <h1 className="font-display text-[12vw] md:text-[14vw] leading-[0.8] text-white text-center tracking-tighter uppercase w-full opacity-90 italic">
              IDENTIDAD<br /><span className="text-primary">PRIMERO</span>
            </h1>
          </div>

          {/* Bottom Text */}
          <div className="flex-1 flex items-end justify-center pb-8 md:pb-12 w-full px-4">
            <h1 className="font-display text-[12vw] md:text-[14vw] leading-[0.8] text-white text-center tracking-tighter uppercase w-full opacity-90">
              IMPACTO<br /><span className="text-secondary">POR SIEMPRE</span>
            </h1>
          </div>
        </motion.div>

        {/* Expanding Video Container */}
        <motion.div
          style={{
            width,
            height,
            borderRadius,
          }}
          className="relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 origin-center will-change-transform bg-black"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            src="https://res.cloudinary.com/dmkx2uowd/video/upload/v1763916139/video_tqlnk8.mp4"
          />

          {/* Noise overlay for texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute left-12 bottom-12 hidden md:block z-0"
        >
          <div className="flex flex-col gap-1 font-sans text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">
            <span>EST. 2024</span>
            <span>GLOBAL REACH</span>
            <span>CREATIVE HOUSE</span>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute right-12 bottom-12 max-w-xs text-right hidden md:block z-0"
        >
          <p className="font-sans text-xs text-white/60 leading-relaxed tracking-wide">
            <span className="font-bold text-white">Lpp Entertainment</span> es un sello discográfico y agencia creativa dedicada a construir carreras artísticas con visión, estrategia y <span className="italic font-serif text-primary text-lg">alma</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;