"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight
} from "lucide-react";

import { sectors } from "@/lib/data/sectors";
import Link from "next/link";

const Sectors = () => {
    return (
        <section id="sectors" className="py-32 bg-surface-soft relative overflow-hidden">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-navy/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#050C16 1px, transparent 1px), linear-gradient(90deg, #050C16 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Intro Section with Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs">Strategic Portfolio</h2>
                            <p className="text-5xl md:text-7xl font-black text-navy leading-[0.9] tracking-tighter uppercase">
                                Driving Growth <br />
                                Across <span className="text-gold-gradient">Nigeria.</span>
                            </p>
                        </div>
                        <p className="text-xl text-navy/60 leading-relaxed font-medium max-w-xl text-balance">
                            NAHSAZ Group operates with a commitment to excellence across 9 critical sectors, delivering integrated solutions that power national development.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="h-px w-20 bg-gold/30"></div>
                            <p className="text-navy/40 font-bold text-[10px] tracking-[0.3em] uppercase">Global Standards • Local Impact</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 bg-gold/5 rounded-[4rem] blur-[60px] opacity-40"></div>
                        <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-gold/10 shadow-[0_40px_80px_-20px_rgba(197,160,89,0.15)] bg-white/50 backdrop-blur-sm p-4">
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden group">
                                <Image
                                    src="/images/nashaz_sectors_overview_1772038030316.png"
                                    alt="NAHSAZ Group Sector Montage"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-40"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative glass-light p-10 rounded-[2.5rem] border border-gold/10 hover:border-gold/40 transition-all duration-700 hover:-translate-y-3 flex flex-col h-full hover:shadow-[0_40px_80px_-20px_rgba(197,160,89,0.2)]"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]`}></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-navy text-platinum flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl">
                                    <sector.icon className="transition-colors" size={32} />
                                </div>

                                <h3 className="text-2xl font-black text-navy mb-4 tracking-tighter group-hover:text-gold transition-all duration-300 uppercase">
                                    {sector.title}
                                </h3>

                                <p className="text-navy/50 leading-relaxed text-sm font-medium mb-12">
                                    {sector.description}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10">
                                <Link
                                    href={`/sectors/${sector.slug}`}
                                    className="inline-flex items-center gap-4 text-navy font-black text-[10px] uppercase tracking-[0.3em] group/btn"
                                >
                                    <span className="group-hover:text-gold transition-colors">Explore Sector</span>
                                    <div className="w-10 h-10 rounded-full border border-navy/5 bg-navy/5 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-navy group-hover/btn:border-gold transition-all duration-500">
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
