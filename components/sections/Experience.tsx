"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeConfig = {
  "full-time": { label: "Full-time", color: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-400/10 border-green-200 dark:border-green-400/20" },
  "part-time": { label: "Part-time", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 border-blue-200 dark:border-blue-400/20" },
  internship: { label: "Internship", color: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 border-yellow-200 dark:border-yellow-400/20" },
  freelance: { label: "Freelance", color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-400/10 border-purple-200 dark:border-purple-400/20" },
  volunteer: { label: "Volunteer", color: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border-cyan-200 dark:border-cyan-400/20" },
};

export function Experience() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-cyan absolute bottom-0 right-0 w-96 h-96 opacity-8" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">Career Journey</p>
          <h2 className="section-heading mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-500 dark:text-white/50 max-w-xl mx-auto">
            My professional journey building software solutions and growing as a developer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6 top-6 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-dark shadow-glow-sm" />

                  <div className="glass-card p-6 md:p-8 group hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                        <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border", config.color)}>
                          {config.label}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/40">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-white/40 mb-4">
                      <MapPin size={12} />
                      {exp.location}
                    </div>

                    <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-5">{exp.description}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
