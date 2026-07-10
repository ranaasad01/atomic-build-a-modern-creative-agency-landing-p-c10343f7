"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { APP_NAME, APP_EMAIL } from "@/lib/data";
import { Sparkles, Layout, Activity, FileCode, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  icon: React.ElementType;
  name: string;
  description: string;
  process: string[];
  deliverables: string[];
  startingFrom: string;
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  items: string[];
  highlighted: boolean;
  cta: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    id: "brand",
    icon: Sparkles,
    name: "Brand Identity",
    description:
      "We craft distinctive visual identities that resonate across every touchpoint. From logo systems to comprehensive brand guidelines, every decision is intentional, strategic, and built to last. Your brand is your most valuable asset — we treat it that way.",
    process: [
      "Discovery & Research",
      "Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
    ],
    deliverables: [
      "Logo system",
      "Color palette",
      "Typography guide",
      "Brand book",
    ],
    startingFrom: "$8,000",
  },
  {
    id: "web",
    icon: Layout,
    name: "Web Design & Dev",
    description:
      "Pixel-perfect interfaces engineered for performance and conversion. We design and build sites that don't just look exceptional — they work exceptionally. From UX research through to launch, we own the full stack of your digital presence.",
    process: [
      "UX Research",
      "Wireframing",
      "Visual Design",
      "Development & Launch",
    ],
    deliverables: [
      "Responsive website",
      "CMS integration",
      "Performance optimization",
      "3 months support",
    ],
    startingFrom: "$12,000",
  },
  {
    id: "motion",
    icon: Activity,
    name: "Motion & Animation",
    description:
      "Bring your brand to life with purposeful motion. From subtle micro-interactions that delight users to full cinematic brand sequences, we make things move in ways that feel inevitable. Motion is the language of modern brands.",
    process: [
      "Concept & Storyboard",
      "Style Frames",
      "Animation",
      "Delivery & Formats",
    ],
    deliverables: [
      "Brand animations",
      "UI micro-interactions",
      "Social content",
      "Source files",
    ],
    startingFrom: "$5,000",
  },
  {
    id: "strategy",
    icon: FileCode,
    name: "Strategy",
    description:
      "Great creative starts with great thinking. Our strategy practice digs deep into your market, your audience, and your ambitions to produce a clear, actionable roadmap. We give you the clarity to make bold decisions with confidence.",
    process: [
      "Market Analysis",
      "Audience Research",
      "Strategy Document",
      "Roadmap",
    ],
    deliverables: [
      "Brand strategy deck",
      "Competitor analysis",
      "Content pillars",
      "6-month roadmap",
    ],
    startingFrom: "$4,000",
  },
];

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$5k",
    description: "For early-stage brands ready to make their mark.",
    items: [
      "Brand strategy session",
      "Logo & mark design",
      "Color & type system",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$18k",
    description: "Our most popular package for growing companies.",
    items: [
      "Full brand identity",
      "Website design & build",
      "Motion brand kit",
      "Brand guidelines doc",
      "3 months of support",
      "Quarterly strategy review",
    ],
    highlighted: true,
    cta: "Start a Project",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For established brands with complex, multi-market needs.",
    items: [
      "Everything in Studio",
      "Multi-brand architecture",
      "Campaign creative",
      "Dedicated creative team",
      "Monthly retainer option",
      "Priority turnaround",
      "Executive workshops",
      "Annual brand audit",
    ],
    highlighted: false,
    cta: "Let's Talk",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
      {children}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Our Services</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Everything your brand{" "}
            <span className="text-amber-400">needs to lead.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From foundational brand strategy to cutting-edge digital experiences,
            {APP_NAME} delivers comprehensive creative services that move
            businesses forward. One studio. Every discipline.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── 2. SERVICES DETAIL ── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>What We Do</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Four disciplines.{" "}
              <span className="text-amber-400">One vision.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  className="border border-white/10 bg-[#0a0a0a] rounded-xl p-8 flex flex-col gap-6 hover:border-amber-500/20 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {service.name}
                      </h3>
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                        From {service.startingFrom}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Process */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                      Process
                    </p>
                    <ol className="space-y-2">
                      {service.process.map((step, i) => (
                        <li
                          key={step}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <span className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-[10px] font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckCircle
                            size={14}
                            className="text-amber-400 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRICING TIERS ── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Pricing</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            >
              Simple, transparent{" "}
              <span className="text-amber-400">pricing.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 max-w-xl mx-auto"
            >
              No hidden fees. No surprises. Just honest pricing for exceptional
              creative work.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={scaleIn}
                className={`relative rounded-xl p-8 flex flex-col gap-6 ${
                  tier.highlighted
                    ? "bg-amber-500 text-black border-2 border-amber-400"
                    : "bg-[#111111] border border-white/10 text-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-black text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-500/40">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      tier.highlighted ? "text-black/60" : "text-white/40"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`text-5xl font-black tracking-tight mb-2 ${
                      tier.highlighted ? "text-black" : "text-white"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      tier.highlighted ? "text-black/70" : "text-white/50"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={15}
                        className={`flex-shrink-0 ${
                          tier.highlighted ? "text-black" : "text-amber-400"
                        }`}
                      />
                      <span
                        className={
                          tier.highlighted ? "text-black/80" : "text-white/70"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
                    tier.highlighted
                      ? "bg-black text-amber-400 hover:bg-black/80"
                      : "bg-amber-500 text-black hover:bg-amber-400"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-16"
          >
            {[
              {
                icon: Zap,
                title: "Fast Turnaround",
                body: "Most projects kick off within 2 weeks of signing.",
              },
              {
                icon: Shield,
                title: "Satisfaction Guaranteed",
                body: "We iterate until you love it. No exceptions.",
              },
              {
                icon: Clock,
                title: "Ongoing Support",
                body: "Every project includes post-launch care and guidance.",
              },
            ].map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <BadgeIcon size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">
                      {badge.title}
                    </p>
                    <p className="text-white/50 text-sm">{badge.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="bg-[#111111] py-24 md:py-32 border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Let's Work Together</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Ready to build something{" "}
            <span className="text-amber-400">remarkable?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Tell us about your project and we'll get back to you within 24 hours
            with a tailored proposal.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
            <a
              href={`mailto:${APP_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:border-amber-500/40 hover:text-amber-400 transition-all duration-200"
            >
              Email Us Directly
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
