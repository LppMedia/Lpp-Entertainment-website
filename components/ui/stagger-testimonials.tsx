import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Lpp Entertainment entendió mi visión desde el primer día. Mi marca personal nunca ha sido tan fuerte.",
    by: "Sofia R., Artista Pop",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "La distribución fue impecable y la estrategia de marketing nos puso en las playlists correctas.",
    by: "Carlos M., Manager Urban Beats",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Su dirección creativa transformó la experiencia visual de nuestro festival. Simplemente otro nivel.",
    by: "Elena V., Directora Indie Fest",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "Lograron capturar la esencia de mi música en cada pieza gráfica. El engagement subió un 200%.",
    by: "Javier L., Productor",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "Profesionalismo puro. El videoclip que produjeron es, sin duda, la mejor inversión de mi carrera.",
    by: "Ana K., Cantante Soul",
    imgSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "La campaña de lanzamiento fue un éxito rotundo. Sold out en la primera semana de gira.",
    by: "Marcos T., Banda Rock",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "No solo es diseño, es estrategia. Me ayudaron a encontrar mi audiencia ideal.",
    by: "Lucia P., DJ",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "El equipo de LPP tiene un ojo único para los detalles. Hacen que todo luzca internacional.",
    by: "Diego S., Compositor",
    imgSrc: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200&auto=format&fit=crop"
  },
  {
    tempId: 8,
    testimonial: "Gracias a ellos, mi identidad visual por fin hace justicia a mi sonido.",
    by: "Valentina R., Artista Folk",
    imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out backdrop-blur-md rounded-2xl",
        isCenter 
          ? "z-20 bg-primary/90 text-cream border-primary shadow-2xl scale-105" 
          : "z-10 bg-white/40 text-charcoal border-white/50 hover:border-primary/50 hover:bg-white/60 shadow-lg"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        // Removed custom clipPath to match the rounded glassmorphism aesthetic of the site better, 
        // or we can keep it for edge. Let's keep the rounded look for consistency with GlassCard
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? 0 : position % 2 ? 30 : -30}px)
          rotate(${isCenter ? 0 : position % 2 ? 4 : -4}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
        opacity: Math.abs(position) > 2 ? 0 : 1, // Fade out distant cards
        pointerEvents: Math.abs(position) > 2 ? 'none' : 'auto'
      }}
    >
      <div className="flex flex-col h-full justify-between relative">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl"></div>
        
        <div>
          <img
            src={testimonial.imgSrc}
            alt={testimonial.by}
            className="mb-6 h-16 w-16 rounded-full border-2 border-white/50 object-cover shadow-md"
          />
          <h3 className={cn(
            "text-lg sm:text-xl font-display leading-tight",
            isCenter ? "text-cream" : "text-charcoal"
          )}>
            "{testimonial.testimonial}"
          </h3>
        </div>
        
        <p className={cn(
          "mt-4 text-sm font-bold uppercase tracking-widest",
          isCenter ? "text-cream/80" : "text-primary"
        )}>
          — {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(300);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 280);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-visible flex flex-col items-center justify-center py-10"
      style={{ height: 500 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
         {/* Container for cards */}
         <div className="relative w-full h-full max-w-6xl">
            {testimonialsList.map((testimonial, index) => {
                // Calculate position relative to center
                const centerIndex = Math.floor(testimonialsList.length / 2);
                const position = index - centerIndex;
                
                return (
                <TestimonialCard
                    key={testimonial.tempId}
                    testimonial={testimonial}
                    handleMove={(pos) => handleMove(pos)}
                    position={position}
                    cardSize={cardSize}
                />
                );
            })}
         </div>
      </div>

      <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-30">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-xl transition-all",
            "bg-charcoal text-cream border border-white/10 hover:bg-primary hover:scale-110 shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-xl transition-all",
            "bg-charcoal text-cream border border-white/10 hover:bg-primary hover:scale-110 shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};