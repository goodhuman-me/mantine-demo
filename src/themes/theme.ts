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
  headings: {
    fontFamily: defaultFontFamily,
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
