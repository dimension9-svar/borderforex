import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities";

/** Border Forex brand seed — change this one value to re-theme the entire site */
const SEED_COLOR = "#65479e";

function generateScheme() {
  const theme = themeFromSourceColor(argbFromHex(SEED_COLOR));
  const light = theme.schemes.light.toJSON();
  const dark = theme.schemes.dark.toJSON();

  const toHex = (tokens: Record<string, number>) =>
    Object.fromEntries(
      Object.entries(tokens).map(([key, argb]) => [key, hexFromArgb(argb)])
    );

  // Generate tonal palette for surface containers
  // (not exposed by .schemes but needed for M3 surface hierarchy)
  const neutral = theme.palettes.neutral;
  const neutralVariant = theme.palettes.neutralVariant;

  const surfaceContainers = {
    surfaceContainerLowest: hexFromArgb(neutral.tone(100)),
    surfaceContainerLow: hexFromArgb(neutral.tone(96)),
    surfaceContainer: hexFromArgb(neutral.tone(94)),
    surfaceContainerHigh: hexFromArgb(neutral.tone(92)),
    surfaceContainerHighest: hexFromArgb(neutral.tone(90)),
  };

  const darkSurfaceContainers = {
    surfaceContainerLowest: hexFromArgb(neutral.tone(4)),
    surfaceContainerLow: hexFromArgb(neutral.tone(10)),
    surfaceContainer: hexFromArgb(neutral.tone(12)),
    surfaceContainerHigh: hexFromArgb(neutral.tone(17)),
    surfaceContainerHighest: hexFromArgb(neutral.tone(22)),
  };

  return {
    seed: SEED_COLOR,
    light: { ...toHex(light), ...surfaceContainers },
    dark: { ...toHex(dark), ...darkSurfaceContainers },
  };
}

export const m3 = generateScheme();

/**
 * Convert camelCase token name to CSS custom property name
 * e.g. "primaryContainer" → "--color-primary-container"
 */
function tokenToVar(camel: string): string {
  return (
    "--color-" +
    camel.replace(/([A-Z])/g, "-$1").toLowerCase()
  );
}

/** Generate CSS custom properties block for a scheme */
export function schemeToCssVars(
  scheme: Record<string, string>,
  indent = "  "
): string {
  return Object.entries(scheme)
    .map(([key, value]) => `${indent}${tokenToVar(key)}: ${value};`)
    .join("\n");
}
