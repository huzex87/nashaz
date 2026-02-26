"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Sectors", href: "#sectors" },
        { name: "CEO Message", href: "#ceo" },
        { name: "Mission & Vision", href: "#vision" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "glass-nav py-4 shadow-2xl" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <span className="text-navy font-black text-xl">N</span>
                            </div>
                            <span className={`text-2xl font-black tracking-tighter transition-colors text-navy lg:block hidden`}>
                                NAHSAZ<span className="text-gold-gradient"> GROUP</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-gold text-navy/70 relative group`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="navy-gradient text-platinum px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-navy/20 hover:scale-[1.05] active:scale-95"
                        >
                            Contact Office
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-navy p-2 rounded-xl glass-light transition-colors`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-light absolute top-full left-0 w-full border-t border-gold/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-10 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between text-lg font-bold text-navy hover:text-gold transition-colors"
                                >
                                    {link.name}
                                    <ChevronRight size={20} className="text-gold opacity-50" />
                                </Link>
                            ))}
                            <div className="pt-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full navy-gradient text-platinum py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl"
                                >
                                    Contact Office
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
