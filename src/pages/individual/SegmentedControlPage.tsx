import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function PageTemplate() {
  return (
    <DefaultLayout title="Segmented control" subtitle="A linear set of two or more segments">
      <Content.Section title="Segmented control">
        <Content.Text>Section text</Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
}
