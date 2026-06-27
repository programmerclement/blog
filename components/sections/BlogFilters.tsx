"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { type BlogPost } from "@/lib/blog";
import { formatDate, cn } from "@/lib/utils";

interface BlogFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogFilters({ posts, categories }: BlogFiltersProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div>
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500/50 transition-all"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
              activeCategory === cat
                ? "bg-primary-500 text-white shadow-glow-sm"
                : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts list */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${search}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card p-6 group hover:-translate-y-0.5 transition-all duration-300 hover:shadow-glow flex flex-col sm:flex-row gap-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-500/15 border border-primary-500/25 text-[11px] font-medium text-primary-600 dark:text-primary-300">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/40">
                        <Calendar size={11} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/40">
                        <Clock size={11} />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/30">
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center sm:items-end justify-end sm:justify-normal shrink-0">
                    <div className="flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 font-medium whitespace-nowrap">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-400 dark:text-white/40">Try a different search term or category.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
