"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Users, Lightbulb } from "lucide-react";

const MissionVision = () => {
    const values = [
        { name: "Integrity", icon: Shield, desc: "Upholding the highest ethical standards in all our business dealings." },
        { name: "Professionalism", icon: Award, desc: "Delivering excellence through expertise and dedication." },
        { name: "Excellence", icon: Target, desc: "Striving for world-class quality in every solution we provide." },
        { name: "Innovation", icon: Lightbulb, desc: "Continuously improving and adapting to drive economic growth." },
    ];

    return (
        <section id="vision" className="py-32 bg-warm-platinum relative overflow-hidden">
            {/* Advanced Light Mesh */}
            <div className="absolute inset-0 opacity-10 pointer-events-none light-mesh"></div>

            {/* Layered Glows */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-navy/5 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative glass-light p-12 lg:p-16 rounded-[3rem] border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-bl-[100%] group-hover:bg-gold/10 transition-colors"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-navy text-platinum rounded-2xl flex items-center justify-center border border-navy/5 shadow-lg group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                <Eye size={32} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-navy tracking-tighter">Our <span className="text-gold-gradient">Vision</span></h3>
                                <p className="text-2xl text-navy/70 leading-relaxed italic font-semibold">
                                    "To build a dependable business platform that meets the everyday needs of individuals, businesses, and institutions."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative glass-light p-12 lg:p-16 rounded-[3rem] border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-bl-[100%] group-hover:bg-gold/10 transition-colors"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-navy text-platinum rounded-2xl flex items-center justify-center border border-navy/5 shadow-lg group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                <Target size={32} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-navy tracking-tighter">Our <span className="text-gold-gradient">Mission</span></h3>
                                <p className="text-xl text-navy/70 leading-relaxed font-medium">
                                    To deliver practical solutions across several sectors of the economy that drive economic growth, support businesses, and improve everyday life through dedication and strategic innovation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="space-y-20">
                    <div className="text-center space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold font-black uppercase tracking-[0.4em] text-xs"
                        >
                            The Foundation
                        </motion.p>
                        <h2 className="text-5xl md:text-6xl font-black text-navy tracking-tighter">
                            Our Core <span className="text-gold-gradient">Values.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 glass-light rounded-[2.5rem] border border-gold/10 hover:border-gold/40 transition-all duration-500 text-center space-y-8 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="w-20 h-20 mx-auto rounded-3xl bg-navy text-platinum border border-navy/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl group-hover:scale-110">
                                    <value.icon size={36} className="transition-transform duration-500" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-navy tracking-tight group-hover:text-gold transition-colors">{value.name}</h4>
                                    <p className="text-navy/50 text-sm leading-relaxed font-medium">{value.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
