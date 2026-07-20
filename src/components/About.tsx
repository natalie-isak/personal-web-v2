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

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left column - Photo */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInLeft}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/natalie_v1.jpg"
                  alt="Natalie Isak"
                  fill
                  className="object-cover [filter:grayscale(1)_sepia(0.3)_hue-rotate(60deg)_saturate(0.6)_brightness(0.95)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/60 via-olive/20 to-transparent" />
              </div>
            </div>
            <p className="text-olive/60 text-sm mt-3 italic text-center">
              Women Impact Tech &apos;25, Mainstage Event on AI Safety
            </p>
          </motion.div>

          {/* Right column - Main narrative */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="lg:col-span-3 space-y-6"
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

        {/* Bottom narrative continuation */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="p-8 bg-olive text-cream rounded-3xl shadow-lg">
            <h3 className="font-serif text-2xl mb-4">Where It Started</h3>
            <p className="text-cream/90 leading-relaxed">
              My path started in computer-vision research at Cornell, then took me into Microsoft&apos;s AI Development Acceleration Program. When generative AI took off in 2022, I became one of the first leads on Microsoft&apos;s internal Responsible AI review process, running architecture reviews, harm analyses, and red-teaming across global product launches. That work taught me that spotting a harmful output is easy; tracing it back through the research, architecture, and product decisions that produced it is not &mdash; and that gap is what pulled me toward anticipating and mitigating novel AI risks.
            </p>
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
