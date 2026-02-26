"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden light-mesh">
            {/* Dynamic Background Elements - Softer for light theme */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-10"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                                <span className="text-gold text-[10px] uppercase font-black tracking-[0.3em]">
                                    The Standard of Excellence
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-black text-navy leading-[0.95] tracking-tighter text-balance uppercase">
                                Powering <span className="text-gold-gradient">Commerce.</span><br />
                                Delivering <span className="italic font-light opacity-80">Solutions.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-navy/60 font-medium leading-relaxed max-w-2xl text-balance">
                                Building a dependable business ecosystem that meets the strategic needs of individuals, businesses, and institutions across the Nigerian landscape.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <button className="navy-gradient text-platinum px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-navy/20 flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-95">
                                Explore Subsidiaries
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </button>
                            <button className="glass-light text-navy px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group border border-navy/5 hover:bg-navy/5 active:scale-95">
                                Corporate Video
                                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold transition-colors">
                                    <Play className="text-navy group-hover:text-navy ml-0.5" size={14} fill="currentColor" />
                                </div>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-12 pt-12 border-t border-gold/10">
                            {[
                                { label: "Key Sectors", value: "09" },
                                { label: "Years of Trust", value: "20+" },
                                { label: "Integrity Rate", value: "100%" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                >
                                    <p className="text-3xl font-black text-navy tracking-tighter">{stat.value}</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold opacity-80 mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-20 aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full"
                        >
                            <div className="absolute inset-0 bg-gold/20 rounded-[3rem] translate-x-4 translate-y-4 blur-3xl opacity-30"></div>
                            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-gold/10 shadow-2xl group">
                                <Image
                                    src="/images/nashaz_hero_corporate_1772037556464.png"
                                    alt="NAHSAZ Group Corporate Headquarters"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-60"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 glass-light p-6 rounded-2xl border border-gold/10 backdrop-blur-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl navy-gradient text-platinum flex items-center justify-center shrink-0 shadow-lg">
                                            <Building2 size={24} />
                                        </div>
                                        <div>
                                            <p className="text-navy font-bold text-lg leading-tight uppercase tracking-tight">Abuja Headquarters</p>
                                            <p className="text-gold font-bold text-xs uppercase tracking-widest mt-1 opacity-80">Maitama District</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Geometric Polish */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 border border-gold/10 rounded-full opacity-20 animate-spin-slow"></div>
                    </div>

                </div>
            </div>

            {/* Corporate Label */}
            <div className="absolute -bottom-24 -left-20 text-[20vw] font-black text-navy/[0.02] select-none pointer-events-none tracking-tighter">
                NAHSAZ
            </div>
        </section>
    );
};

// Helper component for Building2 icon (re-defining since it was used but not imported correctly in thought, wait I should import it)
import { Building2 } from "lucide-react";

export default Hero;
