"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Lightbulb, Target, Zap } from "lucide-react";
import { bio } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code is not optional — it's a discipline.",
    color: "text-primary-600 dark:text-primary-400",
    bg: "bg-primary-100 dark:bg-primary-400/10",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I turn complex real-world challenges into elegant, scalable digital solutions.",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-100 dark:bg-yellow-400/10",
  },
  {
    icon: Target,
    title: "User-Focused",
    description: "Every design and architecture decision is made with the end user in mind.",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-400/10",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "I ship quickly without sacrificing quality, always meeting deadlines.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-400/10",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-violet absolute top-1/2 right-0 w-96 h-96 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subheading mb-3">Who I Am</p>
            <h2 className="section-heading mb-6">
              Passionate about building{" "}
              <span className="text-gradient">meaningful software</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed text-base md:text-lg mb-6">
              {bio.summary}
            </p>
            <p className="text-slate-500 dark:text-white/50 leading-relaxed text-base mb-8 border-l-2 border-primary-500/50 pl-4 italic">
              &ldquo;{bio.mission}&rdquo;
            </p>
            <Link href="/about" className="btn-primary group">
              Learn More About Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${h.bg} flex items-center justify-center mb-4`}>
                  <h.icon size={20} className={h.color} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{h.title}</h3>
                <p className="text-slate-500 dark:text-white/50 text-xs leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
