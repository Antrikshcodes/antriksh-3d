"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { CAMERA_POSITIONS } from "@/data/cameraPositions";
import { CameraViewKey } from "@/types";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ChevronDown, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryChapter {
  id: CameraViewKey;
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "overview",
    num: "01",
    badge: "STUDIO AWAKENING",
    title: "ANTRIKSH.OS",
    subtitle: "The Interactive 3D Workspace",
    description: "Welcome to my creative engineering studio. Every physical object in this environment reflects my technical journey, systems research, and ventures.",
    tags: ["AI & ML", "Robotics", "Full-Stack", "Three.js"],
  },
  {
    id: "laptop",
    num: "02",
    badge: "PRIMARY WORKSTATION",
    title: "Space Black MacBook Pro",
    subtitle: "Systems Architecture & Core Developer Identity",
    description: "Antriksh Galhotra — AI, Robotics & Software Developer. Focused on spatial perception, autonomous agents, and resilient full-stack systems.",
    tags: ["Space Black", "AI Developer", "System Design"],
  },
  {
    id: "idCard",
    num: "03",
    badge: "ACADEMIC FOUNDATIONS",
    title: "Student Identity",
    subtitle: "Newton School of Technology & Rishihood University",
    description: "Pursuing specialized B.Tech curriculum in Computer Science & Artificial Intelligence (2026–2030), combining foundational computer science with cutting-edge ML research.",
    tags: ["CS & AI", "2026–2030", "Newton School of Tech"],
  },
  {
    id: "resume",
    num: "04",
    badge: "TECHNICAL PORTFOLIO",
    title: "Verified Initiatives",
    subtitle: "5 Core Production & Research Systems",
    description: "Engineered Blindspot AI (real-time computer vision), Converge (smart city telemetry), Jarvis AI (autonomous voice agent), OrderShield (fraud anomaly detection), and Marketplace.",
    tags: ["Blindspot AI", "Converge", "Jarvis AI", "OrderShield"],
  },
  {
    id: "monitor",
    num: "05",
    badge: "NEURAL COMMAND CENTER",
    title: "34\" Curved Ultrawide Display",
    subtitle: "Developer Terminal & Future Jarvis AI Ready",
    description: "High-throughput operational monitor with active terminal telemetry, neural network topology visualization, and prepared audio pipelines for Phase 5 Jarvis voice interaction.",
    tags: ["Curved 21:9", "Jarvis AI Ready", "Neural Stream"],
  },
  {
    id: "robot",
    num: "06",
    badge: "EMBODIED INTELLIGENCE",
    title: "Robotics Companion",
    subtitle: "Hardware Autonomy & Physical Computing",
    description: "Passionate about bridging digital intelligence with physical actuators: exploring micro-controllers, embedded NPU compute, kinematics, and autonomous robotics perception.",
    tags: ["Robotics", "Embodied AI", "Microcontrollers", "ROS"],
  },
  {
    id: "trophyShelf",
    num: "07",
    badge: "COMPETITIVE HONORS",
    title: "Achievement Trophies",
    subtitle: "Hackathons & Innovation Summits",
    description: "Tested and refined AI solutions under real-time constraints: Fetch-A-Thon 3.0, HackO’Ween, CoNSTruct 2.0, and IIT Roorkee eSummit innovation showcase.",
    tags: ["Fetch-A-Thon", "HackO'Ween", "CoNSTruct", "IIT Roorkee"],
  },
  {
    id: "phone",
    num: "08",
    badge: "GLOBAL TELEMETRY",
    title: "Connect & Channels",
    subtitle: "Direct Communication & Collaboration",
    description: "Open to ambitious engineering collaborations, venture building, and high-impact AI research. Connect via GitHub, LinkedIn, or direct email.",
    tags: ["GitHub", "LinkedIn", "antrikshcodes@gmail.com"],
  },
];

export function ScrollStoryOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeChapter = useWorkspaceStore((s) => s.activeStoryChapter);
  const setActiveStoryChapter = useWorkspaceStore((s) => s.setActiveStoryChapter);
  const setView = useWorkspaceStore((s) => s.setView);
  const isPanelOpen = useWorkspaceStore((s) => s.isPanelOpen);
  const introPhase = useWorkspaceStore((s) => s.introPhase);

  // Synchronize scroll position with storytelling chapters and camera views
  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(".story-section");
    if (!sections.length) return;

    const triggers: ScrollTrigger[] = [];

    sections.forEach((sec, idx) => {
      const trigger = ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveStoryChapter(idx);
          const ch = STORY_CHAPTERS[idx];
          if (ch) {
            setView(ch.id);
          }
        },
        onEnterBack: () => {
          setActiveStoryChapter(idx);
          const ch = STORY_CHAPTERS[idx];
          if (ch) {
            setView(ch.id);
          }
        },
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [setActiveStoryChapter, setView]);

  if (introPhase !== "complete") return null;

  const currentChapter = STORY_CHAPTERS[activeChapter] || STORY_CHAPTERS[0];

  return (
    <div className="relative w-full">
      {/* Fixed Narrative Story HUD Card (Bottom Left / Center) */}
      {!isPanelOpen && (
        <div className="pointer-events-none fixed bottom-8 left-6 sm:left-10 z-30 max-w-md select-none transition-all duration-300">
          <div className="pointer-events-auto rounded-2xl border border-slate-800/80 bg-slate-950/85 p-5 sm:p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-3">
            {/* Badge & Step indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-mono font-bold text-cyan-400">
                  {currentChapter.num}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  {currentChapter.badge}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                0{activeChapter + 1} / 0{STORY_CHAPTERS.length}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {currentChapter.title}
              </h2>
              <p className="text-xs font-medium text-cyan-300/80 mt-0.5">
                {currentChapter.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentChapter.description}
            </p>

            {/* Tags & Action Button */}
            <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
              <div className="flex flex-wrap gap-1.5">
                {currentChapter.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-slate-900 border border-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setView(currentChapter.id)}
                className="flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Inspect</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Scroll Chapter Timeline Bar (Right Edge) */}
      <div className="pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 select-none">
        <span className="text-[9px] font-mono tracking-widest text-slate-500 rotate-90 mb-4">
          SCROLL TIMELINE
        </span>
        {STORY_CHAPTERS.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={ch.id}
              onClick={() => {
                const targetSec = containerRef.current?.querySelectorAll(".story-section")[idx];
                if (targetSec) {
                  targetSec.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="pointer-events-auto group relative flex items-center justify-end"
            >
              {/* Tooltip on hover */}
              <span className="absolute right-6 rounded bg-slate-950 px-2 py-1 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition shadow-lg border border-slate-800 whitespace-nowrap">
                {ch.num} • {ch.title}
              </span>
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-cyan-400 shadow-[0_0_12px_#06b6d4]"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Invisible Scroll Track Sections that trigger GSAP ScrollTrigger */}
      <div ref={containerRef} className="relative z-10 w-full pointer-events-auto">
        {STORY_CHAPTERS.map((ch, idx) => (
          <div
            key={ch.id}
            data-chapter={idx}
            className="story-section min-h-screen w-full flex items-end justify-center pb-20 pointer-events-none"
          >
            {/* Scroll down prompter for Chapter 1 */}
            {idx === 0 && (
              <div className="flex flex-col items-center gap-2 text-slate-400 animate-bounce pb-12">
                <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
                  SCROLL TO ENTER CINEMATIC JOURNEY
                </span>
                <ChevronDown className="h-4 w-4 text-cyan-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
