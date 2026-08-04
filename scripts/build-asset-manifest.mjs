// Regenerates src/lib/asset-manifest.json by scanning public/images.
// Framer node data references assets as https://framerusercontent.com/images/<ID>.<ext>
// or data:framer/asset-reference,<ID>.<ext>?... — locally downloaded assets keep the
// same <ID> but append a short content hash before the extension, e.g. <ID>.2fa88.svg.
// This produces an <ID> -> "/images/<filename>" lookup, useful reference when wiring
// up new sections/pages (e.g. Works, Blog) from the Framer project.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(root, "..");

// Framer exports the same source image at multiple resolutions, all sharing the
// same leading <ID> but a different content hash, e.g. <ID>.991fa.jpg (thumbnail)
// vs <ID>.2fa88.jpg (full size). Keep the largest file per id so Next/Image has
// the highest-quality source to downscale from.
function buildMap(dir, publicPrefix) {
  const map = {};
  const sizes = {};
  const dirPath = path.join(projectRoot, "public", dir);
  for (const filename of readdirSync(dirPath)) {
    const id = filename.split(".")[0];
    const size = statSync(path.join(dirPath, filename)).size;
    if (map[id] && sizes[id] >= size) continue;
    map[id] = `${publicPrefix}/${filename}`;
    sizes[id] = size;
  }
  return map;
}

const manifest = {
  images: buildMap("images", "/images"),
};

writeFileSync(
  path.join(projectRoot, "src", "lib", "asset-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);

console.log(`Wrote asset manifest: ${Object.keys(manifest.images).length} images`);
