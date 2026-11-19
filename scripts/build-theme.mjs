// Builds themes/Armada-color-theme.json from Tachi Code's Armada theme, the
// source of truth for the colors.
//
//   npm run build:theme [-- <path to armada.ts>]
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(
  process.argv[2] ??
    resolve(root, "../tachi-code/src/entrypoints/code/shiki/themes/armada.ts"),
);
const { default: theme, vscodeOverrides } = await import(
  pathToFileURL(source).href
);

// Colors only Tachi Code's own workbench reads
const tachiOnly =
  /^(islands\.|islandTab\.|islandBanner\.|submenu\.|inputOption\.background$|statusBar\.hoverForeground$|tab\.inactiveBorder$)/;

const colors = Object.fromEntries(
  Object.entries({ ...theme.colors, ...vscodeOverrides })
    .filter(([key]) => !tachiOnly.test(key))
    .map(([key, value]) => [key, value.toLowerCase()])
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)),
);

const output = {
  $schema: "vscode://schemas/color-theme",
  name: theme.displayName,
  type: theme.type,
  colors,
  tokenColors: theme.tokenColors,
};

const target = resolve(root, "themes/Armada-color-theme.json");
writeFileSync(target, JSON.stringify(output, null, "\t") + "\n");
console.log(`${Object.keys(colors).length} colors -> ${target}`);
