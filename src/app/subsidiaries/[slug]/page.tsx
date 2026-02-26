"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Trophy, Target, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";
import { sectors } from "@/lib/data/sectors";

const SubsidiaryPage = () => {
    const { slug } = useParams();

    // Find the subsidiary by searching through all sectors
    let foundSector = null;
    let subsidiary = null;

    for (const sector of sectors) {
        const sub = sector.subsidiaries.find((s) => s.slug === slug);
        if (sub) {
            foundSector = sector;
            subsidiary = sub;
            break;
        }
    }

    if (!subsidiary || !foundSector) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-warm-platinum px-4">
                <h1 className="text-4xl font-black text-navy mb-6 uppercase tracking-tighter">Subsidiary Not Found</h1>
                <Link
                    href="/"
                    className="navy-gradient text-platinum px-8 py-4 rounded-xl font-bold flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Back to Homepage
                </Link>
            </div>
        );
    }

    const themeColor = foundSector.color;

    return (
        <main className="min-h-screen bg-warm-platinum pb-32">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden bg-navy">
                <div className="absolute inset-0">
                    <Image
                        src="/images/nigerian_commerce_cityscape_1772059769112.png"
                        alt={subsidiary.name}
                        fill
                        className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
                        priority
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <Link
                            href={`/sectors/${foundSector.slug}`}
                            className="inline-flex items-center gap-2 text-platinum/50 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.4em] mb-4"
                        >
                            <ArrowLeft size={14} /> Back to {foundSector.title}
                        </Link>

                        <div className="space-y-2">
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                className="h-1 bg-current block mb-6"
                                style={{ color: themeColor }}
                            ></motion.span>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] max-w-4xl">
                                {subsidiary.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-platinum/70 font-medium max-w-2xl mt-8">
                                {subsidiary.description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20">
                    <foundSector.icon size={500} className="text-white absolute -top-20 -right-20 transform rotate-12" />
                </div>
            </section>

            {/* Overview Section */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Summary & Stats */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-light p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-navy/5">
                                        <foundSector.icon size={32} style={{ color: themeColor }} />
                                    </div>
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-navy/40">Division Overview</h2>
                                </div>

                                <p className="text-2xl md:text-3xl text-navy leading-snug font-bold mb-12 italic">
                                    "{subsidiary.longDescription}"
                                </p>

                                {subsidiary.stats && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-navy/5">
                                        {subsidiary.stats.map((stat, i) => (
                                            <div key={i} className="space-y-1">
                                                <p className="text-4xl font-black tracking-tighter" style={{ color: themeColor }}>
                                                    {stat.value}
                                                </p>
                                                <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {subsidiary.features?.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-8 rounded-[2.5rem] border border-navy/5 hover:border-gold/20 transition-all flex flex-col gap-6 group shadow-sm hover:shadow-xl"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={24} style={{ color: themeColor }} />
                                        </div>
                                        <h3 className="text-xl font-black text-navy uppercase tracking-tight">{feature}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Lateral Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="navy-gradient p-12 rounded-[3.5rem] text-platinum shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between"
                            >
                                <div className="space-y-12">
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-50">Strategic Mandate</h3>
                                        <h4 className="text-3xl font-black uppercase leading-none">Global Standards. Local Impact.</h4>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { icon: Target, title: "Mission Driven", desc: "Aligning with national development goals." },
                                            { icon: Trophy, title: "Excellence", desc: "Zero-compromise on quality and safety." },
                                            { icon: BarChart3, title: "Results", desc: "Data-backed operational performance." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="shrink-0">
                                                    <item.icon size={20} style={{ color: themeColor }} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black uppercase tracking-tight">{item.title}</p>
                                                    <p className="text-xs opacity-50 font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs mt-12 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                                    style={{ backgroundColor: themeColor, color: foundSector.secondaryColor }}
                                >
                                    Contact Business Office
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SubsidiaryPage;
