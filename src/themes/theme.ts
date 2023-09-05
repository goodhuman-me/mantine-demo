import { ActionIcon, createTheme } from "@mantine/core";

import { buttonProps } from "./button/button-props";
import activeClasses from "./common/active.module.css";
import { variantColorResolver } from "./common/variant-colors";

import "./common/colors.module.css";
import { ActionIconProps } from "./action-icon/action-icon-props";

const defaultFontFamily =
  "'Messina Sans','--apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'";

export const theme = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,
  fontFamily: defaultFontFamily,
  fontSizes: {
    // @ts-expect-error -- Forcefully add xxs as a size
    xxs: "0.6875rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  lineHeights: {
    // @ts-expect-error -- Forcefully add xxs as a size
    xxs: "0.875rem",
    xs: "1rem",
    sm: "1.375rem",
    md: "1.375rem",
    lg: "1.5rem",
    xl: "1.75rem",
  },
  headings: {
    fontFamily: defaultFontFamily,
    sizes: {},
  },
  components: {
    Button: buttonProps,
    ActionIcon: ActionIconProps,

    // TextInput: TextInput.extend({
    //   styles: {
    //     input: {
    //       borderWidth: 2,
    //     },
    //   },
    // }),
  },
});

// const theme = createTheme({
//   components: {
//     TextInput: TextInput.extend({
//       classNames: (_theme, props) => ({
//         label: cx({ [classes.labelRequired]: props.required }),
//         input: cx({ [classes.inputError]: props.error }),
//       }),
//     }),
//   },
// });
