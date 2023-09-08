import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function PageTemplate() {
  return (
    <DefaultLayout title="Page title" subtitle="Sub title here">
      <Content.Header>Header</Content.Header>
      <Content.Section title="Section header">
        <Content.Text>Section text</Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
}
