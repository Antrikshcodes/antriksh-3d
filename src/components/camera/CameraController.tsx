"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { CAMERA_POSITIONS } from "@/data/cameraPositions";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

interface CameraControllerProps {
  onTransitionComplete?: () => void;
}

export function CameraController({ onTransitionComplete }: CameraControllerProps) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const currentView = useWorkspaceStore((s) => s.currentView);
  const reducedMotion = useWorkspaceStore((s) => s.reducedMotion);
  const isFirstMount = useRef(true);
  const activeTimeline = useRef<gsap.core.Timeline | null>(null);

  // Initial camera orientation on mount
  useEffect(() => {
    const config = CAMERA_POSITIONS.overview;
    camera.position.set(...config.position);
    if ("fov" in camera) {
      (camera as THREE.PerspectiveCamera).fov = config.fov;
      camera.updateProjectionMatrix();
    }
    if (controlsRef.current) {
      controlsRef.current.target.set(...config.target);
      controlsRef.current.update();
    }
  }, [camera]);

  // Smooth cinematic GSAP transition when currentView changes
  useEffect(() => {
    // Skip animation on initial mount since camera is already at overview
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    const targetConfig = CAMERA_POSITIONS[currentView] || CAMERA_POSITIONS.overview;
    const controls = controlsRef.current;
    if (!controls) return;

    if (activeTimeline.current) {
      activeTimeline.current.kill();
    }

    useWorkspaceStore.getState().setIsTransitioning(true);

    const duration = reducedMotion ? 0.05 : 1.35;
    const ease = "power2.inOut";

    const targetPos = {
      x: targetConfig.position[0],
      y: targetConfig.position[1],
      z: targetConfig.position[2],
    };

    const targetLookAt = {
      x: targetConfig.target[0],
      y: targetConfig.target[1],
      z: targetConfig.target[2],
    };

    const targetFov = {
      fov: targetConfig.fov,
    };

    const tl = gsap.timeline({
      onUpdate: () => {
        if ("fov" in camera) {
          (camera as THREE.PerspectiveCamera).fov = targetFov.fov;
          camera.updateProjectionMatrix();
        }
        controls.update();
      },
      onComplete: () => {
        useWorkspaceStore.getState().setIsTransitioning(false);
        if (onTransitionComplete) onTransitionComplete();
      },
    });

    tl.to(
      camera.position,
      {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration,
        ease,
      },
      0
    );

    tl.to(
      controls.target,
      {
        x: targetLookAt.x,
        y: targetLookAt.y,
        z: targetLookAt.z,
        duration,
        ease,
      },
      0
    );

    if ("fov" in camera) {
      tl.to(
        targetFov,
        {
          fov: targetConfig.fov,
          duration,
          ease,
        },
        0
      );
    }

    activeTimeline.current = tl;

    return () => {
      tl.kill();
    };
  }, [currentView, camera, reducedMotion, onTransitionComplete]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.05}
      minDistance={0.5}
      maxDistance={6.0}
      maxPolarAngle={Math.PI / 2 - 0.04}
      minPolarAngle={Math.PI / 6}
      rotateSpeed={0.7}
      panSpeed={0.6}
      zoomSpeed={0.8}
    />
  );
}
