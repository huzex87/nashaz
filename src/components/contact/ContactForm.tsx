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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        sector: initialSector || "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                sector: initialSector || "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass-light p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[3rem] text-center space-y-6 sm:space-y-8 border border-navy/5 shadow-2xl"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-navy/5 flex items-center justify-center mx-auto">
                            <Send size={32} className="text-navy" />
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="font-display text-4xl sm:text-5xl text-navy tracking-[0.04em]">Transmission Successful</h2>
                            <p className="font-inter text-xs sm:text-sm lg:text-base text-navy/50 font-medium max-w-sm mx-auto">Your inquiry has been routed to the {formData.sector || "relevant"} strategic business office. A corporate representative will reach out shortly.</p>
                        </div>
                        <button
                            onClick={() => setStatus("idle")}
                            className="font-inter text-navy font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs hover:underline"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                            {/* Name */}
                            <div className="space-y-2 sm:space-y-3">
                                <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <User size={10} /> Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="Enter your full name"
                                    className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2 sm:space-y-3">
                                <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Mail size={10} /> Corporate Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="email@company.com"
                                    className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2 sm:space-y-3">
                                <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Phone size={10} /> Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                    placeholder="+234 (0) ..."
                                    className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm"
                                />
                            </div>

                            {/* Sector Selection */}
                            <div className="space-y-2 sm:space-y-3">
                                <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                    <Briefcase size={10} /> Business Sector
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        value={formData.sector}
                                        onChange={(e) => setFormData(prev => ({ ...prev, sector: e.target.value }))}
                                        className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm appearance-none"
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
                            {formData.sector === "Real Estate" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-2 sm:space-y-3"
                                >
                                    <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2" >
                                        <Building2 size={10} /> Property Interest
                                    </label>
                                    <select className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm">
                                        <option>Residential Acquisition</option>
                                        <option>Commercial Leasing</option>
                                        <option>Property Management</option>
                                        <option>Investment Opportunity</option>
                                    </select>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Message */}
                        <div className="space-y-2 sm:space-y-3">
                            <label className="font-inter text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-navy/40 ml-4 flex items-center gap-2">
                                <MessageSquare size={10} /> Strategic Inquiry
                            </label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                rows={5}
                                placeholder="How can NAHSAZ Group support your objectives?"
                                className="w-full bg-white border border-navy/5 rounded-xl sm:rounded-[2rem] px-6 sm:px-8 py-4 sm:py-6 font-inter text-sm sm:text-base text-navy font-medium focus:border-navy/30 outline-none transition-all shadow-sm resize-none"
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 font-inter text-xs text-center font-semibold"
                            >
                                * Transmission failed. Please verify your connection and try again.
                            </motion.p>
                        )}

                        <button
                            disabled={isSubmitting}
                            className="w-full py-4 sm:py-6 rounded-xl sm:rounded-2xl font-inter font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs text-platinum shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 sm:gap-4 relative overflow-hidden group"
                            style={{ backgroundColor: formData.sector ? themeColor : "#1B2D3D" }}
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
