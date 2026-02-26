"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Search, MoreHorizontal, Edit2, Trash2, Eye } from "lucide-react";
import { news } from "@/lib/data/news";

export default function InsightsAdminPage() {
    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-tighter">
                        Insights <span className="text-gold-gradient">Manager.</span>
                    </h1>
                    <p className="text-navy/50 font-medium font-mono text-sm uppercase tracking-widest">
                        Corporate Communications
                    </p>
                </div>
                <button className="navy-gradient px-8 py-4 rounded-xl text-platinum text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                    <Plus size={16} /> New Publication
                </button>
            </div>

            <div className="glass-light rounded-[2rem] border border-gold/10 overflow-hidden shadow-xl">
                {/* Toolbar */}
                <div className="p-6 border-b border-gold/10 flex items-center justify-between bg-white/50">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
                        <input
                            type="text"
                            placeholder="Search publications..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-medium text-navy placeholder:text-navy/40"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-navy/5 text-xs font-black text-navy uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-5 rounded-tl-[2rem]">Title</th>
                                <th className="px-6 py-5">Category</th>
                                <th className="px-6 py-5">Date</th>
                                <th className="px-6 py-5 text-right rounded-tr-[2rem]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-navy/5">
                            {news.map((news, i) => (
                                <motion.tr
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={news.id}
                                    className="hover:bg-white/50 transition-colors group"
                                >
                                    <td className="px-6 py-5">
                                        <p className="font-bold text-navy line-clamp-1">{news.title}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${news.category === 'Announcement' ? 'bg-navy text-platinum' :
                                            news.category === 'Insight' ? 'bg-gold/20 text-gold border border-gold/30' :
                                                'bg-green-100 text-green-800'
                                            }`}>
                                            {news.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-medium text-navy/60">{news.date}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors text-navy/60"><Eye size={16} /></button>
                                            <button className="p-2 hover:bg-navy/10 hover:text-navy rounded-lg transition-colors text-navy/60"><Edit2 size={16} /></button>
                                            <button className="p-2 hover:bg-red-500/10 hover:text-red-600 rounded-lg transition-colors text-navy/60"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
