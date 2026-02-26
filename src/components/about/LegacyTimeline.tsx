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
        desc: "Reimagining the group as a world-class conglomerates with 9 specialized sectors and a pan-African strategic outlook.",
        icon: Award
    }
];

const LegacyTimeline = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <History className="text-gold mb-4" size={32} />
                    <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Corporate Narrative</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-navy uppercase tracking-tighter leading-none">
                        Our <br />
                        <span className="text-gold-gradient">Legacy.</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy/10 to-transparent flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-4"></div>
                    </div>

                    <div className="space-y-32">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} space-y-4`}>
                                    <span className="text-7xl md:text-9xl font-black text-navy/5 tracking-tighter opacity-50 block md:inline">
                                        {item.year}
                                    </span>
                                    <h4 className="text-3xl font-black text-navy uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-navy/50 font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Icon Center */}
                                <div className="relative z-10 w-20 h-20 rounded-[2rem] navy-gradient flex items-center justify-center text-gold shadow-2xl border-4 border-warm-platinum">
                                    <item.icon size={28} />
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
