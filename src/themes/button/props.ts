import { Button } from "@mantine/core";

import { buttonVars } from "./vars";
import buttonClasses from "./buttons.module.css";

export const buttonProps = Button.extend({
  classNames: buttonClasses,
  vars: buttonVars,
  defaultProps: {
    variant: "filled",
    color: "accent",
  },
});
