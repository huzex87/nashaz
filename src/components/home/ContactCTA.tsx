"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare, MapPin } from "lucide-react";

const ContactCTA = () => {
    return (
        <section className="py-32 bg-warm-platinum relative overflow-hidden">
            {/* Decorative Glows - Softer for light theme */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-light rounded-[4rem] p-12 md:p-24 border border-gold/10 relative overflow-hidden shadow-2xl">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#050C16 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md">
                                    <span className="text-gold text-[10px] uppercase font-black tracking-[0.3em]">
                                        Partnership Inquiry
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black text-navy leading-[0.9] tracking-tighter">
                                    Let's Build the <br />
                                    <span className="text-gold-gradient">Future Together.</span>
                                </h2>
                                <p className="text-xl text-navy/60 font-medium leading-relaxed max-w-lg">
                                    Integrate with our diverse ecosystem and leverage our strategic solutions to drive your next phase of growth.
                                </p>
                            </motion.div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="navy-gradient text-platinum px-12 py-6 rounded-2xl font-black transition-all shadow-2xl shadow-navy/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 group">
                                    Contact Headquarters
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="glass-light text-navy px-12 py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 border border-navy/5 hover:bg-navy/5 active:scale-95">
                                    <Mail size={20} className="text-gold" />
                                    Email Support
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                                    className="glass-light p-8 rounded-3xl border border-gold/10 space-y-4 hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-navy text-platinum flex items-center justify-center">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-navy font-black text-xl tracking-tight">{item.value}</p>
                                        <p className="text-gold font-bold text-xs uppercase tracking-widest mt-1">{item.label}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="sm:col-span-2 glass-light p-10 rounded-3xl border border-gold/10 relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -tr-10 group-hover:bg-gold/20 transition-colors"></div>
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="space-y-2">
                                        <p className="text-gold font-black uppercase tracking-widest text-xs">Strategic Value</p>
                                        <p className="text-navy font-black text-2xl tracking-tighter">100% Integrity Guarantee</p>
                                    </div>
                                    <div className="w-16 h-16 rounded-full border-2 border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <ShieldCheck size={32} />
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

import { ShieldCheck } from "lucide-react";

export default ContactCTA;
