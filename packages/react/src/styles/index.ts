import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  fonts,
  space,
  radii,
} from "@radiance-ui/tokens/dist";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    fonts,
    space,
    radii,
  },
});
