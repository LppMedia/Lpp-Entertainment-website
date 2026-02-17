import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
    details: string[];
    image: string;
    backgroundColor: string;
    textColor?: string;
    overlay?: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
    number,
    title,
    description,
    details,
    image,
    backgroundColor,
    textColor = '#ffffff',
    overlay,
}) => {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
            style={{ backgroundColor }}
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {/* Number Badge */}
                    <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 font-mono text-sm tracking-widest"
                        style={{ borderColor: textColor, color: textColor }}
                    >
                        {number}
                    </div>

                    {/* Title */}
                    <h3
                        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-none"
                        style={{ color: textColor }}
                    >
                        {title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-lg md:text-xl leading-relaxed font-light"
                        style={{ color: textColor, opacity: 0.9 }}
                    >
                        {description}
                    </p>

                    {/* Detailed List */}
                    <ul className="space-y-3 mt-6">
                        {details.map((detail, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 text-base md:text-lg leading-relaxed"
                                style={{ color: textColor, opacity: 0.85 }}
                            >
                                <span className="text-primary mt-1">→</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Learn More Link */}
                    <motion.div
                        className="pt-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase"
                            style={{ color: textColor }}
                        >
                            Conoce más
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Poster Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-lg" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />

                    {/* Dynamic Overlay */}
                    {overlay}

                    {/* Decorative grain overlay */}
                    <div
                        className="absolute inset-0 rounded-lg opacity-30 mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessStep;
