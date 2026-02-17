import React from 'react';
import { SocialLinks } from './ui/social-links';

const socials = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    image: 'https://link-hover-lndev.vercel.app/instagram.png',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com',
    image: 'https://link-hover-lndev.vercel.app/tiktok.png',
  },
  {
    name: 'Spotify',
    url: 'https://spotify.com',
    image: 'https://link-hover-lndev.vercel.app/spotify.png',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    image: 'https://link-hover-lndev.vercel.app/youtube.png',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-3xl font-display font-bold tracking-tight uppercase italic">
          LPP<span className="text-primary">.</span>
        </div>

        <SocialLinks socials={socials} />

        <div className="text-[10px] font-medium uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} Lpp Entertainment.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
