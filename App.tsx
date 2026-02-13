import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MotivationalSection from './components/MotivationalSection';
import Marquee from './components/Marquee';
import Expertise from './components/Expertise';
import WorkShowcase from './components/WorkShowcase';
import ProcessIntro from './components/ProcessIntro';
import ProcessStep from './components/ProcessStep';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import DistributionOverlay from './components/DistributionOverlay';

const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introFinished && (
          <IntroOverlay key="intro" onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      <div className="antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <Hero />
        <MotivationalSection />
        <Marquee />
        <Expertise />
        <WorkShowcase />

        {/* Process Sections */}
        <ProcessIntro />

        {/* 1. DISTRIBUCIÓN */}
        <ProcessStep
          number={1}
          title="DISTRIBUCIÓN"
          description="Tu música merece estar en las grandes ligas. Distribuimos tu contenido globalmente con el respaldo de las mejores plataformas de la industria."
          details={[
            "Sub-sello en Warner Music: Acceso a la red de distribución de una de las discográficas más grandes del mundo.",
            "Sello oficial en Symphonic: Distribución profesional en más de 200 plataformas digitales.",
            "Presencia en todas las plataformas: Spotify, Apple Music, YouTube Music, Deezer, Tidal y más.",
            "Gestión de royalties: Seguimiento transparente de tus ganancias y pagos puntuales.",
            "Soporte para ISRC y UPC: Códigos oficiales para proteger y rastrear tu música.",
            "Pitch a playlists oficiales: Acceso directo a curadores de Spotify y otras plataformas."
          ]}
          image="https://res.cloudinary.com/dmkx2uowd/image/upload/v1765910207/Colombiana_3000x3000_Ready_zs1lme.png"
          backgroundColor="#0e0e10"
          textColor="#ffffff"
          overlay={<DistributionOverlay />}
        />

        {/* 2. BRANDING */}
        <ProcessStep
          number={2}
          title="BRANDING"
          description="Ayudamos a los artistas a descubrir y definir su esencia única. No se trata solo de un logo, sino de construir una identidad completa que conecte con tu audiencia ideal."
          details={[
            "Definición de misión y visión artística: ¿Qué mensaje quieres transmitir al mundo?",
            "Identidad creativa y visual: Paletas de colores, tipografías y estética coherente.",
            "Análisis del fan ideal: Entendemos quién es tu audiencia y cómo hablarle.",
            "Posicionamiento estratégico: Te diferenciamos en un mercado saturado.",
            "Guía de marca completa: Un manual que define tu esencia para todas tus comunicaciones."
          ]}
          image="https://res.cloudinary.com/dmkx2uowd/image/upload/v1771004870/manual_de_marca.pdf_1_rfkcdv.png"
          backgroundColor="#1a1a1c"
          textColor="#ff2d95"
        />

        {/* 3. CREATIVOS */}
        <ProcessStep
          number={3}
          title="CREATIVOS"
          description="Creamos contenido visual que no solo se ve profesional, sino que está diseñado estratégicamente para convertir seguidores en fans leales."
          details={[
            "Páginas web de alto impacto: Sitios optimizados que cuentan tu historia y convierten visitantes.",
            "Videos musicales con estructura viral: Aplicamos fórmulas probadas para maximizar engagement.",
            "Community Management profesional: Gestión diaria de redes con estrategia y creatividad.",
            "Calendarios de contenido estratégicos: Planificación mensual alineada con tus lanzamientos.",
            "Diseño gráfico para redes: Posts, stories y covers que mantienen tu estética coherente.",
            "Fotografía y dirección de arte: Sesiones profesionales que elevan tu imagen."
          ]}
          image="https://res.cloudinary.com/dmkx2uowd/image/upload/v1771008213/manual_de_marca.pdf_5_hkjbbn.png"
          backgroundColor="#2e1065"
          textColor="#ffffff"
        />

        {/* 4. ESTRATEGIAS */}
        <ProcessStep
          number={4}
          title="ESTRATEGIAS"
          description="Implementamos planes de marketing basados en datos que generan resultados medibles. No improvisamos, ejecutamos con precisión."
          details={[
            "Plan de lanzamiento de 21 días: Estrategia completa pre y post-release para maximizar impacto.",
            "Marketing en TikTok: Campañas orgánicas y pagadas diseñadas para viralidad.",
            "Estrategia en YouTube: Optimización SEO, thumbnails y contenido que retiene audiencia.",
            "Crecimiento en Spotify: Pitch a playlists editoriales y estrategias de playlist placement.",
            "Facebook & Instagram Ads: Campañas pagadas optimizadas para conseguir streams y seguidores.",
            "Colaboraciones con influencers: Conectamos tu música con creadores de contenido relevantes.",
            "Análisis y reportes: Medimos todo para optimizar continuamente tus resultados."
          ]}
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
          backgroundColor="#042f2e"
          textColor="#ffffff"
        />

        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default App;