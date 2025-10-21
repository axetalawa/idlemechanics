// /scripts/generateManifest.js
import fs from 'fs';
import path from 'path';

const ROOT = './simulations';
const OUT  = './data/manifest.json';

// -------- helpers --------
function safeReadJSON(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (_) {}
  return null;
}

function list(dir) {
  return fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
}

function isHtml(fileName) {
  return fileName.toLowerCase().endsWith('.html');
}

function workFromHtml(fullPath, baseDir) {
  // baseDir is used to produce a web path
  const relPath = fullPath.replace(/\\/g, '/'); // windows-safe
  const name = path.parse(fullPath).name;       // file name without ext
  // optional sidecar: foo.html.json
  const sidecar = safeReadJSON(fullPath + '.json');
  return {
    name: (sidecar?.title || name),
    path: relPath,
    ...(sidecar?.duration ? { duration: sidecar.duration } : {})
  };
}

// Collect works from a folder by two patterns:
//   (1) direct .html files inside this folder
//   (2) subfolders that contain an index.html
function collectWorks(folderPath) {
  const entries = list(folderPath);
  const works = [];

  // (1) direct .html files
  for (const e of entries) {
    if (e.isFile() && isHtml(e.name)) {
      works.push(workFromHtml(path.join(folderPath, e.name), folderPath));
    }
  }

  // (2) subfolders with index.html
  for (const e of entries) {
    if (e.isDirectory()) {
      const idx = path.join(folderPath, e.name, 'index.html');
      if (fs.existsSync(idx)) {
        works.push(workFromHtml(idx, folderPath));
      } else {
        // Also allow .html files inside that subfolder (no index.html)
        const sub = list(path.join(folderPath, e.name));
        for (const s of sub) {
          if (s.isFile() && isHtml(s.name)) {
            works.push(workFromHtml(path.join(folderPath, e.name, s.name), folderPath));
          }
        }
      }
    }
  }

  return works;
}

// Build a "set" object from a folder.
// If the folder has direct .html works, that folder is a set.
// Any immediate subfolders that themselves contain works become additional sets.
function buildSets(categoryPath) {
  const sets = [];

  // This folder as a set (if it has any works)
  const selfMeta = safeReadJSON(path.join(categoryPath, 'meta.json')) || {};
  const selfWorks = collectWorks(categoryPath);
  if (selfWorks.length > 0) {
    sets.push({
      name: selfMeta.title || path.basename(categoryPath),
      ...(selfMeta.duration ? { duration: selfMeta.duration } : {}),
      works: selfWorks
    });
  }

  // Each immediate subfolder that contains works becomes its own set
  for (const e of list(categoryPath)) {
    if (!e.isDirectory()) continue;
    const setPath = path.join(categoryPath, e.name);
    const meta = safeReadJSON(path.join(setPath, 'meta.json')) || {};
    const works = collectWorks(setPath);
    if (works.length > 0) {
      sets.push({
        name: meta.title || e.name,
        ...(meta.duration ? { duration: meta.duration } : {}),
        works
      });
    }
  }

  return sets;
}

// -------- main --------
function generateManifest() {
  const manifest = { categories: [] };

  for (const entry of list(ROOT)) {
    if (!entry.isDirectory()) continue;
    const categoryPath = path.join(ROOT, entry.name);
    const catSets = buildSets(categoryPath);

    manifest.categories.push({
      name: entry.name,
      sets: catSets
    });
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2));
  console.log('✅ Manifest generated with',
              manifest.categories.length, 'categories.');
}

generateManifest();
