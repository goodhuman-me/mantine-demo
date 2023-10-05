import { Notification } from "@mantine/core";

// TODO: Notification theming
export const notificationProps = Notification.extend({
  defaultProps: {
    // Removes the default line-height from the notification
    color: "white",
  },
});
