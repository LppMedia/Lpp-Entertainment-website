import { Project, Service, Testimonial, NavItem } from './types';
import { Layers, Compass, Disc, TrendingUp } from 'lucide-react';

export const COLORS = {
  primary: '#ff2d95',
  secondary: '#8b5cf6',
  background: '#0a0a0c',
  white: '#ffffff',
  accent: '#f59e0b',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Portafolio', href: '#work' },
  { label: 'Servicios', href: '#expertise' },
  { label: 'El Sello', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Luna Eterna",
    category: "Lanzamiento Album",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
    description: "Campaña visual completa y dirección de arte para el álbum debut."
  },
  {
    id: 2,
    title: "Neon Vibes",
    category: "Branding Artista",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
    description: "Redefinición de identidad visual para el colectivo de música electrónica."
  },
  {
    id: 3,
    title: "Tour 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
    description: "Estrategia digital y venta de entradas sold-out en 3 ciudades."
  },
  {
    id: 4,
    title: "Velvet Sessions",
    category: "Dirección Creativa",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    description: "Serie de sesiones en vivo con estética cinematográfica."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Branding",
    description: "Construimos la identidad visual de artistas, desde el logo hasta la estética completa de sus redes.",
    icon: "Layers"
  },
  {
    id: 2,
    title: "Dirección Creativa",
    description: "Conceptos visuales potentes para videoclips, portadas de álbumes y puestas en escena.",
    icon: "Compass"
  },
  {
    id: 3,
    title: "Distribución",
    description: "Llevamos tu música a todas las plataformas digitales con estrategias de lanzamiento optimizadas.",
    icon: "Disc"
  },
  {
    id: 4,
    title: "Marketing",
    description: "Estrategias de crecimiento, campañas de ads y gestión de comunidad para maximizar el alcance.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Sofia R.",
    role: "Artista Independiente",
    company: "Pop Alternativo",
    quote: "Lpp Entertainment entendió mi visión desde el primer día. Mi marca personal nunca ha sido tan fuerte.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    author: "Carlos M.",
    role: "Manager",
    company: "Urban Beats",
    quote: "La distribución fue impecable y la estrategia de marketing nos puso en las playlists correctas.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    author: "Elena V.",
    role: "Directora",
    company: "Indie Fest",
    quote: "Su dirección creativa transformó la experiencia visual de nuestro festival. Simplemente otro nivel.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];