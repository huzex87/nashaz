"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, Reply, Archive, Trash2, Calendar, User } from "lucide-react";

// Mock Data for Inquiries
const mockupInquiries = [
    { id: 1, name: "Dr. Aliyu Usman", email: "aliyu.usman@example.com", sector: "Healthcare & Pharmaceuticals", subject: "Diagnostic Centre Partnership", date: "Today, 10:42 AM", read: false, message: "We are interested in exploring a strategic partnership with NAHSAZ Medical Diagnostics for supplying advanced MRI equipment to your new facility in Kano." },
    { id: 2, name: "Sarah Jenkins", email: "s.jenkins@globemeat.com", sector: "Agriculture & Food Security", subject: "Export Opportunities - GreenField Agro", date: "Yesterday, 14:15 PM", read: true, message: "I represent a European distributor interested in bulk procurement of processed grain from GreenField Agro. Please provide your export catalog." },
    { id: 3, name: "Ahmed Zubairu", email: "azubairu@state.gov.ng", sector: "Real Estate & Infrastructure", subject: "Housing Project Tender Request", date: "Aug 12, 09:00 AM", read: true, message: "The ministry is requesting detailed structural proposals for the Phase 3 housing development project in the Federal Capital Territory." },
];

export default function MessagesAdminPage() {
    const [selectedMessage, setSelectedMessage] = useState(mockupInquiries[0]);

    return (
        <div className="space-y-12 h-[calc(100vh-8rem)] flex flex-col">
            <div className="space-y-2 flex-shrink-0">
                <h1 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-tighter">
                    Secure <span className="text-gold-gradient">Inbox.</span>
                </h1>
                <p className="text-navy/50 font-medium font-mono text-sm uppercase tracking-widest">
                    Strategic Inquiries
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
                {/* Inbox List */}
                <div className="lg:col-span-5 glass-light rounded-[2rem] border border-gold/10 overflow-hidden shadow-xl flex flex-col">
                    <div className="p-6 border-b border-gold/10 flex-shrink-0">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
                            <input
                                type="text"
                                placeholder="Search inquiries..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-medium text-navy placeholder:text-navy/40"
                            />
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-1">
                        <div className="divide-y divide-navy/5">
                            {mockupInquiries.map((inquiry) => (
                                <button
                                    key={inquiry.id}
                                    onClick={() => setSelectedMessage(inquiry)}
                                    className={`w-full text-left p-6 transition-all border-l-4 ${selectedMessage.id === inquiry.id
                                            ? 'bg-gold/5 border-gold'
                                            : 'border-transparent hover:bg-white/50'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-sm font-bold ${!inquiry.read ? 'text-navy' : 'text-navy/60'}`}>
                                            {inquiry.name}
                                        </span>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${!inquiry.read ? 'text-gold' : 'text-navy/40'}`}>
                                            {!inquiry.read ? 'NEW' : inquiry.date}
                                        </span>
                                    </div>
                                    <p className={`text-sm ${!inquiry.read ? 'font-bold text-navy' : 'font-medium text-navy/50'}`}>
                                        {inquiry.subject}
                                    </p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-navy/30 mt-2">
                                        Sector: {inquiry.sector}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Message Detail View */}
                <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col h-full hidden md:flex">
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl z-0"></div>

                    {/* Detail Header */}
                    <div className="p-8 border-b border-gold/10 relative z-10 flex-shrink-0 bg-white/50">
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black text-navy">{selectedMessage.subject}</h2>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-sm font-medium text-navy/60">
                                        <User size={16} className="text-gold" />
                                        {selectedMessage.name} <span className="text-navy/30">({selectedMessage.email})</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-navy/60">
                                        <Calendar size={16} className="text-gold" />
                                        {selectedMessage.date}
                                    </div>
                                </div>
                                <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-navy/5 text-navy border border-navy/10">
                                    {selectedMessage.sector}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-xl bg-white border border-navy/10 flex items-center justify-center text-navy/60 hover:text-gold hover:border-gold/30 transition-all shadow-sm">
                                    <Reply size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-xl bg-white border border-navy/10 flex items-center justify-center text-navy/60 hover:text-navy transition-all shadow-sm">
                                    <Archive size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-xl bg-white border border-navy/10 flex items-center justify-center text-red-500/60 hover:text-red-500 hover:border-red-500/30 transition-all shadow-sm">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Message Body */}
                    <div className="p-8 relative z-10 flex-1 overflow-y-auto">
                        <motion.div
                            key={selectedMessage.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-navy/80 font-medium leading-loose whitespace-pre-wrap"
                        >
                            {selectedMessage.message}

                            <div className="mt-12 pt-8 border-t border-navy/5">
                                <p className="text-sm text-navy/40 font-bold">
                                    --<br />
                                    Received via NAHSAZ Strategic Contact System<br />
                                    IP logged and verified.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
