export function addFullscreenControl(section, wrapper) {
  const btn = document.createElement("button");
  btn.className = "fullscreen-toggle";
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h6v2H5v4H3V3zm12 0h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zm16 4v-4h2v6h-6v-2h4z" fill="white"/>
    </svg>`;
  wrapper.appendChild(btn);

  btn.addEventListener("click", async () => {
    const target = wrapper; // each individual frame wrapper
    try {
      if (!document.fullscreenElement) {
        await target.requestFullscreen({ navigationUI: "hide" });
        target.classList.add("fullscreen-active");
        document.body.classList.add("body-fullscreen-lock"); // <-- MODIFIED
      } else {
        await document.exitFullscreen();
        document.querySelectorAll(".fullscreen-active").forEach(el => {
          el.classList.remove("fullscreen-active");
        });
        document.body.classList.remove("body-fullscreen-lock"); // <-- MODIFIED
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  });

  // exit fullscreen cleanup
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      wrapper.classList.remove("fullscreen-active");
      document.body.classList.remove("body-fullscreen-lock"); // <-- MODIFIED
    }
  });
}