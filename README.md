---

# Idle Mechanics  
### Ritual Machines for Useless Beauty and Recursive Attention  

> *A browser can dream if you let it idle long enough.*

---

## ✴ Overview

**Idle Mechanics** is a gallery-engine for browser-based **Ritual Machines** — self-contained simulations exploring geometry, motion, rhythm, and perceptual recursion.  
Each simulation is a standalone HTML universe that runs in the browser: no dependencies, no server, no database.  

Built as part of the **Mute Logic Lab** in Salvador, Bahia, this work examines the aesthetics of *inoperative computation*: systems that think, but not for a reason.  

---

## Architecture

Idle Mechanics is composed of two interacting layers:

1. **Gallery Engine (Framework)** — handles loading, manifest generation, fullscreen, and simulation sequencing.  
2. **Simulations (Worlds)** — HTML + CSS + JavaScript microcosms, each exploring a distinct aesthetic or geometric motif.

The framework includes:
- `generateManifest.js` — recursively builds a manifest from `/simulations`
- `main.js` — loads, sequences, and displays simulations dynamically
- `fullscreen.js` — toggles fullscreen state per simulation
- `slideshow.js` — enables autoplay / random cycling
- `idle-mechanics-theme.css` — defines the color and control grammar across all pieces

---

## Repository Structure

```

idle-mechanics/
│
├── index.html               # bilingual landing + simulation viewer
├── package.json             # serve + build scripts
├── data/manifest.json       # generated gallery data
├── scripts/
│   ├── generateManifest.js  # manifest generator
│   ├── main.js              # viewer logic
│   ├── fullscreen.js        # fullscreen toggle
│   └── slideshow.js         # autoplay + transition control
│
├── css/
│   ├── idle-mechanics-theme.css
│   └── idlemechanics.css
│
└── simulations/
├── geometry/
├── waveform/
├── weather/
├── machine/
├── vision/
├── domes/
├── phantasma/
└── maelstrom/

````

---

## Simulation Index

### **GEOMETRY**
- **Polygonal Spiral** — SVG line spiraling through Euclidean recursion; drawn frame by frame using cubic easing to emulate architectural unfolding:contentReference[oaicite:0]{index=0}.  
  *Concept:* The square learns how to turn.  

---

### **WAVEFORM**
- **Lissajous** — harmonic interference rendered as plasma trails; captures the resonance between dual oscillators.  
- **Moiré** — layered sine interference producing optical tremor; no randomness, only beat frequencies.  
- **Halos** — concentric lightfield halos fading by amplitude decay; color transitions along a time-sine gradient.  
  *Concept:* Motion as interference, not movement.  

---

### **WEATHER**
- **Hurricane** — GPU-driven fluid vortex built with simplex noise and GLSL shaders; responds to structure, energy, and hue sliders.  
- **Suction** — localized negative-pressure field visualized as vortex collapse; inspired by cyclonic drain physics.  
- **Maelstrom** — noise-driven particle field representing turbulent attractors and pressure gradients:contentReference[oaicite:1]{index=1}.  
  *Concept:* Chaos as geometry.  

---

### **MACHINE**
- **Throttle** — oscillating mechanical gate, combining rhythmic constraint and release; loops through threshold logic.  
  *Concept:* A metronome built for hesitation.  

---

### **VISION**
- **Iris** — procedural aperture expanding and contracting under simulated light pressure; uses CSS transforms for optical dilation.  
  *Concept:* The eye as a recursive weather system.  

---

### **DOMES**
- **Spores** — architectural motes drifting through low-gravity oscillation; randomized pulse intervals simulate proto-structures.  
  *Concept:* Architecture as pollen.  

---

### **PHANTASMA**
- **Patu** — six luminous owls rendered via SVG, animated through head-turn, wing-pulse, and glow filters:contentReference[oaicite:2]{index=2}.  
  *Concept:* Vision as haunting.  

---

## Local Setup

### 1. Clone
```bash
git clone https://github.com/<your-username>/idle-mechanics.git
cd idle-mechanics
````

### 2. Install + serve

```bash
npm install
npm run build
npm start
```

Then visit
👉 [http://localhost:5050](http://localhost:5050)

---

## Design Grammar

Each simulation follows three design principles:

| Principle                      | Description                                             |
| ------------------------------ | ------------------------------------------------------- |
| **Useless Beauty**             | No external input or reward — pure perceptual duration. |
| **Recursive Attention**        | The simulation responds to itself, not the user.        |
| **Non-Productive Computation** | Built to idle, not to produce.                          |

All files are self-contained HTML documents.
No build chain, no frameworks — **browser-native ritual architecture**.

---

## Color + Typography System

| Variable                | Role                 | Example                                        |
| ----------------------- | -------------------- | ---------------------------------------------- |
| `--electric-cyan`       | Primary accent       | Highlights in *Polygonal*, *Lissajous*, *Iris* |
| `--primary-glyph-color` | Magenta / glyph tone | *Patu*, *Spores*, *Halos*                      |
| `--solar-yellow`        | Secondary energy     | *Patu* eyes, *Hurricane* sliders               |
| `--deep-purple`         | Contrast / shadow    | *Patu* and *Maelstrom* atmospheres             |

Typography: `Inter` (Google Fonts) — unified across all simulations.
Cursor states: hidden or custom for meditative immersion.

---

## Framework Logic

### `generateManifest.js`

Recursively scans `/simulations/` and builds the `manifest.json`:

```json
{
  "categories": [
    { "name": "geometry", "sets": [
      { "name": "Polygonal Spiral", "works": [
        { "name": "polygonal", "path": "simulations/geometry/polygonal.html" }
      ]}
    ]}
  ]
}
```

### `main.js`

Parses `manifest.json`, builds dynamic sections, injects `<iframe>` elements, and handles slideshow transitions.

### `fullscreen.js`

Toggles full immersion per simulation without reloading state.

### `slideshow.js`

Supports timed auto-play and random category traversal.

---

## Deployment

* **Railway**

  ```toml
  [build]
  builder = "NIXPACKS"
  [deploy]
  startCommand = "npx serve ."
  ```

* **Vercel / GitHub Pages**
  Fully static; drag-and-deploy.

---

## Forward Trajectory

* [ ] Add **audio-reactive shaders** (Web Audio API → visual amplitude modulation)
* [ ] Integrate **metadata overlays** per simulation
* [ ] Add **Constellation Mode** for map-based navigation
* [ ] Extend to **VR / WebXR ritual viewer**

---

## ✴︎ Coda

> *Idle Mechanics is a physics of attention.*
> *Each simulation is a chant for the browser to hum when no one is watching.*

**Author** — [Javed Saunja Jaghai](https://javedjaghai.com)
**Lab** — Mute Logic Lab, Salvador — Bahia (2025)
**License** — MIT

---
