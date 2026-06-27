"use client";

import { motion } from "framer-motion";
import {
  Download, Briefcase, GraduationCap, Award, Code2,
  MapPin, Mail, Phone, Globe, Github, Linkedin, CheckCircle2, Calendar,
} from "lucide-react";
import { siteConfig, socialLinks, experiences, education, certifications, skills, skillCategories } from "@/lib/data";

const skillsByCategory = skillCategories.slice(1).map((cat) => ({
  category: cat,
  items: skills.filter((s) => s.category === cat),
}));

export function ResumeContent() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <p className="section-subheading mb-2">My Resume</p>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Interactive <span className="text-gradient">CV</span>
            </h1>
          </div>
          <a href={siteConfig.resumeUrl} download className="btn-primary self-start sm:self-auto">
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card overflow-hidden"
          id="resume-content"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-primary-50 dark:from-primary-600/20 via-violet-50 dark:via-violet-600/10 to-slate-50 dark:to-dark p-8 md:p-12 border-b border-slate-200 dark:border-white/5">
            <div className="orb orb-purple absolute top-0 right-0 w-64 h-64 opacity-20" />
            <div className="relative grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">
                  {siteConfig.name}
                </h2>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {siteConfig.title}
                </p>
                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed max-w-lg">
                  Dedicated full-stack developer with 3+ years of experience building scalable
                  web and mobile applications. Passionate about clean code, performance, and
                  delivering impactful solutions.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { icon: MapPin, text: siteConfig.location },
                  { icon: Mail, text: siteConfig.email },
                  { icon: Phone, text: siteConfig.phone },
                  { icon: Globe, text: "programmerclement.vercel.app" },
                  { icon: Github, text: "github.com/programmerclement" },
                  { icon: Linkedin, text: "linkedin.com/in/kwizerangogaclement" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-slate-600 dark:text-white/60">
                    <Icon size={13} className="text-primary-500 dark:text-primary-400 shrink-0" />
                    <span className="text-xs">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">
            {/* Left: experience + education */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-200 dark:border-white/5">
                  <Briefcase size={16} className="text-primary-500 dark:text-primary-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Work Experience
                  </h3>
                </div>
                <div className="space-y-7">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex flex-wrap justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                          <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/40">
                            <Calendar size={11} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/30 mt-0.5">
                            <MapPin size={11} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-white/60">
                            <span className="w-1 h-1 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-200 dark:border-white/5">
                  <GraduationCap size={16} className="text-primary-500 dark:text-primary-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Education
                  </h3>
                </div>
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-primary-600 dark:text-primary-400 text-sm">{edu.institution}</p>
                        <p className="text-slate-400 dark:text-white/40 text-xs mt-0.5">{edu.field}</p>
                      </div>
                      <span className="text-xs text-slate-400 dark:text-white/40">{edu.period}</span>
                    </div>
                    <ul className="mt-3 space-y-1">
                      {edu.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-white/60">
                          <CheckCircle2 size={11} className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            {/* Right: skills, certs, languages */}
            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-2 mb-5 pb-2 border-b border-slate-200 dark:border-white/5">
                  <Code2 size={16} className="text-primary-500 dark:text-primary-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Skills</h3>
                </div>
                <div className="space-y-5">
                  {skillsByCategory.slice(0, 4).map(({ category, items }) => (
                    <div key={category}>
                      <h4 className="text-xs font-semibold text-slate-400 dark:text-white/50 uppercase tracking-wider mb-2">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {items.slice(0, 6).map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-white/70"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-5 pb-2 border-b border-slate-200 dark:border-white/5">
                  <Award size={16} className="text-primary-500 dark:text-primary-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name}>
                      <p className="text-xs font-semibold text-slate-700 dark:text-white/80">{cert.name}</p>
                      <p className="text-[11px] text-slate-400 dark:text-white/40">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-5 pb-2 border-b border-slate-200 dark:border-white/5">
                  <Globe size={16} className="text-primary-500 dark:text-primary-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Languages</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { lang: "English", level: "Professional", pct: 90 },
                    { lang: "Kinyarwanda", level: "Native", pct: 100 },
                    { lang: "French", level: "Basic", pct: 40 },
                  ].map((l) => (
                    <div key={l.lang}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-700 dark:text-white/70">{l.lang}</span>
                        <span className="text-slate-400 dark:text-white/40">{l.level}</span>
                      </div>
                      <div className="h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500"
                          style={{ width: `${l.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
