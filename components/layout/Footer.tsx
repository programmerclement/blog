import Link from "next/link";
import Image from "next/image";
import {
  Github, Twitter, Linkedin, Instagram, Youtube,
  Mail, MessageCircle, Terminal, ExternalLink, Send,
} from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";

const socialIcons = [
  { href: socialLinks.github, icon: Github, label: "GitHub", color: "hover:text-slate-700 dark:hover:text-gray-300" },
  { href: socialLinks.twitter, icon: Twitter, label: "Twitter", color: "hover:text-sky-500 dark:hover:text-sky-400" },
  { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  { href: socialLinks.instagram, icon: Instagram, label: "Instagram", color: "hover:text-pink-500 dark:hover:text-pink-400" },
  { href: socialLinks.youtube, icon: Youtube, label: "YouTube", color: "hover:text-red-500 dark:hover:text-red-400" },
  { href: socialLinks.telegram, icon: Send, label: "Telegram", color: "hover:text-sky-500 dark:hover:text-sky-400" },
  { href: socialLinks.whatsapp, icon: MessageCircle, label: "WhatsApp", color: "hover:text-green-500 dark:hover:text-green-400" },
  { href: socialLinks.email, icon: Mail, label: "Email", color: "hover:text-primary-600 dark:hover:text-primary-400" },
];

const footerLinks = {
  Explore: [
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "GitHub", href: socialLinks.github, external: true },
    { label: "LinkedIn", href: socialLinks.linkedin, external: true },
    { label: "YouTube", href: socialLinks.youtube, external: true },
  ],
  Technologies: [
    { label: "Next.js", href: "#", external: true },
    { label: "TypeScript", href: "#", external: true },
    { label: "Tailwind CSS", href: "#", external: true },
    { label: "Framer Motion", href: "#", external: true },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple absolute bottom-0 left-1/4 w-96 h-96 opacity-20" />
        <div className="orb orb-cyan absolute bottom-0 right-1/4 w-64 h-64 opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                              <Image src="/assets/logo.png" alt="Logo" fill className="object-cover" sizes="36px" />
                            </div>
              <div>
                <span className="font-black text-slate-900 dark:text-white text-xl tracking-tight leading-none">
                  Programmer Clement
                </span>
                <span className="block text-[11px] text-primary-500 dark:text-primary-400 font-medium leading-none mt-0.5">
                  Full Stack Developer
                </span>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Building elegant digital solutions from Rwanda to the world. Passionate about crafting
              performant, accessible, and beautiful web experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialIcons.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-white/40 ${color} hover:bg-slate-300 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group"
                      >
                        {link.label}
                        <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-1">Stay in the loop</h3>
              <p className="text-slate-500 dark:text-white/40 text-sm">
                Get notified when I publish new articles or launch new projects.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500/50 transition-all duration-200"
              />
              <button type="submit" className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-white/30">
          <p>
            © {year}{" "}
            <span className="text-slate-600 dark:text-white/50 font-medium">{siteConfig.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
