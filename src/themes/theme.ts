import {
  Button,
  ButtonFactory,
  PartialVarsResolver,
  VariantColorResolverResult,
  VariantColorsResolver,
  createTheme,
  defaultVariantColorsResolver,
} from "@mantine/core";

import activeClasses from "./css/active.module.css";
import buttonClasses from "./css/buttons.module.css";

const buttonVarsResolver: PartialVarsResolver<ButtonFactory> = (
  _theme,
  props
) => {
  if (props.size === "xs") {
    return {
      root: {
        "--button-fz": "12px",
        "--button-padding-x": "8px",
        "--button-height": "24px",
      },
    };
  }

  if (props.size === "sm") {
    return {
      root: {
        "--button-fz": "14px",
        "--button-padding-x": "16px",
        "--button-height": "32px",
      },
    };
  }

  if (props.size === "md") {
    return {
      root: {
        "--button-fz": "14px",
        "--button-padding-x": "20px",
        "--button-height": "44px",
      },
    };
  }

  if (props.size === "lg") {
    return {
      root: {
        "--button-fz": "16px",
        "--button-padding-x": "24px",
        "--button-height": "56px",
      },
    };
  }

  return { root: {} };
};

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  const { color, variant } = input;

  if (variant === "outline") {
    switch (color) {
      case "accent":
        return {
          background: "var(--brand-accent-main)",
          color: "white",
          hover: "var(--brand-accent-dark-1)",
          border:
            "calc(0.0625rem * var(--mantine-scale)) solid var(--brand-accent-main)",
        };
      case "danger":
        return {
          background: "var(--color-red-main)",
          color: "white",
          hover: "var(--color-red-dark-1)",
          border:
            "calc(0.0625rem * var(--mantine-scale)) solid var(--color-red-main)",
        };
      case "warning":
        return {
          background: "var(--color-orange-main)",
          color: "white",
          hover: "var(--color-orange-dark-1)",
          border:
            "calc(0.0625rem * var(--mantine-scale)) solid var(--color-orange-main)",
        };
      case "neutral":
        return {
          background: "var(--brand-body-light-2)",
          color: "--brand-body-dark-2",
          hover: "var(--brand-body-light-1)",
          border:
            "calc(0.0625rem * var(--mantine-scale)) solid var(--brand-body-light-2)",
        };
      default:
        return defaultResolvedColors;
    }
  }

  if (variant === "filled") {
    return defaultResolvedColors;
  }

  if (variant === "transparent") {
    return defaultResolvedColors;
  }

  return defaultResolvedColors;
};

export const theme = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,
  components: {
    Button: Button.extend({
      classNames: buttonClasses,
      vars: buttonVarsResolver,
    }),
  },
});
