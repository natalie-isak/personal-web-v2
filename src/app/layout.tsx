import type { Metadata } from "next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Natalie Isak | Machine Learning Engineer & AI Safety Researcher",
  description: "Natalie Isak is a Machine Learning Engineer at Microsoft specializing in AI Safety, Responsible AI, and privacy-preserving machine learning systems.",
  keywords: ["AI Safety", "Machine Learning", "Responsible AI", "Microsoft", "Privacy-Preserving ML", "LLM Safety"],
  authors: [{ name: "Natalie Isak" }],
  openGraph: {
    title: "Natalie Isak | Machine Learning Engineer & AI Safety Researcher",
    description: "Pioneering responsible AI development, with a focus on AI safety, privacy-preserving systems, and trustworthy machine learning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalie Isak | ML Engineer & AI Safety Researcher",
    description: "Pioneering responsible AI development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
