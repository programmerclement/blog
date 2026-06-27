"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Youtube,
  Send, MessageCircle, CheckCircle2, Clock, Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import { siteConfig, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactMethods = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-primary-600 dark:text-primary-400", bg: "bg-primary-100 dark:bg-primary-400/10", description: "Best for professional inquiries" },
  { icon: Phone, label: "WhatsApp", value: siteConfig.phone, href: socialLinks.whatsapp, color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-400/10", description: "Quick responses during business hours" },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: null, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-100 dark:bg-cyan-400/10", description: "Available for remote & on-site work" },
];

const socialConnects = [
  { href: socialLinks.github, icon: Github, label: "GitHub", handle: "@programmerclement" },
  { href: socialLinks.twitter, icon: Twitter, label: "Twitter", handle: "@kwizerangogaclement" },
  { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", handle: "kwizerangogaclement" },
  { href: socialLinks.instagram, icon: Instagram, label: "Instagram", handle: "@clement_k_n" },
  { href: socialLinks.youtube, icon: Youtube, label: "YouTube", handle: "@clementtech250" },
  { href: socialLinks.telegram, icon: Send, label: "Telegram", handle: "@programmerclement" },
];

interface FormData { name: string; email: string; subject: string; message: string; }
const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

const inputClass = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500/50 transition-all duration-200";

export function ContactContent() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send("service_iogpqwp", "template_98jr5kj", {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Portfolio Contact",
        message: form.message,
        to_email: siteConfig.email,
      }, "f-pGSwFsvB-vhWYnZ");
      setSent(true);
      setForm(initialForm);
      toast.success("Message sent! I'll respond within 24 hours.");
    } catch {
      toast.error("Failed to send message. Please try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="orb orb-purple absolute top-0 left-1/4 w-96 h-96 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="section-subheading mb-3">Get In Touch</p>
            <h1 className="section-heading mb-4">
              Let&apos;s <span className="text-gradient">Work Together</span>
            </h1>
            <p className="text-slate-500 dark:text-white/50 max-w-2xl mx-auto text-lg">
              Have a project idea? Need a developer for your team? Or just want to say hello?
              I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 space-y-5">
              <h2 className="font-bold text-slate-900 dark:text-white text-lg">Contact Information</h2>
              {contactMethods.map((m) => (
                <div key={m.label} className="flex items-start gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", m.bg)}>
                    <m.icon size={18} className={m.color} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-white/40 mb-0.5">{m.label}</p>
                    {m.href ? (
                      <a href={m.href} target={m.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white text-sm font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                        {m.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white text-sm font-medium">{m.value}</p>
                    )}
                    <p className="text-xs text-slate-400 dark:text-white/30 mt-0.5">{m.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-primary-500 dark:text-primary-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Availability</h3>
              </div>
              <div className="space-y-2">
                {["Freelance Projects", "Full-time Roles", "Consulting", "Open Source"].map((label) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 dark:text-white/60">{label}</span>
                    <span className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Available
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-4">Follow Me</h3>
              <div className="space-y-2">
                {socialConnects.map(({ href, icon: Icon, label, handle }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group">
                    <Icon size={16} className="text-slate-400 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-xs font-medium text-slate-700 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{label}</p>
                      <p className="text-[10px] text-slate-400 dark:text-white/30">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <div className="glass-card p-8">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-white/50 mb-6">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                          Your Name <span className="text-primary-500">*</span>
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                          Email Address <span className="text-primary-500">*</span>
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                        <option value="">Select a subject...</option>
                        <option value="Freelance Project">Freelance Project</option>
                        <option value="Full-time Opportunity">Full-time Opportunity</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                        Message <span className="text-primary-500">*</span>
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={6} required
                        placeholder="Tell me about your project or what you have in mind..."
                        className={cn(inputClass, "resize-none")} />
                      <p className="text-xs text-slate-400 dark:text-white/30 mt-1">{form.message.length}/1000 characters</p>
                    </div>

                    <button type="submit" disabled={loading} className={cn("w-full btn-primary justify-center py-3.5 text-base", loading && "opacity-70 cursor-not-allowed")}>
                      {loading ? (
                        <><Loader2 size={18} className="animate-spin" />Sending...</>
                      ) : (
                        <><MessageCircle size={18} />Send Message</>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 dark:text-white/30">
                      I&apos;ll respond within 24 hours. You can also reach me on{" "}
                      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                        WhatsApp
                      </a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
