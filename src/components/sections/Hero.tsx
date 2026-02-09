"use client";

import { motion } from "framer-motion";
import { TextReveal, Reveal } from "@/components/animations";


export function Hero() {
    return (
        <section className="min-h-screen flex items-end pb-24 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover opacity-40 mix-blend-overlay"
                >
                    <source src="/animations/12433100-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
            </div>

            <div className="container relative z-10">
                <div className="max-w-5xl">
                    {/* Studio label */}
                    {/* Studio label - Removed as requested */}

                    {/* Main statement */}
                    <h1 className="text-display mb-8">
                        <TextReveal text="We make" delay={0.3} />
                        <br />
                        <TextReveal text="brands matter." delay={0.5} />
                    </h1>

                    {/* Minimal subtext */}
                    <Reveal delay={1}>
                        <p className="text-body max-w-md mb-12">
                            Creative studio for brands that refuse to blend in.
                        </p>
                    </Reveal>

                    {/* CTA */}
                    <Reveal delay={1.2}>
                        <div className="flex flex-wrap items-center gap-6">
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-3 text-foreground group"
                                whileHover={{ x: 5 }}
                            >
                                <span className="text-sm">Contact Us</span>
                                <motion.span
                                    className="text-lg"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                            </motion.a>

                            {/* WhatsApp Button */}
                            <motion.a
                                href="https://wa.me/917667984730?text=Hi%20CCC%20Kolkata!%20I%20am%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25D366] text-white rounded-full font-medium text-sm shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4.5 h-4.5"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>Chat Now</span>
                            </motion.a>
                        </div>
                    </Reveal>
                </div>

                {/* Side social links (like the reference) */}
                <motion.div
                    className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <span className="text-xs text-muted vertical-text">Follow Us</span>
                    <div className="w-px h-8 bg-border" />
                    <a href="https://www.instagram.com/ccc.kolkata/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors vertical-text">Instagram</a>
                    <a href="#" className="text-xs text-muted hover:text-primary transition-colors vertical-text">LinkedIn</a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <motion.div
                        className="w-px h-16 bg-muted/30"
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ transformOrigin: "top" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
