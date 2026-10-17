import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import { Footer } from "@/components/Connect";

export const metadata: Metadata = {
  title: "About | Natalie Isak",
  description: "About Natalie Isak, an AI safety researcher and engineer.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <About />
      <Footer />
    </main>
  );
}
