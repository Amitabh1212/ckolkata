"use client";

import { motion } from "framer-motion";

const bullets = [
    { color: "#7c3aed", label: "Innovative Problem Solvers" },
    { color: "#ec4899", label: "Results-Driven Strategies" },
    { color: "#3b82f6", label: "Creative Brand Builders" },
];

export function About() {
    return (
        <section className="section-tight relative overflow-hidden">
            <div className="blob-purple" style={{ width: 500, height: 500, top: "10%", right: "-15%" }} />

            <div className="container">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

                    {/* Left: Sachin's photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden w-full"
                            style={{ maxHeight: 440 }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "radial-gradient(circle at 50% 10%, transparent 40%, rgba(10,10,14,0.25) 100%)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                }}
                            />

                            <img
                                src="/images/about picture.png"
                                alt="Sachin - Founder, CCC Kolkata"
                                className="w-full object-cover"
                                style={{ maxHeight: 440, display: "block", objectPosition: "center 66%" }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "30%",
                                    background: "linear-gradient(to top, rgba(10,10,14,0.8), transparent)",
                                    pointerEvents: "none",
                                    zIndex: 2,
                                }}
                            />

                            <div
                                className="absolute top-0 left-0 right-0 h-[2px]"
                                style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)", zIndex: 3 }}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="rounded-2xl px-6 py-4 self-end"
                            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <div className="text-3xl font-bold text-white">500<span className="text-primary">+</span></div>
                            <div className="text-xs text-white/50 mt-1 tracking-wide uppercase">Happy Clients</div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
                            Meet the Founder
                        </p>

                        <h2 className="font-bold text-white mb-3 leading-tight"
                            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}>
                            Hi, I&apos;m Sachin
                        </h2>

                        <p className="text-white/40 text-sm font-medium mb-6 tracking-wide uppercase">
                            Founder &amp; Creative Director &mdash; CCC Kolkata
                        </p>

                        <p className="text-white/55 text-base leading-relaxed mb-4">
                            I started CCC Kolkata with a simple goal to help growing brands compete like top players.
                            We don&apos;t believe in one-size-fits-all marketing. Everything we do is built around
                            your brand, your audience, and what actually works for you.
                        </p>

                        <p className="text-white/55 text-base leading-relaxed mb-10">
                            From brand identity and content to ads and conversions, we combine creativity with real
                            strategy so your brand doesn&apos;t just exist online, it stands out and performs.
                        </p>

                        {/* Bullets */}
                        <div className="flex flex-col gap-3 mb-10">
                            {bullets.map((b, i) => (
                                <motion.div
                                    key={b.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ background: b.color }}
                                    />
                                    <span className="text-white/70 text-sm font-medium">{b.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium transition-all duration-300"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                            whileHover={{ scale: 1.03, borderColor: "rgba(124,58,237,0.6)", backgroundColor: "rgba(124,58,237,0.1)" }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Work With Us
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
