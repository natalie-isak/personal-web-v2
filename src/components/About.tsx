"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-tan py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-cream/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-80 h-80 bg-terracotta/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Passion for AI Safety
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Photo */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInLeft}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/natalie_v1.jpg"
                  alt="Natalie Isak"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/60 via-olive/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right column - Main narrative */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="text-lg text-olive/90 leading-relaxed">
              I&apos;m a Machine Learning Engineer working at the frontier of AI safety, measuring and mitigating the risks that come with increasingly capable AI systems.
            </motion.p>

            <motion.p variants={staggerItem} className="text-lg text-olive/90 leading-relaxed">
              With 5+ years of hands-on expertise across product and research, I do my best work iterating quickly on the edge. My current focus is AI safety and security: detecting the full spectrum of novel AI risks, from agentic memory poisoning to psychosocial risk factors to AI-assisted cyber uplift.
            </motion.p>

            <motion.p variants={staggerItem} className="text-lg text-olive/90 leading-relaxed">
              I&apos;m a published author and patent holder several times over in the AI safety space, with a research background spanning both academia and industry, including an incoming MSt in Applied Ethics at Oxford University. I&apos;m energized by translating frontier research into practical safeguards that help teams ship AI responsibly, and have presented my work at leading venues including SaTML, Women Impact Tech NYC, and [un]prompted.
            </motion.p>

            <motion.p variants={staggerItem} className="text-lg text-olive/90 leading-relaxed">
              I&apos;m also a part-time lead for Microsoft&apos;s company-wide compliance process for Responsible AI in generative AI, where I lead critical efforts in RAI policy implementation, including architecture reviews, harm analyses, red-teaming, and documentation reviews.
            </motion.p>

            <motion.p variants={staggerItem} className="text-lg text-olive/90 leading-relaxed">
              I&apos;m deeply committed to sharing knowledge and fostering inclusivity in tech. Through initiatives like Girls Who Code and Microsoft TEALs, I mentor women and other underrepresented groups in computer science and AI.
            </motion.p>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 max-w-2xl mx-auto"
        >
          <motion.div
            className="p-6 bg-cream rounded-2xl shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-olive mb-2">Safety First</h3>
            <p className="text-olive/70 text-sm">Designing mitigations before risks manifest</p>
          </motion.div>

          <motion.div
            className="p-6 bg-cream rounded-2xl shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-olive mb-2">Research x Product</h3>
            <p className="text-olive/70 text-sm">Pragmatic innovation</p>
          </motion.div>
        </motion.div>

        {/* Bottom narrative continuation */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-16 w-full"
        >
          <div className="w-full grid md:grid-cols-2 gap-8">
            {/* <div className="p-8 bg-cream/70 rounded-3xl shadow-lg">
              <h3 className="font-serif text-2xl text-olive mb-4">Current Focus</h3>
              <p className="text-olive/80">
                Designing safety detections for frontier AI risks
              </p>
            </div> */}
            <div className="p-8 bg-olive text-cream rounded-3xl shadow-lg">
              <h3 className="font-serif text-2xl mb-4">Top of Mind</h3>
              <ul className="space-y-3 text-cream/90">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta mt-1">→</span>
                  Understanding and measuring emergent risks without compromising user privacy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta mt-1">→</span>
                  Detecting harmful content (e.g. cross prompt injections) in multimodal inputs and outputs
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 48C1200 48 1320 48 1380 48L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F0E3D3"
          />
        </svg>
      </div>
    </section>
  );
}
