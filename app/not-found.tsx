import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-6">
          <h1 className="text-[8rem] font-black text-transparent bg-gradient-to-r from-primary-400 via-violet-400 to-cyan-400 bg-clip-text leading-none select-none">
            404
          </h1>
          <div className="orb orb-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Page not found</h2>
        <p className="text-slate-500 dark:text-white/50 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline">
            <Search size={18} />
            Browse Projects
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5">
          <p className="text-slate-400 dark:text-white/30 text-sm mb-4">Quick links</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
              { label: "Resume", href: "/resume" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
