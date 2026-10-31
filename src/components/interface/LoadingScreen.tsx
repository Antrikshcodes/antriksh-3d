"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 200);
    const timer2 = setTimeout(() => setProgress(88), 600);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        {/* Animated Cyber Core Icon */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping" />
          <div className="absolute inset-1 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
        </div>

        {/* Text */}
        <div className="space-y-1.5">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase">
            ANTRIKSH GALHOTRA
          </p>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            INITIALIZING 3D WORKSPACE
          </h2>
          <p className="text-xs text-slate-400">Loading photorealistic environment & PBR shaders...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-56 overflow-hidden rounded-full border border-slate-800 bg-slate-900/80 p-0.5">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all duration-300 shadow-[0_0_12px_#06b6d4]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] font-mono text-slate-400">{progress}%</span>
      </div>
    </div>
  );
}
