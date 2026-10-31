"use client";

import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CameraViewKey } from "@/types";
import { Monitor, Laptop, Award, Bot, FileText, UserCheck, Smartphone, Maximize2 } from "lucide-react";

const NAVIGATION_ITEMS: { key: CameraViewKey; label: string; icon: any }[] = [
  { key: "overview", label: "Full Studio", icon: Maximize2 },
  { key: "laptop", label: "Space Black Mac", icon: Laptop },
  { key: "monitor", label: "Curved Monitor", icon: Monitor },
  { key: "idCard", label: "ID Card", icon: UserCheck },
  { key: "resume", label: "Resume", icon: FileText },
  { key: "robot", label: "Robotics", icon: Bot },
  { key: "trophyShelf", label: "Trophies", icon: Award },
  { key: "phone", label: "Connect", icon: Smartphone },
];

export function InitialCinematicHero() {
  const currentView = useWorkspaceStore((s) => s.currentView);
  const setView = useWorkspaceStore((s) => s.setView);
  const isPanelOpen = useWorkspaceStore((s) => s.isPanelOpen);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
      {/* Top Header Section */}
      <div className="pointer-events-auto flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-cyan-400 uppercase">
              Phase 1 // 3D Workspace
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            {PERSONAL_INFO.name.toUpperCase()}
          </h1>
          <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase">
            THE INTERACTIVE WORKSPACE
          </p>
        </div>

        {/* Status Badge */}
        <div className="hidden rounded-full border border-slate-800 bg-slate-950/70 px-4 py-1.5 text-xs text-slate-400 backdrop-blur-md sm:flex sm:items-center sm:gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive 3D Engine Ready</span>
        </div>
      </div>

      {/* Center Welcome Prompt (Only visible in overview view when no panel is open) */}
      {currentView === "overview" && !isPanelOpen && (
        <div className="pointer-events-none flex flex-col items-center justify-center text-center">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-sm transition-all duration-500">
            <p className="text-lg font-light tracking-wide text-slate-200 md:text-xl">
              &ldquo;{PERSONAL_INFO.welcomeMessage}&rdquo;
            </p>
            <p className="mt-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
              &ldquo;{PERSONAL_INFO.scrollPrompt}&rdquo;
            </p>
            <p className="mt-3 text-[11px] text-slate-400">
              Drag to rotate • Pinch / Scroll to zoom • Click objects to inspect
            </p>
          </div>
        </div>
      )}

      {/* Bottom Viewport Switcher Toolbar */}
      <div className="pointer-events-auto flex w-full flex-col items-center gap-3">
        <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/80 p-1.5 shadow-2xl backdrop-blur-lg">
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

