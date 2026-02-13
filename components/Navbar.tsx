import React from 'react';
import { NavBar } from './ui/tubelight-navbar';
import { Briefcase, Layers, Disc, User, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Inicio', url: '#', icon: Home },
    { name: 'Portafolio', url: '#work', icon: Briefcase },
    { name: 'Servicios', url: '#expertise', icon: Layers },
    { name: 'El Sello', url: '#testimonials', icon: Disc },
    { name: 'Contacto', url: '#contact', icon: User }
  ];

  return (
    <>
      {/* Brand Logo - Fixed separately since the navbar is centered */}
      <div className="fixed top-6 left-6 z-50 hidden md:block">
         <a href="#" className="font-display text-2xl font-bold tracking-tight text-white uppercase italic">
            LPP<span className="text-primary">.</span>
          </a>
      </div>
      
      {/* Tubelight Navbar */}
      <NavBar items={navItems} />
    </>
  );
};

export default Navbar;