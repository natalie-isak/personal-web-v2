"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const funActivities = [
  {
    title: "Marathon",
    description: "Completed Philly in '24",
    image: "/images/marathon.jpg",
    rotation: -3,
    emoji: "🏃‍♀️",
  },
  {
    title: "Recent Travels: Iceland",
    // description: "Sisterhood & community",
    image: "/images/natalie_v0.jpg",
    rotation: 2,
    // emoji: "💛",
  },
  {
    title: "Recently Enjoyed: The Candy House",
    description: "by Jennifer Egan",
    link: "https://www.goodreads.com/book/show/58437521-the-candy-house",
    image: "/images/book.jpg",
    rotation: -1,
    emoji: "📚",
  },
];

export default function ForFun() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="forfun" className="relative bg-tan py-24 lg:py-32 overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-cream/40 rounded-full blur-2xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-60 h-60 bg-terracotta/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      {/* Confetti-like decorative dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: `${15 + (i * 7) % 70}%`,
            left: `${10 + (i * 11) % 80}%`,
            backgroundColor: i % 3 === 0 ? '#C58C6E' : i % 3 === 1 ? '#B8B7A3' : '#6B705C',
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            Beyond Work
          </span> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-olive mt-4">
            For Fun
          </h2>
        </motion.div>

        {/* Polaroid-style cards */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {funActivities.map((activity, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
              style={{ transform: `rotate(${activity.rotation}deg)` }}
            >
              <motion.div
                className="relative bg-cream p-4 pb-16 rounded-lg shadow-xl w-64 md:w-72"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Tape decoration */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-sage/40 rounded-sm transform -rotate-2" />
                
                {/* Image placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-sage/30 to-tan/50 rounded overflow-hidden mb-4">
                  {/* Placeholder content - replace with actual Image when you have photos */}
                  {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-olive/50">
                    <span className="text-5xl mb-2">{activity.emoji}</span>
                    <span className="text-xs text-olive/40">Add photo here</span>
                    <span className="text-[10px] text-olive/30 mt-1">{activity.image}</span>
                  </div> */}
                  
                  {/* Uncomment when you have images: */}
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                 
                  
                  {/* Subtle overlay for depth */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}
                </div>

                {/* Caption area - styled like handwriting */}
                <div className="text-center">
                  {activity.link ? (
                    <a 
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl text-olive hover:text-terracotta transition-colors"
                    >
                      {activity.title}
                    </a>
                  ) : (
                    <h3 className="font-serif text-xl text-olive group-hover:text-terracotta transition-colors">
                      {activity.title}
                    </h3>
                  )}
                  <p className="text-olive/60 text-sm mt-1 italic">{activity.description}</p>
                </div>

                {/* Corner curl effect */}
                <div className="absolute bottom-2 right-2 w-6 h-6">
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-tan/80" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun animated footer message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          {/* <motion.p 
            className="text-olive/60 text-lg italic"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨ Always looking for new book recommendations! ✨
          </motion.p> */}
        </motion.div>
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
