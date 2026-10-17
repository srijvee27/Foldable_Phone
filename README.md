# Unfold — Fold Mobile Interactive 3D Experience

> **One object. Endless perspectives.**  
> An interactive web-based 3D showcase and product experience for a foldable device ("Unfold by VULK"), featuring real-time hinge physics, custom titanium finishes, and dynamic screen environments.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started & Local Execution](#getting-started--local-execution)
- [Architecture & Modules](#architecture--modules)
- [Configuration & Environment](#configuration--environment)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)

---

## Overview

**Unfold** is a high-performance, browser-native 3D product showcase demonstrating the mechanics, materials, and digital experiences of a foldable smartphone. Built with a WebGL rendering pipeline powered by Three.js and React 19, the application delivers smooth interactive folding animations, realistic material shaders, and synchronized UI transitions as the user scrolls or interacts directly with the 3D model.

---

## Key Features

- **Real-Time 3D Folding Mechanics:**
  - Interactive hinge simulation responding to scroll progression or manual opening angle controls.
  - Custom vertex/fragment GLSL shaders calculating dynamic surface curvature, fold angles, and coordinate transformations across device halves.
  - Multi-pose support: closed, book mode, tent mode, flat/tablet mode, and custom angles.

- **Titanium Finishes:**
  - Dynamic material swapping between three distinct finishes:
    - **Natural Titanium** (`silver`)
    - **Dark Titanium** (`ink`)
    - **Glacier Blue** (`blue`)

- **Interactive Screen Environments:**
  - High-resolution dynamic digital display landscapes:
    - **Dunes & Sea** (`lagoon`)
    - **Northern Lights** (`aurora`)
  - Real-time mobile OS interface simulation including home screen clock typography (`FoldClock`), custom typography (`Antonio`, `Google Sans Flex`), and status bar icons.

- **Dedicated 3D Explorer Modal:**
  - Modal overlay enabling free rotation (orbital drag controls), front/rear camera perspective pivots, fold slider controls, and wallpaper switching.
  - Keyboard accessibility with focus trapping (`Tab` navigation and `Escape` dismiss).

- **Optimized 3D Asset Pipeline:**
  - Compact GLTF binary model (`frame.glb`) decompressed in real time using client-side Draco WebAssembly decoders (`draco_decoder.wasm`).

---

## Technology Stack

- **Core & Runtime:** HTML5, CSS3, ES Module JavaScript
- **UI Framework:** React 19 (`react`, `react-dom` v19.1.0, `scheduler`)
- **3D Graphics & Rendering:** Three.js (r184) with WebGLRenderer, PerspectiveCamera, PBR Shaders, and GLTFLoader
- **Mesh Compression:** Google Draco WebAssembly Decoder (`draco_decoder.wasm`, `draco_wasm_wrapper.js`)
- **Iconography:** Lucide Icons (`lucide-react` v0.542.0)
- **Typography:** Antonio Latin (`woff2`), Google Sans Flex (`woff2`)
- **Image Assets:** WebP format (`aurora.webp`, `lagoon.webp`, `sonora-art.webp`)

---

## Prerequisites

To run this application locally, you only need a modern web browser that supports WebGL and WebAssembly:

- **Browser:** Chrome / Edge 90+, Firefox 90+, Safari 15+, or Opera
- **Local HTTP Server:** Python 3, Node.js (via `npx`), PHP, or a static file server extension (e.g., VS Code Live Server).

> **Note:** Because the application loads external GLTF models (`frame.glb`), WebAssembly modules (`.wasm`), and WebP textures via JavaScript fetch APIs, it must be served over an HTTP/HTTPS protocol rather than opened directly as a local file (`file:///`).

---

## Project Structure

```plaintext
Fold Mobile/
├── assets/
│   ├── draco/
│   │   ├── draco_decoder.js          # Google Draco decompression worker script
│   │   ├── draco_decoder.wasm        # Draco WebAssembly binary
│   │   └── draco_wasm_wrapper.js     # Draco WASM JavaScript wrapper
│   ├── fonts/
│   │   ├── Antonio-latin.woff2       # Clock display headline font
│   │   ├── GoogleSansFlex-400.woff2  # Regular interface typography
│   │   └── GoogleSansFlex-600.woff2  # Semibold interface typography
│   ├── aurora.webp                   # Northern lights wallpaper texture
│   ├── frame.glb                     # 3D foldable phone mesh & skeleton model
│   ├── icon-512.png                  # Application web icon
│   ├── lagoon.webp                   # Dunes and sea wallpaper texture
│   └── sonora-art.webp               # Display audio artwork texture
├── .gitignore                        # Git exclusion rules
├── index.html                        # HTML entry point with viewport & meta tags
├── main.css                          # Layout, typography, transitions & modal styling
└── main.js                           # Bundled application code (React, Three.js, shaders)
```

---

## Getting Started & Local Execution

Because all vendor dependencies and WebGL shaders are pre-bundled into native browser-compatible ES modules (`main.js`), no npm installation or build step is required to run the project.

### 1. Clone the Repository

```bash
git clone https://github.com/srijvee27/Foldable_Phone.git
cd Foldable_Phone
```

### 2. Start a Local HTTP Server

Run any of the following lightweight static server commands from the project directory:

#### Option A: Using Python 3 (Built-in)
```bash
python -m http.server 8000
```

#### Option B: Using Node.js (`npx`)
```bash
npx serve .
# or
npx http-server -p 8000
```

#### Option C: Using PHP (Built-in)
```bash
php -S localhost:8000
```

### 3. Open in Browser

Open your browser and navigate to:
```text
http://localhost:8000
```

---

## Architecture & Modules

1. **HTML Shell (`index.html`):**
   - Declares page metadata, preloads styles, and mounts the `#root` DOM element where React renders the app.
   - Loads `main.js` via native ES module execution (`<script type="module" src="./main.js">`).

2. **Styling System (`main.css`):**
   - Implements custom CSS variables for responsive design, dark-mode color palettes, safe-area paddings, and sticky scrolling hero containers (`.fold-hero-sticky`).
   - Declares `@font-face` rules mapping local WOFF2 assets to `FoldSans` and `FoldClock`.

3. **Client Engine (`main.js`):**
   - **Scene & Animation Lifecycle:** Initializes Three.js WebGL scenes, manages `requestAnimationFrame` loops, and uses `IntersectionObserver` to pause rendering when canvas elements are off-screen.
   - **Hinge Kinematics:** Computes the mathematical pivot and mesh rotation angles (`uniforms.fold.value`) based on scroll offset or modal slider input.
   - **Texture & Lighting Engine:** Handles Draco-compressed GLTF loading via `GLTFLoader`, dynamic environment lighting, shadows, and runtime mesh color updates according to selected finishes.
   - **Explorer Overlay:** React component managing full-screen modal state, ARIA accessibility attributes, pointer event drag handlers, and camera repositioning.

---

## Configuration & Environment

- **Environment Variables:** No `.env` file or API credentials are required. All assets are self-contained and statically served.
- **Backend / Database:** This is a purely client-side static web application requiring no external database or backend server.

---

## Troubleshooting

- **Black Screen / Model Not Loading:**
  - Ensure you are running the project through a local HTTP server (`http://localhost:...`) and not opening `index.html` directly from your file system via `file:///`. Browsers block local file cross-origin requests for WebAssembly (`.wasm`) and 3D models (`.glb`).
- **WebGL Support:**
  - Verify that hardware acceleration is enabled in your browser settings (`chrome://settings/system` or equivalent).

---

## Deployment

The project can be deployed instantly to any static hosting service without a build pipeline:

- **GitHub Pages:**
  1. Go to repository **Settings** > **Pages**.
  2. Under **Build and deployment**, select **Deploy from a branch**.
  3. Choose the `main` branch and `/ (root)` folder, then click **Save**.
- **Vercel / Netlify / Cloudflare Pages:**
  - Connect the GitHub repository.
  - Leave the **Build Command** empty.
  - Set the **Output Directory** to `.` (root).
