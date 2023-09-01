import { ButtonFactory, PartialVarsResolver } from "@mantine/core";

export const buttonVars: PartialVarsResolver<ButtonFactory> = (
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
