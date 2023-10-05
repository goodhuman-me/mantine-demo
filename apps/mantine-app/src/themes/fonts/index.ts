import type { PartialDeep } from "type-fest";
import { MantineTheme } from "@good/ui/core";

const defaultFontFamily =
  "'Messina Sans','--apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'";

export const fontsProps: PartialDeep<MantineTheme> = {
  // Fonts
  fontFamily: defaultFontFamily,
  headings: {
    fontFamily: defaultFontFamily,
    sizes: {
      h1: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      h2: {
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
      },
      h3: {
        fontSize: "1.25rem",
        lineHeight: "2rem",
      },
      h4: {
        fontSize: "1rem",
        lineHeight: "1.75rem",
      },
      h5: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      h6: {
        fontSize: "0.75rem",
        lineHeight: "1.125rem",
      },
    },
  },
  fontSizes: {
    xxs: "0.6875rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  lineHeights: {
    xxs: "0.875rem",
    xs: "1rem",
    sm: "1.375rem",
    md: "1.375rem",
    lg: "1.5rem",
    xl: "1.75rem",
  },
};
