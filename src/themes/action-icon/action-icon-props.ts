import { ActionIcon } from "@mantine/core";
import actionIconClasses from "./action-icon.module.css";

// TODO: Add size resolver here
export const actionIconProps = ActionIcon.extend({
  classNames: actionIconClasses,
  defaultProps: {
    variant: "filled",
    color: "accent",
  },
});
