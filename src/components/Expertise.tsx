"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const skillCategories = [
  {
    title: "Core Expertise",
    skills: [
      { name: "Responsible AI", level: 95 },
      { name: "Large Language Models", level: 90 },
      { name: "ML Safety & Red Teaming", level: 95 },
      { name: "Privacy-Preserving ML", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 90 },
      { name: "Reinforcement Learning", level: 75 },
      { name: "Multimodal Tasks", level: 80 },
    ],
  },
  {
    title: "Engineering",
    skills: [
      { name: "MLOps", level: 90 },
      { name: "Scalable System Design", level: 85 },
      { name: "Backend Engineering", level: 85 },
      { name: "Full Stack Development", level: 80 },
    ],
  },
];

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "C#", icon: "⚡" },
  { name: "JavaScript", icon: "📜" },
  { name: "PyTorch", icon: "🔥" },
  { name: "Azure Services", icon: "☁️" },
  { name: "Semantic Kernel", icon: "🧠" },
  { name: "Scikit-Learn", icon: "📊" },
  { name: "RAG Systems", icon: "🔍" },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-terracotta/10 to-tan/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-sage/20 to-cream/30 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
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
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Expertise
          </h2>
          <p className="text-olive/70 mt-4 max-w-2xl mx-auto text-lg">
            Specialized in building safe, scalable AI systems with a deep understanding of responsible AI practices.
          </p>
        </motion.div>

        {/* Skills grid
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={staggerItem}
              className="p-8 bg-white rounded-3xl shadow-lg"
            >
              <h3 className="font-serif text-2xl text-olive mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-olive/80 text-sm font-medium">{skill.name}</span>
                      <span className="text-terracotta text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-sage/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-terracotta to-olive rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Tools & Languages */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl text-olive text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-tan/50 rounded-full flex items-center gap-2 hover:bg-tan transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-olive font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlighted capabilities */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "AI Safety",
              description: "End-to-end safety evaluation and red teaming for production AI systems",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Privacy Engineering",
              description: "Privacy-preserving techniques for cross-compliance ML systems",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Production ML",
              description: "Scalable ML pipelines serving millions of users",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "Research",
              description: "Novel solutions from paper to production at enterprise scale",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 bg-olive text-cream rounded-2xl group"
            >
              <motion.div
                className="w-14 h-14 bg-terracotta/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-terracotta/50 transition-colors"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="font-serif text-xl mb-2">{item.title}</h4>
              <p className="text-cream/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#DDBEA9"
          />
        </svg>
      </div>
    </section>
  );
}
