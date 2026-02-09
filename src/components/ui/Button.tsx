"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl hover:shadow-primary/25",
        secondary:
            "bg-card-bg text-text-primary border border-card-border hover:border-primary hover:shadow-lg",
        outline:
            "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-base",
        lg: "px-9 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...(props as any)}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>

            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
                }}
                whileHover={{ opacity: 1 }}
            />
        </motion.button>
    );
}
