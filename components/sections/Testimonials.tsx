"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-purple absolute top-0 right-1/4 w-80 h-80 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">Social Proof</p>
          <h2 className="section-heading mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-slate-500 dark:text-white/50 max-w-xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-7 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-5 right-5 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={32} className="text-primary-500 dark:text-primary-400 fill-primary-400" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.954L10 0l2.952 5.955 6.561.954-4.757 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-white/10 shrink-0">
                  <Image src={t.image} alt={t.name} width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 dark:text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
