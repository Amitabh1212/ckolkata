"use client";

import { motion } from "framer-motion";
import { packages } from "@/lib/constants";

const WA_NUMBER = "917667984730";

function buildWhatsAppLink(packageName: string) {
    const text = `Hi CCC Kolkata! I am interested in the ${packageName} package.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const tierColors: Record<string, string> = {
    Basic: "#888899",
    Standard: "#7c3aed",
    Premium: "#f59e0b",
};

const checkIcon = (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export function Packages() {
    return (
        <section id="packages" className="section relative overflow-hidden">
            {/* Background blobs */}
            <div className="blob-purple" style={{ width: 600, height: 600, top: "-10%", right: "-10%", zIndex: 0 }} />
            <div className="blob-blue"   style={{ width: 400, height: 400, bottom: "0%", left: "-5%",  zIndex: 0 }} />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
                    >
                        Our Packages
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-bold text-white leading-tight"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
                    >
                        Our Brand-Oriented Packages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed"
                    >
                        Tailored solutions to grow your brand at every stage. All packages include a free brand consultation.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, index) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={index} />
                    ))}
                </div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-white/30 text-xs mt-10 tracking-wide"
                >
                    All packages are customizable. Contact us for a tailored quote.
                </motion.p>
            </div>
        </section>
    );
}

function PackageCard({ pkg, index }: { pkg: (typeof packages)[0]; index: number }) {
    const tierColor = tierColors[pkg.tier] ?? "#888899";
    const isHighlight = pkg.highlight;
    const waLink = buildWhatsAppLink(pkg.name);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative flex flex-col rounded-3xl overflow-hidden"
            style={{
                background: isHighlight
                    ? "linear-gradient(145deg, #1a0840 0%, #2d1060 40%, #1a0840 100%)"
                    : "rgba(255,255,255,0.03)",
                border: isHighlight
                    ? "1px solid rgba(124,58,237,0.5)"
                    : "1px solid rgba(255,255,255,0.07)",
                boxShadow: isHighlight
                    ? "0 0 60px rgba(124,58,237,0.18), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "0 0 0 1px rgba(255,255,255,0.03)",
            }}
        >
            {/* Top gradient line */}
            <div
                className="absolute top-0 left-0 right-0 h-[1.5px]"
                style={{
                    background: isHighlight
                        ? "linear-gradient(to right, #7c3aed, #ec4899, #a855f7)"
                        : `linear-gradient(to right, ${tierColor}55, transparent)`,
                }}
            />

            {/* Popular badge */}
            {isHighlight && (
                <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest"
                        style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.4)", color: "#c4b5fd" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Most Popular
                    </span>
                </div>
            )}

            <div className="p-8 flex flex-col flex-1">
                {/* Tier badge */}
                <div className="mb-6">
                    <span
                        className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full"
                        style={{
                            color: tierColor,
                            background: `${tierColor}18`,
                            border: `1px solid ${tierColor}30`,
                        }}
                    >
                        {pkg.tier}
                    </span>
                </div>

                {/* Package name */}
                <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    {pkg.name}
                </h3>
                <p className="text-sm text-white/40 mb-8 leading-relaxed">{pkg.subtitle}</p>

                {/* Divider */}
                <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />

                {/* Features */}
                <ul className="space-y-4 flex-1 mb-10">
                    {pkg.features.map((feature, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.07 }}
                            className="flex items-start gap-3"
                        >
                            <span style={{ color: isHighlight ? "#a855f7" : tierColor }}>{checkIcon}</span>
                            <span className="text-sm leading-relaxed" style={{ color: isHighlight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)" }}>
                                {feature}
                            </span>
                        </motion.li>
                    ))}
                </ul>

                {/* CTA button — opens WhatsApp with package name */}
                <motion.a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300"
                    style={isHighlight ? {
                        background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                        color: "#fff",
                        boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
                    } : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.09)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Get Started
                </motion.a>
            </div>
        </motion.div>
    );
}
