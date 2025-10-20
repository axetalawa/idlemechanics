import fs from 'fs';
import path from 'path';

const SIM_DIR = './simulations';
const OUT_PATH = './data/manifest.json';

function generateManifest() {
  const manifest = { categories: [] };

  fs.readdirSync(SIM_DIR, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .forEach(categoryDir => {
      const categoryPath = path.join(SIM_DIR, categoryDir.name);
      const sets = [];

      fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter(sub => sub.isDirectory())
        .forEach(setDir => {
          const setPath = path.join(categoryPath, setDir.name);
          const works = [];

          fs.readdirSync(setPath, { withFileTypes: true })
            .filter(work => work.isDirectory())
            .forEach(workDir => {
              const indexPath = path.join(setPath, workDir.name, 'index.html');
              if (fs.existsSync(indexPath)) {
                works.push({
                  name: workDir.name,
                  path: `${setPath}/${workDir.name}/index.html`
                });
              }
            });

          if (works.length > 0) sets.push({ name: setDir.name, works });
        });

      manifest.categories.push({
        name: categoryDir.name,
        sets: sets.length > 0 ? sets : [{ name: categoryDir.name, works: [] }]
      });
    });

  fs.writeFileSync(OUT_PATH, JSON.stringify(manifest, null, 2));
  console.log('✅ Manifest generated successfully!');
}

generateManifest();
