"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, TextReveal } from "@/components/animations";

const works = [
    { id: 1, video: "/animations/work1.mp4" },
    { id: 2, video: "/animations/work2.mp4" },
    { id: 3, video: "/animations/work3.mp4" },
    { id: 4, video: "/animations/work4.mp4" },
    { id: 5, video: "/animations/work5.mp4" },
    { id: 6, video: "/animations/work6.mp4" },
    { id: 7, video: "/animations/work7.mp4" },
    { id: 8, video: "/animations/work8.mp4" },
];

function VideoCard({ video, index }: { video: string; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: "100px" }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible && isLoaded) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible, isLoaded]);

    return (
        <motion.div
            className="flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-background/50 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Placeholder while loading */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/5 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-muted/30 border-t-primary rounded-full animate-spin" />
                </div>
            )}

            <video
                ref={videoRef}
                src={video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsLoaded(true)}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Work number badge */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                Work {index + 1}
            </div>
        </motion.div>
    );
}

export function Works() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="works" className="section overflow-hidden">
            <div className="container mb-12">
                <Reveal>
                    <p className="text-small mb-4">Our Work</p>
                </Reveal>
                <h2 className="text-headline">
                    <TextReveal text="Creative" delay={0.2} />
                    <br />
                    <TextReveal text="Showcase." delay={0.4} />
                </h2>
            </div>

            {/* Marquee Container */}
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div
                    ref={marqueeRef}
                    className="flex gap-6 py-4"
                    style={{
                        animation: `marquee 60s linear infinite`,
                        animationPlayState: isHovered ? "paused" : "running",
                    }}
                >
                    {/* First set */}
                    {works.map((work, index) => (
                        <VideoCard key={`first-${work.id}`} video={work.video} index={index} />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {works.map((work, index) => (
                        <VideoCard key={`second-${work.id}`} video={work.video} index={index} />
                    ))}
                </div>
            </div>

        </section>
    );
}
