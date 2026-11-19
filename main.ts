// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme with make.fun's ghost in the
// picture, posted from a public account with make.fun written out, a tag of
// @makefunai and our play code in its text. POST.json at the repository root
// holds that post's address, and this program's only job is to hand that
// file to the grader: it reads POST.json from the repository directory and
// writes the same bytes into the output directory. The house then reads the
// post from X itself and builds the dossier the judge sees.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(repoDir, 'POST.json');
const targetPath = join(outDir, 'POST.json');

const raw = await readFile(sourcePath, 'utf8');

// Refuse a broken hand-in early instead of copying garbage downstream:
// the file must parse as JSON and name one post address.
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string "url" field');
}

await mkdir(outDir, { recursive: true });
await writeFile(targetPath, raw, 'utf8');
