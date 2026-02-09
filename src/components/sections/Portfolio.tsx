"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";

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

                {/* Coming Soon Placeholder */}
                <Reveal delay={0.2}>
                    <div className="h-[40vh] min-h-[300px] w-full flex flex-col items-center justify-center border border-dashed border-border/50 rounded-2xl bg-muted/5">
                        <div className="text-center space-y-4 max-w-md px-4">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                            >
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-xl font-medium">Featured Works Coming Soon</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                We are currently curating our best projects to showcase here.
                                Stay tuned for our latest case studies and success stories.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
