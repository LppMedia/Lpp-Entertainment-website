"use client"

import * as React from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export interface MagicTextProps {
    text: string;
    progress?: MotionValue<number>;
}

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative mt-2 mr-2 text-3xl md:text-6xl font-black">
            <span className="absolute opacity-15 text-white/10 select-none">{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
                {children}
            </motion.span>
        </span>
    );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, progress }) => {
    const container = useRef(null);

    const { scrollYProgress: internalProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    const scrollProgress = progress || internalProgress;
    const words = text.split(" ");

    return (
        <p ref={container} className="flex flex-wrap leading-normal p-4 justify-center text-center max-w-5xl mx-auto min-h-[40vh]">
            {words.map((word, i) => {
                // Reveal from 10% to 90% of the section scroll (300vh)
                // This gives perfectly smooth and complete reveal.
                const start = 0.1 + (i / words.length) * 0.8;
                const end = start + (1 / words.length) * 0.8;

                return (
                    <Word key={i} progress={scrollProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};
