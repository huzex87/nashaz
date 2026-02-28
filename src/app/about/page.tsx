"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Gem, ArrowRight, ShieldCheck, Zap, Globe2 } from "lucide-react";
import LegacyTimeline from "@/components/about/LegacyTimeline";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-warm-platinum pt-32 pb-32">
            {/* Mission & Vision Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.4em] text-[10px] !font-bold">The Institution</h2>
                            <h1 className="font-display text-7xl md:text-9xl text-navy tracking-[0.04em] leading-none text-balance">
                                Redefining <br />
                                <span className="text-gold-gradient">Standards.</span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy">
                                    <Target size={28} />
                                </div>
                                <h3 className="font-display text-2xl tracking-[0.06em] text-navy">The Mission</h3>
                                <p className="font-inter text-sm text-navy/50 font-medium leading-relaxed">
                                    To drive Nigeria&apos;s industrial evolution through strategic investments and gold-standard operational excellence across vital economic sectors.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy">
                                    <Eye size={28} />
                                </div>
                                <h3 className="font-display text-2xl tracking-[0.06em] text-navy">The Vision</h3>
                                <p className="font-inter text-sm text-navy/50 font-medium leading-relaxed">
                                    To be the preeminent African conglomerate, recognized globally for transformative impact and an unwavering commitment to sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-3xl">
                        <Image
                            src="/images/nigerian_commerce_cityscape_1772059769112.png"
                            alt="Corporate Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-navy opacity-40"></div>
                        <div className="absolute inset-0 p-16 flex flex-col justify-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="glass-dark p-10 rounded-[2.5rem] border border-white/10"
                            >
                                <p className="font-display text-3xl text-white tracking-[0.06em]">&quot;Integrity is the bedrock of our strategy.&quot;</p>
                                <p className="font-inter text-gold font-semibold uppercase tracking-[0.2em] text-[10px] mt-4">Founded 2010</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="navy-gradient py-32 mb-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="font-inter text-gold font-bold uppercase tracking-[0.4em] text-[10px] !font-bold">Strategic Ethos</h2>
                        <h3 className="font-display text-6xl text-white tracking-[0.06em]">Core Values.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: ShieldCheck, title: "Trust", desc: "Building lasting legacies through absolute transparency and ethical practice." },
                            { icon: Zap, title: "Innovation", desc: "Forging ahead with disruptive thinking and high-tech industrial solutions." },
                            { icon: Globe2, title: "Impact", desc: "Measuring success through the prosperity of the communities we serve." }
                        ].map((item, i) => (
                            <div key={i} className="glass-light p-12 rounded-[3.5rem] border border-white/5 space-y-6 group hover:border-gold/30 transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="font-display text-2xl text-white tracking-[0.08em]">{item.title}</h4>
                                <p className="font-inter text-sm text-platinum/50 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Historical Timeline */}
            <LegacyTimeline />

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="glass-light p-16 rounded-[4rem] border border-navy/5 shadow-3xl flex flex-col items-center text-center space-y-10">
                    <h3 className="font-display text-5xl md:text-6xl text-navy tracking-[0.04em] max-w-2xl">
                        Be Part of the <br />
                        <span className="text-gold-gradient">Next Chapter.</span>
                    </h3>
                    <Link
                        href="/careers"
                        className="navy-gradient text-platinum px-12 py-6 rounded-2xl font-inter font-bold uppercase tracking-[0.2em] text-xs shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
                    >
                        Join the Group <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
