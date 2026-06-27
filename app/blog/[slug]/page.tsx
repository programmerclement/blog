import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Twitter, Linkedin } from "lucide-react";
import { getPostBySlug, getAllPosts, markdownToHtml } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-xs font-medium text-primary-300">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed mb-6 border-l-2 border-primary-500/50 pl-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-sm font-semibold">{siteConfig.name}</p>
                <p className="text-slate-400 dark:text-white/40 text-xs">{siteConfig.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 dark:text-white/30 mr-1">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-sky-400 transition-all"
                aria-label="Share on Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-400 transition-all"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </header>

        {/* Article content rendered from HTML */}
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag size={14} className="text-white/30" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-12 glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enjoyed this article?</h3>
          <p className="text-slate-500 dark:text-white/50 text-sm mb-6">
            Subscribe to get notified when I publish new articles on web development, mobile
            apps, and the Rwandan tech scene.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500/50 transition-all"
            />
            <button className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">More Articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass-card p-5 group hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-xs text-primary-400 font-medium">{p.category}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-1.5 mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-slate-400 dark:text-white/30">{p.readingTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
