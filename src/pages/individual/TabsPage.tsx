import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function TabsPage() {
  return (
    <DefaultLayout title="Tabs navigator" subtitle="Switch between different views">
      <Content.Section title="Tabs">
        <Content.Text>
          Typical <Code>Tabs</Code> usage
        </Content.Text>
        <Content.Area>
          <Text>Content goes here</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
