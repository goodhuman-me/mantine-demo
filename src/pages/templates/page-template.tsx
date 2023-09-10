import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function PageTemplate() {
  return (
    <DefaultLayout title="Page" subtitle="Subtitle">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Sectionheader">
        <Content.Text>Typical usage</Content.Text>
        <Content.Area>
          <Text>Content goes here</Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
