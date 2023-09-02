import { Button } from "@mantine/core";

import { buttonVars } from "./vars";

export const buttonProps = Button.extend({
  vars: buttonVars,
  defaultProps: {
    variant: "filled",
    color: "accent",
  },
});
