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
            className="group glass-light p-8 md:p-10 rounded-[3rem] border border-navy/5 hover:border-gold/30 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
            <div className="space-y-4 max-w-xl">
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-navy/5 text-[10px] font-black uppercase tracking-widest text-navy">
                        {job.sector}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-gold/10 text-[10px] font-black uppercase tracking-widest text-gold">
                        {job.type}
                    </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">
                    {job.title}
                </h3>
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-navy/40">
                    <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-gold" />
                        {job.location}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-navy border border-navy/10 hover:bg-navy hover:text-white transition-all">
                    View Details
                </button>
                <div className="w-12 h-12 rounded-full border border-navy/5 bg-navy/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all">
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
        <main className="min-h-screen bg-warm-platinum pt-32 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20 text-center lg:text-left">
                    <div className="space-y-4">
                        <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Human Capital Center</h2>
                        <h1 className="text-6xl md:text-8xl font-black text-navy uppercase tracking-tighter leading-none">
                            Forge Your <br />
                            <span className="text-gold-gradient">Legacy.</span>
                        </h1>
                    </div>
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/30" size={18} />
                        <input
                            type="text"
                            placeholder="Search Roles or Sectors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-navy/5 rounded-2xl px-14 py-5 text-navy font-bold focus:border-gold/50 outline-none transition-all shadow-xl"
                        />
                    </div>
                </div>

                {/* Culture Section Overlay */}
                <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Star, title: "Elite Standard", desc: "Work with the best minds in West African commerce." },
                        { icon: Users, title: "Diverse Impact", desc: "Drive growth across 9+ unique industrial sectors." },
                        { icon: Zap, title: "Innovation First", desc: "Access to world-class tools and strategic thinking." }
                    ].map((item, i) => (
                        <div key={i} className="navy-gradient p-12 rounded-[3.5rem] text-platinum shadow-2xl space-y-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                <item.icon size={24} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                            <p className="text-sm opacity-50 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Job Board */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <Award className="text-gold" size={24} />
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-navy/40">Open Opportunities ({filteredJobs.length})</h2>
                    </div>

                    <div className="space-y-8">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
                        ) : (
                            <div className="py-20 text-center space-y-4">
                                <p className="text-navy/20 font-black uppercase tracking-[0.2em]">No opportunities match your search query</p>
                                <button onClick={() => setSearchQuery("")} className="text-gold font-black uppercase tracking-widest text-[10px] hover:underline">Clear Search</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CareersPage;
