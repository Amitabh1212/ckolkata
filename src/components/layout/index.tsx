"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-[#0a0a0e]/90 backdrop-blur-xl border-b border-white/[0.06]"
                    : "bg-transparent"
            }`}
        >
            <nav className="container">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center gap-3">
                        <Logo size="sm" variant="white" />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
                                whileHover={{ y: -2 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.10] text-white text-sm font-medium hover:bg-white/[0.12] transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get Started
                        </motion.a>

                        <motion.button
                            className="w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Menu"
                        >
                            <motion.span
                                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                                animate={isMobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="block w-6 h-[1.5px] bg-white rounded-full"
                                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                                animate={isMobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="py-6 border-t border-white/[0.06] bg-[#0a0a0e]/95 backdrop-blur-xl rounded-b-2xl">
                                {navigation.map((item, i) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07, duration: 0.4 }}
                                        className="block py-4 px-6 text-white/70 hover:text-white text-lg font-medium transition-colors border-b border-white/[0.04] last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <div className="px-6 pt-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}

/* Instagram SVG paths split into variables to avoid line-length truncation */
const igPath1 = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919"
    + ".058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849"
    + "-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07"
    + "-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92"
    + "-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849"
    + ".149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z";

const igPath2 = "M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052"
    + ".014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948"
    + ".2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24"
    + "c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98"
    + ".059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947"
    + "-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z";

const igPath3 = "M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z"
    + "M12 16a4 4 0 110-8 4 4 0 010 8z"
    + "M18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z";

export function Footer() {
    return (
        <footer className="pt-16 pb-8 border-t border-white/[0.06]" style={{ background: "#070709" }}>
            <div className="container">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.06]">

                    {/* Brand column */}
                    <div>
                        <Logo size="sm" variant="white" />
                        <p className="text-sm text-white/40 mt-4 leading-relaxed max-w-xs">
                            Creative studio for brands that refuse to blend in.
                            Strategy, design &amp; growth — all under one roof.
                        </p>

                        {/* Instagram button */}
                        <a
                            href="https://www.instagram.com/ccc.kolkata/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 mt-6 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 transition-all duration-300 group"
                        >
                            <img
                                src="/images/instagram-logo-facebook-2-svgrepo-com.svg"
                                alt="Instagram"
                                className="w-5 h-5"
                                style={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(74%) saturate(1200%) hue-rotate(300deg) brightness(90%)" }}
                            />
                            <span className="text-sm font-medium">@ccc.kolkata</span>
                            <svg
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Nav links */}
                    <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-5">Navigation</p>
                        <div className="flex flex-col gap-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-white/50 hover:text-white transition-colors w-fit"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact info */}
                    <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-5">Contact</p>
                        <div className="flex flex-col gap-3">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-sm text-white/50 hover:text-white transition-colors break-all"
                            >
                                {siteConfig.email}
                            </a>
                            <a
                                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                                className="text-sm text-white/50 hover:text-white transition-colors"
                            >
                                {siteConfig.phone}
                            </a>
                            <span className="text-sm text-white/50">{siteConfig.location}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
                    <p className="text-xs text-white/25">
                        {`© ${new Date().getFullYear()} CCC Kolkata. All rights reserved.`}
                    </p>
                    <p className="text-xs text-white/20 font-light">
                        Made by{" "}
                        <a
                            href="https://oryxen.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors font-semibold tracking-wide"
                        >
                            ORYXEN
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
