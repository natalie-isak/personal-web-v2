import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Consulting from "@/components/Consulting";
import { Footer } from "@/components/Connect";

export const metadata: Metadata = {
  title: "Consulting | Natalie Isak",
  description:
    "AI safety consulting and advising: system risk assessments, mitigations, evaluations, and AI safety talks, plus mentoring and non-profit support.",
};

export default function ConsultingPage() {
  return (
    <main>
      <Navigation />
      <Consulting />
      <Footer />
    </main>
  );
}
