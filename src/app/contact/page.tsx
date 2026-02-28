"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe2, ChevronRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const ContactContent = () => {
    const searchParams = useSearchParams();
    const sector = searchParams.get("sector");
    const color = searchParams.get("color") || "#C5A059";

    const sidebarItems = [
        { icon: MapPin, title: "Global Headquarters", detail: "6, Kaduna River Close, Maitama, Abuja, Nigeria" },
        { icon: Phone, title: "Corporate Liaison", detail: "+234 (0) 800 NAHSAZ" },
        { icon: Mail, title: "Digital Correspondence", detail: "info@nashazgroup.com" },
        { icon: Clock, title: "Operating Hours", detail: "Mon - Fri: 08:00 - 18:00 WAT" },
    ];

    return (
        <main className="min-h-screen bg-warm-platinum pt-24 pb-16 sm:pt-32 sm:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 sm:mb-16 lg:mb-20 space-y-4">
                    <h2 className="font-inter text-navy/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] !font-bold">Strategic Communications</h2>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] text-navy tracking-[0.04em] leading-none">
                        Connect With <br className="hidden sm:block" />
                        <span className="text-gold-gradient">Excellence.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-20">

                    {/* Contact Form Section */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <ContactForm initialSector={sector || ""} themeColor={color} />
                    </div>

                    {/* Information Sidebar */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-8 sm:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="navy-gradient p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] text-platinum shadow-3xl space-y-8 sm:space-y-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gold/5 rounded-full -mr-24 -mt-24 sm:-mr-32 sm:-mt-32 blur-[80px] sm:blur-[100px]"></div>

                            <div className="space-y-6 sm:space-y-8 relative z-10">
                                <h3 className="font-inter text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-gold">HQ Information</h3>
                                <div className="space-y-6 sm:space-y-8">
                                    {sidebarItems.map((item, i) => (
                                        <div key={i} className="flex gap-4 sm:gap-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                                <item.icon size={18} className="text-gold" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-platinum/40">{item.title}</p>
                                                <p className="font-inter text-sm sm:text-base font-medium leading-normal">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 sm:pt-12 border-t border-white/10 space-y-4 sm:space-y-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <Globe2 className="text-gold" size={20} />
                                    <p className="font-inter text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">Pan-Nigerian Presence</p>
                                </div>
                                <p className="font-inter text-platinum/50 text-xs sm:text-sm leading-relaxed font-medium">
                                    Operating with high-fidelity logistics and strategic business offices across Nigeria&apos;s major commercial hubs.
                                </p>
                            </div>
                        </motion.div>

                        {/* Interactive Map Card */}
                        <div className="glass-light p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] border border-navy/5 flex items-center justify-between group cursor-pointer hover:border-navy/15 transition-all">
                            <div className="space-y-2">
                                <h4 className="font-display text-lg sm:text-xl text-navy tracking-[0.08em]">Abuja Command Center</h4>
                                <p className="font-inter text-navy/40 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">Open in Satellite View</p>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const ContactPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-warm-platinum" />}>
            <ContactContent />
        </Suspense>
    );
};

export default ContactPage;
