import { createTheme } from "@mantine/core";

import { buttonProps } from "./button/props";
import { variantColorResolver } from "./common/variant-colors";
import activeClasses from "./common/active.module.css";

import "./common/colors.module.css";

export const theme = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,
  components: {
    Button: buttonProps,
  },
});
