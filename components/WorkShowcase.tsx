import React from 'react';
import { CircularGallery, GalleryItem } from './ui/circular-gallery';

const WorkShowcase: React.FC = () => {
  const projects: GalleryItem[] = [
    {
      id: 1,
      title: 'COLOMBIANA',
      category: 'Video Musical',
      video: 'https://res.cloudinary.com/dmkx2uowd/video/upload/v1771006183/0213_kymkzg.mp4',
      description: 'Video musical con más de 2M de visualizaciones. Producción cinematográfica de alto impacto que capturó la esencia tropical urbana.',
      projectDetails: {
        client: 'Alex Martínez ft. Nait Sirena',
        year: '2024',
        duration: '3:45',
        role: 'Producción Completa',
        challenge: 'Crear un video musical que capturara la esencia tropical urbana y generara impacto viral en plataformas digitales, con un presupuesto ajustado y un plazo de 2 semanas.',
        solution: 'Desarrollamos un concepto visual basado en colores vibrantes y locaciones urbanas icónicas. Implementamos una estrategia de lanzamiento en 3 fases: teaser, estreno y behind the scenes, maximizando el engagement orgánico.',
        results: [
          '+2M de visualizaciones en YouTube en 3 meses',
          '+500K reproducciones en Spotify',
          'Ingreso a 15 playlists editoriales de Spotify',
          '+85K seguidores nuevos en redes sociales',
          'Trending #3 en TikTok Colombia',
          'Cobertura en medios especializados de música urbana'
        ],
        tools: [
          'Premiere Pro',
          'DaVinci Resolve',
          'After Effects',
          'Cinema 4D',
          'Spotify Promo Tools',
          'TikTok Ads Manager'
        ],
        gallery: [
          'https://res.cloudinary.com/dmkx2uowd/image/upload/v1765910207/Colombiana_3000x3000_Ready_zs1lme.png',
          'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'El equipo de LPP no solo entendió mi visión, la elevaron a otro nivel. El resultado superó todas mis expectativas y marcó un antes y después en mi carrera.',
          author: 'Alex Martínez',
          role: 'Artista Urbano'
        }
      }
    },
    {
      id: 2,
      title: 'NEON NIGHTS',
      category: 'Branding Musical',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200',
      description: 'Rediseño completo de identidad visual para artista emergente de pop electrónico. Aumento del 300% en engagement.',
      projectDetails: {
        client: 'Luna Vega',
        year: '2024',
        duration: '6 semanas',
        role: 'Branding & Diseño',
        challenge: 'La artista tenía talento pero carecía de una identidad visual coherente que reflejara su sonido futurista y conectara con su audiencia Gen Z.',
        solution: 'Creamos una identidad visual completa inspirada en estética cyberpunk y neón, incluyendo logo, paleta de colores, tipografía, y templates para redes sociales. Desarrollamos un manual de marca de 45 páginas.',
        results: [
          '+300% incremento en engagement en Instagram',
          'De 8K a 45K seguidores en 3 meses',
          'Colaboración con marcas de moda urbana',
          'Presencia en Spotify Editorial Playlists',
          '+1.5M streams totales en plataformas',
          'Reconocimiento en premios de diseño musical'
        ],
        tools: [
          'Figma',
          'Adobe Illustrator',
          'Photoshop',
          'After Effects',
          'Blender',
          'Canva Pro'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1614149162883-504ce0ff5271?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'Mi marca pasó de ser inexistente a tener una presencia visual que compite con artistas internacionales. La inversión se pagó sola en el primer mes.',
          author: 'Luna Vega',
          role: 'Artista Pop Electrónico'
        }
      }
    },
    {
      id: 3,
      title: 'URBAN FLOW',
      category: 'Campaña Digital',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200',
      description: 'Estrategia de lanzamiento 360° que llevó a un artista independiente de 0 a 100K streams en su primera semana.',
      projectDetails: {
        client: 'MC Flujo',
        year: '2023',
        duration: '21 días',
        role: 'Estrategia de Marketing',
        challenge: 'Artista completamente nuevo sin audiencia previa necesitaba hacer ruido con su primer sencillo en un mercado saturado de música urbana.',
        solution: 'Implementamos nuestro plan de lanzamiento de 21 días: 14 días de pre-save con contenido teaser, lanzamiento coordinado en todas las plataformas, campaña de TikTok con micro-influencers, y pitch agresivo a playlists.',
        results: [
          '+100K streams en la primera semana',
          'Ingreso a 25 playlists (8 editoriales)',
          'Video viral en TikTok con 800K views',
          '+35K seguidores en Instagram desde cero',
          'Contrato con sello independiente',
          'Booking para 12 shows en 2 meses'
        ],
        tools: [
          'Meta Business Suite',
          'TikTok Ads',
          'Spotify for Artists',
          'SubmitHub',
          'Chartmetric',
          'Google Analytics'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'No tenía nada. Ni seguidores, ni presupuesto grande. LPP me dio un plan claro y lo ejecutamos juntos. Ahora vivo de mi música.',
          author: 'MC Flujo',
          role: 'Artista de Hip-Hop'
        }
      }
    },
    {
      id: 4,
      title: 'ROSA SALVAJE',
      category: 'Video Musical',
      image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1200',
      description: 'Video conceptual con narrativa cinematográfica. Ganador de 3 premios en festivales de video musical.',
      projectDetails: {
        client: 'Valentina Rossi',
        year: '2024',
        duration: '4:20',
        role: 'Dirección & Producción',
        challenge: 'Crear un video que contara una historia compleja de empoderamiento femenino con alto valor de producción pero presupuesto limitado.',
        solution: 'Desarrollamos un concepto de una toma (faux one-shot) con coreografía integrada. Utilizamos locaciones gratuitas negociadas y un equipo reducido pero altamente talentoso. La narrativa visual fue el foco principal.',
        results: [
          'Ganador de 3 premios en festivales internacionales',
          '+1.8M views en YouTube',
          'Cobertura en Vogue, Rolling Stone y Billboard',
          'Trending en YouTube México por 5 días',
          '+400K streams de la canción',
          'Invitación a festivales internacionales'
        ],
        tools: [
          'RED Komodo',
          'DaVinci Resolve',
          'Final Cut Pro',
          'Color Grading Suite',
          'Motion Graphics',
          'Sound Design Pro'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'Este video no solo promovió mi música, se convirtió en una obra de arte que me abrió puertas internacionales. LPP entiende que un video musical puede ser mucho más.',
          author: 'Valentina Rossi',
          role: 'Cantautora Pop Latino'
        }
      }
    },
    {
      id: 5,
      title: 'BEAT EMPIRE',
      category: 'Web & Branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200',
      description: 'Sitio web interactivo con experiencia inmersiva para sello discográfico independiente. +250K visitas mensuales.',
      projectDetails: {
        client: 'Beat Empire Records',
        year: '2024',
        duration: '8 semanas',
        role: 'Desarrollo Web & UX',
        challenge: 'El sello necesitaba una presencia digital profesional que reflejara su catálogo diverso y facilitara el descubrimiento de nuevos artistas firmados.',
        solution: 'Diseñamos una experiencia web inmersiva con reproductor integrado, perfiles de artistas dinámicos, y un sistema de filtrado por género. Optimizamos SEO para posicionamiento orgánico en búsquedas de nuevos talentos.',
        results: [
          '+250K visitas mensuales en 6 meses',
          '45% incremento en submissions de artistas',
          '+180% aumento en tiempo de permanencia',
          'Sistema de pre-save integrado (+30K emails)',
          'Posicionamiento #1 en búsquedas de "sello indie"',
          'Integración con Spotify y Apple Music'
        ],
        tools: [
          'React',
          'Next.js',
          'Tailwind CSS',
          'Framer Motion',
          'Vercel',
          'Spotify API'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'Nuestro sitio web se convirtió en nuestra mejor herramienta de A&R. Los artistas nos toman en serio y nuestros números de engagement se triplicaron.',
          author: 'Carlos Méndez',
          role: 'CEO, Beat Empire Records'
        }
      }
    },
    {
      id: 6,
      title: 'FESTIVAL SONAR',
      category: 'Estrategia & Contenido',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200',
      description: 'Cobertura completa de festival con +500 piezas de contenido. Alcance de 2.5M personas en redes sociales.',
      projectDetails: {
        client: 'Festival Sonar Latinoamérica',
        year: '2023',
        duration: '3 días + 2 semanas post',
        role: 'Content Creation & Social Media',
        challenge: 'Cubrir un festival de 3 días con 50+ artistas, generar contenido en tiempo real, y mantener el engagement antes, durante y después del evento.',
        solution: 'Desplegamos un equipo de 8 creadores de contenido con roles específicos. Creamos +500 piezas (fotos, videos, reels, stories). Implementamos un calendario de publicación dinámico con contenido en vivo y post-producido.',
        results: [
          '+2.5M de alcance total en redes',
          '+85K nuevos seguidores del festival',
          '500+ piezas de contenido creadas',
          'Trending Topic en Twitter durante 3 días',
          '+1.2M interacciones totales',
          'Contrato renovado para el siguiente año'
        ],
        tools: [
          'Instagram',
          'TikTok',
          'Sony A7S III',
          'DJI Ronin',
          'Adobe Rush',
          'Hootsuite'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'LPP capturó la esencia de nuestro festival de una manera que ningún equipo había logrado antes. El contenido sigue generando valor meses después del evento.',
          author: 'Ana Gutiérrez',
          role: 'Directora de Marketing, Festival Sonar'
        }
      }
    },
    {
      id: 7,
      title: 'BRANDING LIVE',
      category: 'Evento & Branding',
      video: 'https://res.cloudinary.com/dmkx2uowd/video/upload/v1771007408/Smoth_transition__202602131329_osh30_jreej5.mp4',
      description: 'Cobertura y branding completo de evento en vivo. Capturamos la energía y esencia del artista en tiempo real para contenido de alto impacto.',
      projectDetails: {
        client: 'Artista Urbano - Evento Especial',
        year: '2024',
        duration: 'Evento completo',
        role: 'Branding & Producción Audiovisual',
        challenge: 'Capturar la esencia y energía de un artista en un evento en vivo, mientras se crea contenido de branding que funcione tanto para redes sociales como para promoción futura.',
        solution: 'Desplegamos un equipo de cobertura multi-cámara con enfoque en momentos clave del branding visual del artista. Utilizamos transiciones cinematográficas suaves y color grading que refuerza la identidad visual del artista, creando piezas que funcionan como contenido promocional de alta calidad.',
        results: [
          'Cobertura completa del evento con 20+ clips editados',
          '+400K views combinados en redes sociales',
          'Contenido reutilizado en campaña de Spotify',
          '+50K nuevos seguidores post-evento',
          'Material promocional para 3 meses de contenido',
          'Reconocimiento por calidad de producción en vivo'
        ],
        tools: [
          'Sony FX3',
          'DJI Ronin RS3',
          'Premiere Pro',
          'DaVinci Resolve',
          'After Effects',
          'Color Grading Suite'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'LPP capturó no solo mi show, sino mi esencia como artista. El contenido que crearon elevó mi imagen a un nivel completamente profesional.',
          author: 'Artista Urbano',
          role: 'Performer & Creador de Contenido'
        }
      }
    },
    {
      id: 8,
      title: 'RAÍCES',
      category: 'Branding & Video',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200',
      description: 'Proyecto de identidad completa para artista de música folclórica contemporánea. Fusión de tradición y modernidad.',
      projectDetails: {
        client: 'Sofía Tierra',
        year: '2024',
        duration: '12 semanas',
        role: 'Branding, Video & Estrategia',
        challenge: 'Artista de música folclórica que quería modernizar su imagen sin perder autenticidad. Audiencia mayor tradicional vs nuevo público joven que descubrir.',
        solution: 'Desarrollamos una identidad visual que honra las raíces pero con estética contemporánea. Colores tierra con tipografía moderna. Video musical que mezcla paisajes naturales con elementos urbanos. Estrategia dual de contenido.',
        results: [
          'De 15K a 120K seguidores en 6 meses',
          'Video con +1.5M views',
          'Nominación a Mejor Nuevo Artista Folclórico',
          'Gira por 8 países',
          '+600K streams mensuales',
          'Colaboración con marca de moda sostenible'
        ],
        tools: [
          'Adobe Creative Suite',
          'Figma',
          'Premiere Pro',
          'After Effects',
          'Procreate',
          'Canva'
        ],
        gallery: [
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800'
        ],
        testimonial: {
          quote: 'LPP entendió mi música y mi cultura. Me ayudaron a ser moderna sin traicionar mis raíces. Ahora mi audiencia abarca 3 generaciones.',
          author: 'Sofía Tierra',
          role: 'Cantautora Folclórica Contemporánea'
        }
      }
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0f] to-black -mb-1">
      <CircularGallery items={projects} />
    </section>
  );
};

export default WorkShowcase;
