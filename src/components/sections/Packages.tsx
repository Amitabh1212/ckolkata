"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations";
import { packages } from "@/lib/constants";

export function Packages() {
    return (
        <section id="packages" className="section">
            <div className="container">
                {/* Header */}
                <div className="mb-16">
                    <Reveal>
                        <p className="text-primary text-sm mb-4">Our Packages</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-headline">Our brand oriented packages!</h2>
                    </Reveal>
                </div>

                {/* Package Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            className={`relative rounded-2xl p-8 ${pkg.highlight
                                ? "bg-[#7c3aed] text-white" // Custom brighter purple (Violet-600)
                                : "bg-black border border-white/10 text-white" // Fixed Black
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <PackageIcon type={pkg.id} highlight={pkg.highlight} />
                            </div>

                            {/* Name */}
                            <h3
                                className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-white"
                                    }`}
                            >
                                {pkg.name}
                            </h3>

                            {/* Subtitle */}
                            <p
                                className={`text-sm mb-6 ${pkg.highlight ? "text-white/80" : "text-neutral-400"
                                    }`}
                            >
                                {pkg.subtitle}
                            </p>

                            {/* Tier */}
                            <p
                                className={`text-lg font-semibold mb-4 ${pkg.highlight ? "text-white" : "text-white"
                                    }`}
                            >
                                {pkg.tier}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`text-sm ${pkg.highlight ? "text-white/90" : "text-neutral-400"
                                            }`}
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Line accent */}
                            <div
                                className={`w-12 h-1 ${pkg.highlight ? "bg-white" : "bg-[#7c3aed]"
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PackageIcon({
    type,
    highlight,
}: {
    type: string;
    highlight: boolean;
}) {
    const iconClass = "text-white";

    if (type === "business") {
        return (
            <svg
                className={`w-8 h-8 ${iconClass}`}
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
        );
    }

    if (type === "startup") {
        return (
            <svg
                className={`w-8 h-8 ${iconClass}`}
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
        );
    }

    return (
        <svg
            className={`w-8 h-8 ${iconClass}`}
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
    );
}
