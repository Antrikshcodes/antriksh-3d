"use client";

import { useEffect, useState } from "react";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FastForward, Volume2, VolumeX, Sparkles } from "lucide-react";

export function CinematicIntro() {
  const introPhase = useWorkspaceStore((s) => s.introPhase);
  const setIntroPhase = useWorkspaceStore((s) => s.setIntroPhase);
  const skipIntro = useWorkspaceStore((s) => s.skipIntro);
  const soundEnabled = useWorkspaceStore((s) => s.soundEnabled);
  const toggleSound = useWorkspaceStore((s) => s.toggleSound);

  const [subtitleText, setSubtitleText] = useState("");
  const fullSubtitle = "BUILDING THE FUTURE OF AI & ROBOTICS";

  // Automated intro sequence choreography
  useEffect(() => {
    if (introPhase === "complete") return;

    // Phase 1: Lighting turns on after 400ms
    const timer1 = setTimeout(() => {
      setIntroPhase("lighting");
    }, 400);

    // Phase 2: Screen wakes up after 1300ms
    const timer2 = setTimeout(() => {
      setIntroPhase("screen");
    }, 1300);

    // Phase 3: Typography title sequence after 2200ms
    const timer3 = setTimeout(() => {
      setIntroPhase("title");
    }, 2200);

    // Phase 4: Full awakening after 4800ms
    const timer4 = setTimeout(() => {
      setIntroPhase("complete");
    }, 5200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [introPhase, setIntroPhase]);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (introPhase !== "title") return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullSubtitle.length) {
        setSubtitleText(fullSubtitle.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [introPhase]);

  if (introPhase === "complete") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 select-none transition-opacity duration-1000">
      {/* Top Bar with Skip Intro & Sound Button */}
      <div className="pointer-events-auto flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
            ANTRIKSH.OS // INITIALIZING
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 transition hover:border-slate-700 hover:text-white backdrop-blur-md"
            title={soundEnabled ? "Mute audio" : "Enable ambient audio"}
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

          {/* Skip Intro Button */}
          <button
            onClick={skipIntro}
            className="group flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white backdrop-blur-md"
          >
            <span>Skip Intro</span>
            <FastForward className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Center Cinematic Typography Reveal */}
      {(introPhase === "screen" || introPhase === "title") && (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl space-y-4 animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-1 text-xs text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="tracking-widest uppercase font-mono">WORKSPACE AWAKENING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>

            <p className="min-h-[24px] font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-300 uppercase">
              {subtitleText}
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />
            </p>
          </div>
        </div>
      )}

      {/* Bottom Cinematic Loading Status */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-48 overflow-hidden rounded-full border border-slate-800 bg-slate-950/80 p-0.5 backdrop-blur-md">
          <div
            className="h-1 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-300 transition-all duration-700 shadow-[0_0_12px_#06b6d4]"
            style={{
              width:
                introPhase === "dark"
                  ? "20%"
                  : introPhase === "lighting"
                  ? "45%"
                  : introPhase === "screen"
                  ? "70%"
                  : "100%",
            }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
          {introPhase === "dark"
            ? "INITIALIZING OPTICS..."
            : introPhase === "lighting"
            ? "TASK LIGHTING ONLINE"
            : introPhase === "screen"
            ? "SYSTEM HARDWARE AWAKE"
            : "SYNCHRONIZING WORKSPACE"}
        </span>
      </div>
    </div>
  );
}

