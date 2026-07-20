"use client";

import { useRef, useState, KeyboardEvent } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type Layer = {
  title: string;
  points: string[];
  valueTitle: string;
  valueBody: string;
};

const LAYERS: Layer[] = [
  {
    title: "Research",
    points: [
      "Co-invented BinaryShield, the first privacy-preserving fingerprinting system for correlating AI threat signals across compliance boundaries. Patented and peer-reviewed at IEEE SaTML '26.",
      "Created models and evaluations for risks with little prior art: agentic memory poisoning, psychosocial harms, multi-session malware campaigns.",
    ],
    valueTitle: "Methods ahead of the literature",
    valueBody: "I can innovate creatively, then filter the ideas down to what I know will work.",
  },
  {
    title: "Engineering",
    points: [
      "Architected, built, and scaled a 0-to-1 AI safety detection platform across 60+ Microsoft services, processing 26.8B log lines monthly with privacy-preserving, retroactive detection across compliance boundaries.",
      "Designed a write once, run everywhere abstraction: one detector serves 60+ products, reducing detection-authoring time by 67%.",
    ],
    valueTitle: "Research that reaches production",
    valueBody: "I built the platform to solve my own need as a researcher.",
  },
  {
    title: "Red Teaming & Adversarial",
    points: [
      "Led complex AI red-teaming operations spanning everything from multilingual to malware generation.",
      "Devised novel techniques for poisoning agentic memory and manipulating agents, then presented the risks and mitigations to CISOs and senior government security officials.",
    ],
    valueTitle: "Coverage beyond known attacks",
    valueBody:
      "Red-team findings feed directly into the detections I build, so each discovered failure mode becomes a monitored one.",
  },
  {
    title: "Policy & Governance",
    points: [
      "Nominated by my mentor in 2023 to become one of the company's first internal Responsible AI leads, before playbooks existed and before many of these risks had standard names.",
      "Championed flagship AI products from idea through deployment, translating safety risks into measurable release criteria and production mitigations.",
      "Built risk-harm taxonomies, defined applicable policy, and led red-teaming operations for dozens of product launches.",
      "Owned the observability schema for AI memory safety, socializing the design and aligning stakeholders across MAI, M365, and Foundry to enable auditability, attribution, and detection at scale. Delivered direct product on memory observability via Security Development Lifecycle adoption, extending these best practices into Microsoft's company-wide security enforcement standard.",
    ],
    valueTitle: "Governance in unmapped territory",
    valueBody:
      "I have written the release criteria from scratch for loosely defined risks, and implemented it in practice.",
  },
  {
    title: "Applied Ethics",
    points: ["Beginning MSt in Applied Ethics at Oxford in 2026. More coming soon!"],
    valueTitle: "Formal grounding",
    valueBody: "Building out a more rigorous theoretical foundation for my work.",
  },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function FullStackAISafety() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const layer = LAYERS[active];

  const onKeySelect = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      className="fsas mt-20 lg:mt-24"
    >
      <style>{`
        .fsas {
          --n-100:#F7F0E6; --n-200:#EFE4D4; --n-300:#E0CBB5; --n-400:#CDB49E;
          --n-500:#B3A48F; --n-600:#928676; --n-700:#6B705C; --n-800:#575B4A; --n-900:#3C3F33;
          --a-100:#F6E7DC; --a-200:#EDD3C3; --a-300:#DFB49C; --a-400:#D19A7C;
          --a-500:#C58C6E; --a-600:#B0765A; --a-700:#925C43; --a-800:#6F4633; --a-900:#4A2E22;
          --g-200:#DFE2CC; --g-300:#C9CDB2; --g-800:#43473A;
        }
        .fsas-slab { outline: none; }
        .fsas-slab:hover { border-color: var(--a-500) !important; }
        .fsas-slab:focus-visible { outline: 2px solid var(--a-500); outline-offset: 3px; }
        .fsas-tab { outline: none; }
        .fsas-tab:hover { background: var(--n-200) !important; }
        .fsas-tab:focus-visible { outline: 2px solid var(--a-500); outline-offset: 2px; }
        @keyframes fsasRiseIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="relative overflow-hidden rounded-3xl bg-cream/70 shadow-lg px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: "-180px",
            bottom: "-220px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background: "var(--g-200)",
            opacity: 0.55,
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            right: "-140px",
            top: "-180px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "var(--a-200)",
            opacity: 0.45,
          }}
        />

        {/* Header */}
        <div className="relative mb-8 lg:mb-12">
          <h3 className="font-serif text-olive text-4xl md:text-5xl lg:text-6xl leading-[1.02]">
            Pragmatic Innovation
          </h3>
          <p className="font-serif italic text-terracotta text-lg md:text-xl lg:text-2xl mt-4 leading-snug">
            across policy, research, engineering, and adversarial testing
          </p>
        </div>

        {/* Body */}
        <div className="relative flex flex-wrap items-center gap-10 lg:gap-20">
          {/* Left cluster: 3D stack + tab list */}
          <div className="flex flex-1 flex-wrap items-center gap-6 lg:gap-12" style={{ minWidth: 0, flexBasis: "460px" }}>
            {/* 3D stack */}
            <div
              className="grid flex-none place-items-center"
              style={{ perspective: "1400px", width: "clamp(190px, 22vw, 250px)", height: "400px", marginTop: "48px" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(175px, 20vw, 230px)",
                  height: "clamp(175px, 20vw, 230px)",
                  transformStyle: "preserve-3d",
                  transform: "rotateX(57deg) rotateZ(-42deg)",
                }}
              >
                {LAYERS.map((l, i) => {
                  const open = i === active;
                  const z = (LAYERS.length - 1 - i) * 46 + (open ? 28 : 0);
                  return (
                    <div
                      key={l.title}
                      className="fsas-slab"
                      role="button"
                      tabIndex={0}
                      aria-label={l.title}
                      aria-pressed={open}
                      onClick={() => setActive(i)}
                      onKeyDown={(e) => onKeySelect(e, i)}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "44px",
                        cursor: "pointer",
                        background: open ? "var(--a-300)" : "var(--n-100)",
                        border: `2px solid ${open ? "var(--a-600)" : "var(--n-300)"}`,
                        transform: `translateZ(${z}px)`,
                        transition:
                          "transform 0.35s cubic-bezier(0.34, 1.4, 0.5, 1), background 0.25s ease, border-color 0.25s ease",
                        boxShadow: "0 3px 10px rgba(60, 63, 51, 0.16)",
                      }}
                    >
                      <span
                        className="font-serif"
                        style={{
                          position: "absolute",
                          top: "18px",
                          left: "24px",
                          fontSize: "17px",
                          color: open ? "var(--a-900)" : "var(--n-600)",
                          transform: "rotateZ(42deg)",
                          display: "inline-block",
                        }}
                      >
                        {num(i)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tab list */}
            <div className="flex flex-col gap-1.5" style={{ flex: "1 1 220px", minWidth: "220px" }}>
              {LAYERS.map((l, i) => {
                const open = i === active;
                return (
                  <div
                    key={l.title}
                    className="fsas-tab"
                    role="button"
                    tabIndex={0}
                    aria-pressed={open}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKeySelect(e, i)}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 18px 12px 14px",
                      borderRadius: "999px",
                      background: open ? "var(--a-100)" : "transparent",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{
                        width: "34px",
                        height: "34px",
                        flex: "0 0 auto",
                        borderRadius: "999px",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "14px",
                        background: open ? "var(--a-500)" : "transparent",
                        color: open ? "var(--n-100)" : "var(--n-700)",
                        border: `2px solid ${open ? "var(--a-500)" : "var(--n-400)"}`,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {num(i)}
                    </span>
                    <span
                      className="font-serif"
                      style={{
                        fontSize: "19px",
                        lineHeight: 1.15,
                        color: open ? "var(--a-800)" : "var(--n-800)",
                        fontStyle: open ? "italic" : "normal",
                      }}
                    >
                      {l.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div
            className="flex-1"
            style={{
              minWidth: "320px",
              flexBasis: "380px",
              borderLeft: "2px solid var(--g-300)",
              paddingLeft: "clamp(24px, 3vw, 48px)",
            }}
          >
            <div key={active} style={{ animation: "fsasRiseIn 0.4s ease both" }}>
              <div
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--g-800)",
                  marginBottom: "14px",
                }}
              >
                Layer {num(active)} · {layer.title}
              </div>
              <h4 className="font-serif text-olive" style={{ fontSize: "clamp(26px, 2.6vw, 36px)", lineHeight: 1.1, margin: "0 0 22px" }}>
                {layer.valueTitle}
              </h4>
              <div className="flex flex-col gap-3" style={{ marginBottom: "26px" }}>
                {layer.points.map((pt, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15.5px", lineHeight: 1.55, color: "var(--n-800)" }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "999px",
                        background: "var(--a-500)",
                        flex: "0 0 auto",
                        marginTop: "8px",
                      }}
                    />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "2px solid var(--g-300)", paddingTop: "20px" }}>
                <div
                  style={{
                    fontSize: "12.5px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--g-800)",
                    marginBottom: "10px",
                  }}
                >
                  Why it matters
                </div>
                <p
                  className="font-serif"
                  style={{ fontStyle: "italic", fontSize: "19px", lineHeight: 1.5, margin: 0, color: "var(--n-800)", maxWidth: "30em" }}
                >
                  {layer.valueBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
