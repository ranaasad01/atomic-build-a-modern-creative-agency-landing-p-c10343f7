"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { useTranslations } from "next-intl";
import {
  APP_NAME,
  APP_EMAIL,
  CTA_LABEL,
  CTA_HREF,
} from "@/lib/data";
import { ArrowRight, Sparkles, Layout, Activity, FileCode, Star, Mail, Check } from 'lucide-react';

// ─── Inline data ────────────────────────────────────────────────────────────

const services = [
  {
    id: "brand",
    icon: Sparkles,
    title: "Brand Identity",
    description:
      "We craft distinctive visual identities that resonate. From logo systems to full brand guidelines, every touchpoint is intentional.",
    tags: ["Strategy", "Logomark", "Typography"],
  },
  {
    id: "web",
    icon: Layout,
    title: "Web Design & Dev",
    description:
      "Pixel-perfect interfaces built for performance. We design and engineer sites that convert visitors into believers.",
    tags: ["UI/UX", "Next.js", "Webflow"],
  },
  {
    id: "motion",
    icon: Activity,
    title: "Motion & Animation",
    description:
      "Bring your brand to life with purposeful motion. From micro-interactions to full cinematic sequences, we make things move.",
    tags: ["After Effects", "Lottie", "GSAP"],
  },
  {
    id: "digital",
    icon: FileCode,
    title: "Digital Campaigns",
    description:
      "Integrated campaigns that cut through the noise. Strategy, creative, and execution — all under one roof.",
    tags: ["Social", "OOH", "Content"],
  },
];

const works = [
  {
    id: "w1",
    title: "Solara Energy",
    category: "Brand Identity",
    image: "https://cdn.prod.website-files.com/65369d87d582954978583d70/65525d897f1c7dbfb525cf52_SOL_IMAGOTIPO_2.svg",
    span: "col-span-2",
  },
  {
    id: "w2",
    title: "Kova Spirits",
    category: "Packaging Design",
    image: "https://cdn.prod.website-files.com/65369d87d582954978583d70/65525d897f1c7dbfb525cf52_SOL_IMAGOTIPO_2.svg",
    span: "col-span-1",
  },
  {
    id: "w3",
    title: "Meridian Finance",
    category: "Web Design",
    image: "https://liquorfreight.com/cdn/shop/products/image_42d1e1d6-5132-419f-81ce-0f696e65d6ff.webp?v=1679981423",
    span: "col-span-1",
  },
  {
    id: "w4",
    title: "Bloom Wellness",
    category: "Motion Campaign",
    image: "https://media.licdn.com/dms/image/v2/D560BAQGB8uVogDAXrg/company-logo_200_200/B56ZgqIKkUHQAM-/0/1753053440584?e=2147483647&v=beta&t=jdF-239hKRxS8L3yg3aNYP34yyFWJjSkuB9JT2NRRUc",
    span: "col-span-1",
  },
  {
    id: "w5",
    title: "Apex Athletics",
    category: "Brand + Digital",
    image: "https://static.wixstatic.com/media/8a5ce4_9db36902a80e4f9cafd07c88d9e0d450~mv2.png/v1/fit/w_2500,h_1330,al_c/8a5ce4_9db36902a80e4f9cafd07c88d9e0d450~mv2.png",
    span: "col-span-2",
  },
];

const clients = [
  "Solara",
  "Meridian",
  "Kova",
  "Bloom",
  "Apex",
  "Vantage",
  "Orion",
  "Crest",
];

const testimonial = {
  quote:
    "Northwind didn't just design our brand — they gave us a language. Every asset they delivered felt like it had been pulled from the future of our industry.",
  author: "Priya Mehta",
  role: "Chief Marketing Officer",
  company: "Solara Energy",
  avatar: "https://www.6sigma.us/wp-content/uploads/2024/08/project-delivery.webp",
};

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "8", label: "Years of Craft" },
  { value: "12", label: "Industry Awards" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest">
      {children}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const motionProps = (variants: Variants) =>
    shouldReduceMotion
      ? {}
      : {
          variants,
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-80px" },
        };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
  }

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 lg:px-8"
      >
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] rounded-full bg-amber-600/6 blur-[100px]" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <SectionLabel>{t("hero.label")}</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] text-balance mb-8"
            >
              {t("hero.headline1")}{" "}
              <span className="text-amber-400">{t("hero.headline2")}</span>
              <br />
              {t("hero.headline3")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-10 text-pretty"
            >
              {t("hero.subtext")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href={CTA_HREF}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-black font-bold text-sm rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                {CTA_LABEL}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/70 font-medium text-sm rounded-sm hover:border-white/30 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {t("hero.viewWork")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-[#0a0a0a] px-6 py-6 flex flex-col gap-1"
              >
                <span className="text-3xl font-black text-amber-400">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...motionProps(staggerContainer)}
            className="mb-16"
          >
            <motion.div {...motionProps(fadeInUp)} className="mb-4">
              <SectionLabel>{t("services.label")}</SectionLabel>
            </motion.div>
            <motion.h2
              {...motionProps(fadeInUp)}
              className="text-4xl md:text-5xl font-black tracking-tight text-balance max-w-xl"
            >
              {t("services.heading")}
            </motion.h2>
          </motion.div>

          <motion.div
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden"
          >
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  variants={scaleIn}
                  whileHover={{ backgroundColor: "rgba(245,158,11,0.04)" }}
                  className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-white/40 border border-white/8 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────────── */}
      <section
        id="work"
        className="py-24 md:py-32 px-6 lg:px-8 bg-[#0d0d0d]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...motionProps(staggerContainer)} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div {...motionProps(fadeInUp)} className="mb-4">
                <SectionLabel>{t("work.label")}</SectionLabel>
              </motion.div>
              <motion.h2
                {...motionProps(fadeInUp)}
                className="text-4xl md:text-5xl font-black tracking-tight text-balance"
              >
                {t("work.heading")}
              </motion.h2>
            </div>
            <motion.p
              {...motionProps(fadeIn)}
              className="text-white/40 text-sm max-w-xs leading-relaxed"
            >
              {t("work.subtext")}
            </motion.p>
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {works.map((work, i) => (
              <motion.div
                key={work.id}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-sm bg-white/5 border border-white/5 ${
                  work.span === "col-span-2" ? "md:col-span-2" : "md:col-span-1"
                } ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{work.title}</h3>
                </div>
                {/* Always-visible label on mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent md:hidden">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-0.5">
                    {work.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT LOGO STRIP ────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.p
            {...motionProps(fadeIn)}
            className="text-center text-xs font-bold uppercase tracking-widest text-white/25 mb-10"
          >
            {t("clients.label")}
          </motion.p>
          <motion.div
            {...motionProps(staggerContainer)}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          >
            {clients.map((name) => (
              <motion.span
                key={name}
                variants={fadeIn}
                className="text-white/20 font-black text-xl tracking-tight hover:text-white/50 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / TESTIMONIAL ──────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: about copy */}
            <motion.div {...motionProps(slideInLeft)}>
              <SectionLabel>{t("about.label")}</SectionLabel>
              <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance">
                {t("about.heading")}
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed text-pretty">
                {t("about.body1")}
              </p>
              <p className="mt-4 text-white/50 leading-relaxed text-pretty">
                {t("about.body2")}
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  t("about.point1"),
                  t("about.point2"),
                  t("about.point3"),
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: testimonial card */}
            <motion.div {...motionProps(slideInRight)}>
              <div className="relative p-8 md:p-10 rounded-sm border border-white/8 bg-white/[0.03] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_64px_-16px_rgba(0,0,0,0.5)]">
                {/* Amber accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

                <div className="flex gap-1 mb-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-white/80 text-pretty mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="font-bold text-sm text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-white/40">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 md:py-32 px-6 lg:px-8 bg-[#0d0d0d]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: CTA copy */}
            <motion.div {...motionProps(slideInLeft)}>
              <SectionLabel>{t("contact.label")}</SectionLabel>
              <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance">
                {t("contact.heading")}
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed max-w-md text-pretty">
                {t("contact.subtext")}
              </p>
              <a
                href={`mailto:${APP_EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors duration-200 group"
              >
                <Mail size={16} />
                <span>{APP_EMAIL}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </motion.div>

            {/* Right: contact form */}
            <motion.div {...motionProps(slideInRight)}>
              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-sm border border-amber-500/30 bg-amber-500/5 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                    <Check size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("contact.successTitle")}</h3>
                  <p className="text-white/50 text-sm">{t("contact.successBody")}</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-widest text-white/30"
                      >
                        {t("contact.fieldName")}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder={t("contact.placeholderName")}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder-white/25 focus:outline-none focus:border-amber-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-widest text-white/30"
                      >
                        {t("contact.fieldEmail")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder={t("contact.placeholderEmail")}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder-white/25 focus:outline-none focus:border-amber-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-widest text-white/30"
                    >
                      {t("contact.fieldMessage")}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={t("contact.placeholderMessage")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder-white/25 focus:outline-none focus:border-amber-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-amber-500 text-black font-bold text-sm rounded-sm hover:bg-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d] flex items-center justify-center gap-2 group"
                  >
                    {t("contact.submit")}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}