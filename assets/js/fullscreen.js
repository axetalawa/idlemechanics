export function addFullscreenControl(section, iframe) {
  const btn = document.createElement('button');
  btn.className = 'fullscreen-toggle';
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h6v2H5v4H3V3zm12 0h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zm16 4v-4h2v6h-6v-2h4z" fill="white"/>
    </svg>`;
  section.appendChild(btn);

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      section.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}
