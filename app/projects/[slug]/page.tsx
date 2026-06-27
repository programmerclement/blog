import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft, Calendar, Tag } from "lucide-react";
import { projects } from "@/lib/data";
import { formatDateShort } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-xs font-medium text-primary-600 dark:text-primary-300">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40">
              <Calendar size={12} />
              {formatDateShort(project.date)}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-xs text-green-600 dark:text-green-400">
              {project.status === "completed" ? "Completed" : "In Progress"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} />
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>

        {/* Cover image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/60">
          <Image src={project.image} alt={project.title} fill className="object-contain object-center group-hover:scale-105 transition-transform duration-500" priority sizes="(max-width: 1200px) 100vw, 960px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About This Project</h2>
            <div className="prose">
              {project.longDescription.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4 flex items-center gap-2">
                <Tag size={14} className="text-primary-500 dark:text-primary-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Project Details</h3>
              {[
                { label: "Category", value: project.category },
                { label: "Status", value: project.status === "completed" ? "✅ Completed" : "🔄 In Progress" },
                { label: "Date", value: formatDateShort(project.date) },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 dark:text-white/40">{item.label}</span>
                  <span className="text-slate-700 dark:text-white/80 font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="glass-card p-6 space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Links</h3>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-sm text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-all group">
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-sm text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-all group">
                    <span>GitHub</span>
                    <Github size={14} className="group-hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              More {project.category} Projects
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className="glass-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative h-36 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-contain object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-white/40 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
