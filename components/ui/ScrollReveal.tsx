import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = "100%",
    delay = 0.2,
    direction = "up"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        ...directions[direction]
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0
                    },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.17, 0.55, 0.55, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
