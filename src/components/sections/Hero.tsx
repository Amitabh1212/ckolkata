"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ColorBends = dynamic(() => import("@/components/ui/ColorBends"), { ssr: false });

export function Hero() {
    return (
        <section className="min-h-screen relative overflow-hidden flex items-center">

            {/* ColorBends animated background */}
            <div className="absolute inset-0 z-0">
                <ColorBends
                    colors={["#7c3aed", "#9d22c1", "#ec4899", "#3b0764", "#1e1b4b", "#0a0a0e"]}
                    rotation={90}
                    speed={0.18}
                    scale={1.1}
                    frequency={0.8}
                    warpStrength={1.2}
                    mouseInfluence={0.4}
                    noise={0.08}
                    parallax={0.3}
                    iterations={2}
                    intensity={0.7}
                    bandWidth={5}
                    transparent={false}
                    style={{ width: "100%", height: "100%" }}
                />
                {/* Dark overlay to keep text readable */}
                <div className="absolute inset-0" style={{ background: "rgba(10,10,14,0.72)" }} />
            </div>

            <div className="blob-purple" style={{ width: 600, height: 600, top: "-10%", left: "-10%" }} />
            <div className="blob-green"  style={{ width: 500, height: 500, top: "-5%",  right: "-5%" }} />
            <div className="blob-blue"   style={{ width: 400, height: 400, bottom: "5%", left: "30%" }} />

            <div className="container relative z-10 pt-28 pb-12">
                <div className="max-w-5xl">

                    {/* Row 1 */}
                    <div className="overflow-hidden mb-1">
                        <motion.div
                            initial={{ y: 120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-x-4 gap-y-2"
                        >
                            <span className="font-bold text-white leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.03em" }}>
                                Grow
                            </span>
                            <div className="rounded-full border-2 border-white/25 flex items-center justify-center flex-shrink-0" style={{ width: "clamp(40px, 5.5vw, 68px)", height: "clamp(40px, 5.5vw, 68px)" }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60" style={{ width: "clamp(16px, 2.2vw, 28px)", height: "clamp(16px, 2.2vw, 28px)" }}>
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M3 12h1M20 12h1M12 3v1M12 20v1" strokeLinecap="round" />
                                    <path d="M5.636 5.636l.707.707M17.657 17.657l.707.707M17.657 5.636l-.707.707M5.636 18.364l.707-.707" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="italic font-medium text-white/80 leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.02em", fontFamily: "Georgia, serif" }}>
                                Your
                            </span>
                            <span className="font-bold text-white leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.03em" }}>
                                Brand
                            </span>
                        </motion.div>
                    </div>

                    {/* Row 2 */}
                    <div className="overflow-hidden mb-1">
                        <motion.div
                            initial={{ y: 120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-x-4 gap-y-2"
                        >
                            {/* Static pill with internal nebula animation */}
                            <div
                                className="flex-shrink-0 rounded-full overflow-hidden"
                                style={{
                                    width: "clamp(100px, 15vw, 210px)",
                                    height: "clamp(38px, 5.5vw, 76px)",
                                    position: "relative",
                                }}
                            >
                                <div className="pill-nebula-purple" />
                            </div>
                            <span className="font-bold text-white leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.03em" }}>
                                &amp; Business
                            </span>
                        </motion.div>
                    </div>

                    {/* Row 3 */}
                    <div className="overflow-hidden mb-14">
                        <motion.div
                            initial={{ y: 120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-x-4 gap-y-2"
                        >
                            <span className="italic font-medium text-white/80 leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.02em", fontFamily: "Georgia, serif" }}>
                                With Our
                            </span>
                            {/* Static pill with internal nebula animation */}
                            <div
                                className="flex-shrink-0 rounded-full overflow-hidden"
                                style={{
                                    width: "clamp(80px, 11vw, 170px)",
                                    height: "clamp(38px, 5.5vw, 76px)",
                                    position: "relative",
                                }}
                            >
                                <div className="pill-nebula-red" />
                            </div>
                            <span className="font-bold text-white leading-none" style={{ fontSize: "clamp(2.6rem, 8.5vw, 7rem)", letterSpacing: "-0.03em" }}>
                                Team
                            </span>
                        </motion.div>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                    >
                        <p className="text-white/50 text-base max-w-sm leading-relaxed">
                            Creative studio for brands that refuse to blend in. Strategy, design &amp; growth all under one roof.
                        </p>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            {/* Premium Contact Us button */}
                            <motion.a
                                href="#contact"
                                className="btn-premium"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="btn-premium-inner">
                                    Contact Us
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="btn-premium-shine" />
                            </motion.a>

                            {/* WhatsApp button */}
                            <motion.a
                                href="https://wa.me/917667984730?text=Hi%20CCC%20Kolkata!%20I%20am%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] font-medium text-sm transition-all duration-300"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
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
