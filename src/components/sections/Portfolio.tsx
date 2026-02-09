"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";
import { portfolioImages } from "@/lib/constants";

export function Portfolio() {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                {/* Header */}
                <div className="mb-16">
                    <Reveal>
                        <p className="text-primary text-sm mb-4">Our Portfolio</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-headline">Featured Works</h2>
                    </Reveal>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {portfolioImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`relative overflow-hidden rounded-lg group ${index % 5 === 0 ? "row-span-2" : ""
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <motion.img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover aspect-square"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            />

                            {/* Hover overlay */}
                            <motion.div
                                className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
