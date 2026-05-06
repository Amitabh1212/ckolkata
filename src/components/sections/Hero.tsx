"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LightPillar = dynamic(() => import("@/components/ui/LightPillar"), { ssr: false });

export function Hero() {
    return (
        <section className="min-h-screen relative overflow-hidden flex items-center">

            <div className="absolute inset-0 z-0">
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#FF9FFC"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>

            <div className="blob-purple" style={{ width: 600, height: 600, top: "-10%", left: "-10%" }} />
            <div className="blob-green"  style={{ width: 500, height: 500, top: "-5%",  right: "-5%" }} />
            <div className="blob-blue"   style={{ width: 400, height: 400, bottom: "5%", left: "30%" }} />

            <div className="container relative z-10 pt-24 md:pt-28 pb-12">
                {/* On mobile push content ~20vh lower than center; on md+ sits naturally centered */}
                <div className="max-w-4xl mt-[20vh] md:mt-0">

                    {/* Heading */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="font-bold text-white"
                            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                        >
                            Grow{" "}
                            <span className="italic font-medium text-white/80" style={{ fontFamily: "Georgia, serif" }}>Your</span>
                            {" "}Brand
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="font-bold text-white"
                            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                        >
                            &amp; Business
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-10 md:mb-14">
                        <motion.h1
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                        >
                            <span className="italic font-medium text-white/80" style={{ fontFamily: "Georgia, serif" }}>With Our </span>
                            <span className="font-bold text-white">Team</span>
                        </motion.h1>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col gap-6"
                    >
                        <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed">
                            Creative studio for brands that refuse to blend in. Strategy, design &amp; growth all under one roof.
                        </p>

                        <div className="flex flex-row items-center gap-3 mt-2">
                            <motion.a
                                href="#contact"
                                className="btn-premium"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="btn-premium-inner" style={{ padding: "10px 18px", fontSize: "0.8rem" }}>
                                    Contact Us
                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="btn-premium-shine" />
                            </motion.a>

                            <motion.a
                                href="https://wa.me/917667984730?text=Hi%20CCC%20Kolkata!%20I%20am%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] font-medium transition-all duration-300"
                                style={{ fontSize: "0.8rem" }}
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat Now
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
