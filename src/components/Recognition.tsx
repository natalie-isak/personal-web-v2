"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

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
    description: "Led three sub-teams (~15 people) developing an app to measure effectiveness of water purifying techniques. Designed and implemented a recursive Python algorithm for turbid particle analysis.",
  },
  {
    title: "Executive Board Member",
    organization: "Women In Computing At Cornell",
    location: "Ithaca, NY",
    period: "Jan 2019 – Aug 2020",
    description: "Networked with corporate recruiters. Organized and facilitated ~8 inclusivity events per semester, including the sold-out CIS formal under budget of $7,750.",
  },
  {
    title: "Head Consultant",
    organization: "Cornell Intro to CS Class",
    location: "Ithaca, NY",
    period: "Jan 2019 – May 2022",
    description: "Supervised ~60 undergraduate teaching assistants. Designed coursework and graded assignments for fundamental computing concepts.",
  },
];

const volunteering = [
  "Girls Who Code",
  "Microsoft TEALs",
  "Juni Learning",
  "MIT Break Through AI",
  "Microsoft NERD Coding Camp",
];

export default function Recognition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recognition" className="relative bg-tan py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80')`,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-cream/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-48 h-48 bg-terracotta/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
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
            Awards & Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Recognition
          </h2>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                className="h-full p-6 bg-cream rounded-2xl shadow-lg text-center"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="font-serif text-lg text-olive mb-2 group-hover:text-terracotta transition-colors">
                  {award.title}
                </h3>
                <p className="text-terracotta text-sm font-medium mb-2">{award.event}</p>
                <p className="text-olive/60 text-sm">{award.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="font-serif text-3xl text-olive text-center mb-12">Leadership Experience</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-olive text-cream rounded-3xl relative overflow-hidden group"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/20 rounded-bl-full" />
                
                <div className="relative z-10">
                  <span className="text-terracotta text-xs tracking-wider uppercase">{role.period}</span>
                  <h4 className="font-serif text-xl mt-2 mb-1 group-hover:text-terracotta transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-cream/80 font-medium mb-1">{role.organization}</p>
                  <p className="text-cream/50 text-sm mb-4">{role.location}</p>
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
          <h3 className="font-serif text-3xl text-olive text-center mb-8">Volunteer & Teaching</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {volunteering.map((org, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-cream rounded-full shadow-md"
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

        {/* Fun fact / Personal */}
        {/* <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <h3 className="font-serif text-3xl text-olive text-center mb-8">For Fun</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-cream/80 rounded-full shadow-lg">
              <span className="text-olive">
                <span className="font-medium">Marathon runner</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-cream/80 rounded-full shadow-lg">
              <span className="text-olive">
                <span className="font-medium">Alpha Chi Omega</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-cream/80 rounded-full shadow-lg">
              <span className="text-olive">
                <span className="font-medium">Loved <a href="https://www.goodreads.com/book/show/58437521-the-candy-house" className="text-terracotta hover:underline">The Candy House</a> by Jennifer Egan</span>
              </span>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L48 74.7C96 69 192 59 288 48C384 37 480 27 576 26.7C672 27 768 37 864 48C960 59 1056 69 1152 69.3C1248 69 1344 59 1392 53.3L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#6B705C"
          />
        </svg>
      </div>
    </section>
  );
}
