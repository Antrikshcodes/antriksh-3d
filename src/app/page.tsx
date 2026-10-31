"use client";

import dynamic from "next/dynamic";
import { LoadingScreen } from "@/components/interface/LoadingScreen";
import { InitialCinematicHero } from "@/components/interface/InitialCinematicHero";
import { HoverTooltipBadge } from "@/components/interface/HoverTooltipBadge";
import { ObjectInfoPanel } from "@/components/interface/ObjectInfoPanel";
import { WebGLFallback } from "@/components/interface/WebGLFallback";

// Dynamically import Three.js Scene to ensure strictly client-side canvas mounting
const WorkspaceScene = dynamic(
  () =>
    import("@/components/scene/WorkspaceScene").then(
      (mod) => mod.WorkspaceScene
    ),
  {
    ssr: false,
    loading: () => <LoadingScreen />,
  }
);

export default function Home() {
  return (
    <WebGLFallback>
      <main className="relative h-screen w-screen overflow-hidden bg-[#07090e]">
        {/* Loading Screen */}
        <LoadingScreen />

        {/* 3D Interactive Three.js / React Three Fiber Studio Scene */}
        <WorkspaceScene />

        {/* Cinematic HUD Overlays */}
        <InitialCinematicHero />

        {/* Hover Object Badge */}
        <HoverTooltipBadge />

        {/* Click-triggered Detail Information Drawer */}
        <ObjectInfoPanel />
      </main>
    </WebGLFallback>
  );
}
