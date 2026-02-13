import React from 'react';
import { CircularGallery, GalleryItem } from './ui/circular-gallery';

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Luna Eterna",
    category: "Lanzamiento Album",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
    description: "Campaña visual completa y dirección de arte para el álbum debut de la artista revelación del año."
  },
  {
    id: 2,
    title: "Variaciones de logo",
    category: "Branding",
    image: "https://res.cloudinary.com/dmkx2uowd/image/upload/v1771004870/manual_de_marca.pdf_n9gwee.png",
    description: "Exploración de variaciones y aplicaciones del logotipo para una marca personal sólida."
  },
  {
    id: 3,
    title: "Tour 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
    description: "Estrategia digital 360° y venta de entradas sold-out en 3 ciudades principales."
  },
  {
    id: 4,
    title: "Velvet Sessions",
    category: "Dirección Creativa",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    description: "Serie de sesiones en vivo con estética cinematográfica que redefinió el estándar de la industria."
  },
  {
    id: 5,
    title: "Echoes",
    category: "Distribución",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop",
    description: "Posicionamiento en playlists editoriales top 50 global para el single de verano."
  },
  {
    id: 6,
    title: "IDENTIDAD FESTIVAL",
    category: "Branding",
    image: "https://res.cloudinary.com/dmkx2uowd/image/upload/v1771004870/manual_de_marca.pdf_3_awdrqq.png",
    description: "Diseño de identidad visual para escenarios y eventos en vivo, optimizado para el impacto visual en tarima."
  },
  {
    id: 7,
    title: "Events Design",
    category: "Branding",
    video: "https://res.cloudinary.com/dmkx2uowd/video/upload/v1771007408/Smoth_transition__202602131329_osh30_jreej5.mp4",
    description: "Creación de experiencias inmersivas y transiciones suaves para eventos de alto nivel."
  },
  {
    id: 8,
    title: "Video Recording",
    category: "Producción",
    video: "https://res.cloudinary.com/dmkx2uowd/video/upload/v1771006183/0213_kymkzg.mp4",
    description: "Captura de momentos clave y producción audiovisual de alto impacto para redes sociales."
  }
];

const WorkShowcase: React.FC = () => {
  return (
    <section id="work" className="relative bg-background text-white" style={{ height: '300vh' }}>
      {/* Decorative BG */}
      <div className="fixed top-0 right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Header Layer (Above Gallery) */}
        <div className="absolute top-12 md:top-20 w-full text-center z-30 px-4 pointer-events-none">
          <span className="text-primary font-sans text-xs font-bold tracking-[0.4em] mb-4 block uppercase opacity-80">
            Portafolio Selecto
          </span>
          <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase italic leading-none">
            TRABAJOS <span className="text-secondary italic">DESTACADOS</span>
          </h2>
          <p className="mt-6 text-xs md:text-sm text-white/40 max-w-md mx-auto font-medium uppercase tracking-widest">
            Una colección de nuestras producciones más icónicas.
          </p>
        </div>

        {/* Gallery Layer - Added padding top to visually lower the circle */}
        <div className="w-full h-full flex items-center justify-center z-10 pt-24 md:pt-32">
          <CircularGallery
            items={galleryData}
            radius={600}
            scrollSensitivity={2.5}
          />
        </div>

        {/* Footer Layer (Below Gallery) */}
        <div className="absolute bottom-12 w-full text-center z-20 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold animate-pulse">Scroll to Rotate</span>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;