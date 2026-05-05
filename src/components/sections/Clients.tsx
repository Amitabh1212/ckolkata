"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/constants";

export function Clients() {
    // Duplicate for seamless loop
    const doubled = [...clients, ...clients];

    return (
        <div className="relative py-6 border-y border-white/[0.06] overflow-hidden bg-[#0a0a0e]">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0a0a0e, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0a0a0e, transparent)" }} />

            {/* Scrolling track */}
            <div
                className="flex gap-0 w-max"
                style={{ animation: "marquee 30s linear infinite" }}
            >
                {doubled.map((client, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-8 px-8 border-r border-white/[0.06] last:border-0"
                    >
                        {/* Logo circle */}
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-white/[0.06] flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                        </div>
                        <span className="text-sm font-medium text-white/50 whitespace-nowrap tracking-wide">
                            {client.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
