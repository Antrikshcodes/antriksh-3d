"use client";

import { useEffect, useState } from "react";
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



type Listener<T> = (state: T) => void;

function createStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener<T>>();

  return {
    getState: () => state,
    setState: (updater: Partial<T> | ((prev: T) => Partial<T>)) => {
      const next = typeof updater === "function" ? updater(state) : updater;
      state = { ...state, ...next };
      listeners.forEach((listener) => listener(state));
    },
    subscribe: (listener: Listener<T>) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const workspaceStore = createStore<WorkspaceState>({
  currentView: "overview",
  hoveredObject: null,
  selectedObject: null,
  isTransitioning: false,
  isPanelOpen: false,
  performanceTier: "high",
  soundEnabled: false,
  reducedMotion: false,

  setView: (view) => {
    workspaceStore.setState({
      currentView: view,
      isPanelOpen: view !== "overview",
      selectedObject: view === "overview" ? null : view,
    });
  },

  setHoveredObject: (obj) => {
    workspaceStore.setState({ hoveredObject: obj });
  },

  setSelectedObject: (obj) => {
    if (obj) {
      workspaceStore.setState({
        selectedObject: obj,
        currentView: obj,
        isPanelOpen: true,
      });
    } else {
      workspaceStore.setState({
        selectedObject: null,
        currentView: "overview",
        isPanelOpen: false,
      });
    }
  },

  setIsTransitioning: (val) => {
    workspaceStore.setState({ isTransitioning: val });
  },

  setIsPanelOpen: (val) => {
    workspaceStore.setState({ isPanelOpen: val });
  },

  togglePanel: () => {
    const { isPanelOpen } = workspaceStore.getState();
    workspaceStore.setState({ isPanelOpen: !isPanelOpen });
  },

  setPerformanceTier: (tier) => {
    workspaceStore.setState({ performanceTier: tier });
  },

  toggleReducedMotion: () => {
    const { reducedMotion } = workspaceStore.getState();
    workspaceStore.setState({ reducedMotion: !reducedMotion });
  },

  resetToOverview: () => {
    workspaceStore.setState({
      currentView: "overview",
      selectedObject: null,
      isPanelOpen: false,
    });
  },
});

export function useWorkspaceStore<T>(selector: (state: WorkspaceState) => T): T {
  const [slice, setSlice] = useState(() => selector(workspaceStore.getState()));

  useEffect(() => {
    const unsubscribe = workspaceStore.subscribe((state) => {
      const nextSlice = selector(state);
      setSlice(nextSlice);
    });
    return () => {
      unsubscribe();
    };
  }, [selector]);

  return slice;
}

export const getWorkspaceState = () => workspaceStore.getState();
export const setWorkspaceState = workspaceStore.setState;
