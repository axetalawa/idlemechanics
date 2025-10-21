import { addFullscreenControl } from "./fullscreen.js";

async function loadManifest() {
  const res = await fetch("data/manifest.json");
  if (!res.ok) throw new Error("Failed to load manifest.json");
  return await res.json();
}

async function init() {
  try {
    const data = await loadManifest();
    const viewer = document.getElementById("viewer");

    for (const category of data.categories) {
      const section = document.createElement("section");
      section.className = "simulation-section";

      // Label: category • set
      const label = document.createElement("div");
      label.className = "sim-label";
      let activeSetName = category.sets[0]?.name || "";
      label.textContent = `${category.name.toUpperCase()} • ${activeSetName.toUpperCase()}`;
      section.appendChild(label);

      // Horizontal track for all sets
      const track = document.createElement("div");
      track.className = "simulation-track";

      for (const set of category.sets) {
        const slide = document.createElement("div");
        slide.className = "slide";

        const wrapper = document.createElement("div");
        wrapper.className = "sim-frame-wrapper";

        const iframe = document.createElement("iframe");
        iframe.className = "sim-frame";

        if (set.works && set.works.length > 0) {
          iframe.src = `${set.works[0].path}`;
        }

        wrapper.appendChild(iframe);
        addFullscreenControl(section, wrapper);
        slide.appendChild(wrapper);
        track.appendChild(slide);
      }

      section.appendChild(track);

      // Arrows if multiple sets
      if (category.sets.length > 1) {
        const leftArrow = document.createElement("button");
        leftArrow.className = "arrow left";
        leftArrow.textContent = "‹";

        const rightArrow = document.createElement("button");
        rightArrow.className = "arrow right";
        rightArrow.textContent = "›";

        section.appendChild(leftArrow);
        section.appendChild(rightArrow);

        let currentIndex = 0;

        function slideWidthPx() {
          return section.getBoundingClientRect().width;
        }

        function updateView() {
          const offset = -(currentIndex * slideWidthPx());
          track.style.transform = `translateX(${offset}px)`;
          const setName = category.sets[currentIndex]?.name || "";
          label.textContent = `${category.name.toUpperCase()} • ${setName.toUpperCase()}`;
        }

        // Prevent wall-bounce with instant jump
        function jumpTo(index) {
          track.style.transition = "none";
          currentIndex = index;
          updateView();
          void track.offsetWidth;
          track.style.transition = "transform 0.8s ease";
        }

        leftArrow.onclick = () => {
          if (currentIndex === 0) {
            jumpTo(category.sets.length - 1);
          } else {
            currentIndex -= 1;
            updateView();
          }
        };

        rightArrow.onclick = () => {
          if (currentIndex === category.sets.length - 1) {
            jumpTo(0);
          } else {
            currentIndex += 1;
            updateView();
          }
        };

        window.addEventListener("resize", updateView, { passive: true });
        updateView();
      }

      viewer.appendChild(section);

      // Fullscreen-sized gap between categories
      const interlude = document.createElement("div");
      interlude.className = "interlude";
      viewer.appendChild(interlude);
    }
  } catch (err) {
    console.error("❌ Error initializing viewer:", err);
  }
}

document.addEventListener("DOMContentLoaded", init);
