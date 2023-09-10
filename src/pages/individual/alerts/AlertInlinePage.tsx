import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function AlertInlinePage() {
  return (
    <DefaultLayout title="Alert inline" subtitle="Inline alerts">
      <Content.Section title="Alert inline">
        <Content.Text>Typical inline alerts usage</Content.Text>
        <Content.Area>
          <Text>Content goes here</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
