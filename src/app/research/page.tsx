import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Research from "@/components/Research";
import { Footer } from "@/components/Connect";

export const metadata: Metadata = {
  title: "Research | Natalie Isak",
  description: "Publications, patents, and talks by Natalie Isak.",
};

export default function ResearchPage() {
  return (
    <main>
      <Navigation />
      <Research />
      <Footer />
    </main>
  );
}
