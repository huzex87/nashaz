"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Gem, ArrowRight, ShieldCheck, Zap, Globe2 } from "lucide-react";
import LegacyTimeline from "@/components/about/LegacyTimeline";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-warm-platinum pt-24 pb-16 sm:pt-32 sm:pb-32">
            {/* Mission & Vision Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
                    <div className="space-y-8 sm:space-y-12">
                        <div className="space-y-4">
                            <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] !font-bold">The Institution</h2>
                            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-navy tracking-[0.04em] leading-none text-balance">
                                Redefining <br className="hidden sm:block" />
                                <span className="text-gold-gradient">Standards.</span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-navy/5 flex items-center justify-center text-navy font-bold">
                                    <Target size={24} />
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl tracking-[0.06em] text-navy">The Mission</h3>
                                <p className="font-inter text-xs sm:text-sm text-navy/50 font-medium leading-relaxed">
                                    To drive Nigeria&apos;s industrial evolution through strategic investments and gold-standard operational excellence across vital economic sectors.
                                </p>
                            </div>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-navy/5 flex items-center justify-center text-navy font-bold">
                                    <Eye size={24} />
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl tracking-[0.06em] text-navy">The Vision</h3>
                                <p className="font-inter text-xs sm:text-sm text-navy/50 font-medium leading-relaxed">
                                    To be the preeminent African conglomerate, recognized globally for transformative impact and an unwavering commitment to sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-3xl">
                        <Image
                            src="/images/nigerian_commerce_cityscape_1772059769112.png"
                            alt="Corporate Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-navy opacity-40"></div>
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-16 flex flex-col justify-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="glass-dark p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] border border-white/10"
                            >
                                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-[0.06em]">&quot;Integrity is the bedrock of our strategy.&quot;</p>
                                <p className="font-inter text-gold font-semibold uppercase tracking-[0.2em] text-[8px] sm:text-[10px] mt-3 sm:mt-4">Founded 2010</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="navy-gradient py-16 sm:py-24 lg:py-32 mb-16 sm:mb-24 lg:mb-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4">
                        <h2 className="font-inter text-gold font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] !font-bold">Strategic Ethos</h2>
                        <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-[0.06em]">Core Values.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        {[
                            { icon: ShieldCheck, title: "Trust", desc: "Building lasting legacies through absolute transparency and ethical practice." },
                            { icon: Zap, title: "Innovation", desc: "Forging ahead with disruptive thinking and high-tech industrial solutions." },
                            { icon: Globe2, title: "Impact", desc: "Measuring success through the prosperity of the communities we serve." }
                        ].map((item, i) => (
                            <div key={i} className="glass-light p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[3rem] lg:rounded-[3.5rem] border border-white/5 space-y-6 group hover:border-gold/30 transition-all">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="font-display text-xl sm:text-2xl text-white tracking-[0.08em]">{item.title}</h4>
                                <p className="font-inter text-xs sm:text-sm text-platinum/50 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Historical Timeline */}
            <LegacyTimeline />

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
                <div className="glass-light p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] border border-navy/5 shadow-3xl flex flex-col items-center text-center space-y-8 sm:space-y-10">
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy tracking-[0.04em] max-w-2xl leading-tight">
                        Be Part of the <br className="hidden sm:block" />
                        <span className="text-gold-gradient">Next Chapter.</span>
                    </h3>
                    <Link
                        href="/careers"
                        className="navy-gradient text-platinum px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-inter font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs shadow-2xl hover:scale-105 transition-all flex items-center gap-3 sm:gap-4"
                    >
                        Join the Group <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
