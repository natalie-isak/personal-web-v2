"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const publications = [
  {
    type: "Blog",
    title: "Guarding AI memory",
    date: "June 2026",
    description: (
      <>
        Authored Microsoft Security blog post on agent memory. 
        <a
          href="https://www.microsoft.com/en-us/security/blog/2026/06/22/guarding-ai-memory/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Read it here
        </a>.
      </>
    ),
    icon: "paper",
  },
  {
    type: "Training",
    title: "AI Memory, Mapped",
    date: "June 2026",
    description: (
      <>
        Presented risks and mitigations of agent memory risks. 
        <a
          href="https://secappdev.org/2026/lectures/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Read more here
        </a>.
      </>
    ),
    icon: "talk",
  },
  {
    type: "Conference Talk",
    title: "Developing & Deploying AI Fingerprints for Advanced Threat Detection",
    date: "March 2026",
    description: (
      <>
        Presenting BinaryShield to audience of 1000+ including CISOs and top-level security government officials.
        <a
          href="https://www.youtube.com/watch?v=u7pag5p9z5o&list=PLjmt1tu85IhAiVPugOjP-7Cy0Oemi3m7z&index=9"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Watch here
        </a>.
      </>
    ),
    icon: "talk",
  },
  {
    type: "Patent",
    title: "Privacy-Preserving Fingerprinting for AI Threat Detection and Mitigation",
    date: "November 2025",
    description: "Novel technique for detecting AI threats while preserving user privacy across compliance boundaries.",
    icon: "patent",
  },
  {
    type: "Publication",
    title: <a href="https://arxiv.org/abs/2509.05608">Cross-Service Threat Intelligence in LLM Services using Privacy-Preserving Fingerprints</a>,
    venue: "SaTML '26",
    date: "September 2025",
    description: "Research paper on enabling cross-service threat detection in LLM systems while maintaining privacy.",
    icon: "paper",
  },
  {
    type: "Conference Talk",
    title: "AI Risks and Mitigations",
    venue: "Women Impact Tech Conference",
    date: "September 2025",
    description: (
      <>
        Keynote presentation on AI risks and practical mitigations to a conference audience of 1,200 attendees.
        <a
          href="https://vimeo.com/1120874871?share=copy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Watch here
        </a>.
      </>
    ),
    icon: "talk",
  },
  {
    type: "Patent",
    title: "Artifact Designer for Guided Conversation Artifacts",
    date: "February 2025",
    description: "System for designing and managing conversational AI artifacts with guardrails.",
    icon: "patent",
    hasDemo: true,
    demoLink: "https://github.com/microsoft/semantic-kernel/tree/main/python/samples/demos/guided_conversations",
  },
  {
    type: "Patent",
    title: "Generatively-guided artifact construction with constraints",
    date: "October 2024",
    description: "Framework for constrained generation of AI artifacts using semantic guardrails.",
    icon: "patent",
  },
  {
    type: "Patent",
    title: "Cyclic Behavior Detection in Generative Agents",
    date: "July 2024",
    description: "Detection system for identifying and preventing cyclic behaviors in AI agents.",
    icon: "patent",
  },
  {
    type: "Publication",
    title: <a href="https://dl.acm.org/doi/pdf/10.1145/3573105.3575670">P4Cub: A Little Language for Big Routers</a>,
    venue: "CPP '23",
    date: "January 2023",
    description: "Formal verification research on intermediate representations for network routers.",
    icon: "paper",
  },
];

const IconPatent = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconPaper = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconTalk = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "patent":
        return <IconPatent />;
      case "paper":
        return <IconPaper />;
      case "talk":
        return <IconTalk />;
      default:
        return <IconPaper />;
    }
  };

  return (
    <section id="research" className="relative bg-tan py-24 lg:py-32 overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-40 right-20 w-40 h-40 bg-cream/40 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-60 h-60 bg-terracotta/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
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
            Publications & Patents
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            Research Impact
          </h2>
          <p className="text-olive/70 mt-4 max-w-2xl mx-auto text-lg">
            Contributing to the frontier of AI safety through peer-reviewed publications, patents, and thought leadership.
          </p>
        </motion.div>

        {/* Stats highlight */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
        >
          <div className="text-center p-6 bg-cream/70 rounded-2xl">
            <div className="text-4xl font-serif text-terracotta">4</div>
            <div className="text-sm text-olive/70 mt-1">Patents</div>
          </div>
          <div className="text-center p-6 bg-cream/70 rounded-2xl">
            <div className="text-4xl font-serif text-terracotta">2</div>
            <div className="text-sm text-olive/70 mt-1">Publications</div>
          </div>
          <div className="text-center p-6 bg-cream/70 rounded-2xl">
            <div className="text-4xl font-serif text-terracotta">+3K</div>
            <div className="text-sm text-olive/70 mt-1">Talk Attendees</div>
          </div>
        </motion.div>

        {/* Publications grid */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                className="h-full p-6 bg-cream rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pub.type === "Patent" ? "bg-terracotta/20 text-terracotta" :
                    pub.type === "Publication" ? "bg-olive/20 text-olive" :
                    "bg-sage/30 text-olive"
                  }`}>
                    {getIcon(pub.icon)}
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    pub.type === "Patent" ? "bg-terracotta/10 text-terracotta" :
                    pub.type === "Publication" ? "bg-olive/10 text-olive" :
                    "bg-sage/20 text-olive"
                  }`}>
                    {pub.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg text-olive mb-2 group-hover:text-terracotta transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                {pub.venue && (
                  <p className="text-terracotta text-sm font-medium mb-2">{pub.venue}</p>
                )}
                
                <p className="text-olive/70 text-sm mb-4 flex-grow">
                  {pub.description}
                </p>

                {/* Demo CTA with sparkles */}
                {pub.hasDemo && pub.demoLink && (
                  <div className="relative mb-4">
                    <motion.a
                      href={pub.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full py-3 px-6 bg-gradient-to-r from-terracotta to-terracotta/80 text-cream text-center font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Floating sparkles */}
                      <motion.span
                        className="absolute top-1 left-3 text-yellow-200 text-sm"
                        animate={{
                          y: [0, -4, 0],
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ✦
                      </motion.span>
                      <motion.span
                        className="absolute top-2 right-4 text-yellow-200 text-xs"
                        animate={{
                          y: [0, -3, 0],
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      >
                        ✦
                      </motion.span>
                      <motion.span
                        className="absolute bottom-2 left-6 text-yellow-200 text-xs"
                        animate={{
                          y: [0, -2, 0],
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      >
                        ✦
                      </motion.span>
                      <motion.span
                        className="absolute bottom-1 right-8 text-yellow-200 text-sm"
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.8, 1, 0.8],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                      >
                        ✦
                      </motion.span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Try it on GitHub!
                      </span>
                    </motion.a>
                  </div>
                )}

                {/* Date */}
                <div className="pt-4 border-t border-sage/20">
                  <span className="text-xs text-olive/50">{pub.date}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured project highlight */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="relative p-8 lg:p-12 bg-olive rounded-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                  Featured Work
                </span>
                <h3 className="text-3xl lg:text-4xl font-serif text-cream mt-4 mb-6">
                  BinaryShield: Privacy-Preserving Threat Detection
                </h3>
                <p className="text-cream/80 leading-relaxed mb-6">
                  When my team faced the challenge of detecting adversarial attacks on AI systems while navigating customer privacy protections, I co-architected and productionized BinaryShield, a technique for cross-compliance boundary searches. This work exemplifies what excites me most: identifying novel AI safety challenges and rapidly generating solutions with real-world impact. This work was patented and peer-reviewed at the IEEE Conference on Secure and Trustworthy Machine Learning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cream/10 text-cream rounded-full text-sm">
                    Privacy-Preserving
                  </span>
                  <span className="px-4 py-2 bg-cream/10 text-cream rounded-full text-sm">
                    Threat Detection
                  </span>
                  <span className="px-4 py-2 bg-cream/10 text-cream rounded-full text-sm">
                    Cross-Compliance
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                    alt="Digital security visualization"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-olive/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L40 74.7C80 69 160 59 240 48C320 37 400 27 480 26.7C560 27 640 37 720 48C800 59 880 69 960 69.3C1040 69 1120 59 1200 53.3C1280 48 1360 48 1400 48L1440 48V80H1400C1360 80 1280 80 1200 80C1120 80 1040 80 960 80C880 80 800 80 720 80C640 80 560 80 480 80C400 80 320 80 240 80C160 80 80 80 40 80H0Z"
            fill="#F0E3D3"
          />
        </svg>
      </div>
    </section>
  );
}
