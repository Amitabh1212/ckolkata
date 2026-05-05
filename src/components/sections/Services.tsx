"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/constants";

export function Services() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;
            const scrolled = Math.max(0, -rect.top);
            const progress = scrolled / totalScrollable;
            // Map 0-1 progress to 0-(n-1) service index
            const raw = progress * services.length;
            const index = Math.min(services.length - 1, Math.max(0, Math.floor(raw)));
            setActiveIndex(index);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Outer section is tall enough to scroll through every service (100vh per service + header space)
    return (
        <section
            id="services"
            ref={sectionRef}
            style={{ height: `${services.length * 25 + 60}vh` }}
            className="relative"
        >
            {/* Sticky container occupies the viewport while user scrolls through */}
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Background blob */}
                <div className="blob-purple pointer-events-none" style={{ width: 500, height: 500, bottom: "0%", left: "-10%", zIndex: 0 }} />

                <div className="container relative z-10 flex flex-col h-full py-16">
                    {/* Section header */}
                    <div className="grid lg:grid-cols-2 gap-8 items-end mb-10 flex-shrink-0">
                        <div>
                            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
                            <h2 className="font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                                Top Service<br />Solutions
                            </h2>
                        </div>
                        <div>
                            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">
                                Our main services are designed to elevate your business through expert solutions in branding, digital marketing, and development.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                                style={{ background: "rgba(255,255,255,0.04)" }}
                            >
                                View More Services
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Main content: list left + image right */}
                    <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start flex-1 min-h-0">

                        {/* Service list */}
                        <div className="flex flex-col justify-center h-full">
                            {services.map((service, i) => (
                                <div
                                    key={service.id}
                                    className="flex items-center gap-5 py-4 cursor-default"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    {/* Mobile thumbnail */}
                                    <AnimatePresence>
                                        {activeIndex === i && (
                                            <motion.div
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: 56, opacity: 1 }}
                                                exit={{ width: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="lg:hidden flex-shrink-0 h-11 rounded-xl overflow-hidden"
                                            >
                                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Number */}
                                    <motion.span
                                        className="text-xs font-mono flex-shrink-0 w-7 transition-colors duration-500"
                                        animate={{ color: activeIndex === i ? "#7c3aed" : "rgba(255,255,255,0.2)" }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </motion.span>

                                    {/* Title */}
                                    <motion.span
                                        className="flex-1 font-semibold transition-all duration-500"
                                        animate={{
                                            color: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.30)",
                                            fontSize: activeIndex === i ? "clamp(1.05rem, 2vw, 1.5rem)" : "clamp(0.95rem, 1.8vw, 1.35rem)",
                                        }}
                                        style={{ letterSpacing: "-0.01em" }}
                                    >
                                        {service.title}
                                    </motion.span>

                                    {/* Progress bar */}
                                    <div className="hidden sm:block w-20 h-[1px] bg-white/10 flex-shrink-0 overflow-hidden rounded-full">
                                        {activeIndex === i && (
                                            <motion.div
                                                className="h-full bg-primary"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        )}
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ rotate: activeIndex === i ? 45 : 0, opacity: activeIndex === i ? 1 : 0.25 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none"
                                            stroke={activeIndex === i ? "#7c3aed" : "rgba(255,255,255,0.4)"} strokeWidth="1.5">
                                            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Sticky image panel — desktop */}
                        <div className="hidden lg:block h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.94, y: 24 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.94, y: -24 }}
                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative rounded-3xl overflow-hidden h-full"
                                    style={{ border: "1px solid rgba(255,255,255,0.06)", minHeight: 320 }}
                                >
                                    <img
                                        src={services[activeIndex].image}
                                        alt={services[activeIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,14,0.92) 0%, rgba(10,10,14,0.15) 55%, transparent 100%)" }} />

                                    {/* Service label */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <p className="text-xs text-white/40 uppercase tracking-widest font-medium">
                                                {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                                            </p>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{services[activeIndex].title}</h3>
                                    </div>

                                    {/* Top gradient line */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                                        style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)" }} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Progress dots only — no label */}
                    <div className="flex items-center gap-1.5 mt-6 flex-shrink-0">
                        {services.map((_, i) => (
                            <motion.div
                                key={i}
                                className="rounded-full"
                                animate={{
                                    width: activeIndex === i ? 20 : 6,
                                    backgroundColor: activeIndex === i ? "#7c3aed" : "rgba(255,255,255,0.12)",
                                }}
                                style={{ height: 6 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
