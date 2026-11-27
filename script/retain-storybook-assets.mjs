import { constants } from 'node:fs';
import { copyFile, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const [current, previous] = process.argv.slice(2);
const manifest = 'asset-files.json';
const currentAssets = await readdir(join(current, 'assets'));
await writeFile(join(current, manifest), JSON.stringify(currentAssets.sort()));

// The first deployment using this manifest follows an unversioned assets directory.
let previousAssets;
try {
  previousAssets = JSON.parse(await readFile(join(previous, manifest), 'utf8'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  previousAssets = await readdir(join(previous, 'assets'));
}

const retained = previousAssets.filter(file => !currentAssets.includes(file));
for (const file of retained) {
  if (basename(file) !== file) throw new Error('Invalid asset filename');
  await copyFile(join(previous, 'assets', file), join(current, 'assets', file), constants.COPYFILE_EXCL);
}

console.log(`Retained ${retained.length} assets for previously opened pages`);
