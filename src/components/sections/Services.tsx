"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations";
import { services } from "@/lib/constants";

export function Services() {
    // Scattered layout positions
    const positions = [
        { col: "md:col-start-1", row: "md:row-start-1", size: "md:col-span-2" },
        { col: "md:col-start-4", row: "md:row-start-1", size: "md:col-span-2" },
        { col: "md:col-start-7", row: "md:row-start-1", size: "md:col-span-2" },
        { col: "md:col-start-2", row: "md:row-start-2", size: "md:col-span-2" },
        { col: "md:col-start-5", row: "md:row-start-2", size: "md:col-span-2" },
        { col: "md:col-start-8", row: "md:row-start-2", size: "md:col-span-2" },
        { col: "md:col-start-1", row: "md:row-start-3", size: "md:col-span-2" },
        { col: "md:col-start-4", row: "md:row-start-3", size: "md:col-span-2" },
        { col: "md:col-start-7", row: "md:row-start-3", size: "md:col-span-2" },
    ];

    return (
        <section id="services" className="section bg-background">
            <div className="container">
                {/* Section Header */}
                <Reveal>
                    <h2 className="text-headline mb-16">Our Services</h2>
                </Reveal>

                {/* Scattered Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-9 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            position={positions[index] || positions[0]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
    position,
    index,
}: {
    service: (typeof services)[0];
    position: { col: string; row: string; size: string };
    index: number;
}) {
    return (
        <motion.div
            className={`${position.col} ${position.row} ${position.size} aspect-square relative group`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                {/* Image */}
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Purple dot indicator */}
                <motion.div
                    className="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg md:text-xl font-medium">
                        {service.title}
                    </h3>
                </div>

                {/* Hover effect border */}
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </motion.div>
    );
}
