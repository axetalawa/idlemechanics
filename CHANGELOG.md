# CHANGELOG.md — Commit Story of Idle Mechanics  
### Ritual Machines and the Geometry of Inoperative Computation

> *What happens when code is no longer asked to serve?  
> It begins to sing.*

## Phase I — The Empty Frame (May–June 2025)

**Objective:**  
Build the minimal architecture for a gallery of browser-native simulations.  
The aim was not to construct function, but to **summon presence** — a page that holds motion without meaning.

**Key work**
- Established `/simulations` directory with subcategories (`geometry`, `waveform`, `weather`, `machine`, `vision`, `domes`, `phantasma`).  
- Authored `index.html` as a bilingual shell (EN/PT).  
- Created foundational CSS grammar (`idle-mechanics-theme.css`) — chromatic palette: *Electric Cyan*, *Solar Yellow*, *Deep Purple*.  
- Wrote first test piece: **polygonal.html** — rotating square lattice spiraling into recursion.

**Artifacts**
- `index.html`
- `idle-mechanics-theme.css`
- `/simulations/geometry/polygonal.html`

**Decisions**
- Each simulation should be a **self-contained HTML file**.  
- No dependencies, no build chain — pure HTML, CSS, and JS.  
- Manifest-driven structure to allow future automation.

---

## Phase II — Harmonic Interference (June–July 2025)

**Objective:**  
Translate the mathematics of rhythm and interference into visual form.

**Key work**
- Authored **Lissajous**, **Moiré**, and **Halos** simulations.  
- Introduced `requestAnimationFrame` loops with custom sine phase offsets.  
- Defined waveform-based visual language using JS-controlled amplitude, frequency, and phase differentials.  
- Designed color-gradient transitions responding to temporal cycles.

**Artifacts**
- `/simulations/waveform/lissajous.html`
- `/simulations/waveform/moiré.html`
- `/simulations/waveform/halos.html`

**Decisions**
- Abandon user input — focus on *autonomous oscillation*.  
- All waveforms must derive from *dual-parameter harmonics* (x and y oscillators).  
- The page itself becomes a synthetic field of perception — a browser singing to itself.

---

## Phase III — Weather Systems (July–August 2025)

**Objective:**  
Explore turbulence and emergent order through fluid motion.

**Key work**
- Authored **Hurricane**, **Suction**, and **Maelstrom**.  
- Experimented with simplex noise fields and particle motion.  
- Added GLSL-like pseudo-shaders via `<canvas>` context.  
- Simulated vortex, attraction, and dissipation.

**Artifacts**
- `/simulations/weather/hurricane.html`
- `/simulations/weather/suction.html`
- `/simulations/weather/maelstrom.html`

**Decisions**
- Treat flow fields as metaphors for **cognitive turbulence**.  
- Color channels represent energy gradients (hue = velocity, brightness = pressure).  
- Implement fade-to-noise decay to mimic entropy.

---

## Phase IV — Vision and Machine (August–September 2025)

**Objective:**  
Develop mechanical and perceptual metaphors — systems that observe themselves.

**Key work**
- Authored **Throttle** — oscillating gate using transform-based kinetic rhythm.  
- Authored **Iris** — procedural aperture that dilates by frame-time intensity.  
- Expanded gallery structure with auto-sequencing between categories.  
- Integrated **fullscreen.js** for immersive transitions.

**Artifacts**
- `/simulations/machine/throttle.html`
- `/simulations/vision/iris.html`
- `fullscreen.js`
- `slideshow.js`

**Decisions**
- “Machine” refers to *pattern that repeats*, not *tool that functions*.  
- Each mechanical rhythm must hold its own inertia — the viewer merely witnesses.  
- Vision is treated as feedback: an image that observes the act of observation.

---

## Phase V — Architecture & Bloom (September–October 2025)

**Objective:**  
Introduce generative architecture and mythic motifs — form as organism.

**Key work**
- Authored **Spores** — domed oscillators drifting in low-gravity sine fields.  
- Authored **Patu** — luminous owls rendered in SVG, each blinking in asynchronous rhythm.  
- Established `generateManifest.js` to auto-build `manifest.json` from `/simulations`.  
- Completed **Idle Mechanics Theme CSS** and **manifest-driven main viewer**.

**Artifacts**
- `/simulations/domes/spores.html`
- `/simulations/phantasma/patu.html`
- `generateManifest.js`
- `manifest.json`
- `main.js`

**Decisions**
- Integrate mythic and biological motifs — simulation as organism.  
- Manifest generation becomes the “spore dispersal” mechanism for new works.  
- Idle Mechanics shifts from *index of files* → *ecosystem of attention.*

---

## Phase VI — Integration & Documentation (October 2025)

**Objective:**  
Refine and document the project for public release.

**Key work**
- Authored `README.md` and `CHANGELOG.md` (this document).  
- Validated simulation consistency across browsers.  
- Tuned global typography and palette for coherence.  
- Tested deployment pipelines on Vercel and Railway.  
- Consolidated narrative framing: “Ritual Machines” as conceptual umbrella.

**Artifacts**
- `README.md`
- `CHANGELOG.md`
- Finalized `manifest.json`

**Decisions**
- Treat documentation as performance — the README is part of the artwork.  
- Keep every file legible; no minification.  
- Establish **Idle Mechanics** as the engine for all future Ritual Machine releases.

---

## Forward Trajectory

- [ ] Add **Audio-Reactive Mode** (Web Audio API).  
- [ ] Implement **Constellation Viewer** (network visualization of simulations).  
- [ ] Integrate **shader-based depth field** for hurricane/suction series.  
- [ ] Port selected simulations to **WebGL** for performance.  
- [ ] Develop **“Ritual Machines Vol. II”** anthology (2026).

---

## ✴︎ Coda

> *Each simulation breathes its own interval.  
> When the browser idles, these machines awaken —  
> whispering the grammar of stillness.*

---

**Authored by**: [Javed Saunja Jaghai](https://javedjaghai.com)  
**Lab**: Mute Logic Lab — Salvador, Bahia (2025)  
**License**: MIT

---
