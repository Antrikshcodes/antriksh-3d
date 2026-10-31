"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Loader } from "@react-three/drei";
import { StudioLighting } from "@/components/environment/StudioLighting";
import { RoomStudio } from "@/components/environment/RoomStudio";
import { Desk } from "@/components/objects/Desk";
import { Laptop } from "@/components/objects/Laptop";
import { Monitor } from "@/components/objects/Monitor";
import { MechanicalKeyboard } from "@/components/objects/MechanicalKeyboard";
import { WirelessMouse } from "@/components/objects/WirelessMouse";
import { Headphones } from "@/components/objects/Headphones";
import { IdCard } from "@/components/objects/IdCard";
import { Resume } from "@/components/objects/Resume";
import { Smartphone } from "@/components/objects/Smartphone";
import { CoffeeMug } from "@/components/objects/CoffeeMug";
import { DeskLamp } from "@/components/objects/DeskLamp";
import { RoboticsFigurine } from "@/components/objects/RoboticsFigurine";
import { Trophies } from "@/components/objects/Trophies";
import { BooksAndStationery } from "@/components/objects/BooksAndStationery";
import { CameraController } from "@/components/camera/CameraController";

export function WorkspaceScene() {
  return (
    <div className="relative h-full w-full select-none">
      <Canvas
        shadows
        camera={{ position: [0, 2.05, 2.35], fov: 42, near: 0.1, far: 25 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMappingExposure: 1.05,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Studio Lighting System */}
          <StudioLighting />

          {/* HDR Environment Reflections */}
          <Environment preset="city" environmentIntensity={0.25} />

          {/* Architectural Studio Room & Furniture */}
          <RoomStudio />

          {/* Core Objects */}
          <Desk />
          <Laptop />
          <Monitor />
          <MechanicalKeyboard />
          <WirelessMouse />
          <Headphones />
          <IdCard />
          <Resume />
          <Smartphone />
          <CoffeeMug />
          <DeskLamp />
          <RoboticsFigurine />
          <Trophies />
          <BooksAndStationery />

          {/* Realistic Ground Contact Shadows */}
          <ContactShadows
            position={[0, 0.002, 0]}
            opacity={0.7}
            scale={7}
            blur={1.8}
            far={2.2}
            resolution={512}
            color="#040609"
            frames={1}
          />

          {/* GSAP & Orbit Camera Controller */}
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}

