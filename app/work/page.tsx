"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { ArrowRight, ExternalLink } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Branding", "Web Design", "Motion", "Strategy", "Packaging"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  id: string;
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  tags: string[];
  year: string;
  description: string;
  bgColor: string;
  initials: string;
}

const projects: Project[] = [
  {
    id: "p1",
    title: "Solar Identity System",
    client: "Solara Energy",
    category: "Branding",
    tags: ["Logo", "Guidelines", "Typography"],
    year: "2024",
    description: "A bold visual identity for a renewable energy pioneer, built around warmth and forward momentum.",
    bgColor: "bg-amber-900/30",
    initials: "SE",
  },
  {
    id: "p2",
    title: "Kova E-Commerce Platform",
    client: "Kova Spirits",
    category: "Web Design",
    tags: ["UI/UX", "Next.js", "E-Commerce"],
    year: "2024",
    description: "A premium digital storefront that mirrors the craft and character of an artisan spirits brand.",
    bgColor: "bg-blue-900/30",
    initials: "KS",
  },
  {
    id: "p3",
    title: "Meridian Brand Launch",
    client: "Meridian Finance",
    category: "Strategy",
    tags: ["Positioning", "Messaging", "Launch"],
    year: "2024",
    description: "A comprehensive go-to-market strategy that repositioned Meridian as the challenger brand in fintech.",
    bgColor: "bg-green-900/30",
    initials: "MF",
  },
  {
    id: "p4",
    title: "Bloom Campaign Motion",
    client: "Bloom Wellness",
    category: "Motion",
    tags: ["After Effects", "Lottie", "Social"],
    year: "2023",
    description: "A series of animated brand moments that brought Bloom's wellness philosophy to life across digital channels.",
    bgColor: "bg-pink-900/30",
    initials: "BW",
  },
  {
    id: "p5",
    title: "Apex Athlete Identity",
    client: "Apex Athletics",
    category: "Branding",
    tags: ["Logo", "Apparel", "Brand System"],
    year: "2023",
    description: "A high-performance brand identity for an emerging athletic wear label targeting elite competitors.",
    bgColor: "bg-red-900/30",
    initials: "AA",
  },
  {
    id: "p6",
    title: "Vantage Digital Experience",
    client: "Vantage Capital",
    category: "Web Design",
    tags: ["UI/UX", "Webflow", "Animation"],
    year: "2023",
    description: "An immersive investor portal that communicates trust, precision, and ambition through every interaction.",
    bgColor: "bg-indigo-900/30",
    initials: "VC",
  },
  {
    id: "p7",
    title: "Orion Product Packaging",
    client: "Orion Labs",
    category: "Packaging",
    tags: ["Print", "Structural", "Retail"],
    year: "2023",
    description: "Shelf-ready packaging that communicates scientific credibility while standing out in a crowded supplement aisle.",
    bgColor: "bg-cyan-900/30",
    initials: "OL",
  },
  {
    id: "p8",
    title: "Crest Brand Strategy",
    client: "Crest Hospitality",
    category: "Strategy",
    tags: ["Research", "Positioning", "Naming"],
    year: "2022",
    description: "A naming and positioning exercise that carved out a distinct niche for a boutique hotel group.",
    bgColor: "bg-yellow-900/30",
    initials: "CH",
  },
  {
    id: "p9",
    title: "Pulse Motion Reel",
    client: "Pulse Media",
    category: "Motion",
    tags: ["Cinema 4D", "GSAP", "Brand Film"],
    year: "2022",
    description: "A cinematic brand film and motion reel that established Pulse as a creative force in digital media.",
    bgColor: "bg-purple-900/30",
    initials: "PM",
  },
  {
    id: "p10",
    title: "Drift Beverage Packaging",
    client: "Drift Drinks",
    category: "Packaging",
    tags: ["Illustration", "Print", "FMCG"],
    year: "2022",
    description: "Vibrant, illustration-led packaging for a functional beverage brand targeting Gen Z consumers.",
    bgColor: "bg-teal-900/30",
    initials: "DD",
  },
  {
    id: "p11",
    title: "Nova SaaS Platform",
    client: "Nova Tech",
    category: "Web Design",
    tags: ["Product Design", "Design System", "React"],
    year: "2022",
    description: "A scalable design system and product interface for a fast-growing B2B SaaS platform.",
    bgColor: "bg-violet-900/30",
    initials: "NT",
  },
  {
    id: "p12",
    title: "Ember Brand Identity",
    client: "Ember Coffee",
    category: "Branding",
    tags: ["Logo", "Packaging", "Retail"],
    year: "2021",
    description: "A warm, artisan brand identity for an independent specialty coffee roaster with a cult following.",
    bgColor: "bg-orange-900/30",
    initials: "EC",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Selected Work
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95] mb-6"
            >
              Projects that{" "}
              <span className="text-amber-500">define</span>
              <br />
              categories
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Twelve years of craft distilled into work that moves markets,
              shifts perceptions, and builds brands worth remembering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeInUp}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-sm text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-amber-500 text-black"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Link
                  href="/case-study"
                  className="block rounded-sm overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300 bg-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {/* Image placeholder */}
                  <div
                    className={`aspect-[4/3] ${project.bgColor} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-4xl font-black text-amber-500/60 tracking-tighter select-none">
                      {project.initials}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-amber-400 text-sm font-semibold bg-black/60 px-4 py-2 rounded-sm">
                        <ExternalLink size={14} />
                        View Case Study
                      </span>
                    </div>
                    {/* Year badge */}
                    <span className="absolute top-3 right-3 text-xs font-bold text-white/40 bg-black/40 px-2 py-1 rounded-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-white font-bold text-xl leading-tight mb-2 group-hover:text-amber-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-sm bg-amber-500/10 text-amber-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-white/30"
            >
              <p className="text-lg">No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#111111] border border-white/5 rounded-sm p-12 md:p-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4"
            >
              Let&apos;s Collaborate
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg max-w-xl mx-auto mb-10"
            >
              We&apos;re selective about the work we take on — which means every
              project gets our full attention and ambition.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold text-sm rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
