import { createTheme } from "@mantine/core";

import { buttonProps } from "./button/button-props";
import activeClasses from "./common/active.module.css";
import { variantColorResolver } from "./common/variant-colors";

import "./common/colors.module.css";

export const theme = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,
  components: {
    Button: buttonProps,
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
