"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Trophy, Target, BarChart3 } from "lucide-react";
import Link from "next/link";
import { sectors } from "@/lib/data/sectors";
import ProjectGallery from "@/components/subsidiaries/ProjectGallery";

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
                <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6 tracking-[0.04em]">Subsidiary Not Found</h1>
                <Link
                    href="/"
                    className="navy-gradient text-platinum px-8 py-4 rounded-xl font-inter font-bold flex items-center gap-2 tracking-wide text-sm"
                >
                    <ArrowLeft size={18} /> Back to Homepage
                </Link>
            </div>
        );
    }

    const themeColor = foundSector.color;

    return (
        <main className="min-h-screen bg-warm-platinum pb-16 sm:pb-24 lg:pb-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] sm:h-[70vh] flex items-end pb-12 sm:pb-20 lg:pb-24 overflow-hidden bg-navy">
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
                        className="space-y-6 sm:space-y-8"
                    >
                        <Link
                            href={`/sectors/${foundSector.slug}`}
                            className="inline-flex items-center gap-2 text-platinum/50 hover:text-white transition-colors font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4"
                        >
                            <ArrowLeft size={14} /> Back to {foundSector.title}
                        </Link>

                        <div className="space-y-3 sm:space-y-4">
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "80px" }}
                                className="h-1 bg-current block mb-4 sm:mb-6"
                                style={{ color: themeColor }}
                            ></motion.span>
                            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-[0.04em] leading-[0.9] sm:leading-[0.85] max-w-4xl text-balance">
                                {subsidiary.name.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block" />
                                <span style={{ color: themeColor }}>{subsidiary.name.split(' ').slice(-1)}</span>
                            </h1>
                            <p className="font-inter text-lg sm:text-xl md:text-2xl text-platinum/70 font-medium max-w-2xl mt-4 sm:mt-8 leading-relaxed">
                                {subsidiary.description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements - Hidden on small mobile */}
                <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-10 sm:opacity-20 hidden sm:block">
                    <foundSector.icon size={500} className="text-white absolute -top-20 -right-20 transform rotate-12" />
                </div>
            </section>

            {/* Overview Section */}
            <section className="relative -mt-10 sm:-mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Summary & Stats */}
                        <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-light p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] border border-white/20 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                    <div className="p-3 rounded-xl sm:rounded-2xl bg-navy/5">
                                        <foundSector.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: themeColor }} />
                                    </div>
                                    <h2 className="font-inter text-[10px] sm:text-sm font-semibold uppercase tracking-[0.3em] text-navy/40">Division Overview</h2>
                                </div>

                                <p className="font-inter text-xl sm:text-2xl md:text-3xl text-navy leading-snug font-bold mb-8 sm:mb-12 italic">
                                    &quot;{subsidiary.longDescription}&quot;
                                </p>

                                {subsidiary.stats && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-navy/5">
                                        {subsidiary.stats.map((stat, i) => (
                                            <div key={i} className="space-y-1">
                                                <p className="font-display text-4xl sm:text-5xl tracking-[0.04em]" style={{ color: themeColor }}>
                                                    {stat.value}
                                                </p>
                                                <p className="font-inter text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-navy/40">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                {subsidiary.features?.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-[2.5rem] border border-navy/5 hover:border-navy/15 transition-all flex flex-col gap-4 sm:gap-6 group shadow-sm hover:shadow-xl"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                            <CheckCircle2 size={24} style={{ color: themeColor }} />
                                        </div>
                                        <h3 className="font-display text-xl sm:text-2xl text-navy tracking-[0.04em]">{feature}</h3>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Project Gallery Integration */}
                            <ProjectGallery
                                projects={subsidiary.projects || []}
                                themeColor={themeColor}
                                subsidiaryName={subsidiary.name}
                            />
                        </div>

                        {/* Lateral Sidebar */}
                        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="navy-gradient p-8 sm:p-12 rounded-2xl sm:rounded-[3.5rem] text-platinum shadow-2xl relative overflow-hidden group min-h-[400px] flex flex-col justify-between"
                            >
                                <div className="space-y-8 sm:space-y-12">
                                    <div className="space-y-2">
                                        <h3 className="font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-50">Strategic Mandate</h3>
                                        <h4 className="font-display text-3xl sm:text-4xl text-platinum tracking-[0.04em] leading-tight">Global Standards. Local Impact.</h4>
                                    </div>

                                    <div className="space-y-5 sm:space-y-6">
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
                                                    <p className="font-inter text-xs sm:text-sm font-bold uppercase tracking-[0.1em]">{item.title}</p>
                                                    <p className="font-inter text-[10px] sm:text-xs opacity-50 font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href={`/contact?sector=${foundSector.title}&color=${encodeURIComponent(themeColor)}`}
                                    className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-inter font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs mt-8 sm:mt-12 transition-all shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center"
                                    style={{ backgroundColor: themeColor, color: foundSector.secondaryColor }}
                                >
                                    Contact Business Office
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SubsidiaryPage;
