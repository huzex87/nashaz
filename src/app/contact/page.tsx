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
        { icon: MapPin, title: "Global Headquarters", detail: "G-Kaduna River Close, Maitama, Abuja, Nigeria" },
        { icon: Phone, title: "Corporate Liaison", detail: "+234 (0) 800 NAHSAZ" },
        { icon: Mail, title: "Digital Correspondence", detail: "info@nashazgroup.com" },
        { icon: Clock, title: "Operating Hours", detail: "Mon - Fri: 08:00 - 18:00 WAT" },
    ];

    return (
        <main className="min-h-screen bg-warm-platinum pt-32 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-20 space-y-4">
                    <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Strategic Communications</h2>
                    <h1 className="text-6xl md:text-8xl font-black text-navy uppercase tracking-tighter leading-none">
                        Connect With <br />
                        <span className="text-gold-gradient">Excellence.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Contact Form Section */}
                    <div className="lg:col-span-7">
                        <ContactForm initialSector={sector || ""} themeColor={color} />
                    </div>

                    {/* Information Sidebar */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="navy-gradient p-12 rounded-[4rem] text-platinum shadow-3xl space-y-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-[100px]"></div>

                            <div className="space-y-8 relative z-10">
                                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gold">HQ Information</h3>
                                <div className="space-y-8">
                                    {sidebarItems.map((item, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                                <item.icon size={20} className="text-gold" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-platinum/40">{item.title}</p>
                                                <p className="text-lg font-bold">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/10 space-y-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <Globe2 className="text-gold" size={20} />
                                    <p className="text-sm font-black uppercase tracking-[0.2em]">Pan-Nigerian Presence</p>
                                </div>
                                <p className="text-platinum/50 text-sm leading-relaxed font-medium">
                                    Operating with high-fidelity logistics and strategic business offices across Nigeria's major commercial hubs.
                                </p>
                            </div>
                        </motion.div>

                        {/* Interactive Map Placeholder/Card */}
                        <div className="glass-light p-10 rounded-[3rem] border border-gold/10 flex items-center justify-between group cursor-pointer hover:border-gold/40 transition-all">
                            <div className="space-y-2">
                                <h4 className="text-navy font-black text-sm uppercase tracking-tight">Abuja Command Center</h4>
                                <p className="text-navy/40 text-xs font-bold uppercase tracking-widest">Open in Satellite View</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all">
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
