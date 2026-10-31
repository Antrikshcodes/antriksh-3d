"use client";

import { useEffect, useState } from "react";
import { PERSONAL_INFO, PROJECTS_DATA, EDUCATION_DATA } from "@/data/portfolioData";

export function WebGLFallback({ children }: { children: React.ReactNode }) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === null) return <>{children}</>;

  if (!hasWebGL) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#07090e] p-6 text-slate-200">
        <div className="max-w-xl space-y-6 text-center">
          <h1 className="text-3xl font-bold text-white">{PERSONAL_INFO.name}</h1>
          <p className="text-cyan-400 font-mono text-sm">{PERSONAL_INFO.title}</p>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-left space-y-4">
            <h2 className="text-lg font-semibold text-white">WebGL Hardware Acceleration Unavailable</h2>
            <p className="text-xs text-slate-400">
              Your browser or device does not currently have WebGL hardware acceleration enabled to render the 3D studio environment. Here is Antriksh&apos;s verified overview:
            </p>
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-300">Education:</div>
              <div className="text-xs text-slate-400">{EDUCATION_DATA.major} — {EDUCATION_DATA.institutions.join(", ")} ({EDUCATION_DATA.period})</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-300">Featured Projects:</div>
              <ul className="text-xs text-slate-400 list-disc list-inside">
                {PROJECTS_DATA.map((p) => (
                  <li key={p.id}>{p.title} — {p.tagline}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
