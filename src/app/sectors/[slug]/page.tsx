"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ChevronRight, CheckCircle2, Globe, ShieldCheck, Users2 } from "lucide-react";
import Link from "next/link";
import { sectors } from "@/lib/data/sectors";


const SectorPage = () => {
    const { slug } = useParams();

    const sector = sectors.find((s) => s.slug === slug);

    if (!sector) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-warm-platinum px-4">
                <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6 tracking-[0.04em]">Sector Not Found</h1>
                <Link
                    href="/"
                    className="navy-gradient text-platinum px-8 py-4 rounded-xl font-inter font-bold flex items-center gap-2 tracking-wide text-sm"
                >
                    <ArrowLeft size={18} /> Back to Homepage
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-warm-platinum pb-16 sm:pb-24 lg:pb-32">
            {/* Header / Hero */}
            <section className="relative h-[50vh] sm:h-[60vh] flex items-end pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-navy">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/nigerian_commerce_cityscape_1772059769112.png"
                        alt={sector.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-platinum/60 hover:text-white transition-colors font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4"
                        >
                            <ArrowLeft size={14} /> Back to Group
                        </Link>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <div
                                className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shrink-0"
                                style={{ backgroundColor: sector.color, color: sector.secondaryColor }}
                            >
                                <sector.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-platinum tracking-[0.04em] leading-[0.9] sm:leading-[0.85]">
                                {sector.title.split(' ')[0]} <br className="hidden sm:block" />
                                <span style={{ color: sector.color }}>{sector.title.split(' ').slice(1).join(' ') || "Solutions"}</span>
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative -mt-10 sm:-mt-20 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

                        {/* Left: Deep Dive */}
                        <div className="lg:col-span-8 space-y-8 sm:space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="glass-light p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] border border-white/20 shadow-xl"
                            >
                                <h2 className="font-display text-3xl sm:text-4xl text-navy mb-6 sm:mb-8 tracking-[0.06em]">Sector Vision</h2>
                                <p className="font-inter text-lg sm:text-2xl text-navy/70 leading-relaxed font-semibold mb-8 sm:mb-10">
                                    {sector.fullDescription}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-navy/5">
                                    {[
                                        { icon: ShieldCheck, label: "Compliance", val: "Global Std." },
                                        { icon: Users2, label: "Engagement", val: "Stakeholder" },
                                        { icon: Globe, label: "Reach", val: "Pan-Nigeria" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                                            <item.icon style={{ color: sector.color }} size={24} className="shrink-0" />
                                            <div>
                                                <p className="font-display text-xl sm:text-2xl text-navy tracking-[0.04em]">{item.val}</p>
                                                <p className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-navy/40 font-semibold">{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Subsidiaries */}
                            <div className="space-y-6 sm:space-y-8">
                                <h2 className="font-display text-4xl sm:text-5xl text-navy tracking-[0.04em] px-2">
                                    Our <span style={{ color: sector.color }}>Subsidiaries.</span>
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                    {sector.subsidiaries.map((sub, i) => (
                                        <Link key={sub.slug} href={`/subsidiaries/${sub.slug}`}>
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="group glass p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-navy/5 hover:border-navy/15 transition-all flex items-center justify-between gap-4"
                                            >
                                                <div className="flex items-center gap-4 sm:gap-6">
                                                    <div
                                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy/5 flex items-center justify-center group-hover:scale-110 transition-all shrink-0"
                                                    >
                                                        <CheckCircle2 size={24} style={{ color: sector.color }} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-display text-xl sm:text-2xl text-navy tracking-[0.04em]">{sub.name}</h3>
                                                        <p className="font-inter text-navy/50 font-medium text-xs sm:text-sm line-clamp-1 sm:line-clamp-none">{sub.description}</p>
                                                    </div>
                                                </div>
                                                <ChevronRight className="text-navy/20 group-hover:translate-x-1 transition-all shrink-0" size={24} style={{ color: sector.color }} />
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar / Stats */}
                        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="navy-gradient p-8 sm:p-10 rounded-2xl sm:rounded-[3rem] text-platinum shadow-2xl relative overflow-hidden group"
                            >
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full group-hover:opacity-20 transition-all"
                                    style={{ backgroundColor: sector.color }}
                                ></div>
                                <div className="relative z-10 space-y-8 sm:space-y-10">
                                    <h3 className="font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-platinum/50">Performance Track</h3>
                                    <div className="space-y-6 sm:space-y-8">
                                        {[
                                            { label: "Operational Excellence", val: "99%" },
                                            { label: "Project Success Rate", val: "100%" },
                                            { label: "Growth Index", val: "High" },
                                        ].map((stat, i) => (
                                            <div key={i} className="border-b border-platinum/10 pb-4 sm:pb-6 last:border-0 last:pb-0">
                                                <p className="font-display text-4xl sm:text-5xl tracking-[0.04em]" style={{ color: sector.color }}>{stat.val}</p>
                                                <p className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mt-1 sm:mt-2">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/contact?sector=${encodeURIComponent(sector.title)}&color=${encodeURIComponent(sector.color)}`}
                                        className="w-full py-4 rounded-xl font-inter font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center"
                                        style={{ backgroundColor: sector.color, color: sector.secondaryColor }}
                                    >
                                        Connect Office
                                    </Link>
                                </div>
                            </motion.div>

                            <div className="glass-light p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-navy/5">
                                <h4 className="font-inter text-navy font-semibold uppercase text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] mb-4">Market Focus</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Domestic Growth", "Infrastructure", "Export Ready", "Innovation"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-navy/5 rounded-full font-inter text-[9px] sm:text-[10px] font-semibold text-navy/60 uppercase tracking-[0.12em] sm:tracking-[0.15em] border border-navy/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SectorPage;
