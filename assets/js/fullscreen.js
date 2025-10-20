function addFullscreenControl(section, iframe) {
  const icon = document.createElement('img');
  icon.src = 'assets/icons/fullscreen.svg';
  icon.className = 'controls';
  icon.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      iframe.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  section.appendChild(icon);
}
