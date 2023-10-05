import { Button } from "@good/ui/core";
import { buttonVars } from "./button-vars";
import buttonClasses from "./button.module.css";

export const buttonProps = Button.extend({
  vars: buttonVars,
  classNames: buttonClasses,
  defaultProps: {
    variant: "filled",
    color: "accent",
  },
});
