"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { APP_NAME } from "@/lib/data";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Coffee, Globe, Shield, ChevronDown } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface Perk {
  icon: React.ElementType;
  title: string;
  description: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const openRoles: Role[] = [
  {
    id: "sr-designer",
    title: "Senior Brand Designer",
    department: "Design",
    location: "New York / Remote",
    type: "Full-time",
    description:
      "Lead visual identity projects from concept to delivery. You'll work closely with our strategy and motion teams to craft brand systems that are both beautiful and built to last. You'll mentor junior designers and help shape the creative direction of the studio.",
    requirements: [
      "5+ years brand design experience",
      "Strong portfolio of identity work",
      "Proficiency in Figma and Adobe Suite",
      "Experience with motion design a plus",
    ],
  },
  {
    id: "web-dev",
    title: "Creative Web Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build pixel-perfect, performant websites that bring our design team's vision to life. You'll work across Next.js and Webflow projects, collaborating directly with designers to ensure every interaction feels intentional and every page loads fast.",
    requirements: [
      "3+ years Next.js/React experience",
      "Strong CSS/animation skills",
      "Experience with Webflow",
      "Eye for design detail",
    ],
  },
  {
    id: "motion",
    title: "Motion Designer",
    department: "Motion",
    location: "New York / Remote",
    type: "Full-time",
    description:
      "Create compelling motion work across brand and digital touchpoints. From logo animations and brand films to UI micro-interactions and social content, you'll bring energy and life to everything we make.",
    requirements: [
      "4+ years motion design",
      "Expert in After Effects",
      "Experience with Lottie/GSAP",
      "Brand animation portfolio",
    ],
  },
  {
    id: "strategist",
    title: "Brand Strategist",
    department: "Strategy",
    location: "New York",
    type: "Full-time",
    description:
      "Shape brand narratives and positioning for our clients. You'll lead discovery workshops, conduct qualitative research, and translate insights into clear strategic frameworks that guide our creative teams.",
    requirements: [
      "5+ years brand strategy",
      "Strong writing and presentation skills",
      "Experience with qualitative research",
      "Agency background preferred",
    ],
  },
  {
    id: "pm",
    title: "Project Manager",
    department: "Operations",
    location: "New York / Remote",
    type: "Full-time",
    description:
      "Keep complex creative projects on track and clients delighted. You'll own timelines, budgets, and communication across multiple concurrent projects, acting as the connective tissue between our creative teams and our clients.",
    requirements: [
      "3+ years creative project management",
      "Experience with project management tools",
      "Excellent communication skills",
      "Agency experience preferred",
    ],
  },
];

const perks: Perk[] = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your family, plus a monthly wellness stipend.",
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description:
      "Async-first culture with flexible hours. Work when you're most creative — we care about output, not clock-watching.",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description:
      "$2,000 annual budget for courses, conferences, books, and anything else that sharpens your craft.",
  },
  {
    icon: Globe,
    title: "Team Retreats",
    description:
      "Twice-yearly studio retreats to somewhere inspiring. Past destinations include Lisbon, Tokyo, and Oaxaca.",
  },
  {
    icon: Coffee,
    title: "Great Coffee",
    description:
      "Our New York studio is stocked with specialty coffee, snacks, and everything you need to do your best work.",
  },
  {
    icon: Shield,
    title: "Top Equipment",
    description:
      "Latest MacBook Pro, external display, and any peripherals you need — fully expensed on day one.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
      {children}
    </span>
  );
}

function DepartmentBadge({ department }: { department: string }) {
  const colorMap: Record<string, string> = {
    Design: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    Engineering: "bg-blue-500/15 text-blue-300 border-blue-500/20",
    Motion: "bg-pink-500/15 text-pink-300 border-pink-500/20",
    Strategy: "bg-green-500/15 text-green-300 border-green-500/20",
    Operations: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  };
  const cls = colorMap[department] ?? "bg-white/10 text-white/60 border-white/10";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cls}`}
    >
      {department}
    </span>
  );
}

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-white/8 rounded-xl overflow-hidden bg-[#111111] hover:border-amber-500/20 transition-colors duration-300"
    >
      {/* Collapsed header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
        aria-expanded={expanded}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors duration-200">
              {role.title}
            </h3>
            <DepartmentBadge department={role.department} />
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="flex-shrink-0" />
              {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={13} className="flex-shrink-0" />
              {role.type}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-amber-500/30 group-hover:text-amber-400 transition-colors duration-200"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/5">
              <p className="text-white/60 text-sm leading-relaxed mt-5 mb-5">
                {role.description}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                Requirements
              </p>
              <ul className="space-y-2 mb-6">
                {role.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?role=${encodeURIComponent(role.title)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Apply for this role
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Join the Team</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-6"
            >
              Build the future of{" "}
              <span className="text-amber-400">creative</span>
              <br />
              with us.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {APP_NAME} is a small, ambitious studio where craft meets strategy.
              We hire curious people who care deeply about their work and want to
              make things that matter.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-amber-400">5</span>
                <span className="text-sm text-white/40 mt-1">Open roles</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-amber-400">Remote</span>
                <span className="text-sm text-white/40 mt-1">Friendly</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-amber-400">NYC</span>
                <span className="text-sm text-white/40 mt-1">Headquarters</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CULTURE ──────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <SectionLabel>Culture</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Life at Northwind
            </h2>
          </motion.div>

          {/* Two-column: text + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Text */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              <p className="text-white/60 text-lg leading-relaxed">
                We're a studio of about 20 people who believe that the best
                creative work comes from genuine collaboration, deep curiosity,
                and a relentless commitment to craft. We don't do mediocre. We
                don't do rushed. We do work we're proud of.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Our culture is built on trust and autonomy. We hire smart people
                and get out of their way. You'll have real ownership over your
                work, direct relationships with clients, and the freedom to
                experiment and push boundaries.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                We're distributed across New York, London, and Lisbon, with a
                strong async culture that means you can do your best work
                wherever you are. We come together for quarterly retreats and
                the occasional spontaneous adventure.
              </p>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="w-full h-80 lg:h-full min-h-[320px] rounded-xl bg-amber-900/20 border border-amber-500/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-6xl font-black text-amber-500/30 tracking-tighter">NW</span>
                  <span className="block text-sm text-white/20 mt-2 tracking-widest uppercase">Northwind Studio</span>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/40 rounded-tr-sm" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/40 rounded-bl-sm" />
            </motion.div>
          </div>

          {/* Perks grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8"
            >
              What we offer
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    variants={scaleIn}
                    className="p-6 rounded-xl border border-white/8 bg-[#0a0a0a] hover:border-amber-500/20 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                      <Icon size={20} className="text-amber-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{perk.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. OPEN ROLES ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <SectionLabel>We&apos;re Hiring</SectionLabel>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                Open Positions
              </h2>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-black text-sm font-black">
                {openRoles.length}
              </span>
            </div>
            <p className="text-white/40 text-base mt-4 max-w-xl">
              Click any role to see the full description and requirements, then
              apply directly from the listing.
            </p>
          </motion.div>

          {/* Role cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {openRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. APPLICATION CTA ──────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              We&apos;re always interested in hearing from exceptional people. If
              you think you&apos;d be a great fit for {APP_NAME} but don&apos;t
              see a role that matches your skills, send us a speculative
              application — we&apos;d love to meet you.
            </p>
            <a
              href="mailto:hello@northwindstudio.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              hello@northwindstudio.com
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
