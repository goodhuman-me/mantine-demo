import { Title, Text, Code, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function NotificationsPage() {
  return (
    <DefaultLayout title="Notifications" subtitle="Things that pop up when things happen">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Notifications">
        <Content.Text>Basic notifications</Content.Text>
        <Content.Area>
          <Button
            onClick={() =>
              notifications.show({
                title: "Default notification",
                message: "Oh hi! This is a notification 🏁",
              })
            }
            size="md"
          >
            Show notification
          </Button>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
