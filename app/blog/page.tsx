"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";
import { ArrowRight, Clock, Tag } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = "Design" | "Strategy" | "Motion" | "Industry" | "Process";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured: boolean;
}

const articles: Article[] = [
  {
    id: "death-of-generic-brand",
    title: "The Death of the Generic Brand — Why Distinctiveness Is the New Strategy",
    excerpt:
      "Brands are finally waking up to a hard truth: playing it safe is the riskiest move you can make. In a world of infinite scroll and shrinking attention, the only brands that survive are the ones brave enough to be unmistakably themselves.",
    category: "Strategy",
    author: "Alex Mercer",
    authorRole: "Creative Director",
    date: "June 12, 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "designing-for-motion-first",
    title: "Designing for Motion First: A New Approach to Brand Systems",
    excerpt:
      "What if motion wasn't an afterthought but the foundation of your entire brand system? We explore how leading studios are building identities that live and breathe from the first frame.",
    category: "Design",
    author: "Lena Park",
    authorRole: "Motion Lead",
    date: "May 28, 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "timeless-logo-lessons",
    title: "What Makes a Logo Timeless? Lessons from 50 Years of Iconic Marks",
    excerpt:
      "We studied five decades of logos that have outlasted trends, recessions, and rebrands to find the common thread. The answer is simpler — and harder — than you think.",
    category: "Design",
    author: "Marcus Webb",
    authorRole: "Brand Designer",
    date: "May 14, 2025",
    readTime: "5 min",
    featured: false,
  },
  {
    id: "brief-is-the-work",
    title: "The Brief is the Work: How We Run Discovery at Northwind",
    excerpt:
      "Most agencies treat the brief as a formality. We treat it as the most important deliverable of the entire engagement. Here's the exact process we use to get to the real problem.",
    category: "Process",
    author: "Alex Mercer",
    authorRole: "Creative Director",
    date: "April 30, 2025",
    readTime: "7 min",
    featured: false,
  },
  {
    id: "web-performance-brand-value",
    title: "Web Performance as a Brand Value",
    excerpt:
      "A slow website isn't just a technical problem — it's a brand statement. We make the case for treating performance as a core expression of who you are and what you stand for.",
    category: "Industry",
    author: "Sasha Kim",
    authorRole: "Tech Director",
    date: "April 15, 2025",
    readTime: "4 min",
    featured: false,
  },
  {
    id: "color-psychology-2025",
    title: "Color Psychology in 2025: Beyond the Basics",
    excerpt:
      "Forget the tired 'blue means trust' playbook. We dig into how cultural context, generational shifts, and digital rendering are rewriting the rules of color strategy for modern brands.",
    category: "Strategy",
    author: "Lena Park",
    authorRole: "Motion Lead",
    date: "March 22, 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "motion-design-trends-2025",
    title: "Motion Design Trends Shaping Digital Experiences",
    excerpt:
      "From physics-based interactions to AI-assisted animation, the motion design landscape is evolving faster than ever. Here are the trends we're watching — and the ones we're already using.",
    category: "Motion",
    author: "Marcus Webb",
    authorRole: "Brand Designer",
    date: "March 8, 2025",
    readTime: "5 min",
    featured: false,
  },
];

const CATEGORIES: Array<"All" | Category> = [
  "All",
  "Design",
  "Strategy",
  "Motion",
  "Industry",
  "Process",
];

const CATEGORY_COLORS: Record<Category, string> = {
  Design: "bg-blue-900/30",
  Strategy: "bg-amber-900/30",
  Motion: "bg-purple-900/30",
  Industry: "bg-green-900/30",
  Process: "bg-rose-900/30",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CategoryPill({ category }: { category: Category }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
      <Tag size={10} />
      {category}
    </span>
  );
}

function AuthorRow({
  author,
  authorRole,
  date,
  readTime,
}: {
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
        <span className="text-amber-400 text-xs font-bold">{getInitials(author)}</span>
      </div>
      <div className="min-w-0">
        <p className="text-white text-sm font-medium leading-none mb-0.5">{author}</p>
        <p className="text-white/40 text-xs">{authorRole}</p>
      </div>
      <div className="ml-auto flex items-center gap-3 text-white/40 text-xs flex-shrink-0">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {readTime}
        </span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = articles.find((a) => a.featured)!;
  const nonFeaturedArticles = articles.filter((a) => !a.featured);

  const filteredArticles =
    activeCategory === "All"
      ? nonFeaturedArticles
      : nonFeaturedArticles.filter((a) => a.category === activeCategory);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
              The Studio Journal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Ideas, process, and perspective{" "}
            <span className="text-amber-400">from Northwind</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg leading-relaxed"
          >
            We share our thinking on design, strategy, and studio culture — the
            ideas that shape our work and the lessons we pick up along the way.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left: Image */}
            <motion.div variants={scaleIn} className="relative">
              <div
                className={`aspect-[4/3] rounded-xl ${
                  CATEGORY_COLORS[featuredArticle.category]
                } border border-white/5 flex items-end p-6 overflow-hidden`}
              >
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <CategoryPill category={featuredArticle.category} />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black tracking-widest uppercase">
                  Featured
                </span>
                <CategoryPill category={featuredArticle.category} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-white/60 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <AuthorRow
                author={featuredArticle.author}
                authorRole={featuredArticle.authorRole}
                date={featuredArticle.date}
                readTime={featuredArticle.readTime}
              />

              <Link
                href={`/blog/${featuredArticle.id}`}
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors group mt-2"
              >
                Read Article
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────────── */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-black"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── ARTICLES GRID ──────────────────────────────────────────── */}
          {filteredArticles.length === 0 ? (
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-white/40 text-center py-16"
            >
              No articles in this category yet.
            </motion.p>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article) => (
                <motion.div key={article.id} variants={fadeInUp}>
                  <Link
                    href={`/blog/${article.id}`}
                    className="group flex flex-col h-full bg-[#111111] rounded-xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card image */}
                    <div
                      className={`aspect-[16/9] ${
                        CATEGORY_COLORS[article.category]
                      } relative overflow-hidden flex-shrink-0`}
                    >
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <div className="absolute bottom-3 left-3">
                        <CategoryPill category={article.category} />
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <h3 className="font-bold text-lg text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="pt-2 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-400 text-xs font-bold">
                              {getInitials(article.author)}
                            </span>
                          </div>
                          <span className="text-white/60 text-xs font-medium">
                            {article.author}
                          </span>
                          <span className="ml-auto text-white/30 text-xs">
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1 text-white/30 text-xs">
                            <Clock size={10} />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#111111] rounded-xl border border-white/5 p-10 md:p-14 text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Stay in the loop
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              Get new articles, studio updates, and creative insights delivered
              straight to your inbox. No spam, ever.
            </p>

            {subscribed ? (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                You&apos;re subscribed — welcome aboard!
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
