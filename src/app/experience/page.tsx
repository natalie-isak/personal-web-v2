import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Connect";

export const metadata: Metadata = {
  title: "Experience | Natalie Isak",
  description: "Career and education of Natalie Isak.",
};

export default function ExperiencePage() {
  return (
    <main>
      <Navigation />
      <Experience />
      <Footer />
    </main>
  );
}
