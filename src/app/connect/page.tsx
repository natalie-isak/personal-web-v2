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
    <main className="bg-olive min-h-screen flex flex-col">
      <Navigation dark />
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <Connect />
        </div>
      </div>
      <Footer />
    </main>
  );
}
