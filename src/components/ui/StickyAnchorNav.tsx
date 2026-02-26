"use client";

import React, { useState, useEffect } from "react";

const sections = [
    { id: "hero", label: "Intro" },
    { id: "ceo", label: "Founder" },
    { id: "sectors", label: "Portfolio" },
    { id: "vision", label: "Purpose" },
];

export default function StickyAnchorNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group relative flex items-center justify-end"
                >
                    <span
                        className={`mr-4 text-[10px] uppercase font-black tracking-widest transition-all duration-300 ${activeSection === section.id
                            ? "text-gold opacity-100 translate-x-0"
                            : "text-navy opacity-0 translate-x-4 group-hover:opacity-40 group-hover:translate-x-0"
                            }`}
                    >
                        {section.label}
                    </span>
                    <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${activeSection === section.id
                            ? "bg-gold border-gold scale-125"
                            : "bg-transparent border-navy/20 group-hover:border-gold group-hover:scale-110"
                            }`}
                    />
                </button>
            ))}
        </div>
    );
}
