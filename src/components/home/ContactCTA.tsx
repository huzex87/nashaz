"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare, MapPin, ShieldCheck } from "lucide-react";

const ContactCTA = () => {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-warm-platinum relative overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-navy/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gold/3 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-light rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 md:p-16 lg:p-24 border border-navy/5 relative overflow-hidden shadow-2xl">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1B2D3D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center relative z-10">
                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 sm:space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full border border-navy/10 bg-navy/5 backdrop-blur-md">
                                    <span className="font-inter text-navy/50 text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] sm:tracking-[0.3em]">
                                        Partnership Inquiry
                                    </span>
                                </div>
                                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-navy leading-[0.9] tracking-[0.04em]">
                                    Let&apos;s Build the <br className="hidden sm:block" />
                                    <span className="text-gold-gradient">Future Together.</span>
                                </h2>
                                <p className="font-inter text-base sm:text-lg lg:text-xl text-navy/50 font-medium leading-relaxed max-w-lg">
                                    Integrate with our diverse ecosystem and leverage our strategic solutions to drive your next phase of growth.
                                </p>
                            </motion.div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
                                <button className="navy-gradient text-platinum px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-inter font-bold text-xs sm:text-sm transition-all shadow-2xl shadow-navy/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 group tracking-wide">
                                    Contact Headquarters
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </button>
                                <button className="glass-light text-navy px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-inter font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-3 border border-navy/5 hover:bg-navy/5 active:scale-95 tracking-wide">
                                    <Mail size={18} className="text-navy/40" />
                                    Email Support
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            {[
                                { label: "Maitama, Abuja", value: "HQ Office", icon: MapPin },
                                { label: "Available 24/7", value: "Global Reach", icon: MessageSquare },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-light p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-navy/5 space-y-3 sm:space-y-4 hover:shadow-xl transition-all"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-navy text-platinum flex items-center justify-center">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="font-display text-navy text-xl sm:text-2xl tracking-[0.06em]">{item.value}</p>
                                        <p className="font-inter text-navy/40 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] mt-1">{item.label}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="sm:col-span-2 glass-light p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-navy/5 relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full blur-3xl -tr-10 group-hover:bg-navy/8 transition-colors"></div>
                                <div className="relative z-10 flex items-center justify-between gap-4">
                                    <div className="space-y-1 sm:space-y-2">
                                        <p className="font-inter text-navy/40 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs">Strategic Value</p>
                                        <p className="font-display text-navy text-xl sm:text-2xl lg:text-3xl tracking-[0.04em]">100% Integrity Guarantee</p>
                                    </div>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-navy/10 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-500">
                                        <ShieldCheck size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactCTA;
