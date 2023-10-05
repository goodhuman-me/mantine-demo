import { Notification } from "@good/ui/core";

// TODO: Notification theming
export const notificationProps = Notification.extend({
  defaultProps: {
    // Removes the default line-height from the notification
    color: "white",
  },
});
