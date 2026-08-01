"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, floatingAnimation } from "@/lib/animations";

const services = [
  {
    title: "AI system risk assessment",
    question: "I have an AI system I want to release. What are the risks I need to worry about?",
    description:
      "I map the specific ways your system could fail, be misused, or cause harm, grounded in your actual architecture, users, and domain rather than a generic checklist. You come away with a clear, prioritized picture of what's likely, what's severe, and what to address first.",
  },
  {
    title: "AI system risk mitigations",
    question: null,
    description:
      "Once the risks are clear, I translate each one into concrete, buildable mitigations such as guardrails, monitoring, policy, human review steps, and architecture changes, prioritized by impact and effort so your team knows where to start.",
  },
  {
    title: "AI evaluations",
    question: "My system works, but it breaks randomly, or a small change causes a regression I don't catch.",
    description:
      "This usually traces back to one gap: no reliable way to measure what \"working\" means. I help you build evaluations that catch failures and regressions before your users do, so you can change your system with confidence.",
  },
  {
    title: "AI safety 101",
    question: null,
    description:
      "What AI safety is, and what it means for your field. I've broken down AI risk for healthcare experts, Chief Information Security Officers, and both technical and non-technical audiences, always grounded in the risks that actually matter for their domain. Useful for teams getting up to speed, leadership getting oriented, or events that need a speaker.",
  },
];

function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-32 right-10 w-64 h-64 bg-tan/30 blob-shape"
        animate={floatingAnimation.animate}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-terracotta/20 blob-shape"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={staggerItem} className="mb-4">
            <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
              Consulting &amp; Advising
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-olive leading-[1.1] mb-8"
          >
            Consulting
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-olive/90 leading-relaxed mb-6"
          >
            I&apos;m a Machine Learning Engineer working in AI safety, focused on measuring and
            mitigating the risks that come with increasingly capable AI systems. My background spans
            computer science research at Cornell and applied AI work at Microsoft, where I&apos;ve led
            dozens of product releases through the company&apos;s internal Responsible AI review board,
            running architecture reviews, harm analyses, and adversarial testing.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-olive/90 leading-relaxed"
          >
            I&apos;m a published author and patent holder six times over in the AI safety space, with a
            research background spanning both academia and industry, including an upcoming Masters in
            Applied Ethics at Oxford University. I&apos;ve presented my work at academic conferences
            (such as the IEEE Conference on Secure and Trustworthy Machine Learning, or SaTML),
            inclusion conferences (Women Impact Tech NYC), and security conferences ([un]prompted),
            along with domain-specific talks on AI risk to audiences ranging from healthcare experts to
            Chief Information Security Officers.
          </motion.p>
        </motion.div>
      </div>

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

function HowICanHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-tan py-24 lg:py-32 overflow-hidden">
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

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            How I can help
          </h2>
          <p className="text-olive/70 mt-4 max-w-2xl mx-auto text-lg">
            Whether you&apos;re preparing to launch or already live and running into problems, here&apos;s
            where I tend to come in.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem} className="group">
              <motion.div
                className="h-full p-8 bg-white rounded-2xl shadow-lg"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl text-olive mb-3 group-hover:text-terracotta transition-colors">
                  {service.title}
                </h3>
                {service.question && (
                  <p className="text-terracotta italic leading-relaxed mb-3">
                    &ldquo;{service.question}&rdquo;
                  </p>
                )}
                <p className="text-olive/80 leading-relaxed">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F0E3D3"
          />
        </svg>
      </div>
    </section>
  );
}

function MentoringAndVolunteering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-terracotta/10 to-tan/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={staggerItem}
            className="p-8 bg-olive text-cream rounded-3xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/20 rounded-bl-full" />
            <div className="relative z-10">
              <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
                Mentoring
              </span>
              <h3 className="font-serif text-2xl mt-3 mb-4">New to AI safety?</h3>
              <p className="text-cream/80 leading-relaxed">
                New to AI safety, or interested in a career in the field? Whether you&apos;re a
                student, a career-switcher, or an engineer curious about moving into AI safety,
                I&apos;m always happy to share what I&apos;ve learned. Reach out.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="p-8 bg-olive text-cream rounded-3xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/20 rounded-bl-full" />
            <div className="relative z-10">
              <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
                Volunteering
              </span>
              <h3 className="font-serif text-2xl mt-3 mb-4">Non-profits</h3>
              <p className="text-cream/80 leading-relaxed">
                If you&apos;re a non-profit and any of the above would help your mission, get in touch
                and we can work something out.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 48C1200 48 1320 48 1380 48L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#6B705C"
          />
        </svg>
      </div>
    </section>
  );
}

export default function Consulting() {
  return (
    <>
      <Intro />
      <HowICanHelp />
      <MentoringAndVolunteering />
    </>
  );
}
