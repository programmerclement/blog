import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Available for freelance projects, collaborations, and full-time opportunities.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
