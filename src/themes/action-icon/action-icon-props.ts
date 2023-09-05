import { ActionIcon } from "@mantine/core";
import actionIconClasses from "./action-icon.module.css";

export const ActionIconProps = ActionIcon.extend({
  classNames: actionIconClasses,
  defaultProps: {
    variant: "filled",
    color: "accent",
  },
});
