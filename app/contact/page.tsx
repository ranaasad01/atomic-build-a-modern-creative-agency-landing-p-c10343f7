"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { APP_EMAIL, APP_NAME } from "@/lib/data";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "timeline",
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A brand identity project typically takes 6–10 weeks, while a full web design and development engagement runs 10–16 weeks. We'll provide a detailed timeline during the proposal phase so you know exactly what to expect at every milestone.",
  },
  {
    id: "startups",
    question: "Do you work with startups?",
    answer:
      "Absolutely. Some of our most exciting work has been with early-stage companies building their identity from the ground up. We offer flexible engagement models suited to startup budgets and timelines, and we love the energy of helping a new brand find its voice.",
  },
  {
    id: "information",
    question: "What information do you need to get started?",
    answer:
      "The more context the better, but we can work with whatever you have. Ideally, share your project goals, target audience, timeline, and budget range. If you have existing brand assets, competitor references, or inspiration, bring those too. Our discovery call is designed to fill in any gaps.",
  },
  {
    id: "retainer",
    question: "Do you offer retainer arrangements?",
    answer:
      "Yes. For clients who need ongoing creative support — whether that's monthly content, iterative design updates, or strategic advisory — we offer retainer packages starting at 20 hours per month. Retainer clients receive priority scheduling and a dedicated point of contact.",
  },
];

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budgetRange: "",
  description: "",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-6">
      {children}
    </span>
  );
}

function InputField({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-white/60 text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-amber-500 focus:outline-none w-full transition-colors duration-200";

function StudioInfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-amber-500" />
      </div>
      <div>
        <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-white text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block hover:opacity-80 transition-opacity duration-200"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={isOpen}
            >
              <span className="text-white font-medium text-sm md:text-base pr-4">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-amber-500 border-amber-500 rotate-45"
                    : "group-hover:border-amber-500/50"
                }`}
              >
                <span
                  className={`text-sm font-bold leading-none ${
                    isOpen ? "text-black" : "text-white/60"
                  }`}
                >
                  +
                </span>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const motionProps = (variants: Variants) => ({
    variants,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-80px" },
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Get In Touch</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Let&apos;s build something{" "}
            <span className="text-amber-500">remarkable</span>
            <br />
            together.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Whether you have a fully-formed brief or just a spark of an idea,
            we&apos;d love to hear from you. Tell us about your project and
            let&apos;s start a conversation.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white/60 text-sm">
                Currently accepting new projects for{" "}
                <span className="text-white font-medium">Q3 2025</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Form */}
            <motion.div
              {...motionProps(slideInLeft)}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-[#111111] border border-white/10 rounded-xl p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-amber-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Message received!
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    Thanks for reaching out. We&apos;ll review your inquiry and
                    get back to you within 24 hours. In the meantime, feel free
                    to explore our work.
                  </p>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    View Our Work <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Your Name" id="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </InputField>

                    <InputField label="Email Address" id="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </InputField>
                  </div>

                  <InputField label="Company / Organisation" id="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc. (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </InputField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Project Type" id="projectType">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="brand">Brand Identity</option>
                        <option value="web">Web Design</option>
                        <option value="motion">Motion</option>
                        <option value="strategy">Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </InputField>

                    <InputField label="Budget Range" id="budgetRange">
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        required
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="under10k">Under $10k</option>
                        <option value="10k-25k">$10k – $25k</option>
                        <option value="25k-50k">$25k – $50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                    </InputField>
                  </div>

                  <InputField label="Project Description" id="description">
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      placeholder="Tell us about your project — goals, timeline, any references or inspiration you have in mind..."
                      value={formData.description}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </InputField>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    Send Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Studio Info */}
            <motion.div
              {...motionProps(slideInRight)}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Studio details */}
              <div className="bg-[#111111] border border-white/10 rounded-xl p-8 flex flex-col gap-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                  Studio Info
                </p>
                <StudioInfoRow
                  icon={MapPin}
                  label="Address"
                  value="340 West 28th Street, New York, NY 10001"
                />
                <StudioInfoRow
                  icon={Mail}
                  label="Email"
                  value={APP_EMAIL}
                  href={`mailto:${APP_EMAIL}`}
                />
                <StudioInfoRow
                  icon={Phone}
                  label="Phone"
                  value="+1 (212) 555-0192"
                  href="tel:+12125550192"
                />
                <StudioInfoRow
                  icon={Clock}
                  label="Hours"
                  value="Mon–Fri, 9am–6pm EST"
                />
              </div>

              {/* Availability */}
              <div className="bg-[#111111] border border-white/10 rounded-xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                  Availability
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-white font-semibold text-sm">
                    Accepting new projects
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  We have capacity for{" "}
                  <span className="text-white font-medium">2 new projects</span>{" "}
                  starting Q3 2025. Reach out early to secure your spot.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/20 to-amber-500/5 flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative text-center">
                    <MapPin size={32} className="text-amber-500/40 mx-auto mb-2" />
                    <p className="text-white/30 text-xs font-medium">
                      New York, NY
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-white/50 text-xs">
                    340 West 28th Street · Chelsea · New York
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...motionProps(staggerContainer)}
            className="mb-12 text-center"
          >
            <motion.div {...motionProps(fadeInUp)}>
              <SectionLabel>FAQ</SectionLabel>
            </motion.div>
            <motion.h2
              {...motionProps(fadeInUp)}
              className="text-3xl md:text-4xl font-black tracking-tight text-white"
            >
              Common questions
            </motion.h2>
          </motion.div>

          <motion.div {...motionProps(fadeIn)}>
            <FaqAccordion items={FAQ_ITEMS} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
