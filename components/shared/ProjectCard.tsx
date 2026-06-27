"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { type Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 text-xs font-medium text-white/90">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-200"
                aria-label="View live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                aria-label="View source code"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-white/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[11px] text-slate-400 dark:text-white/40">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/5">
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1.5 text-xs text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors group/link"
            >
              View Details
              <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
    >
      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800/60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 text-xs font-medium text-white/90">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowRight size={12} />
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
