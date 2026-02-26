"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    TrendingUp,
    FileText,
    MessageSquare,
    ArrowUpRight,
    Activity
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { title: "Total Applications", value: "2,405", trend: "+12.5%", isPositive: true, icon: Users },
        { title: "Active Insights", value: "48", trend: "+3", isPositive: true, icon: FileText },
        { title: "Unread Inquiries", value: "14", trend: "-2", isPositive: false, icon: MessageSquare },
        { title: "System Health", value: "99.9%", trend: "Stable", isPositive: true, icon: Activity },
    ];

    const recentActivity = [
        { action: "New Job Application", detail: "Software Engineer - Oil & Gas", time: "10 mins ago" },
        { action: "Insight Published", detail: "Q3 Real Estate Market Analysis", time: "2 hours ago" },
        { action: "Contact Inquiry", detail: "Investment interest in Greenfield Agro", time: "5 hours ago" },
        { action: "System Update", detail: "Security patch deployed automatically", time: "1 day ago" },
    ];

    return (
        <div className="space-y-12 h-full flex flex-col">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter">
                    Command <span className="text-gold-gradient">Center.</span>
                </h1>
                <p className="text-navy/50 font-medium font-mono text-sm uppercase tracking-widest">
                    Live System Overview
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={stat.title}
                        className="glass-light p-8 rounded-[2rem] border border-gold/10 shadow-xl space-y-6"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-gold">
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-xs font-black uppercase tracking-widest flex items-center gap-1 ${stat.isPositive ? 'text-green-600' : 'text-amber-600'
                                }`}>
                                {stat.trend} <ArrowUpRight size={14} />
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-black text-navy tracking-tighter">{stat.value}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-navy/40">{stat.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 glass-light p-8 md:p-12 rounded-[2.5rem] border border-gold/10 shadow-xl"
                >
                    <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-8">Recent Activity Log</h2>
                    <div className="space-y-6">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="flex gap-6 items-start p-4 rounded-2xl hover:bg-white/50 transition-colors border border-transparent hover:border-gold/10">
                                <div className="w-10 h-10 rounded-full bg-navy/5 flex flex-shrink-0 items-center justify-center text-gold mt-1">
                                    <TrendingUp size={16} />
                                </div>
                                <div className="space-y-1 flex-1">
                                    <p className="font-bold text-navy">{activity.action}</p>
                                    <p className="text-sm font-medium text-navy/60">{activity.detail}</p>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-navy/30 whitespace-nowrap">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Actions Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="navy-gradient p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden flex flex-col justify-between"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-[50px]"></div>
                    <div className="relative z-10 space-y-4">
                        <h2 className="text-xl font-black text-platinum uppercase tracking-tight">System Status</h2>
                        <p className="text-platinum/60 text-sm font-medium leading-relaxed">
                            All systems are operating at nominal capacity. Database replicas are synchronized.
                        </p>
                    </div>

                    <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-gold text-center block w-full">
                            Database Connected
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
