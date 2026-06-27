import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  bio,
  experiences,
  education,
  certifications,
  siteConfig,
  socialLinks,
} from "@/lib/data";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — ${siteConfig.description}`,
};

export default function AboutPage() {
  return <AboutContent />;
}
