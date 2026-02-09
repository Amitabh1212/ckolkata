"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, TextReveal } from "@/components/animations";
import { siteConfig } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Something went wrong"
            );
        }
    };

    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <motion.img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                    alt=""
                    className="w-full h-full object-cover opacity-5"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-background/90" />
            </div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                    {/* Left */}
                    <div>
                        <Reveal>
                            <p className="text-small mb-8">Get in Touch</p>
                        </Reveal>

                        <h2 className="text-headline mb-8">
                            <TextReveal text="Let's work" delay={0.2} />
                            <br />
                            <TextReveal text="together." delay={0.4} />
                        </h2>

                        <Reveal delay={0.6}>
                            <p className="text-body max-w-sm">
                                For inquiries, collaborations, or just to say hello.
                            </p>
                        </Reveal>

                        <Reveal delay={0.8}>
                            <div className="mt-12 space-y-4">
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="block text-body link-subtle"
                                >
                                    {siteConfig.email}
                                </a>
                                <p className="text-body text-muted">{siteConfig.location}, India</p>
                            </div>
                        </Reveal>

                        {/* WhatsApp Button */}
                        <Reveal delay={1}>
                            <motion.a
                                href="https://wa.me/917667984730?text=Hi%20CCC%20Kolkata!%20I%20am%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium text-sm shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>Chat on WhatsApp</span>
                            </motion.a>
                        </Reveal>
                    </div>

                    {/* Right - Form */}
                    <Reveal delay={0.4}>
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <div className="bg-gradient-to-br from-[#25D366]/10 to-transparent border border-[#25D366]/20 rounded-2xl p-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6"
                                        >
                                            <svg className="w-8 h-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-xl font-medium text-foreground mb-4">Message Sent! 🚀</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            Thanks for reaching out to CCC Kolkata. Check your email for a confirmation message. One of our marketing experts will connect with you soon!
                                        </p>
                                        <motion.button
                                            onClick={() => setStatus("idle")}
                                            className="mt-6 text-sm text-[#25D366] hover:underline"
                                            whileHover={{ x: 5 }}
                                        >
                                            Send another message →
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({ ...formState, name: e.target.value })
                                            }
                                            className="input-clean"
                                            required
                                            disabled={status === "loading"}
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({ ...formState, email: e.target.value })
                                            }
                                            className="input-clean"
                                            required
                                            disabled={status === "loading"}
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder="Tell us about your project"
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({ ...formState, message: e.target.value })
                                            }
                                            className="input-clean resize-none"
                                            required
                                            disabled={status === "loading"}
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    {status === "error" && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-red-400 text-sm"
                                        >
                                            {errorMessage}
                                        </motion.p>
                                    )}

                                    <motion.button
                                        type="submit"
                                        className="group flex items-center gap-3 text-foreground disabled:opacity-50"
                                        whileHover={status !== "loading" ? { x: 5 } : {}}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        disabled={status === "loading"}
                                        suppressHydrationWarning
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <motion.span
                                                    className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                <span className="text-sm">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-sm border-b border-foreground pb-1 group-hover:border-primary group-hover:text-primary transition-colors duration-500">
                                                    Send Message
                                                </span>
                                                <motion.span
                                                    className="text-lg"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    →
                                                </motion.span>
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
