"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award } from "lucide-react";

const CEOMessage = () => {
    return (
        <section id="ceo" className="py-32 bg-warm-platinum relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px] -tr-20"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gold/10 rounded-full blur-[100px] -bl-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-6 border border-gold/20 rounded-[3rem] opacity-50 transition-transform group-hover:rotate-2"></div>
                            <div className="relative aspect-[4/5] bg-navy-light rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(5,12,22,0.3)] border border-navy/5">
                                <Image
                                    src="/images/ceo_founder.png"
                                    alt="Isah Muhammed - Founder & CEO"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute inset-x-0 bottom-0 p-10 space-y-2">
                                    <p className="text-3xl font-black text-white tracking-tighter">Isah Muhammed</p>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-8 bg-gold"></span>
                                        <p className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Founder / CEO</p>
                                    </div>
                                </div>

                                <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl glass-dark flex items-center justify-center border border-gold/20 backdrop-blur-md">
                                    <Award className="text-gold" size={24} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy text-[10px] font-black uppercase tracking-widest border border-navy/10"
                            >
                                Visionary Leadership
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl font-black text-navy leading-tight tracking-tighter">
                                Founder&apos;s Message
                            </h2>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-10 -left-12 text-gold opacity-10" size={120} />
                            <div className="space-y-8 text-xl text-navy/70 leading-relaxed font-semibold">
                                <p className="text-2xl text-navy tracking-tight leading-snug">
                                    &quot;At NAHSAZ Group, our vision is to build a dependable business platform
                                    that meets the strategic needs of individuals and institutions alike.&quot;
                                </p>
                                <div className="space-y-6 font-medium text-lg border-l-2 border-gold/20 pl-8">
                                    <p>
                                        From real estate and construction to healthcare and energy, we are committed to delivering practical solutions driven by integrity, professionalism, and long-term value creation.
                                    </p>
                                    <p>
                                        Our goal is not only to operate businesses, but to create opportunities, support communities, and contribute meaningfully to the economic evolution of Nigeria.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex items-center justify-between">
                            <div>
                                <p className="text-navy font-black text-xl tracking-tight">Isah Muhammed</p>
                                <p className="text-gold font-bold text-xs uppercase tracking-widest mt-1">Founding Visionary</p>
                            </div>
                            <div className="text-navy/20 font-serif italic text-4xl select-none">
                                L.Muhammed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOMessage;
