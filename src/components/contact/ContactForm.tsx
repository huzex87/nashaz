"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Briefcase, Building2, ChevronDown } from "lucide-react";

interface ContactFormProps {
    initialSector?: string;
    themeColor?: string;
}

const sectorsList = [
    "Real Estate", "Construction", "Healthcare", "Energy", "Agriculture", "Mining", "Logistics", "Automotive", "Consulting"
];

const ContactForm = ({ initialSector, themeColor = "#C5A059" }: ContactFormProps) => {
    const [selectedSector, setSelectedSector] = useState(initialSector || "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setStatus("success");
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass-light p-16 rounded-[3rem] text-center space-y-8 border border-gold/20 shadow-2xl"
                    >
                        <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                            <Send size={40} className="text-gold" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Transmission Successful</h2>
                            <p className="text-navy/50 font-medium max-w-sm mx-auto">Your inquiry has been routed to the {selectedSector || "relevant"} strategic business office. A corporate representative will reach out shortly.</p>
                        </div>
                        <button
                            onClick={() => setStatus("idle")}
                            className="text-gold font-black uppercase tracking-widest text-xs hover:underline"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <User size={10} /> Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-white border border-navy/5 rounded-2xl px-6 py-4 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Mail size={10} /> Corporate Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="email@company.com"
                                    className="w-full bg-white border border-navy/5 rounded-2xl px-6 py-4 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Phone size={10} /> Contact Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+234 (0) ..."
                                    className="w-full bg-white border border-navy/5 rounded-2xl px-6 py-4 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Sector Selection */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Briefcase size={10} /> Business Sector
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        value={selectedSector}
                                        onChange={(e) => setSelectedSector(e.target.value)}
                                        className="w-full bg-white border border-navy/5 rounded-2xl px-6 py-4 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm appearance-none"
                                    >
                                        <option value="" disabled>Select a sector</option>
                                        {sectorsList.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Fields Based on Sector */}
                        <AnimatePresence mode="popLayout">
                            {selectedSector === "Real Estate" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-3"
                                >
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                        <Building2 size={10} /> Property Interest
                                    </label>
                                    <select className="w-full bg-white border border-navy/5 rounded-2xl px-6 py-4 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm">
                                        <option>Residential Acquisition</option>
                                        <option>Commercial Leasing</option>
                                        <option>Property Management</option>
                                        <option>Investment Opportunity</option>
                                    </select>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Message */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                <MessageSquare size={10} /> Strategic Inquiry
                            </label>
                            <textarea
                                required
                                rows={5}
                                placeholder="How can NAHSAZ Group support your objectives?"
                                className="w-full bg-white border border-navy/5 rounded-[2rem] px-8 py-6 text-navy font-medium focus:border-gold/50 outline-none transition-all shadow-sm resize-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs text-platinum shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-4 relative overflow-hidden group"
                            style={{ backgroundColor: selectedSector ? themeColor : "#050C16" }}
                        >
                            <span className="relative z-10">{isSubmitting ? "Routing Inquiry..." : "Communicate Intent"}</span>
                            {!isSubmitting && <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            {isSubmitting && (
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
