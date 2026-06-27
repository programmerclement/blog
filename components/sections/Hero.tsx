"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  MapPin,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react";
import { bio, siteConfig, socialLinks } from "@/lib/data";

const roles = bio.roles;

function TypewriterText({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.slice(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-gradient">
      {currentText}
      <span className="inline-block w-0.5 h-8 bg-primary-400 ml-1 animate-pulse" />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="orb orb-purple absolute top-1/4 -left-32 w-[600px] h-[600px] opacity-25" />
      <div className="orb orb-cyan absolute bottom-1/4 -right-32 w-[400px] h-[400px] opacity-15" />
      <div className="orb orb-violet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-24 w-3 h-3 rounded-full bg-primary-400 opacity-60 animate-float" />
      <div
        className="absolute top-48 right-64 w-2 h-2 rounded-full bg-cyan-400 opacity-40 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-24 w-2.5 h-2.5 rounded-full bg-violet-400 opacity-50 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-600 dark:text-primary-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {siteConfig.availability}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-white/60 font-medium mb-2"
            >
              {bio.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-4"
            >
              {bio.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient">
                {bio.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 h-10"
            >
              <TypewriterText words={roles} />
            </motion.div>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              {bio.headline}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-slate-500 dark:text-white/40 text-sm mb-8"
            >
              <MapPin size={14} className="text-cyan-500 dark:text-cyan-400" />
              <span>{siteConfig.location}</span>
              <span className="text-slate-300 dark:text-white/20">·</span>
              <span className="text-green-600 dark:text-green-400 font-medium">{siteConfig.availability}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Link href="/projects" className="btn-primary group text-base py-3.5 px-7">
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link href={siteConfig.resumeUrl} className="btn-outline text-base py-3.5 px-7">
                <Download size={18} />
                Download CV
              </Link>
            </motion.div>

            {/* Quick links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/20" />
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/20" />
              <a
                href={socialLinks.email}
                className="text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Email Me
              </a>
            </motion.div>
          </motion.div>

          {/* Photo & stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col items-center gap-6"
          >
            {/* Profile photo */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/30 via-violet-500/20 to-cyan-500/10 blur-xl animate-pulse-slow" />

              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500 via-violet-500 to-cyan-500 opacity-70" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark">
                <Image
                  src="/assets/me.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 glass-card px-3 py-2 flex items-center gap-2"
              >
                <Code2 size={14} className="text-primary-400" />
                <span className="text-xs text-slate-900 dark:text-white font-medium whitespace-nowrap">
                  3+ Years Exp.
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 glass-card px-3 py-2 flex items-center gap-2"
              >
                <Zap size={14} className="text-cyan-400" />
                <span className="text-xs text-slate-900 dark:text-white font-medium">Available Now</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-24 glass-card px-3 py-2 flex items-center gap-2"
              >
                <Sparkles size={14} className="text-violet-400" />
                <span className="text-xs text-slate-900 dark:text-white font-medium">15+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 dark:text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-300 dark:border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-slate-400 dark:bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
