"use client";

import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { INTERACTIVE_OBJECTS } from "@/data/portfolioData";

export function HoverTooltipBadge() {
  const hoveredObject = useWorkspaceStore((s) => s.hoveredObject);
  const selectedObject = useWorkspaceStore((s) => s.selectedObject);

  if (!hoveredObject || selectedObject) return null;

  const info = INTERACTIVE_OBJECTS[hoveredObject];
  if (!info) return null;

  return (
    <div className="pointer-events-none fixed bottom-24 left-1/2 z-30 -translate-x-1/2 transform transition-all duration-200">
      <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-slate-950/85 px-5 py-2.5 shadow-[0_0_24px_rgba(6,182,212,0.25)] backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
        </span>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {info.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-sm font-medium text-slate-100">{info.name}</span>
          </div>
          <span className="text-[11px] text-slate-400">{info.tooltip}</span>
        </div>
      </div>
    </div>
  );
}
