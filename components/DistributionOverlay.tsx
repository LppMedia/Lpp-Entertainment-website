import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DSP_ICONS = [
    { name: 'Spotify', icon: 'https://api.iconify.design/logos:spotify-icon.svg', color: '#1DB954' },
    { name: 'Apple Music', icon: 'https://api.iconify.design/logos:apple-music.svg', color: '#FA243C' },
    { name: 'YouTube Music', icon: 'https://api.iconify.design/logos:youtube-icon.svg', color: '#FF0000' },
    { name: 'Deezer', icon: 'https://api.iconify.design/logos:deezer.svg', color: '#ffffff' },
    { name: 'Tidal', icon: 'https://api.iconify.design/simple-icons:tidal.svg?color=white', color: '#ffffff' },
];

const StreamCounter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span className="font-mono tabular-nums">
            {count.toLocaleString()}
        </span>
    );
};

const DistributionOverlay: React.FC = () => {
    return (
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
            {/* Top DSPs */}
            <div className="flex justify-center gap-4 mt-8">
                {DSP_ICONS.map((dsp, idx) => (
                    <motion.div
                        key={dsp.name}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-center shadow-xl"
                    >
                        <img src={dsp.icon} alt={dsp.name} className="w-full h-full object-contain" />
                    </motion.div>
                ))}
            </div>

            {/* Bottom Stream Counters */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/60 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-2xl"
                >
                    <div className="text-white/50 text-xs font-medium uppercase tracking-widest mb-1">Weekly Streams</div>
                    <div className="text-primary text-2xl md:text-3xl font-display">
                        +<StreamCounter target={854320} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/60 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-2xl"
                >
                    <div className="text-white/50 text-xs font-medium uppercase tracking-widest mb-1">Total Listeners</div>
                    <div className="text-secondary text-2xl md:text-3xl font-display">
                        <StreamCounter target={2450890} />
                    </div>
                </motion.div>
            </div>

            {/* Float Decoration */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="w-24 h-24 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            </motion.div>
        </div>
    );
};

export default DistributionOverlay;
