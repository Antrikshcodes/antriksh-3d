# Antriksh — The Interactive 3D Workspace

An immersive, photorealistic 3D personal developer workspace and portfolio for **Antriksh Galhotra** — AI, Robotics & Software Developer.

Built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Three.js**, **React Three Fiber**, **Drei**, and **GSAP**.

---

## 🌟 Concept & Visual Direction

**Photorealistic Minimalism + Futuristic AI Lab**

A visitor enters a realistic developer workspace and discovers Antriksh's professional identity, projects, research, and milestones by interacting directly with physical 3D objects in the room.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Engine**: Three.js & React Three Fiber (`@react-three/fiber`)
- **3D Utilities**: `@react-three/drei` (PBR shaders, lighting, contact shadows, environment maps)
- **Cinematic Animations**: GSAP (GreenSock) Camera Controller
- **UI Icons**: Lucide React

---

## 🏢 Phase 1 Deliverables: The Complete 3D Workspace

### 1. Studio Architecture & Lighting
- **Acoustic Wood Slat Wall**: Scandinavian / modern AI studio vertical oak slats with acoustic backing.
- **Architectural Floor**: Polished dark concrete floor with subtle reflectivity.
- **Floating Wall Shelf**: Wall-mounted shelf with concealed underside LED diffuser strip.
- **Studio Lighting**: Directional key light with soft shadow mapping, desk task spotlight, cyan monitor bias glow, and ambient fill.
- **Contact Shadows**: Soft ground occlusion and desk surface contact shadows.

### 2. Physical 3D Objects & Models
- **Premium Wooden Desk**: Solid dark walnut top with chamfered beveled edges, dual industrial matte black steel T-legs, crossbar, and cable trough.
- **Silver MacBook Pro**: Aluminum unibody enclosure, keyboard chiclet keys, trackpad, webcam notch, and illuminated procedural IDE screen showing active code.
- **Mechanical Keyboard**: Custom 75% layout in anodized aluminum case, brass accent weight, stealth PBT keycaps with cyan accents, and subtle underglow.
- **Wireless Mouse**: Ergonomic sculpted body, machined metal scroll wheel, thumb wheel, and DPI indicator.
- **Headphones on Aluminum Stand**: Studio reference over-ear headphones with memory foam cushions, metal grilles, and circular weighted aluminum stand.
- **Student ID Card**: Newton School of Technology & Rishihood University student ID in a transparent acrylic lanyard badge holder with golden RFID chip and barcode.
- **Printed Resume**: High-resolution procedural printed technical document with verified projects and skills.
- **Flagship Smartphone**: Titanium chassis, triple camera island, and OLED display with notifications and quick connect links.
- **Coffee Mug**: Matte black stoneware mug with glossy black coffee liquid and ceramic handle.
- **Modern Desk Lamp**: Articulated cantilever task lamp with brass knuckle joints and warm LED light bar.
- **External Monitor**: 34" ultrawide display with thin bezel, metal stand, terminal diagnostics, and neural topology visualization.
- **Robotics Figurine**: Articulating mech companion on a display pedestal with chest reactor core and pulsating optic visor.
- **Achievement Trophies**: Fetch-A-Thon 3.0 crystal obelisk, HackO’Ween angular award, CoNSTruct 2.0 trophy, and IIT Roorkee eSummit plaque.
- **Books & Stationery**: Hardcover tech books (*Deep Learning*, *Designing Data-Intensive Applications*, *Clean Code*), desk notebook with bookmark ribbon, and machined aluminum pen in dock.

### 3. Cinematic Camera & Interaction System
- Reusable GSAP Camera Controller with positions for:
  - `Full Studio (Overview)`
  - `MacBook Pro`
  - `Student ID Card`
  - `Printed Resume`
  - `Ultrawide Monitor & Terminal`
  - `Robotics Figurine`
  - `Achievement Trophies`
  - `Smartphone`
- Interactive hover effects (elevation, cursor changes, floating HUD badge).
- Click interactions that smoothly fly the camera to the object and open the contextual information drawer.
- Support for desktop (mouse orbit / pan / click) and mobile (touch orbit / pinch / tap).
- WebGL hardware acceleration fallback and loading screen.

---

## 📂 Modular Architecture

```
antriksh-3d/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── camera/
│   │   │   └── CameraController.tsx      # GSAP camera transitions & OrbitControls
│   │   ├── environment/
│   │   │   ├── RoomStudio.tsx            # Walls, acoustic slats, floor, shelf, chair
│   │   │   └── StudioLighting.tsx        # Key, spot, ambient & bias lighting
│   │   ├── interactions/
│   │   │   └── InteractiveWrapper.tsx    # Hover elevation, click, and cursor handling
│   │   ├── interface/
│   │   │   ├── HoverTooltipBadge.tsx     # Floating HUD badge
│   │   │   ├── InitialCinematicHero.tsx  # Welcome prompt & viewport toolbar
│   │   │   ├── LoadingScreen.tsx         # Cyber-styled loading overlay
│   │   │   ├── ObjectInfoPanel.tsx       # Slide-out details drawer
│   │   │   └── WebGLFallback.tsx         # Graceful fallback for non-WebGL devices
│   │   ├── objects/
│   │   │   ├── BooksAndStationery.tsx
│   │   │   ├── CoffeeMug.tsx
│   │   │   ├── Desk.tsx
│   │   │   ├── DeskLamp.tsx
│   │   │   ├── Headphones.tsx
│   │   │   ├── IdCard.tsx
│   │   │   ├── Laptop.tsx
│   │   │   ├── MechanicalKeyboard.tsx
│   │   │   ├── Monitor.tsx
│   │   │   ├── Resume.tsx
│   │   │   ├── RoboticsFigurine.tsx
│   │   │   ├── Smartphone.tsx
│   │   │   ├── Trophies.tsx
│   │   │   └── WirelessMouse.tsx
│   │   └── scene/
│   │       └── WorkspaceScene.tsx        # Canvas assembly & contact shadows
│   ├── data/
│   │   ├── cameraPositions.ts            # Viewport coordinates & targets
│   │   └── portfolioData.ts              # Verified personal data & projects
│   ├── hooks/
│   │   └── useWorkspaceStore.ts          # Reactive state management
│   └── types/
│       └── index.ts                      # TypeScript interfaces
└── public/
    ├── models/
    ├── textures/
    ├── images/
    └── fonts/
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Antrikshcodes/antriksh-3d.git
cd antriksh-3d

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

---

## 🗺️ Roadmap

- [x] **Phase 1: Build the complete 3D workspace** *(Completed)*
- [ ] **Phase 2: Implement cinematic camera and scroll animations**
- [ ] **Phase 3: Implement interactive objects and information panels**
- [ ] **Phase 4: Add portfolio sections and project showcases**
- [ ] **Phase 5: Integrate terminal and Jarvis AI**
- [ ] **Phase 6: Optimize and deploy**
