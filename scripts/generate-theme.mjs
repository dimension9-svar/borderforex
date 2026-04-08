/**
 * Generate M3 CSS custom properties from the brand seed color.
 *
 * Run: node scripts/generate-theme.mjs
 *
 * This writes src/app/m3-tokens.css which is imported by globals.css.
 * Re-run whenever the seed color changes.
 */

import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ═══════════════════════════════════════════
//  CHANGE THIS TO RE-THEME THE ENTIRE SITE
// ═══════════════════════════════════════════
const SEED = "#65479e";

const theme = themeFromSourceColor(argbFromHex(SEED));
const hex = (argb) => hexFromArgb(argb);

function camelToKebab(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function schemeToVars(scheme, indent = "  ") {
  const json = scheme.toJSON();
  return Object.entries(json)
    .map(([k, v]) => `${indent}--color-${camelToKebab(k)}: ${hex(v)};`)
    .join("\n");
}

function tonalVars(palette, name, tones, indent = "  ") {
  return tones
    .map((t) => `${indent}--color-${name}-${t}: ${hex(palette.tone(t))};`)
    .join("\n");
}

// Surface container tones per M3 spec
const neutral = theme.palettes.neutral;
const lightContainers = [
  ["surface-container-lowest", 100],
  ["surface-container-low", 96],
  ["surface-container", 94],
  ["surface-container-high", 92],
  ["surface-container-highest", 90],
];
const darkContainers = [
  ["surface-container-lowest", 4],
  ["surface-container-low", 10],
  ["surface-container", 12],
  ["surface-container-high", 17],
  ["surface-container-highest", 22],
];

const css = `/* ═══════════════════════════════════════════════════════
   M3 Design Tokens — AUTO-GENERATED from seed ${SEED}
   Do not edit manually. Run: node scripts/generate-theme.mjs
   ═══════════════════════════════════════════════════════ */

@theme inline {
  /* ── Light Scheme ── */
${schemeToVars(theme.schemes.light)}

  /* ── Surface Containers (Light) ── */
${lightContainers.map(([name, tone]) => `  --color-${name}: ${hex(neutral.tone(tone))};`).join("\n")}

  /* ── Tonal Palettes ── */
${tonalVars(theme.palettes.primary, "primary-tone", [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100])}
${tonalVars(theme.palettes.neutral, "neutral-tone", [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100])}
${tonalVars(theme.palettes.neutralVariant, "neutral-variant-tone", [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100])}
}
`;

const outPath = resolve(__dirname, "../src/app/m3-tokens.css");
writeFileSync(outPath, css, "utf-8");
console.log(`✓ M3 tokens written to ${outPath}`);
console.log(`  Seed: ${SEED}`);
console.log(`  Primary: ${hex(theme.schemes.light.toJSON().primary)}`);
console.log(`  Surface: ${hex(theme.schemes.light.toJSON().surface)}`);
