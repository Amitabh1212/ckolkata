"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    separator?: string;
    className?: string;
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "", separator = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration,
                ease: [0.16, 1, 0.3, 1], // ease-out-expo
                onUpdate: (value) => {
                    setCount(Math.floor(value));
                },
            });

            return () => controls.stop();
        }
    }, [isInView, end, duration]);

    const formattedCount = separator
        ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        : count;

    return (
        <span ref={ref} className={className}>
            {prefix}{formattedCount}{suffix}
        </span>
    );
}
