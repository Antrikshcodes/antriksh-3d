"use client";

import { create } from "zustand";
import { CameraViewKey, IntroPhase } from "@/types";
import { soundEngine } from "@/utils/audioEngine";

interface WorkspaceState {
  currentView: CameraViewKey;
  hoveredObject: CameraViewKey | null;
  selectedObject: CameraViewKey | null;
  isTransitioning: boolean;
  isPanelOpen: boolean;
  performanceTier: "high" | "medium" | "low";
  soundEnabled: boolean;
  reducedMotion: boolean;
  introPhase: IntroPhase;
  activeStoryChapter: number;

  // Actions
  setView: (view: CameraViewKey) => void;
  setHoveredObject: (obj: CameraViewKey | null) => void;
  setSelectedObject: (obj: CameraViewKey | null) => void;
  setIsTransitioning: (val: boolean) => void;
  setIsPanelOpen: (val: boolean) => void;
  togglePanel: () => void;
  setPerformanceTier: (tier: "high" | "medium" | "low") => void;
  toggleReducedMotion: () => void;
  resetToOverview: () => void;
  setIntroPhase: (phase: IntroPhase) => void;
  skipIntro: () => void;
  setActiveStoryChapter: (ch: number) => void;
  toggleSound: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  currentView: "overview",
  hoveredObject: null,
  selectedObject: null,
  isTransitioning: false,
  isPanelOpen: false,
  performanceTier: "high",
  soundEnabled: false,
  reducedMotion: false,
  introPhase: "dark",
  activeStoryChapter: 0,

  setView: (view) => {
    soundEngine.playSelectSound();
    set({
      currentView: view,
      isPanelOpen: view !== "overview",
      selectedObject: view === "overview" ? null : view,
    });
  },

  setHoveredObject: (obj) => {
    if (obj) soundEngine.playHoverSound();
    set((state) => (state.hoveredObject === obj ? state : { hoveredObject: obj }));
  },

  setSelectedObject: (obj) => {
    if (obj) soundEngine.playSelectSound();
    set({
      selectedObject: obj,
      currentView: obj ?? "overview",
      isPanelOpen: obj !== null,
    });
  },

  setIsTransitioning: (val) =>
    set((state) => (state.isTransitioning === val ? state : { isTransitioning: val })),

  setIsPanelOpen: (val) =>
    set((state) => (state.isPanelOpen === val ? state : { isPanelOpen: val })),

  togglePanel: () =>
    set((state) => ({ isPanelOpen: !state.isPanelOpen })),

  setPerformanceTier: (tier) =>
    set({ performanceTier: tier }),

  toggleReducedMotion: () =>
    set((state) => ({ reducedMotion: !state.reducedMotion })),

  resetToOverview: () => {
    soundEngine.playSelectSound();
    set({
      currentView: "overview",
      selectedObject: null,
      isPanelOpen: false,
    });
  },

  setIntroPhase: (phase) => {
    if (phase === "lighting" || phase === "screen") {
      soundEngine.playWakeupSound();
    }
    set({ introPhase: phase });
  },

  skipIntro: () =>
    set({ introPhase: "complete" }),

  setActiveStoryChapter: (ch) =>
    set((state) => (state.activeStoryChapter === ch ? state : { activeStoryChapter: ch })),

  toggleSound: () => {
    const isNowOn = soundEngine.toggle();
    set({ soundEnabled: isNowOn });
  },
}));

export const getWorkspaceState = () => useWorkspaceStore.getState();
export const setWorkspaceState = useWorkspaceStore.setState;
