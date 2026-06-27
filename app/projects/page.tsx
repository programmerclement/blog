"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="orb orb-purple absolute top-0 left-1/4 w-96 h-96 opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="section-subheading mb-3">Portfolio</p>
            <h1 className="section-heading mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-slate-500 dark:text-white/50 max-w-2xl mx-auto text-lg">
              A showcase of web apps, business platforms, and tools I&apos;ve built — ranging from
              e-commerce systems to humanitarian platforms.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              {[
                { label: "Total Projects", value: projects.length },
                { label: "Live Projects", value: projects.filter((p) => p.liveUrl).length },
                { label: "Categories", value: projectCategories.length - 1 },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-gradient">{s.value}</div>
                  <div className="text-xs text-slate-400 dark:text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500/50 transition-all"
            />
          </div>

          <div className="flex gap-1 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setViewMode("grid")}
              className={cn("p-2 rounded-lg transition-all", viewMode === "grid" ? "bg-primary-500 text-white" : "text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white")}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn("p-2 rounded-lg transition-all", viewMode === "list" ? "bg-primary-500 text-white" : "text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white")}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40 mr-1">
            <SlidersHorizontal size={12} />
            <span>Filter:</span>
          </div>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-glow-sm"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              )}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500 dark:text-white/40">
            Showing <span className="text-slate-900 dark:text-white font-medium">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {search && <> for &ldquo;{search}&rdquo;</>}
          </p>
          {(search || activeCategory !== "All") && (
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid / list */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${search}-${viewMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("grid gap-5", viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1")}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} featured />
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-slate-400 dark:text-white/40">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
