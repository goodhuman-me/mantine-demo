import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function AlertToastPage() {
  return (
    <DefaultLayout title="Alert toast" subtitle="Alert toast">
      <Content.Section title="Alert toast">
        <Content.Text>Typical alert usage</Content.Text>
        <Content.Area>
          <Text>Content goes here</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
