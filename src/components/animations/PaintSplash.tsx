"use client";

import { motion } from "framer-motion";

// Improved paint splash animation - more dynamic like the reference
export function PaintSplash() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main large blob */}
            <motion.div
                className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px]"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <svg viewBox="0 0 500 500" className="w-full h-full">
                    <defs>
                        <linearGradient id="splash1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6A0DAD" />
                            <stop offset="100%" stopColor="#8A2BE2" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        fill="url(#splash1)"
                        animate={{
                            d: [
                                "M400,250Q450,320,380,380Q310,440,240,400Q170,360,140,290Q110,220,160,160Q210,100,280,90Q350,80,390,150Q430,220,400,250Z",
                                "M420,240Q470,300,400,370Q330,440,250,420Q170,400,120,330Q70,260,100,180Q130,100,210,80Q290,60,360,100Q430,140,420,240Z",
                                "M380,260Q420,330,360,390Q300,450,220,430Q140,410,100,340Q60,270,90,190Q120,110,200,70Q280,30,350,90Q420,150,380,260Z",
                                "M400,250Q450,320,380,380Q310,440,240,400Q170,360,140,290Q110,220,160,160Q210,100,280,90Q350,80,390,150Q430,220,400,250Z",
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </motion.div>

            {/* Splash streaks */}
            <motion.div
                className="absolute right-1/4 top-1/3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <svg width="300" height="200" viewBox="0 0 300 200">
                    <motion.path
                        d="M0,100 Q50,60 100,100 T200,80 T300,100"
                        stroke="#6A0DAD"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        animate={{
                            d: [
                                "M0,100 Q50,60 100,100 T200,80 T300,100",
                                "M0,100 Q50,140 100,100 T200,120 T300,100",
                                "M0,100 Q50,50 100,100 T200,70 T300,100",
                                "M0,100 Q50,60 100,100 T200,80 T300,100",
                            ],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M20,130 Q70,90 120,130 T220,110"
                        stroke="#6020A0"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        opacity={0.6}
                        animate={{
                            d: [
                                "M20,130 Q70,90 120,130 T220,110",
                                "M20,130 Q70,170 120,130 T220,150",
                                "M20,130 Q70,80 120,130 T220,100",
                                "M20,130 Q70,90 120,130 T220,110",
                            ],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />
                </svg>
            </motion.div>

            {/* Floating drops */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-primary"
                    style={{
                        width: Math.random() * 12 + 4,
                        height: Math.random() * 12 + 4,
                        right: `${Math.random() * 40 + 10}%`,
                        top: `${Math.random() * 60 + 10}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                        x: [0, Math.random() * 30 - 15, 0],
                        y: [0, Math.random() * 30 - 15, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Animated background
export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-background" />

            {/* Glow effect */}
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px]"
                style={{
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                    filter: "blur(120px)",
                    opacity: 0.2,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
