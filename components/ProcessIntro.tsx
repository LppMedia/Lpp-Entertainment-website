import React from 'react';
import { motion } from 'framer-motion';

const ProcessIntro: React.FC = () => {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center px-6 -mt-1">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl lg:text-7xl text-black text-center leading-tight tracking-tight uppercase"
            >
                ENTONCES, ¿QUÉ HACEMOS, EXACTAMENTE?
            </motion.h2>
        </section>
    );
};

export default ProcessIntro;
