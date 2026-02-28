import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Navigation",
            links: [
                { name: "About Us", href: "#about" },
                { name: "Executive Message", href: "#ceo" },
                { name: "Sector Overview", href: "#sectors" },
                { name: "Company Values", href: "#vision" },
            ],
        },
        {
            title: "Strategic Sectors",
            links: [
                { name: "Real Estate", href: "#sectors" },
                { name: "Construction", href: "#sectors" },
                { name: "Healthcare & Life Sciences", href: "#sectors" },
                { name: "Energy & Power", href: "#sectors" },
                { name: "Agribusiness", href: "#sectors" },
            ],
        },
    ];

    return (
        <footer className="bg-warm-platinum border-t border-navy/5 pt-32 pb-12 relative overflow-hidden">
            {/* Decorative Brand Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] navy-gradient opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Identity */}
                    <div className="lg:col-span-5 space-y-10">
                        <Link href="/" className="inline-flex items-center gap-4 group">
                            <Image
                                src="/images/nahsaz-logo.png"
                                alt="NAHSAZ Group"
                                width={48}
                                height={48}
                                className="object-contain group-hover:scale-105 transition-transform"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="font-display text-4xl text-navy tracking-[0.25em] leading-none">
                                    NAHSAZ
                                </span>
                                <span className="font-inter text-[9px] text-navy/40 tracking-[0.45em] uppercase font-semibold mt-0.5">
                                    Group
                                </span>
                            </div>
                        </Link>
                        <p className="font-inter text-navy/50 text-base leading-relaxed max-w-sm font-medium">
                            Building a dependable business ecosystem that meets the strategic needs of individuals, businesses, and institutions across the Nigerian landscape.
                        </p>
                        <div className="flex space-x-5">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl glass-light border border-navy/5 flex items-center justify-center text-navy/50 hover:text-navy hover:border-navy/20 transition-all shadow-lg"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Architecture */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {footerLinks.map((group) => (
                            <div key={group.title} className="space-y-8">
                                <h4 className="font-inter text-navy font-bold uppercase tracking-[0.3em] text-[10px]">
                                    {group.title}
                                </h4>
                                <ul className="space-y-5">
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="font-inter text-navy/40 hover:text-navy text-sm font-medium transition-all flex items-center group/link"
                                            >
                                                {link.name}
                                                <ExternalLink size={12} className="ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Global HQ */}
                        <div className="space-y-8">
                            <h4 className="font-inter text-navy font-bold uppercase tracking-[0.3em] text-[10px]">
                                Global Headquarters
                            </h4>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 text-navy/40 text-sm font-medium">
                                    <MapPin className="text-gold/60 shrink-0" size={18} />
                                    <span className="leading-relaxed">6, Kaduna River Close,<br />Maitama, Abuja, Nigeria</span>
                                </li>
                                <li className="flex items-center gap-4 text-navy/40 text-sm font-medium">
                                    <Phone className="text-gold/60 shrink-0" size={18} />
                                    <span>+234 (0) 800 NAHSAZ</span>
                                </li>
                                <li className="flex items-center gap-4 text-navy/40 text-sm font-medium">
                                    <Mail className="text-gold/60 shrink-0" size={18} />
                                    <span className="text-gold">info@nashazgroup.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/20">
                    <p>© {currentYear} NAHSAZ GROUP CORPORATE. Registered in Nigeria.</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-navy transition-colors">Privacy Charter</Link>
                        <Link href="#" className="hover:text-navy transition-colors">Terms of Operations</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
