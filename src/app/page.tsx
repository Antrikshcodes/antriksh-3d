"use client";

import dynamic from "next/dynamic";
import { LoadingScreen } from "@/components/interface/LoadingScreen";
import { CinematicIntro } from "@/components/interface/CinematicIntro";
import { ScrollStoryOverlay } from "@/components/interface/ScrollStoryOverlay";
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
      <main className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto bg-[#07090e]">
        {/* Loading Screen */}
        <LoadingScreen />

        {/* Cinematic Studio Introduction Overlay */}
        <CinematicIntro />

        {/* Persistent Fullscreen 3D Scene */}
        <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-auto">
          <WorkspaceScene />
        </div>

        {/* Scroll-Driven Storytelling Narrative Track */}
        <ScrollStoryOverlay />

        {/* Global Cinematic HUD Overlays & Controls */}
        <InitialCinematicHero />

        {/* Hover Object Badge */}
        <HoverTooltipBadge />

        {/* Click-triggered Detail Information Drawer */}
        <ObjectInfoPanel />
      </main>
    </WebGLFallback>
  );
}
