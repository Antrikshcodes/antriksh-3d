"use client";

import { create } from "zustand";
import { CameraViewKey } from "@/types";

interface WorkspaceState {
  currentView: CameraViewKey;
  hoveredObject: CameraViewKey | null;
  selectedObject: CameraViewKey | null;
  isTransitioning: boolean;
  isPanelOpen: boolean;
  performanceTier: "high" | "medium" | "low";
  soundEnabled: boolean;
  reducedMotion: boolean;

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
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  currentView: "overview",
  hoveredObject: null,
  selectedObject: null,
  isTransitioning: false,
  isPanelOpen: false,
  performanceTier: "high",
  soundEnabled: false,
  reducedMotion: false,

  setView: (view) =>
    set({
      currentView: view,
      isPanelOpen: view !== "overview",
      selectedObject: view === "overview" ? null : view,
    }),

  setHoveredObject: (obj) =>
    set((state) => (state.hoveredObject === obj ? state : { hoveredObject: obj })),

  setSelectedObject: (obj) =>
    set({
      selectedObject: obj,
      currentView: obj ?? "overview",
      isPanelOpen: obj !== null,
    }),

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

  resetToOverview: () =>
    set({
      currentView: "overview",
      selectedObject: null,
      isPanelOpen: false,
    }),
}));

export const getWorkspaceState = () => useWorkspaceStore.getState();
export const setWorkspaceState = useWorkspaceStore.setState;
