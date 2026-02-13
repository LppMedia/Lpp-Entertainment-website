import React from 'react';
import { StaggerTestimonials } from './ui/stagger-testimonials';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 relative bg-background overflow-hidden">
      {/* Decorative blurred background for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-primary font-sans text-xs font-bold tracking-[0.4em] mb-4 block uppercase opacity-80">
            Social Proof
          </span>
          <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase italic leading-none">
            VOCES DEL <span className="text-primary italic">SELLO</span>
          </h2>
          <p className="mt-8 text-xs md:text-sm text-white/40 max-w-md mx-auto font-medium uppercase tracking-widest leading-relaxed">
            Relatos de visión, crecimiento e impacto real en la industria musical.
          </p>
        </div>

        <div className="w-full mb-12">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;