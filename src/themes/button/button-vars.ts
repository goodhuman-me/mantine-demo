import { ButtonFactory, PartialVarsResolver } from "@mantine/core";

/*
 * Button specific variant color resolver.
 * See https://v7.mantine.dev/core/button#custom-variants
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const buttonVars: PartialVarsResolver<ButtonFactory> = (_theme, _props) => {
  return {
    root: {},
  };

  // Leaving the below code commented out for reference.
  // Styling done in CSS modules instead.

  // const { size } = props;

  // switch (size) {
  //   case "xs":
  //     return {
  //       root: {
  //         "--button-fz": "12px",
  //         "--button-padding-x": "8px",
  //         "--button-height": "24px",
  //       },
  //     };
  //   case "sm":
  //     return {
  //       root: {
  //         "--button-fz": "14px",
  //         "--button-padding-x": "16px",
  //         "--button-height": "32px",
  //       },
  //     };
  //   case "md":
  //     return {
  //       root: {
  //         "--button-fz": "14px",
  //         "--button-padding-x": "20px",
  //         "--button-height": "44px",
  //       },
  //     };
  //   case "lg":
  //     return {
  //       root: {
  //         "--button-fz": "16px",
  //         "--button-padding-x": "24px",
  //         "--button-height": "56px",
  //       },
  //     };
  //   default:
  //     return { root: {} };
  // }
};
