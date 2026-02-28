"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Newspaper,
    Briefcase,
    Inbox,
    LogOut,
    Menu,
    X,
    ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Overview", icon: LayoutDashboard, href: "/admin" },
        { name: "Insights & News", icon: Newspaper, href: "/admin/insights" },
        { name: "Careers Portal", icon: Briefcase, href: "/admin/careers" },
        { name: "Inquiries", icon: Inbox, href: "/admin/messages" },
    ];

    return (
        <div className="min-h-screen bg-warm-platinum flex">
            {/* Desktop Sidebar */}
            <aside className="w-72 bg-navy hidden lg:flex flex-col border-r border-white/5 fixed h-full z-40">
                <div className="p-8 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 relative flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Image
                                src="/images/nahsaz-logo.png"
                                alt="NAHSAZ Group"
                                width={40}
                                height={40}
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-display text-xl text-white tracking-[0.2em] leading-none">
                                NAHSAZ
                            </span>
                            <span className="font-inter text-[8px] text-gold tracking-[0.3em] uppercase font-semibold mt-0.5">
                                Admin
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex-1 py-10 px-6 space-y-4">
                    <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 px-4">Management Console</p>
                    <nav className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-inter ${isActive
                                        ? "bg-white/10 text-white border border-white/10"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon size={20} className={isActive ? "text-gold" : "text-white/40"} />
                                    <span className="font-semibold text-sm uppercase tracking-[0.1em]">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-8 border-t border-white/5">
                    <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full font-inter">
                        <LogOut size={20} />
                        <span className="font-semibold text-sm uppercase tracking-[0.1em]">Secure Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header & Menu */}
            <div className="lg:hidden fixed top-0 w-full bg-navy z-50 border-b border-white/5 p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 relative flex items-center justify-center">
                        <Image
                            src="/images/nahsaz-logo.png"
                            alt="NAHSAZ Group"
                            width={32}
                            height={32}
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white p-2"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed top-[73px] left-0 w-full bg-navy border-b border-white/5 z-40 p-6 space-y-6 shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between p-4 rounded-xl transition-all font-inter ${pathname === item.href ? "bg-white/10 text-white border border-white/10" : "text-white hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={20} className={pathname === item.href ? "text-gold" : "text-white/40"} />
                                    <span className="font-semibold uppercase tracking-[0.1em]">{item.name}</span>
                                </div>
                                <ChevronRight size={16} className="opacity-50" />
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-72 min-h-screen pt-24 lg:pt-0">
                <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
