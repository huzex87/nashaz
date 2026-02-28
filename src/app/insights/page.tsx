"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Filter } from "lucide-react";
import { news } from "@/lib/data/news";

const sectorsList = ["All", "Real Estate", "Agriculture", "Healthcare", "Energy", "Construction", "Mining", "Logistics", "Consulting"];

const NewsCard = ({ item }: { item: typeof news[0] }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative bg-white rounded-[3rem] overflow-hidden border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-1.5 rounded-full glass-light font-inter text-[10px] font-semibold uppercase tracking-[0.15em] text-navy border border-white/20">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="p-10 space-y-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 font-inter text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                    <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-navy/30" />
                        {item.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-navy/10"></div>
                    <div className="flex items-center gap-2">
                        <Tag size={12} className="text-navy/30" />
                        {item.sector}
                    </div>
                </div>

                <h3 className="font-display text-3xl text-navy tracking-[0.04em] leading-tight group-hover:text-gold transition-colors">
                    {item.title}
                </h3>

                <p className="font-inter text-sm font-medium text-navy/50 leading-relaxed">
                    {item.description}
                </p>

                <div className="mt-auto pt-8 flex items-center justify-between">
                    <Link
                        href={`/insights/${item.slug}`}
                        className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-navy group/link flex items-center gap-3 transition-all"
                    >
                        Read Insight
                        <div className="w-8 h-8 rounded-full border border-navy/5 bg-navy/5 flex items-center justify-center group-hover/link:bg-navy group-hover/link:text-white transition-all">
                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const InsightsPage = () => {
    const [activeSector, setActiveSector] = useState("All");

    const filteredNews = activeSector === "All"
        ? news
        : news.filter(n => n.sector === activeSector);

    return (
        <main className="min-h-screen bg-warm-platinum pt-32 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                    <div className="space-y-4">
                        <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.4em] text-[10px] !font-bold">Corporate Intelligence</h2>
                        <h1 className="font-display text-7xl md:text-9xl text-navy tracking-[0.04em] leading-none">
                            Group <br />
                            <span className="text-gold-gradient">Insights.</span>
                        </h1>
                    </div>

                    {/* Filter */}
                    <div className="flex flex-wrap gap-2 lg:justify-end pb-2 overflow-x-auto max-w-full">
                        {sectorsList.map(sector => (
                            <button
                                key={sector}
                                onClick={() => setActiveSector(sector)}
                                className={`px-6 py-2 rounded-full font-inter text-[10px] font-bold uppercase tracking-[0.15em] transition-all border ${activeSector === sector
                                    ? "bg-navy text-platinum border-navy"
                                    : "bg-white text-navy/40 border-navy/5 hover:border-navy/20"
                                    }`}
                            >
                                {sector}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {filteredNews.map(item => (
                            <NewsCard key={item.id} item={item} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredNews.length === 0 && (
                    <div className="text-center py-32 space-y-6">
                        <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center mx-auto text-navy/20">
                            <Filter size={40} />
                        </div>
                        <p className="font-inter text-navy/40 font-bold uppercase tracking-[0.2em]">No intelligence found for this sector</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default InsightsPage;
