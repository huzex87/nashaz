"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Trophy, BarChart3 } from "lucide-react";
import Link from "next/link";
import { sectors } from "@/lib/data/sectors";
import ProjectGallery from "@/components/subsidiaries/ProjectGallery";

const SubsidiaryPage = () => {
    const { slug } = useParams();

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
                    href="/#sectors"
                    className="navy-gradient text-platinum px-8 py-4 rounded-xl font-inter font-bold flex items-center gap-2 tracking-wide text-sm"
                >
                    <ArrowLeft size={18} /> Back to Homepage
                </Link>
            </div>
        );
    }

    const themeColor = foundSector.color;
    const nameParts = subsidiary.name.split(" ");
    const nameLead = nameParts.slice(0, -1).join(" ");
    const nameTail = nameParts.slice(-1).join(" ");

    return (
        <main className="min-h-screen bg-warm-platinum overflow-x-hidden">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section
                className="relative min-h-[58vh] sm:min-h-[66vh] flex items-end pb-14 sm:pb-20 lg:pb-24 overflow-hidden"
                style={{ backgroundColor: foundSector.secondaryColor }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 80% 8%, ${themeColor}59 0px, transparent 55%), radial-gradient(circle at 0% 100%, ${themeColor}26 0px, transparent 45%)`,
                    }}
                ></div>
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none hidden sm:block" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
                <div className="absolute -top-16 -right-16 sm:top-4 sm:right-6 opacity-[0.08] pointer-events-none">
                    <foundSector.icon className="w-[220px] h-[220px] sm:w-[400px] sm:h-[400px]" style={{ color: themeColor }} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-5 sm:space-y-7"
                    >
                        <Link
                            href={`/sectors/${foundSector.slug}`}
                            className="inline-flex items-center gap-2 text-platinum/60 hover:text-white transition-colors font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                        >
                            <ArrowLeft size={14} /> Back to {foundSector.title}
                        </Link>
                        <span className="h-1 w-14 block rounded-full" style={{ backgroundColor: themeColor }}></span>
                        <h1 className="font-display text-[2.5rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[6.5rem] text-platinum tracking-[0.02em] sm:leading-[0.85] max-w-4xl">
                            {nameLead}{" "}
                            <span style={{ color: themeColor }}>{nameTail}</span>
                        </h1>
                        <p className="font-inter text-base sm:text-xl text-platinum/70 font-medium max-w-2xl">
                            {subsidiary.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Overview + stat strip ───────────────────────────── */}
            <section className="relative z-20 -mt-8 sm:-mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-light rounded-2xl sm:rounded-[2.5rem] border border-navy/5 shadow-xl overflow-hidden"
                    >
                        <div className="p-7 sm:p-12 lg:p-16">
                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${themeColor}1A` }}>
                                    <foundSector.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: themeColor }} />
                                </div>
                                <span className="font-inter text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-navy/40">Division Overview</span>
                            </div>
                            <p className="font-inter text-lg sm:text-2xl lg:text-3xl text-navy/80 leading-relaxed font-semibold italic max-w-4xl">
                                &ldquo;{subsidiary.longDescription}&rdquo;
                            </p>
                        </div>
                        {subsidiary.stats && subsidiary.stats.length > 0 && (
                            <div className="grid grid-cols-2 border-t border-navy/5">
                                {subsidiary.stats.map((stat, i) => (
                                    <div key={i} className={`p-6 sm:p-8 lg:p-10 ${i < subsidiary.stats!.length - 1 ? "border-r border-navy/5" : ""}`}>
                                        <p className="font-display text-3xl sm:text-5xl tracking-[0.02em]" style={{ color: themeColor }}>{stat.value}</p>
                                        <p className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-navy/40 font-semibold mt-2">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ── Capabilities ────────────────────────────────────── */}
            {subsidiary.features && subsidiary.features.length > 0 && (
                <section className="py-16 sm:py-24 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-[0.04em] mb-8 sm:mb-12">
                            Core <span style={{ color: themeColor }}>Capabilities.</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {subsidiary.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[1.75rem] border border-navy/5 hover:border-navy/15 hover:shadow-xl transition-all flex items-center gap-5"
                                >
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${themeColor}1A` }}>
                                        <CheckCircle2 size={22} style={{ color: themeColor }} />
                                    </div>
                                    <h3 className="font-display text-lg sm:text-2xl text-navy tracking-[0.04em]">{feature}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Flagship Projects ───────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProjectGallery
                    projects={subsidiary.projects || []}
                    themeColor={themeColor}
                    subsidiaryName={subsidiary.name}
                />
            </div>

            {/* ── Mandate + CTA band ──────────────────────────────── */}
            <section className="py-16 sm:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden p-8 sm:p-14 lg:p-20"
                        style={{ backgroundColor: foundSector.secondaryColor }}
                    >
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 88% 15%, ${themeColor}4D 0px, transparent 55%)` }}></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="space-y-6 sm:space-y-8">
                                <div className="space-y-2">
                                    <span className="font-inter text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]" style={{ color: themeColor }}>Strategic Mandate</span>
                                    <h2 className="font-display text-3xl sm:text-5xl text-platinum tracking-[0.03em] leading-[0.95]">Global Standards.<br />Local Impact.</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                                    {[
                                        { icon: Target, title: "Mission Driven", desc: "Aligned to national development goals." },
                                        { icon: Trophy, title: "Excellence", desc: "Zero-compromise on quality and safety." },
                                        { icon: BarChart3, title: "Results", desc: "Data-backed operational performance." },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <item.icon size={22} style={{ color: themeColor }} />
                                            <p className="font-inter text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-platinum">{item.title}</p>
                                            <p className="font-inter text-[11px] sm:text-xs text-platinum/50 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:justify-self-end w-full lg:max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-[2rem] p-7 sm:p-10 space-y-5">
                                <h3 className="font-display text-2xl sm:text-3xl text-platinum tracking-[0.04em]">Engage this division</h3>
                                <p className="font-inter text-platinum/60 text-sm font-medium leading-relaxed">Discuss partnerships, investment, and services with the {subsidiary.name} team.</p>
                                <Link
                                    href={`/contact?sector=${encodeURIComponent(foundSector.title)}&color=${encodeURIComponent(themeColor)}`}
                                    className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-inter font-bold uppercase tracking-[0.15em] text-[11px] sm:text-xs shadow-xl hover:scale-[1.02] active:scale-95 transition-transform"
                                    style={{ backgroundColor: themeColor, color: foundSector.secondaryColor }}
                                >
                                    Contact Office
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SubsidiaryPage;
