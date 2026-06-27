"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-15" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Currently available for projects
          </div>

          <h2 className="section-heading text-white mb-4">
            Have a project in mind? <br />
            <span className="text-gradient">Let's build it together</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg mb-10">
            Whether you need a full-stack web app, a mobile application, or just want to
            chat about technology — I'm just a message away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base py-4 px-8 group">
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base py-4 px-8"
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </a>
          </div>

          <p className="mt-8 text-white/30 text-sm">
            Or email me directly at{" "}
            <a
              href={socialLinks.email}
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
