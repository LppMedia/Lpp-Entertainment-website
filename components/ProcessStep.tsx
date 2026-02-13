import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
            style={{ backgroundColor }}
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Content */}
                <div className="space-y-6">
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
                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase group"
                            style={{ color: textColor }}
                        >
                            Conoce más
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                    </div>
                </div>

                {/* Right Side: Poster Image with Parallax */}
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg shadow-2xl">
                    <motion.div style={{ y, scale: imgScale }} className="absolute inset-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    </motion.div>

                    {/* Dynamic Overlay */}
                    {overlay}

                    {/* Decorative grain overlay */}
                    <div
                        className="absolute inset-0 rounded-lg opacity-30 mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProcessStep;
