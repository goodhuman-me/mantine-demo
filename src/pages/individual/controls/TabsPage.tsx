import { Title, Text, Code, Center } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function TabsPage() {
  return (
    <DefaultLayout title="Tabs navigator" subtitle="Switch between different views">
      <Content.Section title="Tabs">
        <Content.Text>
          Typical <Code>Tabs</Code> usage
        </Content.Text>
        <Content.Area>
          <Center bg="gray.0" p="3rem" style={{ borderRadius: "1rem" }}>
            <Text fz="lg" c="gray.6">
              🚧&nbsp;&nbsp;&nbsp;Coming soon&nbsp;&nbsp;&nbsp;🚧
            </Text>
          </Center>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
