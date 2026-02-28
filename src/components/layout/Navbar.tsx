"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        { name: "The Group", href: "/about" },
        { name: "Sectors", href: "/#sectors" },
        { name: "Intelligence", href: "/insights" },
        { name: "Careers", href: "/careers" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "glass-nav py-3 shadow-2xl" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 relative flex items-center justify-center group-hover:scale-105 transition-transform">
                                <Image
                                    src="/images/nahsaz-logo.png"
                                    alt="NAHSAZ Group Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="hidden lg:flex flex-col leading-none">
                                <span className="font-display text-3xl text-navy tracking-[0.25em] leading-none">
                                    NAHSAZ
                                </span>
                                <span className="font-inter text-[9px] text-navy/50 tracking-[0.45em] uppercase font-semibold mt-0.5">
                                    Group
                                </span>
                            </div>
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
                                    className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] transition-all hover:text-gold text-navy/60 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}
                        <Link
                            href="/contact"
                            className="navy-gradient text-platinum px-8 py-3 rounded-xl font-inter text-[11px] font-bold uppercase tracking-[0.15em] transition-all shadow-xl shadow-navy/20 hover:scale-[1.05] active:scale-95 flex items-center justify-center"
                        >
                            Contact Office
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy p-2 rounded-xl glass-light transition-colors"
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
                        className="md:hidden glass-light absolute top-full left-0 w-full border-t border-navy/5 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-10 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between font-display text-2xl text-navy hover:text-gold transition-colors tracking-[0.1em]"
                                >
                                    {link.name}
                                    <ChevronRight size={20} className="text-navy/20" />
                                </Link>
                            ))}
                            <div className="pt-6">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full navy-gradient text-platinum py-5 rounded-2xl font-inter font-bold uppercase tracking-[0.2em] text-sm shadow-2xl flex items-center justify-center"
                                >
                                    Contact Office
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
