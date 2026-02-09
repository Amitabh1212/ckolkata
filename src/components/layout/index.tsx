"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { navigation, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/90 backdrop-blur-lg border-b border-border text-foreground"
                : "bg-gradient-to-b from-black/80 to-transparent text-white"
                }`}
        >
            <nav className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#">
                        <Logo size="sm" variant={isScrolled ? "default" : "white"} />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={`text-sm transition-colors duration-300 ${isScrolled
                                    ? "text-muted hover:text-foreground"
                                    : "text-white/80 hover:text-white"
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ${isScrolled
                                    ? "hover:bg-primary/10 text-foreground"
                                    : "hover:bg-white/10 text-white"
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        )}

                        {/* Menu Button */}
                        <motion.button
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isScrolled
                                ? "border-border hover:border-primary text-foreground"
                                : "border-white/20 hover:border-white text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Menu</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 ${!isScrolled && "text-white"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`md:hidden py-4 border-t ${isScrolled
                            ? "border-border bg-background"
                            : "border-white/10 bg-black/90 backdrop-blur-xl rounded-b-xl"
                            }`}
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`block py-3 px-4 ${isScrolled
                                    ? "text-muted hover:text-foreground"
                                    : "text-white/70 hover:text-white"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}

export function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-border">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
                            <span className="text-sm text-muted">{siteConfig.tagline}</span>
                        </div>
                        <p className="text-sm text-muted">
                            © {new Date().getFullYear()} CCC Kolkata. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm text-muted hover:text-foreground transition-colors"
                        >
                            {siteConfig.email}
                        </a>
                        <span className="text-sm text-muted">{siteConfig.phone}</span>
                        <span className="text-sm text-muted">{siteConfig.location}</span>
                    </div>
                </div>

                {/* ORYXEN Credit */}
                <div className="pt-8 border-t border-border/50 flex justify-center md:justify-end">
                    <p className="text-xs text-muted/60 font-light">
                        Made by{" "}
                        <a
                            href="https://oryxen.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors font-medium tracking-wide"
                        >
                            ORYXEN
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
