"use client";

import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CameraViewKey } from "@/types";
import {
  Monitor,
  Laptop,
  Award,
  Bot,
  FileText,
  UserCheck,
  Smartphone,
  Maximize2,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
} from "lucide-react";

const NAVIGATION_ITEMS: { key: CameraViewKey; label: string; icon: any }[] = [
  { key: "overview", label: "Studio Overview", icon: Maximize2 },
  { key: "laptop", label: "Space Black Mac", icon: Laptop },
  { key: "monitor", label: "Curved Display", icon: Monitor },
  { key: "idCard", label: "Student ID", icon: UserCheck },
  { key: "resume", label: "Resume", icon: FileText },
  { key: "robot", label: "Robotics", icon: Bot },
  { key: "trophyShelf", label: "Trophies", icon: Award },
  { key: "phone", label: "Connect", icon: Smartphone },
];

export function InitialCinematicHero() {
  const currentView = useWorkspaceStore((s) => s.currentView);
  const setView = useWorkspaceStore((s) => s.setView);
  const isPanelOpen = useWorkspaceStore((s) => s.isPanelOpen);
  const soundEnabled = useWorkspaceStore((s) => s.soundEnabled);
  const toggleSound = useWorkspaceStore((s) => s.toggleSound);
  const reducedMotion = useWorkspaceStore((s) => s.reducedMotion);
  const toggleReducedMotion = useWorkspaceStore((s) => s.toggleReducedMotion);
  const introPhase = useWorkspaceStore((s) => s.introPhase);

  // Hidden during intro sequence
  if (introPhase !== "complete") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex flex-col justify-between p-6 md:p-8 select-none">
      {/* Top Header Section */}
      <div className="pointer-events-auto flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              ANTRIKSH.OS // v3.4
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white md:text-3xl drop-shadow-md">
            {PERSONAL_INFO.name.toUpperCase()}
          </h1>
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-slate-400 uppercase">
            THE INTERACTIVE WORKSPACE
          </p>
        </div>

        {/* Global Sound & Accessibility Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 transition hover:border-slate-700 hover:text-white backdrop-blur-md"
            title={soundEnabled ? "Mute audio" : "Enable ambient studio audio"}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[11px] font-mono">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 transition hover:border-slate-700 hover:text-white backdrop-blur-md"
            title="Toggle reduced motion transitions"
          >
            {reducedMotion ? (
              <>
                <EyeOff className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[11px] font-mono">REDUCED MOTION</span>
              </>
            ) : (
              <>
                <Eye className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[11px] font-mono">CINEMATIC FX</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Center Welcome Prompt (Only visible in overview view when no panel is open) */}
      {currentView === "overview" && !isPanelOpen && (
        <div className="pointer-events-none flex flex-col items-center justify-center text-center">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 backdrop-blur-md transition-all duration-500 shadow-2xl">
            <p className="text-lg font-light tracking-wide text-slate-200 md:text-xl">
              &ldquo;{PERSONAL_INFO.welcomeMessage}&rdquo;
            </p>
            <p className="mt-1.5 text-xs font-mono font-medium tracking-widest text-cyan-400 uppercase">
              &ldquo;Scroll down to travel the story • Click objects to explore&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Bottom Viewport Switcher Toolbar */}
      <div className="pointer-events-auto flex w-full flex-col items-center gap-3">
        <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/85 p-1.5 shadow-2xl backdrop-blur-lg">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setView(item.key)}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_16px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
