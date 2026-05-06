"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/constants";

export function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="services" className="section relative overflow-hidden">
            <div className="blob-purple pointer-events-none" style={{ width: 500, height: 500, bottom: "0%", left: "-10%", zIndex: 0 }} />

            <div className="container relative z-10">
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
                    <div>
                        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
                        <h2 className="font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                            Top Service<br />Solutions
                        </h2>
                    </div>
                    <div>
                        <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">
                            Our services are designed to elevate your business through expert solutions in branding, digital marketing, and development.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                            Get In Touch
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Accordion list */}
                <div className="flex flex-col">
                    {services.map((service, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={service.id}
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                            >
                                {/* Row header — always visible */}
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center gap-5 py-5 text-left group"
                                    suppressHydrationWarning
                                >
                                    {/* Number */}
                                    <span
                                        className="text-xs font-mono flex-shrink-0 w-7 transition-colors duration-300"
                                        style={{ color: isOpen ? "#7c3aed" : "rgba(255,255,255,0.22)" }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    {/* Title */}
                                    <span
                                        className="flex-1 font-semibold transition-all duration-300"
                                        style={{
                                            color: isOpen ? "#ffffff" : "rgba(255,255,255,0.65)",
                                            fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {service.title}
                                    </span>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-shrink-0"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke={isOpen ? "#7c3aed" : "rgba(255,255,255,0.35)"}
                                            strokeWidth="1.5"
                                        >
                                            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </button>

                                {/* Expandable content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div className="grid lg:grid-cols-[1fr_280px] gap-8 pb-8 pl-12">
                                                {/* Description */}
                                                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                                                    {service.description}
                                                </p>

                                                {/* Image — desktop only */}
                                                <div className="hidden lg:block relative rounded-2xl overflow-hidden" style={{ height: 160 }}>
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,14,0.6) 0%, transparent 60%)" }} />
                                                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                                                        style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)" }} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
