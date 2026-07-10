"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { ArrowRight, ArrowLeft, TrendingUp, Users, Award, Clock } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const projectMeta = [
  { label: "Client", value: "Solara Energy" },
  { label: "Year", value: "2024" },
  { label: "Services", value: "Brand Identity, Web Design" },
  { label: "Duration", value: "12 weeks" },
];

const projectDetails = [
  { label: "Client", value: "Solara Energy" },
  { label: "Industry", value: "Renewable Energy" },
  { label: "Services", value: "Brand Identity, Web Design, Motion" },
  { label: "Timeline", value: "12 Weeks (Q1 2024)" },
];

const phases = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We began with an intensive discovery phase — conducting stakeholder interviews across Solara's leadership team, running competitive audits of 20+ energy brands, and facilitating brand positioning workshops. This gave us a clear picture of where Solara stood and, more importantly, where they needed to go. We identified a critical gap: the renewable energy space was dominated by either sterile corporate identities or overly 'green' clichés. Solara had an opportunity to own a bold, premium position.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Armed with strategic clarity, our design team explored over 40 logomark directions before converging on a concept rooted in the geometry of solar panels and the dynamism of energy flow. We developed a refined color system anchored by a warm amber-gold primary — evoking sunlight without feeling literal — paired with deep charcoal neutrals for authority. Typography was set in a geometric sans-serif that balanced precision with warmth, reflecting Solara's dual B2B and consumer audiences.",
  },
  {
    number: "03",
    title: "Brand System",
    description:
      "The final phase transformed the visual identity into a living, scalable brand system. We produced a comprehensive 80-page brand guidelines document, a full suite of digital and print templates, motion principles for video and social content, and a custom icon library. Every asset was built to empower Solara's internal team to execute consistently across all touchpoints — from investor decks to Instagram stories — without losing the integrity of the brand.",
  },
];

const metrics = [
  {
    icon: TrendingUp,
    value: "+340%",
    label: "Brand Recognition",
    description: "Unaided brand recall among target B2B decision-makers within 6 months of launch.",
  },
  {
    icon: Users,
    value: "+180%",
    label: "Website Traffic",
    description: "Organic traffic growth in the first quarter following the new site launch.",
  },
  {
    icon: Award,
    value: "94%",
    label: "Client Satisfaction",
    description: "Internal stakeholder satisfaction score across all brand deliverables.",
  },
  {
    icon: Clock,
    value: "3",
    label: "Industry Awards",
    description: "Recognitions including a Webby Award nomination and two regional design honours.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-[#111111] flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-8">
              <Link
                href="/work"
                className="flex items-center gap-1.5 text-sm text-white/40 hover:text-amber-500 transition-colors duration-200"
              >
                <ArrowLeft size={14} />
                Case Studies
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-sm text-white/40">Brand Identity</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
            >
              Solara
              <br />
              <span className="text-amber-500">Energy</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-10 max-w-2xl"
            >
              Redefining a renewable energy brand for the next generation.
            </motion.p>

            {/* Meta row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 md:gap-10 border-t border-white/10 pt-8"
            >
              {projectMeta.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-14 w-full aspect-video bg-amber-900/20 rounded-sm border border-amber-500/10 flex items-center justify-center overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-amber-500/5" />
            <span className="text-[12rem] md:text-[18rem] font-black text-amber-500/10 select-none leading-none tracking-tighter">
              SE
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-amber-500/40 text-sm font-bold uppercase tracking-widest">
                Solara Energy — Brand Identity 2024
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Challenge copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-2"
            >
              <motion.p
                variants={fadeIn}
                className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4"
              >
                Overview
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-black tracking-tighter mb-8"
              >
                The Challenge
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-5 text-white/60 leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Solara Energy had built a genuinely impressive portfolio of solar infrastructure projects across North America and Europe. But their brand told a different story — one of a scrappy startup that hadn't grown up yet. Their visual identity was inconsistent, their messaging was generic, and their digital presence was failing to convert the enterprise clients they were actively pursuing.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  The challenge was multifaceted. Solara needed to appeal simultaneously to two very different audiences: institutional B2B clients — utilities, municipalities, and real-estate developers — who demanded credibility and precision, and a growing consumer segment of environmentally conscious homeowners who wanted warmth and trust. Most energy brands serve one or the other. Solara needed to serve both without feeling schizophrenic.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  On top of this, the renewable energy sector was experiencing explosive growth, bringing a wave of well-funded competitors with sophisticated brand strategies. Legacy energy companies were also pivoting to renewables, bringing enormous marketing budgets. Solara needed a brand that could stand shoulder-to-shoulder with the best in the industry — and stand out from all of them.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="bg-[#111111] border border-white/8 rounded-sm p-8 sticky top-28">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
                  Project Details
                </p>
                <ul className="space-y-5">
                  {projectDetails.map((detail) => (
                    <li key={detail.label} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-white">{detail.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4"
            >
              Process
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black tracking-tighter mb-16 max-w-2xl"
            >
              Our Approach
            </motion.h2>

            <div className="space-y-20">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
                >
                  {/* Text */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-start gap-5 mb-5">
                      <span className="text-6xl font-black text-amber-500/30 leading-none tabular-nums flex-shrink-0">
                        {phase.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight pt-2">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-white/60 leading-relaxed">{phase.description}</p>
                  </div>

                  {/* Visual placeholder */}
                  <div
                    className={`aspect-[4/3] bg-[#0a0a0a] border border-white/8 rounded-sm flex items-center justify-center ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <span className="text-4xl font-black text-amber-500/20 tracking-tighter">
                      {phase.number}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. FULL-BLEED VISUAL ─────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full aspect-[21/9] bg-gradient-to-r from-amber-900/20 to-amber-500/10 rounded-sm border border-amber-500/10 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />
            <div className="relative text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500/60 mb-3">
                Mockup
              </p>
              <p className="text-3xl md:text-5xl font-black text-white/20 tracking-tighter">
                Brand in Context
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. RESULTS ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4"
            >
              Results
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black tracking-tighter mb-16"
            >
              The Impact
            </motion.h2>

            {/* Metric cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
            >
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    variants={scaleIn}
                    className="bg-[#111111] border border-white/8 rounded-sm p-6 md:p-8"
                  >
                    <Icon size={20} className="text-amber-500 mb-4" />
                    <p className="text-4xl md:text-5xl font-black text-amber-500 tracking-tighter mb-2">
                      {metric.value}
                    </p>
                    <p className="text-sm font-bold text-white mb-2">{metric.label}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{metric.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Outcome copy */}
            <motion.div
              variants={staggerContainer}
              className="max-w-3xl space-y-5 text-white/60 leading-relaxed"
            >
              <motion.p variants={fadeInUp}>
                The new Solara Energy brand launched in March 2024 to immediate industry attention. Within the first week, the rebrand was featured in three leading design publications and shared widely across the renewable energy community. The response from Solara's existing clients was overwhelmingly positive — many reached out proactively to congratulate the team on the transformation.
              </motion.p>
              <motion.p variants={fadeInUp}>
                More importantly, the brand began delivering measurable business results almost immediately. Solara's sales team reported that enterprise prospects were engaging more seriously in early conversations, citing the brand's professionalism as a key trust signal. The new website, built on the refreshed identity, saw conversion rates on their enterprise inquiry form increase by 220% in the first quarter.
              </motion.p>
              <motion.p variants={fadeInUp}>
                By Q3 2024, Solara had closed three of their largest enterprise contracts to date, with two clients specifically referencing the brand's credibility as a factor in their decision. The rebrand had done exactly what it set out to do: transform Solara from a promising startup into a category-defining brand ready to lead the next era of renewable energy.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. TESTIMONIAL ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#0a0a0a] border border-white/8 rounded-sm p-10 md:p-16 max-w-4xl mx-auto"
          >
            <div className="text-amber-500 text-6xl font-black leading-none mb-6 select-none">
              &ldquo;
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-10">
              Northwind didn&apos;t just redesign our logo — they rebuilt how the world sees us. From the first strategy session to the final brand guidelines, every decision was rooted in a deep understanding of our business and our ambitions. The result is a brand we&apos;re genuinely proud of, one that opens doors we couldn&apos;t open before.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-500 font-black text-sm">JR</span>
              </div>
              <div>
                <p className="font-bold text-white">James Reyes</p>
                <p className="text-sm text-white/40">Chief Executive Officer, Solara Energy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. NEXT PROJECT CTA ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4"
            >
              What&apos;s Next
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
            >
              Ready to transform
              <br />
              <span className="text-amber-500">your brand?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg mb-12 max-w-xl mx-auto"
            >
              Let&apos;s build something that lasts. Explore more of our work or get in touch to start a conversation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                View All Work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
