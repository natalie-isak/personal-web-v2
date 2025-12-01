"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, floatingAnimation } from "@/lib/animations";

export default function Introduction() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-cream">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-tan/30 blob-shape"
        animate={floatingAnimation.animate}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-48 h-48 bg-terracotta/20 blob-shape"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-sage/25 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1575757371726-27b0978ee246?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-20 items-center w-full">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1"
          >
            <motion.div variants={staggerItem} className="mb-4">
              <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
                Machine Learning Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-olive leading-[1.1] mb-6"
            >
              Natalie
              <br />
              <span className="text-terracotta">Isak</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-olive/80 leading-relaxed mb-8 max-w-xl"
            >
              Pioneering responsible AI development, with a focus on{" "}
              <span className="text-terracotta font-medium">AI safety</span>,{" "}
              <span className="text-terracotta font-medium">privacy-preserving systems</span>, and{" "}
              <span className="text-terracotta font-medium">trustworthy machine learning</span>.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 bg-olive text-cream px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-terracotta transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>
              <motion.a
                href="#connect"
                className="inline-flex items-center gap-2 border-2 border-olive text-olive px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-olive hover:text-cream transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={staggerItem}
              className="mt-12 pt-8 border-t border-sage/30 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-serif text-terracotta">4</div>
                <div className="text-sm text-olive/70 mt-1">Patents</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-terracotta">200K+</div>
                <div className="text-sm text-olive/70 mt-1">Users Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-terracotta">3+</div>
                <div className="text-sm text-olive/70 mt-1">Years at Microsoft</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Decorative elements behind photo */}
              <motion.div
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-terracotta/20 rounded-[1.5rem] md:rounded-[2rem]"
                animate={{
                  rotate: [0, 2, 0],
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-tan/40 rounded-[1.5rem] md:rounded-[2rem]"
                animate={{
                  rotate: [0, -2, 0],
                  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Photo container - smaller on mobile, grows on larger screens */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/natalie.jpg"
                  alt="Natalie Isak"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-olive/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-olive/50 rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.5, 1],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </motion.div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#DDBEA9"
          />
        </svg>
      </div>
    </section>
  );
}
