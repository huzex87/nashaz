"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, Search, ArrowRight, Star, Users, Zap, Award } from "lucide-react";
import { jobs } from "@/lib/data/jobs";

const JobCard = ({ job }: { job: typeof jobs[0] }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group glass-light p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3rem] border border-navy/5 hover:border-navy/15 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8"
        >
            <div className="space-y-4 max-w-xl">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-navy/5 font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
                        {job.sector}
                    </span>
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gold/10 font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                        {job.type}
                    </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy tracking-[0.04em] leading-tight group-hover:text-gold transition-colors">
                    {job.title}
                </h3>
                <div className="flex items-center gap-4 sm:gap-6 font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                    <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-navy/30" />
                        {job.location}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
                <button className="flex-grow sm:flex-grow-0 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-inter font-bold uppercase tracking-[0.15em] text-[9px] sm:text-[10px] text-navy border border-navy/10 hover:bg-navy hover:text-white transition-all">
                    View Details
                </button>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-navy/5 bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all shrink-0">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

const CareersPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.sector.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-warm-platinum pt-24 pb-16 sm:pt-32 sm:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Header */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 sm:gap-12 mb-12 sm:mb-20">
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] !font-bold">Human Capital Center</h2>
                        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] text-navy tracking-[0.04em] leading-none">
                            Forge Your <br className="hidden sm:block" />
                            <span className="text-gold-gradient">Legacy.</span>
                        </h1>
                    </div>
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 text-navy/30" size={18} />
                        <input
                            type="text"
                            placeholder="Search Roles or Sectors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-12 sm:px-14 py-4 sm:py-5 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-xl"
                        />
                    </div>
                </div>

                {/* Culture Section Overlay */}
                <section className="mb-16 sm:mb-24 lg:mb-32 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { icon: Star, title: "Elite Standard", desc: "Work with the best minds in West African commerce." },
                        { icon: Users, title: "Diverse Impact", desc: "Drive growth across 9+ unique industrial sectors." },
                        { icon: Zap, title: "Innovation First", desc: "Access to world-class tools and strategic thinking." }
                    ].map((item, i) => (
                        <div key={i} className="navy-gradient p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[3rem] lg:rounded-[3.5rem] text-platinum shadow-2xl space-y-4 sm:space-y-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center">
                                <item.icon size={22} className="text-gold" />
                            </div>
                            <h3 className="font-display text-xl sm:text-2xl text-white tracking-[0.08em]">{item.title}</h3>
                            <p className="font-inter text-xs sm:text-sm opacity-50 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Job Board */}
                <div className="space-y-8 sm:space-y-12">
                    <div className="flex items-center gap-4">
                        <Award className="text-navy/30" size={20} />
                        <h2 className="font-inter text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40">Open Opportunities ({filteredJobs.length})</h2>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
                        ) : (
                            <div className="py-16 sm:py-20 text-center space-y-4">
                                <p className="font-inter text-navy/20 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">No opportunities match your search query</p>
                                <button onClick={() => setSearchQuery("")} className="font-inter text-gold font-bold uppercase tracking-[0.15em] text-[9px] sm:text-[10px] hover:underline">Clear Search</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CareersPage;
