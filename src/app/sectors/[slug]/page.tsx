"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, ShieldCheck, Globe, Users2 } from "lucide-react";
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
                    href="/#sectors"
                    className="navy-gradient text-platinum px-8 py-4 rounded-xl font-inter font-bold flex items-center gap-2 tracking-wide text-sm"
                >
                    <ArrowLeft size={18} /> Back to Portfolio
                </Link>
            </div>
        );
    }

    // Split the title on " & " so the lead reads in platinum and the remainder in the sector colour.
    const [titleLead, ...titleRest] = sector.title.split(" & ");
    const titleTail = titleRest.length ? `& ${titleRest.join(" & ")}` : "";

    return (
        <main className="min-h-screen bg-warm-platinum overflow-x-hidden">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section
                className="relative min-h-[62vh] sm:min-h-[68vh] flex items-end pb-14 sm:pb-20 lg:pb-24 overflow-hidden"
                style={{ backgroundColor: sector.secondaryColor }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 82% 5%, ${sector.color}59 0px, transparent 55%), radial-gradient(circle at 0% 100%, ${sector.color}26 0px, transparent 45%)`,
                    }}
                ></div>
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none hidden sm:block" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
                <div className="absolute -top-16 -right-16 sm:top-0 sm:right-4 opacity-[0.08] pointer-events-none">
                    <sector.icon className="w-[220px] h-[220px] sm:w-[420px] sm:h-[420px]" style={{ color: sector.color }} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-5 sm:space-y-7"
                    >
                        <Link
                            href="/#sectors"
                            className="inline-flex items-center gap-2 text-platinum/60 hover:text-white transition-colors font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                        >
                            <ArrowLeft size={14} /> Back to Portfolio
                        </Link>
                        <div className="flex items-start gap-4 sm:gap-6">
                            <div
                                className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shrink-0 mt-2 sm:mt-3"
                                style={{ backgroundColor: sector.color, color: sector.secondaryColor }}
                            >
                                <sector.icon className="w-6 h-6 sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="font-display text-[2.6rem] leading-[0.92] sm:text-7xl md:text-8xl lg:text-[7.5rem] text-platinum tracking-[0.02em] sm:leading-[0.85]">
                                {titleLead}{" "}
                                {titleTail && <span style={{ color: sector.color }}>{titleTail}</span>}
                            </h1>
                        </div>
                        <p className="font-inter text-base sm:text-xl text-platinum/70 font-medium max-w-2xl">
                            {sector.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Vision + Stat strip ─────────────────────────────── */}
            <section className="relative z-20 -mt-8 sm:-mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-light rounded-2xl sm:rounded-[2.5rem] border border-navy/5 shadow-xl overflow-hidden"
                    >
                        <div className="p-7 sm:p-12 lg:p-16">
                            <span
                                className="inline-block font-inter text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-4 sm:mb-6"
                                style={{ color: sector.color }}
                            >
                                Sector Vision
                            </span>
                            <p className="font-inter text-lg sm:text-2xl lg:text-3xl text-navy/80 leading-relaxed font-semibold max-w-4xl">
                                {sector.fullDescription}
                            </p>
                        </div>
                        {/* Stat strip */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-navy/5">
                            {sector.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`p-6 sm:p-8 lg:p-10 ${i < sector.stats.length - 1 ? "border-b sm:border-b-0 sm:border-r border-navy/5" : ""}`}
                                >
                                    <p className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[0.02em]" style={{ color: sector.color }}>{stat.value}</p>
                                    <p className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-navy/40 font-semibold mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Capabilities ────────────────────────────────────── */}
            <section className="py-16 sm:py-24 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-[0.04em]">
                            Areas of <span style={{ color: sector.color }}>Focus.</span>
                        </h2>
                        <div className="flex items-center gap-3">
                            {[ShieldCheck, Users2, Globe].map((Icon, i) => (
                                <div key={i} className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center">
                                    <Icon size={16} style={{ color: sector.color }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {sector.marketFocus.map((focus, i) => (
                            <motion.div
                                key={focus}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="group relative bg-white rounded-2xl sm:rounded-[1.75rem] border border-navy/5 p-6 sm:p-8 hover:border-navy/15 hover:shadow-xl transition-all overflow-hidden"
                            >
                                <div
                                    className="absolute -right-6 -top-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: `${sector.color}55` }}
                                ></div>
                                <span className="font-display text-2xl sm:text-3xl tracking-[0.06em] text-navy/15">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-display text-lg sm:text-xl text-navy tracking-[0.04em] mt-4 group-hover:text-navy transition-colors relative z-10">
                                    {focus}
                                </h3>
                                <div className="mt-5 h-0.5 w-8 group-hover:w-14 transition-all duration-500" style={{ backgroundColor: sector.color }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Subsidiaries ────────────────────────────────────── */}
            <section className="pb-16 sm:pb-24 lg:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-[0.04em] mb-8 sm:mb-12">
                        Our <span style={{ color: sector.color }}>Subsidiaries.</span>
                    </h2>
                    <div className={`grid grid-cols-1 gap-5 sm:gap-8 ${sector.subsidiaries.length > 1 ? "lg:grid-cols-2" : ""}`}>
                        {sector.subsidiaries.map((sub, i) => {
                            const solo = sector.subsidiaries.length === 1;
                            return (
                                <Link key={sub.slug} href={`/subsidiaries/${sub.slug}`} className="group block">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className={`relative h-full glass-light rounded-2xl sm:rounded-[2rem] border border-navy/5 p-7 sm:p-10 hover:border-navy/15 hover:shadow-2xl transition-all ${solo ? "flex flex-col lg:flex-row lg:items-center lg:gap-12" : "flex flex-col"}`}
                                    >
                                        <div className={solo ? "lg:flex-1" : ""}>
                                            <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
                                                <div
                                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                                                    style={{ backgroundColor: `${sector.color}1A` }}
                                                >
                                                    <sector.icon size={26} style={{ color: sector.color }} />
                                                </div>
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 group-hover:text-navy group-hover:border-navy/30 transition-all lg:hidden">
                                                    <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                            <h3 className="font-display text-2xl sm:text-3xl text-navy tracking-[0.04em] mb-3">{sub.name}</h3>
                                            <p className="font-inter text-navy/60 font-medium text-sm sm:text-base leading-relaxed mb-6 lg:mb-0 max-w-xl">{sub.description}</p>
                                        </div>
                                        {sub.stats && sub.stats.length > 0 && (
                                            <div className={`grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-navy/5 ${solo ? "lg:pt-0 lg:border-t-0 lg:border-l lg:pl-12 lg:shrink-0" : "mt-auto"}`}>
                                                {sub.stats.map((stat, j) => (
                                                    <div key={j}>
                                                        <p className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.02em]" style={{ color: sector.color }}>{stat.value}</p>
                                                        <p className="font-inter text-[9px] uppercase tracking-[0.18em] text-navy/40 font-semibold mt-1 whitespace-nowrap">{stat.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA band ────────────────────────────────────────── */}
            <section className="pb-16 sm:pb-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden p-8 sm:p-14 lg:p-20"
                        style={{ backgroundColor: sector.secondaryColor }}
                    >
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(circle at 85% 20%, ${sector.color}4D 0px, transparent 55%)` }}
                        ></div>
                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                            <div className="space-y-3 sm:space-y-4 max-w-xl">
                                <span className="font-inter text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]" style={{ color: sector.color }}>Partner With Us</span>
                                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-platinum tracking-[0.03em] leading-[0.95]">
                                    Engage the {titleLead} office.
                                </h2>
                                <p className="font-inter text-platinum/60 font-medium text-sm sm:text-base">
                                    Speak with our strategic team about partnerships, investment, and services in this sector.
                                </p>
                            </div>
                            <Link
                                href={`/contact?sector=${encodeURIComponent(sector.title)}&color=${encodeURIComponent(sector.color)}`}
                                className="shrink-0 inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-inter font-bold uppercase tracking-[0.15em] text-[11px] sm:text-xs shadow-2xl hover:scale-[1.03] active:scale-95 transition-transform"
                                style={{ backgroundColor: sector.color, color: sector.secondaryColor }}
                            >
                                Connect Office
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SectorPage;
