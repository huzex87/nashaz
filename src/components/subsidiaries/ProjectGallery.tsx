"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface Project {
    name: string;
    year: string;
    location: string;
    image: string;
}

interface ProjectGalleryProps {
    projects: Project[];
    themeColor: string;
    subsidiaryName: string;
}

const ProjectGallery = ({ projects, themeColor, subsidiaryName }: ProjectGalleryProps) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="mt-16 sm:mt-24 lg:mt-32 space-y-10 sm:space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-gold font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px]">Strategic Portfolio</h2>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-none tracking-tighter uppercase sm:whitespace-nowrap">
                        Flagship <br className="hidden sm:block" />
                        <span className="text-gold-gradient">Projects.</span>
                    </p>
                </div>
                <p className="text-navy/50 font-medium max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
                    A chronicle of excellence. Explore the landmark developments that define {subsidiaryName}'s commitment to national growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-[3rem] overflow-hidden border border-navy/5 shadow-2xl bg-white"
                    >
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80"></div>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                            style={{ backgroundColor: themeColor }}
                        ></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    <div className="px-3 sm:px-4 py-1 sm:py-2 rounded-full glass-light border border-white/20 flex items-center gap-2">
                                        <Calendar size={12} className="text-gold" />
                                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-navy">{project.year}</span>
                                    </div>
                                    <div className="px-3 sm:px-4 py-1 sm:py-2 rounded-full glass-light border border-white/20 flex items-center gap-2">
                                        <MapPin size={12} className="text-gold" />
                                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-navy">{project.location}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                                    {project.name}
                                </h3>

                                <div className="pt-4 sm:pt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <div className="h-px w-8 sm:w-12 bg-white/20"></div>
                                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">View Case Study</span>
                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all shadow-xl shrink-0"
                                        style={{ backgroundColor: themeColor }}
                                    >
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Accent Border */}
                        <div
                            className="absolute bottom-0 left-0 w-0 h-1 sm:h-2 transition-all duration-700 group-hover:w-full"
                            style={{ backgroundColor: themeColor }}
                        ></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
