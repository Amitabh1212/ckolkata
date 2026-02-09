"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";
import { clients } from "@/lib/constants";

export function Clients() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left - Title */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                                <span className="uppercase tracking-tighter">OUR</span>
                                <br />
                                <span className="text-gradient uppercase tracking-normal">CLIENTS..</span>
                            </h2>
                        </Reveal>
                    </div>

                    {/* Right - Client circles */}
                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                {/* Circle with logo */}
                                <motion.div
                                    className="w-20 h-20 rounded-full bg-card-bg border border-border flex items-center justify-center cursor-pointer overflow-hidden bg-white/5"
                                    whileHover={{ scale: 1.1, borderColor: "var(--primary)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Using standard img for external URLs to avoid domain config issues with next/image */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                                    />
                                </motion.div>

                                {/* Name tooltip */}
                                <motion.div
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {client.name}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
