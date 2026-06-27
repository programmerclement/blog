"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 border-blue-200 dark:border-blue-400/20",
  Backend: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-400/10 border-green-200 dark:border-green-400/20",
  Mobile: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-400/10 border-purple-200 dark:border-purple-400/20",
  Databases: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 border-yellow-200 dark:border-yellow-400/20",
  Tools: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-400/10 border-orange-200 dark:border-orange-400/20",
  Cloud: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border-cyan-200 dark:border-cyan-400/20",
  Languages: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-400/10 border-red-200 dark:border-red-400/20",
};

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs text-slate-400 dark:text-white/40">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500"
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ name, level, category, delay = 0 }: {
  name: string; level: number; category: string; delay?: number;
}) {
  const colorClass = categoryColors[category] || "text-slate-600 dark:text-white/60 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2 }}
      className="glass-card p-4 cursor-default group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ width: `${level}%` }}
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-2">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">{name}</span>
          <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full border", colorClass)}>
            {level}%
          </span>
        </div>
        <div className="h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500"
          />
        </div>
        <span className={cn("text-[10px] mt-2 block", colorClass.split(" ")[0])}>
          {category}
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-purple absolute top-0 left-1/4 w-80 h-80 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">My Arsenal</p>
          <h2 className="section-heading mb-4">
            Technologies & <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-white/50 max-w-xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-glow-sm"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            {filtered.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                category={skill.category}
                delay={i * 0.04}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Detailed bars */}
        {activeCategory !== "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 glass-card p-8"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              {activeCategory} Proficiency
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {filtered.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
