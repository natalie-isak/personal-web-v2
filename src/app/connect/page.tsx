import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Connect from "@/components/Connect";
import { Footer } from "@/components/Connect";

export const metadata: Metadata = {
  title: "Connect | Natalie Isak",
  description: "Get in touch with Natalie Isak.",
};

export default function ConnectPage() {
  return (
    <main>
      <Navigation />
      <Connect />
      <Footer />
    </main>
  );
}
