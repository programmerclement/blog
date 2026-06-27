"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="section-subheading mb-3">Tech I Work With</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            My Favorite <span className="text-gradient">Stack</span>
          </h3>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: [0, -50 * techStack.length] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-4"
            style={{ width: `${doubled.length * 160}px` }}
          >
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="glass-card px-6 py-3 flex items-center gap-2.5 whitespace-nowrap shrink-0 w-36 justify-center"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-sm font-medium text-slate-600 dark:text-white/70">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
