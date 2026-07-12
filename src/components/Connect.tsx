"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Connect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="connect" className="relative bg-olive py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-sage/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mt-4 mb-6"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Interested in discussing AI safety, responsible AI development, or potential collaborations? I'd love to hear from you.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={staggerItem} className="mb-12">
            <motion.a
              href="mailto:natalie.isak@gmail.com"
              className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta/90 text-cream px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              natalie [dot] isak [at] gmail [dot] com
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/natalie-isak"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-cream/10 hover:bg-cream/20 rounded-full text-cream transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent"
        />

        {/* Quote
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-16"
        >
          <blockquote className="text-cream/60 text-lg italic font-serif max-w-2xl mx-auto">
            "I seize the opportunity to research problems and propose solutions, bridging the gap from paper to production."
          </blockquote>
        </motion.div> */}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-olive border-t border-cream/10 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Natalie Isak. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-cream/60 text-sm">
            <a href="#" className="hover:text-cream transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
