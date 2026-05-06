"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ─── Fullscreen modal ─────────────────────────────────────────────── */
function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play().catch(() => {});
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                style={{ maxHeight: "90vh", maxWidth: "min(90vw, 480px)", width: "100%" }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                        padding: "1.5px",
                        background: "linear-gradient(135deg, #7c3aed, #ec4899, #7c3aed)",
                        boxShadow: "0 0 60px rgba(124,58,237,0.5), 0 0 120px rgba(236,72,153,0.2)",
                    }}
                >
                    <div className="relative rounded-[22px] overflow-hidden" style={{ background: "#000" }}>
                        <video
                            ref={videoRef}
                            src={src}
                            className="w-full block"
                            style={{ maxHeight: "85vh", display: "block" }}
                            controls
                            loop
                            playsInline
                        />

                        {/* Premium close button inside video */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full text-white text-xs font-semibold transition-all duration-200"
                            style={{
                                padding: "6px 14px 6px 10px",
                                background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(236,72,153,0.9))",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                            }}
                        >
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Individual video card ────────────────────────────────────────── */
function VideoCard({
    video,
    cardKey,
    index,
    isMuted,
    onToggleSound,
    onExpand,
}: {
    video: string;
    cardKey: string;
    index: number;
    isMuted: boolean;
    onToggleSound: (key: string) => void;
    onExpand: (src: string) => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (videoRef.current) videoRef.current.load();
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.05, rootMargin: "400px" }
        );
        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isVisible) videoRef.current.play().catch(() => {});
        else videoRef.current.pause();
    }, [isVisible, isLoaded]);

    // Sync muted state from parent — only one video unmuted at a time
    useEffect(() => {
        if (videoRef.current) videoRef.current.muted = isMuted;
    }, [isMuted]);

    return (
        <div
            className="flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden relative group"
            style={{ background: "rgba(255,255,255,0.04)" }}
        >
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="w-10 h-10 border-2 border-white/10 border-t-primary rounded-full animate-spin" />
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
                preload="auto"
                onLoadedData={() => setIsLoaded(true)}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Work label */}
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                Work {index + 1}
            </div>

            {/* Sound toggle — mutes all others when turned on */}
            <button
                onClick={(e) => { e.stopPropagation(); onToggleSound(cardKey); }}
                className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" />
                        <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeLinecap="round" />
                    </svg>
                )}
            </button>

            {/* Premium expand button */}
            <button
                onClick={(e) => { e.stopPropagation(); onExpand(video); }}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{
                    padding: "1.5px",
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.6), 0 0 32px rgba(236,72,153,0.2)",
                }}
                title="Open with controls"
            >
                <span
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #6d28d9 0%, #9d22c1 60%, #be185d 100%)" }}
                >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
        </div>
    );
}

/* ─── Works section ────────────────────────────────────────────────── */
export function Works() {
    const trackRef = useRef<HTMLDivElement>(null);
    const xRef = useRef(0);
    const isDragging = useRef(false);
    const lastMouseXRef = useRef(0);
    const lastTouchXRef = useRef(0);
    const rafRef = useRef<number>(0);
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const [cursor, setCursor] = useState("grab");

    // Only one card can have sound at a time — null = all muted
    const [unmutedKey, setUnmutedKey] = useState<string | null>(null);

    const handleToggleSound = useCallback((key: string) => {
        setUnmutedKey((prev) => (prev === key ? null : key));
    }, []);

    const SPEED = 0.8;

    const getHalfWidth = useCallback(() => {
        if (!trackRef.current) return 9999;
        return trackRef.current.scrollWidth / 2;
    }, []);

    const wrapX = useCallback((x: number) => {
        const half = getHalfWidth();
        if (x <= -half) return x + half;
        if (x > 0) return x - half;
        return x;
    }, [getHalfWidth]);

    useEffect(() => {
        const step = () => {
            if (!isDragging.current) {
                xRef.current = wrapX(xRef.current - SPEED);
            }
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${xRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [wrapX]);

    const onMouseDown = (e: React.MouseEvent) => { isDragging.current = true; lastMouseXRef.current = e.clientX; setCursor("grabbing"); };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = e.clientX - lastMouseXRef.current;
        lastMouseXRef.current = e.clientX;
        xRef.current = wrapX(xRef.current + delta);
    };
    const onMouseUp = () => { isDragging.current = false; setCursor("grab"); };
    const onTouchStart = (e: React.TouchEvent) => { isDragging.current = true; lastTouchXRef.current = e.touches[0].clientX; };
    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) return;
        const delta = e.touches[0].clientX - lastTouchXRef.current;
        lastTouchXRef.current = e.touches[0].clientX;
        xRef.current = wrapX(xRef.current + delta);
    };
    const onTouchEnd = () => { isDragging.current = false; };

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
                <p className="text-white/35 text-sm mt-4">
                    Drag to browse &nbsp;·&nbsp; Hover for controls
                </p>
            </div>

            <div
                className="relative select-none"
                style={{ cursor }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to right, #0a0a0e, transparent)" }} />
                <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to left, #0a0a0e, transparent)" }} />

                <div
                    ref={trackRef}
                    className="flex gap-6 py-4 w-max"
                    style={{ willChange: "transform" }}
                >
                    {works.map((work, index) => {
                        const key = `a-${work.id}`;
                        return (
                            <VideoCard
                                key={key}
                                cardKey={key}
                                video={work.video}
                                index={index}
                                isMuted={unmutedKey !== key}
                                onToggleSound={handleToggleSound}
                                onExpand={setModalSrc}
                            />
                        );
                    })}
                    {works.map((work, index) => {
                        const key = `b-${work.id}`;
                        return (
                            <VideoCard
                                key={key}
                                cardKey={key}
                                video={work.video}
                                index={index}
                                isMuted={unmutedKey !== key}
                                onToggleSound={handleToggleSound}
                                onExpand={setModalSrc}
                            />
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {modalSrc && (
                    <VideoModal src={modalSrc} onClose={() => setModalSrc(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}
