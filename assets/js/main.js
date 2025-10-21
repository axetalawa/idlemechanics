import { addFullscreenControl } from './fullscreen.js';

async function init() {
  try {
    const res = await fetch('data/manifest.json');
    const data = await res.json();
    const viewer = document.getElementById('viewer');

    // Create one vertical section per simulation
    data.categories.forEach(category => {
      category.sets.forEach(set => {
        set.works.forEach(work => {
          const section = document.createElement('section');
          section.className = 'simulation-section';
          section.dataset.category = category.name;
          section.dataset.set = set.name;

          const iframe = document.createElement('iframe');
          iframe.className = 'sim-frame';
          iframe.src = `/${work.path}`;
          iframe.allow = 'fullscreen';
          iframe.loading = 'lazy';
          section.appendChild(iframe);

          addFullscreenControl(section, iframe);

          const label = document.createElement('div');
          label.className = 'sim-label';
          label.textContent = `${set.name} • ${work.name}`;
          section.appendChild(label);

          viewer.appendChild(section);
        });
      });
    });

  } catch (err) {
    console.error('❌ Error loading manifest.json:', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
