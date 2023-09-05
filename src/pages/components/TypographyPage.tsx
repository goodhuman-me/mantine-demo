import { Code, Text, Title } from "@mantine/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function TypographyPage() {
  return (
    <DefaultLayout title="Typography" subtitle="All things type related">
      <Content.Header>Title</Content.Header>
      <Content.Section title="Title (Heading)">
        <Content.Text>All heading sizes</Content.Text>
        <Content.Area>
          <Title order={1}>Title - order 1</Title>
          <Title order={2}>Title - order 2</Title>
          <Title order={3}>Title - order 3</Title>
          <Title order={4}>Title - order 4</Title>
          <Title order={5}>Title - order 5</Title>
          <Title order={6}>Title - order 6</Title>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Text">
        <Content.Text>All Text sizes</Content.Text>
        <Content.Area>
          <Text size="xs">Text xs - X-small</Text>
          <Text size="sm">Text sm - Small</Text>
          <Text size="md">Text md - Medium</Text>
          <Text size="lg">Text lg - Large</Text>
          <Text size="xl">Text xl - X-large</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
