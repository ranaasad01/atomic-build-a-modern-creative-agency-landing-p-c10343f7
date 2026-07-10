"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { navLinks, socialLinks, APP_NAME, APP_EMAIL, APP_TAGLINE } from "@/lib/data";
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function getHref(href: string) {
    if (href.startsWith("#") && pathname !== "/") {
      return "/" + href;
    }
    return href;
  }

  const currentYear = 2025;

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Main footer content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit group">
              <span className="w-7 h-7 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-xs tracking-tighter">NW</span>
              </span>
              <span className="font-bold text-base tracking-tight text-white">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {APP_TAGLINE}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-500 hover:border-amber-500/40 transition-all duration-200 text-xs font-bold"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav column */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Get in Touch
            </p>
            <a
              href={`mailto:${APP_EMAIL}`}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-amber-500 transition-colors duration-200 mb-6 group"
            >
              <Mail size={14} className="flex-shrink-0" />
              <span>{APP_EMAIL}</span>
            </a>
            <Link
              href={getHref("#contact")}
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black text-sm font-bold rounded-sm hover:bg-amber-400 transition-all duration-200 hover:gap-3 group"
            >
              Start a Project
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}