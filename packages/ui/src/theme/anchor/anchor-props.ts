import { Anchor } from "@mantine/core";

import classes from "./anchor.module.css";

export const anchorProps = Anchor.extend({
  classNames: classes,
  defaultProps: {
    variant: "accent",
  },
});
