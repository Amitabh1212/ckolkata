"use client";

import { motion } from "framer-motion";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "white";
}

export function Logo({ size = "md", variant = "default" }: LogoProps) {
    const sizes = {
        sm: { main: "text-xl", sub: "text-[9px] tracking-[0.2em]" },
        md: { main: "text-2xl", sub: "text-[11px] tracking-[0.34em]" },
        lg: { main: "text-4xl", sub: "text-sm tracking-[0.4em]" },
    };

    const textColor = variant === "white" ? "text-white" : "text-foreground";

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
        >
            <span
                className={`${sizes[size].main} leading-none tracking-wide`}
                style={{ fontFamily: "var(--font-logo)" }}
            >
                <span className="font-bold text-shine">CCC</span>
                <span className={`${textColor} font-light`}> KOLKATA</span>
            </span>
            <span
                className={`${sizes[size].sub} ${variant === "white" ? "text-white/70" : "text-muted"} uppercase mt-1 w-full text-center`}
                style={{ fontFamily: "var(--font-logo)" }}
            >
                Marketing Agency
            </span>
        </motion.div>
    );
}
