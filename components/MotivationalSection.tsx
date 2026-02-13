import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const MotivationalSection: React.FC = () => {
    return (
        <section className="relative py-32 md:py-60 bg-background overflow-hidden">
            {/* Visual Connection Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-0">
                <div className="w-px h-32 md:h-48 bg-gradient-to-b from-primary via-secondary to-transparent" />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-secondary w-6 h-6 mt-2 opacity-30" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tight"
                    >
                        Naciste para <span className="text-secondary italic">dejar huella.</span> Tu talento ya está ahí… solo necesita la dirección correcta y el equipo adecuado para llegar más lejos.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="mt-12 text-xl md:text-3xl font-medium text-white/40 uppercase tracking-[0.2em] max-w-4xl mx-auto"
                    >
                        En LPP creemos en tu visión y estamos aquí para impulsarla, acelerar tu crecimiento y ayudarte a alcanzar el impacto que sabes que puedes lograr.
                    </motion.p>
                </div>
            </div>

            {/* Decorative Aurora background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default MotivationalSection;
