// Builds the themes in themes/ from Tachi Code's Armada themes, the source of
// truth for the colors.
//
//   npm run build:theme [-- <path to Tachi Code's shiki/themes directory>]
import { writeFileSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const argument = resolve(
  process.argv[2] ??
    resolve(root, "../tachi-code/src/entrypoints/code/shiki/themes"),
);

const themes = [
  { source: "armada.ts", target: "themes/Armada-color-theme.json" },
  { source: "armada-light.ts", target: "themes/Armada-Light-color-theme.json" },
];

// The path to armada.ts, which this script used to take, still works. Any
// other file is refused: both themes are read by name from one directory.
let sources = argument;
if (argument.endsWith(".ts")) {
  if (!themes.some(({ source }) => source === basename(argument))) {
    console.error(
      `Expected the themes directory or the path to armada.ts, got ${argument}`,
    );
    process.exit(1);
  }
  sources = dirname(argument);
}

// Colors only Tachi Code's own workbench reads
const tachiOnly =
  /^(islands\.|islandTab\.|islandBanner\.|submenu\.|inputOption\.background$|statusBar\.hoverForeground$|tab\.inactiveBorder$)/;

// Every theme is built before any file is written, so a theme that fails to
// load or build leaves both files as they were
const outputs = [];
for (const { source, target } of themes) {
  const {
    default: theme,
    vscodeOverrides,
    vscodeSemanticTokenColors,
  } = await import(pathToFileURL(resolve(sources, source)).href);

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
    semanticHighlighting: true,
    semanticTokenColors: vscodeSemanticTokenColors,
  };

  outputs.push({ path: resolve(root, target), output });
}

for (const { path, output } of outputs) {
  writeFileSync(path, JSON.stringify(output, null, "\t") + "\n");
  console.log(`${Object.keys(output.colors).length} colors -> ${path}`);
}
