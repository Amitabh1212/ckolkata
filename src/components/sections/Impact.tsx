"use client";

import { motion } from "framer-motion";
import { Reveal, CountUp } from "@/components/animations";
import { impactStats } from "@/lib/constants";

export function Impact() {
    return (
        <section className="section bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl">
                        <Reveal>
                            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Our Numbers</p>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                Our <br />
                                <span className="text-gradient">Impact</span>
                            </h2>
                            <div className="w-16 h-[2px] mb-8"
                                style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)" }} />
                            <p className="text-white/50 text-base leading-relaxed">
                                Delivering consistent results through strategic innovation and creative excellence.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                        {impactStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                                transition={{ delay: 0, duration: 0.5 }}
                            >
                                <div className="text-3xl md:text-5xl font-bold text-white mb-2 flex items-baseline gap-1">
                                    <CountUp end={stat.number} duration={2} separator="," suffix={stat.suffix} />
                                </div>
                                <div className="text-sm md:text-base text-white/40 uppercase tracking-wider font-medium">
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
