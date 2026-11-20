// Entry program for gta6-trophy-guide-01 (Node 22, standard library only).
//
// What is being handed in is the folder app/: a static, offline trophy guide and tracker
// for Grand Theft Auto VI on PS5. It needs no build step — a browser opens app/index.html
// and everything (the official trophy list in app/data/trophies.json, our guides in
// app/data/guides.js, the tracker logic) loads from local files only.
//
// This program's whole job is delivery: copy app/ and screenshots/ into the output
// directory, then write dossier.json there with buildDossier from the vendored library.
// The dossier is the package the grader and the judge read — the screenshots, the first
// load's files and bytes, and the source text — and it has to match, byte for byte, what
// the scorer's own copy of the library produces, so vendor/makefun-frontend.ts is used
// exactly as the kit ships it and is never edited.
//
// Run it locally the same way the grader does, with MAKEFUN_OUTPUT_DIR standing in for
// /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Serve the guide itself with `node serve.ts` and open http://localhost:8080.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Copy the guide and its screenshots into the output directory.
mkdirSync(outputDir, { recursive: true });
cpSync(join(repoDir, 'app'), join(outputDir, 'app'), { recursive: true });
mkdirSync(join(outputDir, 'screenshots'), { recursive: true });
const shotsDir = join(repoDir, 'screenshots');
if (existsSync(shotsDir)) {
  cpSync(shotsDir, join(outputDir, 'screenshots'), { recursive: true });
}

// Write the dossier under the scorer's caps: the source text shown to the judge is
// limited to 160 KiB, screenshots to 4 files of at most 256 KiB each, and app/ to
// 993 files and 48 MiB — the same limits the gate enforces on its side.
const dossier = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
});
writeFileSync(join(outputDir, 'dossier.json'), dossier);
