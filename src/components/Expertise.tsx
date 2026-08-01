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
    icon: "trophy",
  },
  {
    title: "Intel URP Scholar",
    event: "Spring 2020",
    description: "Undergraduate research scholarship recipient",
    icon: "cap",
  },
  {
    title: "Rewriting The Code Fellow",
    event: "2020-2021",
    description: "Fellowship for women in technology",
    icon: "code",
  },
  {
    title: "Lockheed Martin Corporate Award",
    event: "Spring 2022",
    description: "Recognition for excellence in engineering",
    icon: "rocket",
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

const IconTrophy = () => (
  <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4M6 4h12v3a6 6 0 01-12 0V4zM6 5H4a2 2 0 000 4h2M18 5h2a2 2 0 010 4h-2" />
  </svg>
);

const IconCap = () => (
  <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const IconCode = () => (
  <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l-3 3 3 3m8-6l3 3-3 3M14 5l-4 14" />
  </svg>
);

const IconRocket = () => (
  <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (icon: string) => {
    switch (icon) {
      case "trophy":
        return <IconTrophy />;
      case "cap":
        return <IconCap />;
      case "code":
        return <IconCode />;
      case "rocket":
        return <IconRocket />;
      default:
        return <IconTrophy />;
    }
  };

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
                  <div className="w-14 h-14 mx-auto mb-4 bg-terracotta/10 rounded-2xl flex items-center justify-center">
                    {getIcon(award.icon)}
                  </div>
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
