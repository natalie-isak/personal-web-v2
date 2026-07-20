"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    period: "Apr 2025 – Present",
    title: "Machine Learning Engineer II",
    company: "Microsoft AI Safety",
    location: "New York, NY",
    highlights: [
      "Co-invented and productionized BinaryShield, the first privacy-preserving fingerprinting system for correlating AI threat signals across compliance boundaries; co-authored the paper and drove a patent filing.",
      "Built detections for novel AI risks—agentic memory poisoning, psychosocial harms, multi-session malware campaigns—using agents, fine-tuning, and heuristics.",
      "Architected and scaled a 0-to-1 AI safety detection platform across 70+ Microsoft services, processing 26.8B log lines monthly.",
      "Led a “write once, run everywhere” detection framework across compliance boundaries, cutting detection-authoring time by 67%.",
      "Led the first AI-powered scan of M365 telemetry during a live security incident, analyzing 90M+ logs with 99.84% offline accuracy.",
      "Defined new observability requirements for AI capabilities across Microsoft AI’s product portfolio.",
      "Drove the cross-company design integrating AI safety detections into Microsoft Defender and Sentinel.",
      "Mentored junior engineers and interns."
    ],
    featured: true,
  },
  {
    period: "Jul 2022 – Apr 2025",
    title: "Machine Learning Engineer II",
    company: "Microsoft AI Development Acceleration Program",
    location: "Cambridge, MA",
    highlights: [
      "Architected an AI data entry agent with >200K MAU, improving latency by 90.72% and saving ~$300K CAD annually.",
      "Architected backend contracts for tenant-level fine-tuning of enterprise agents, aligning interfaces across Copilot Studio and M365 and leading end-to-end security reviews.",
      "Led technical Responsible AI reviews for dozens of product launches, translating safety risks into measurable release criteria.",
      "Developed the open-source Semantic Kernel agentic framework (3 independent patents).",
      "Built a RAG-based M365 Chat plugin projected to deflect up to 80% of an HR support queue, with end-to-end Responsible AI evaluations.",
      "Added full-stack object detection support to the RAI Dashboard, released at Microsoft Build.",
      "Built a new ML pipeline for a Smart News feed using AI Builder, saving 6 weeks of onboarding time per customer."
    ],
    featured: false,
  },
  {
    period: "Jun 2021 – Aug 2021",
    title: "Software Engineering Intern",
    company: "Microsoft",
    location: "Remote",
    highlights: [
      "Implemented dynamic status feature for PSTN endpoint within Microsoft Teams.",
    ],
    featured: false,
  },
  {
    period: "Sept 2020 – May 2022",
    title: "Researcher",
    company: "Cornell Netlab",
    location: "Ithaca, NY",
    highlights: [
      "Researched intermediate representations for formal verification.",
      "Composed a pretty printer for Petr4 and designed compiler from Petr4 to C.",
    ],
    featured: false,
  },
  {
    period: "Sept 2020 – Dec 2020",
    title: "Data Science Intern",
    company: "Tesla",
    location: "Remote",
    highlights: [
      "Designed automated ML model to predict vehicle order cancellation frequency.",
      "Created Tableau visualizations for senior engineers and director of analytics.",
    ],
    featured: false,
  },
  {
    period: "May 2020 – Aug 2020",
    title: "Backend Software Engineering Intern",
    company: "Uber",
    location: "Remote",
    highlights: [
      "Integrated external vendor API for rider verification feature using government-issued ID.",
      "Implemented fuzzy matching library with extensive integration tests.",
    ],
    featured: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B705C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Experience
          </h2>
          {/* <p className="text-olive/70 mt-4 max-w-2xl mx-auto text-lg">
            From Cornell research labs to Microsoft's AI Safety team, building responsible AI systems at scale.
          </p> */}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sage/50 via-terracotta/50 to-sage/50 transform md:-translate-x-1/2" />

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-terracotta rounded-full transform -translate-x-1/2 mt-2 z-10 ring-4 ring-cream" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <motion.div
                    className={`p-8 rounded-3xl shadow-lg transition-all duration-300 ${
                      exp.featured
                        ? "bg-gradient-to-br from-olive to-olive/90 text-cream"
                        : "bg-white hover:shadow-xl"
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Period badge */}
                    <div className={`inline-block px-4 py-1 rounded-full text-xs tracking-wider mb-4 ${
                      exp.featured ? "bg-terracotta/30 text-cream" : "bg-tan text-olive"
                    }`}>
                      {exp.period}
                    </div>

                    <h3 className={`text-xl font-serif mb-1 ${exp.featured ? "text-cream" : "text-olive"}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-lg font-medium mb-1 ${exp.featured ? "text-terracotta" : "text-terracotta"}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm mb-4 ${exp.featured ? "text-cream/70" : "text-olive/60"}`}>
                      {exp.location}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className={`text-sm leading-relaxed flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          } ${exp.featured ? "text-cream/90" : "text-olive/80"}`}
                        >
                          <span className="text-terracotta mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-24"
        >
          <h3 className="text-2xl font-serif text-olive text-center mb-12">Education</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <motion.div
              className="p-8 bg-tan/50 rounded-3xl text-center max-w-md"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-terracotta/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-olive mb-2">Cornell University</h4>
              <p className="text-terracotta font-medium">B.S. Computer Science</p>
              <p className="text-olive/70 mt-2">College of Engineering</p>
              <p className="text-olive/70">GPA: 3.70 / 4.3</p>
              <p className="text-sm text-olive/60 mt-4">Dean's List: Fall '18, Spring '21, Fall '21, Spring '22</p>
            </motion.div>
            <motion.div
              className="p-8 bg-tan/50 rounded-3xl text-center max-w-md"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-terracotta/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-olive mb-2">Oxford University</h4>
              <p className="text-terracotta font-medium">MSt Applied Ethics</p>
              <p className="text-olive/70 mt-2">Incoming</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L48 69.3C96 59 192 37 288 26.7C384 16 480 16 576 26.7C672 37 768 59 864 64C960 69 1056 59 1152 48C1248 37 1344 27 1392 21.3L1440 16V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#DDBEA9"
          />
        </svg>
      </div>
    </section>
  );
}
