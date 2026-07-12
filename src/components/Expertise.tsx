"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const tools = [
  { name: "Python" },
  { name: "C#" },
  { name: "JavaScript" },
  { name: "PyTorch" },
  { name: "scikit-learn" },
  { name: "Reinforcement Learning" },
  { name: "Fine-Tuning" },
  { name: "Multi-Modal" },
  { name: "Azure Services" },
  { name: "Semantic Kernel" },
  { name: "RAG Systems" },
  { name: "MCP Servers" },
];

const awards = [
  {
    title: "2nd Place Winner - Executive Challenge Hack",
    event: "2023 Global Microsoft Hackathon",
    description: "Revolutionizing Customer Security Scenarios",
    icon: "🏆",
  },
  {
    title: "Intel URP Scholar",
    event: "Spring 2020",
    description: "Undergraduate research scholarship recipient",
    icon: "🎓",
  },
  {
    title: "Rewriting The Code Fellow",
    event: "2020-2021",
    description: "Fellowship for women in technology",
    icon: "💻",
  },
  {
    title: "Lockheed Martin Corporate Award",
    event: "Spring 2022",
    description: "Recognition for excellence in engineering",
    icon: "🚀",
  },
];

const leadership = [
  {
    title: "Research Advisor",
    organization: "AguaClara Project Team",
    location: "Ithaca, NY",
    period: "Feb 2019 – May 2022",
    description: "Led three sub-teams (~15 people) developing an app to measure effectiveness of water purifying techniques.",
  },
  {
    title: "Executive Board Member",
    organization: "Women In Computing At Cornell",
    location: "Ithaca, NY",
    period: "Jan 2019 – Aug 2020",
    description: "Organized ~8 inclusivity events per semester, including the sold-out CIS formal under budget of $7,750.",
  },
  {
    title: "Head Consultant",
    organization: "Cornell Intro to CS Class",
    location: "Ithaca, NY",
    period: "Jan 2019 – May 2022",
    description: "Supervised ~60 undergraduate teaching assistants. Designed coursework and graded assignments.",
  },
];

const volunteering = [
  "Girls Who Code",
  "Microsoft TEALs",
  "Juni Learning",
  "MIT Break Through AI",
  "Microsoft NERD Coding Camp",
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
            Skills & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Expertise
          </h2>
          <p className="text-olive/70 mt-4 max-w-2xl mx-auto text-lg">
            Specialized in building safe, scalable AI systems with a deep understanding of responsible AI practices.
          </p>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-20"
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

        {/* Awards */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="font-serif text-2xl text-olive text-center mb-8">Awards</h3>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="h-full p-6 bg-white rounded-2xl shadow-lg text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <h4 className="font-serif text-lg text-olive mb-2 group-hover:text-terracotta transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-terracotta text-sm font-medium mb-2">{award.event}</p>
                  <p className="text-olive/60 text-sm">{award.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="font-serif text-2xl text-olive text-center mb-8">Leadership</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
                className="p-6 bg-olive text-cream rounded-2xl relative overflow-hidden group"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-terracotta/20 rounded-bl-full" />
                
                <div className="relative z-10">
                  <span className="text-terracotta text-xs tracking-wider uppercase">{role.period}</span>
                  <h4 className="font-serif text-lg mt-2 mb-1 group-hover:text-terracotta transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-cream/80 font-medium text-sm mb-1">{role.organization}</p>
                  <p className="text-cream/50 text-xs mb-3">{role.location}</p>
                  <p className="text-cream/70 text-sm leading-relaxed">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering & Teaching */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h3 className="font-serif text-2xl text-olive text-center mb-8">Volunteering & Teaching</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {volunteering.map((org, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-tan/50 rounded-full shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-olive font-medium">{org}</span>
              </motion.div>
            ))}
          </div>
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
