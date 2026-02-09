"use client";

import { motion } from "framer-motion";
import { Reveal, CountUp } from "@/components/animations";
import { impactStats } from "@/lib/constants";

export function Impact() {
    return (
        <section className="section bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                                Our <br />
                                <span className="text-primary">Impact</span>
                            </h2>
                            <div className="w-16 h-1 bg-primary mb-8" />
                            <p className="text-muted text-lg">
                                Delivering consistent results through strategic innovation and creative excellence.
                            </p>
                        </Reveal>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                        {impactStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="text-3xl md:text-5xl font-bold text-foreground mb-2 flex items-baseline gap-1">
                                    <CountUp
                                        end={stat.number}
                                        duration={2.5}
                                        separator=","
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-sm md:text-base text-muted uppercase tracking-wider font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
