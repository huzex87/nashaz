"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Building2, Globe2, Target, History } from "lucide-react";

const milestones = [
    {
        year: "2010",
        title: "The Genesis",
        desc: "NAHSAZ Group established with a core focus on strategic real estate acquisitions and infrastructure consultancy in Northern Nigeria.",
        icon: Building2
    },
    {
        year: "2014",
        title: "Industrial Expansion",
        desc: "Diversification into Construction and Logistics, supporting national infrastructure projects and cross-border supply chains.",
        icon: Zap
    },
    {
        year: "2018",
        title: "Green Revolution",
        desc: "Launch of GreenField Agro, integrating mechanized farming and sustainable AgTech to enhance food security.",
        icon: Target
    },
    {
        year: "2022",
        title: "Modern Healthcare",
        desc: "Commissioning of NAHSAZ Medical Diagnostics, bridging the gap in specialist healthcare services with gold-standard diagnostics.",
        icon: Globe2
    },
    {
        year: "2026",
        title: "Royal Evolution",
        desc: "Reimagining the group as a world-class conglomerate with 9 specialized sectors and a pan-African strategic outlook.",
        icon: Award
    }
];

const LegacyTimeline = () => {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16 sm:mb-20 lg:mb-24 space-y-4">
                    <History className="text-navy/30 mb-2 sm:mb-4" size={32} />
                    <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] !font-bold">Corporate Narrative</h2>
                    <h3 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-navy tracking-[0.04em] leading-none">
                        Our <br className="hidden sm:block" />
                        <span className="text-gold-gradient">Legacy.</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy/10 to-transparent flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-navy shadow-[0_0_15px_rgba(27,45,61,0.3)] mb-4"></div>
                    </div>

                    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 sm:gap-12 md:gap-24 relative pl-12 sm:pl-0`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} space-y-3 sm:space-y-4 w-full`}>
                                    <span className="font-display text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] text-navy/5 tracking-wide block leading-none">
                                        {item.year}
                                    </span>
                                    <h4 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy tracking-[0.06em]">{item.title}</h4>
                                    <p className="font-inter text-xs sm:text-sm md:text-base text-navy/50 font-medium max-w-md mx-0 lg:mx-auto md:mx-0 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Icon Center */}
                                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl lg:rounded-[2rem] navy-gradient flex items-center justify-center text-gold shadow-2xl border-4 border-warm-platinum">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacyTimeline;
