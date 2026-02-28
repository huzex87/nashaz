"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        backgroundColor: "rgba(27, 45, 61, 0)",
                        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center overflow-hidden"
                >
                    <motion.div
                        initial={{ height: "100%" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
                        className="absolute inset-0 bg-navy z-0"
                    />
                    {/* Background mesh glow */}
                    <div className="absolute inset-0 mesh-gradient opacity-40"></div>

                    <div className="relative z-10 flex flex-col items-center gap-10">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="w-28 h-28 flex items-center justify-center relative">
                                <Image
                                    src="/images/nahsaz-logo.png"
                                    alt="NAHSAZ Group"
                                    width={112}
                                    height={112}
                                    className="object-contain brightness-0 invert"
                                    priority
                                />
                            </div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.1, 0.3]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-gold/20 rounded-full blur-3xl -z-10"
                            ></motion.div>
                        </motion.div>

                        {/* Brand Text */}
                        <div className="space-y-3 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="font-display text-5xl tracking-[0.3em] text-white"
                            >
                                NAHSAZ
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="font-inter text-[10px] tracking-[0.5em] text-white/40 uppercase font-semibold"
                            >
                                Group
                            </motion.p>

                            <div className="flex items-center gap-4 overflow-hidden h-6 pt-4">
                                {["Integrity", "Innovation", "Excellence"].map((pillar, i) => (
                                    <motion.span
                                        key={pillar}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + (i * 0.2) }}
                                        className="font-inter text-[9px] uppercase font-semibold tracking-[0.3em] text-gold/50"
                                    >
                                        {pillar}
                                        {i < 2 && <span className="ml-4 opacity-30">|</span>}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative mt-4">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                                className="absolute inset-y-0 left-0 gold-gradient"
                            ></motion.div>
                        </div>
                    </div>

                    {/* Bottom Floating Labels */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-2">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 1.5 }}
                            className="font-inter text-[8px] uppercase font-semibold tracking-[0.4em] text-platinum"
                        >
                            Establishing New Standards
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
