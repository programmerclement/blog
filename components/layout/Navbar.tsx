"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label={siteConfig.name}>
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Image src="/assets/logo.png" alt="Logo" fill className="object-cover" sizes="36px" />
              </div>
              <div>
                <span className="font-black text-slate-900 dark:text-white text-lg tracking-tight leading-none">
                  Programmer Clement
                </span>
                <span className="block text-[10px] text-primary-500 dark:text-primary-400 font-medium leading-none mt-0.5">
                  Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10"
                        : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-violet-400 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side: Theme toggle + CTA + Mobile */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
              >
                Hire Me
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-dark border-l border-slate-200 dark:border-white/10 flex flex-col md:hidden"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-slate-200 dark:border-white/10">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                    <Code2 size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-base">Clement</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                {navigation.map((item, i) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-white border border-primary-200 dark:border-primary-500/30"
                            : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="px-4 pb-8 border-t border-slate-200 dark:border-white/10 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-white/40">Appearance</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Hire Me
                </Link>
                <p className="text-center text-xs text-slate-400 dark:text-white/40">
                  {siteConfig.email}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
