"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin, Mail, Calendar, GraduationCap, Briefcase, Award, Heart,
  Download, ArrowRight, CheckCircle2, Github, Twitter, Linkedin,
} from "lucide-react";
import { bio, experiences, education, certifications, siteConfig, socialLinks } from "@/lib/data";


export function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="orb orb-purple absolute top-0 left-0 w-[600px] h-[400px] opacity-10" />
        <div className="orb orb-cyan absolute top-0 right-0 w-96 h-96 opacity-8" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-subheading mb-3">About Me</p>
              <h1 className="section-heading mb-6">
                Passionate about <br />
                <span className="text-gradient">crafting digital</span>
                <br /> experiences
              </h1>
              <p className="text-slate-600 dark:text-white/60 leading-relaxed text-base md:text-lg mb-8">
                {bio.summary}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: MapPin, text: siteConfig.location, color: "text-cyan-500 dark:text-cyan-400" },
                  { icon: Mail, text: siteConfig.email, color: "text-primary-600 dark:text-primary-400" },
                  { icon: Calendar, text: "3+ Years Experience", color: "text-violet-600 dark:text-violet-400" },
                ].map(({ icon: Icon, text, color }) => (
                  <span
                    key={text}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/70"
                  >
                    <Icon size={13} className={color} />
                    {text}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                {[
                  { href: socialLinks.github, icon: Github, label: "GitHub" },
                  { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
                  { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary group">
                  Work With Me
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href={siteConfig.resumeUrl} className="btn-outline">
                  <Download size={16} />
                  Download CV
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/20 via-violet-500/10 to-cyan-500/10 blur-xl" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10">
                  <Image
                    src="/assets/me.jpeg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 288px, 320px"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-slate-900 dark:text-white font-medium">Available for hire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Heart size={24} className="text-primary-500 dark:text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">My Mission</h2>
            <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed italic">
              &ldquo;{bio.mission}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun facts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Fun Facts About Me</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bio.funFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-12">
            <Briefcase size={22} className="text-primary-500 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent" />
            <div className="space-y-8 pl-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[2.3rem] top-1.5 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-dark shadow-glow-sm" />
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{exp.title}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-white/40 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.slice(0, 3).map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-500 dark:text-white/50">
                          <CheckCircle2 size={14} className="text-primary-500 dark:text-primary-400 mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-12">
            <GraduationCap size={22} className="text-primary-500 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          </motion.div>
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex flex-wrap justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl">{edu.degree}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-white/50 text-sm mt-1">{edu.field}</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-white/40 bg-slate-100 dark:bg-white/5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 self-start">
                  {edu.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-5">{edu.description}</p>
              <div className="space-y-2">
                {edu.achievements.map((a, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-slate-500 dark:text-white/50">
                    <CheckCircle2 size={14} className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-10">
            <Award size={22} className="text-primary-500 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/15 dark:bg-primary-500/20 flex items-center justify-center mb-4">
                  <Award size={18} className="text-primary-500 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{cert.name}</h3>
                <p className="text-slate-400 dark:text-white/40 text-xs">{cert.issuer}</p>
                <p className="text-slate-300 dark:text-white/30 text-xs mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
