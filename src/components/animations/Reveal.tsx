"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// Slow, cinematic reveal
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.16, 1, 0.3, 1], // ease-out-expo
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Word-by-word text reveal
export function TextReveal({
    text,
    className = "",
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const words = text.split(" ");

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 1,
                            delay: delay + i * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {word}
                        {i < words.length - 1 && "\u00A0"}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

// Stagger children with slow timing
export function StaggerReveal({
    children,
    className = "",
    stagger = 0.15,
}: {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: 0.2,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
