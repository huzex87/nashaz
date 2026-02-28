"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award } from "lucide-react";

const CEOMessage = () => {
    return (
        <section id="ceo" className="py-16 sm:py-24 lg:py-32 bg-warm-platinum relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-navy/3 rounded-full blur-[100px] -tr-20"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px] -bl-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">

                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 sm:-inset-6 border border-navy/10 rounded-2xl sm:rounded-[3rem] opacity-50 transition-transform group-hover:rotate-2"></div>
                            <div className="relative aspect-[4/5] bg-navy-light rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(27,45,61,0.3)] border border-navy/5">
                                <Image
                                    src="/images/ceo_founder.png"
                                    alt="Isah Muhammed - Founder & CEO"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 space-y-2">
                                    <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-[0.08em]">Isah Muhammed</p>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-6 sm:w-8 bg-gold"></span>
                                        <p className="font-inter text-gold font-semibold uppercase tracking-[0.3em] text-[8px] sm:text-[10px]">Founder / CEO</p>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-dark flex items-center justify-center border border-gold/20 backdrop-blur-md">
                                    <Award className="text-gold" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
                        <div className="space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] border border-navy/10"
                            >
                                Visionary Leadership
                            </motion.div>
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy leading-tight tracking-[0.04em]">
                                Founder&apos;s Message
                            </h2>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-6 -left-4 sm:-top-10 sm:-left-12 text-navy opacity-[0.05]" size={80} />
                            <div className="space-y-6 sm:space-y-8 font-inter">
                                <p className="text-lg sm:text-xl lg:text-2xl text-navy font-semibold tracking-tight leading-snug">
                                    &quot;At NAHSAZ Group, our vision is to build a dependable business platform
                                    that meets the strategic needs of individuals and institutions alike.&quot;
                                </p>
                                <div className="space-y-4 sm:space-y-6 font-medium text-base sm:text-lg text-navy/60 border-l-2 border-navy/10 pl-4 sm:pl-8">
                                    <p>
                                        From real estate and construction to healthcare and energy, we are committed to delivering practical solutions driven by integrity, professionalism, and long-term value creation.
                                    </p>
                                    <p>
                                        Our goal is not only to operate businesses, but to create opportunities, support communities, and contribute meaningfully to the economic evolution of Nigeria.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="font-display text-xl sm:text-2xl text-navy tracking-[0.06em]">Isah Muhammed</p>
                                <p className="font-inter text-navy/40 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1">Founding Visionary</p>
                            </div>
                            <div className="text-navy/10 font-serif italic text-2xl sm:text-4xl select-none hidden sm:block">
                                I.Muhammed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOMessage;
