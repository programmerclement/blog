"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/shared/ProjectCard";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="orb orb-violet absolute top-1/2 left-0 w-64 h-64 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-subheading mb-3">My Work</p>
            <h2 className="section-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors group shrink-0"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
