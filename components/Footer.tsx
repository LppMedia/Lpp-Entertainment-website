import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-3xl font-display font-bold tracking-tight uppercase italic">
          LPP<span className="text-primary">.</span>
        </div>

        <div className="flex gap-10 text-[10px] items-center font-bold uppercase tracking-[0.3em] text-white/40">
          <a href="#" className="hover:text-primary transition-all">Privacidad</a>
          <a href="#" className="hover:text-primary transition-all">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-all">Instagram</a>
        </div>

        <div className="text-[10px] font-medium uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} Lpp Entertainment.
        </div>
      </div>
    </footer>
  );
};

export default Footer;