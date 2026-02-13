import React from 'react';
import { FullScreenScrollFX } from './ui/full-screen-scroll-fx';
import { SERVICES } from '../constants';

const images = [
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000", // Branding (Art/Color)
  "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=2000", // Direction (Set/Light)
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000", // Distribution (Music Stage)
  "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=2000", // Marketing (Crowd)
];

const Expertise: React.FC = () => {
  // Map services to the expected Section format
  const sections = SERVICES.map((service, idx) => ({
    id: `service-${service.id}`,
    background: images[idx] || images[0],
    leftLabel: <span className="font-mono text-sm tracking-widest text-primary">0{idx + 1}</span>,
    title: service.title,
    // Right label shows a short category or keyword. 
    // We map titles to short keywords for the right side to keep it balanced.
    rightLabel: (
      <span className="text-xs font-light tracking-wider opacity-80 hidden md:block">
        {idx === 0 && "ESTRATEGIA"}
        {idx === 1 && "VISIÓN"}
        {idx === 2 && "ALCANCE"}
        {idx === 3 && "CRECIMIENTO"}
      </span>
    ),
  }));

  return (
    <section id="expertise" className="relative z-10 bg-background">
      <FullScreenScrollFX
        sections={sections}
        header={
          <div className="pointer-events-none mt-8">
            <h2 className="font-display text-5xl md:text-8xl text-white text-center leading-none tracking-tighter uppercase italic">
              NUESTROS <span className="text-primary italic">SERVICIOS</span>
            </h2>
          </div>
        }
        footer={
          <div className="text-white/40 text-[10px] tracking-[0.4em] font-medium uppercase">
            SCROLL TO EXPLORE
          </div>
        }
        colors={{
          text: "#ffffff",
          overlay: "rgba(10, 10, 12, 0.8)",
          pageBg: "#0a0a0c",
          stageBg: "#0f0f12",
        }}
        fontFamily="'Bebas Neue', sans-serif"
        gap={2}
      />
    </section>
  );
};

export default Expertise;