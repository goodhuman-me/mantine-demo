import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function AlertHeroPage() {
  return (
    <DefaultLayout title="Alert hero" subtitle="Alert hero">
      <Content.Section title="Alert here">
        <Content.Text>Typical Alert Hero usage</Content.Text>
        <Content.Area>
          <Text>Content goes here</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
