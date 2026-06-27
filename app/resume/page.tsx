import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { ResumeContent } from "@/components/sections/ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description: `Interactive resume for ${siteConfig.name} — Full Stack Developer & IT Specialist.`,
};

export default function ResumePage() {
  return <ResumeContent />;
}
