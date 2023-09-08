import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function BreadCrumbsPage() {
  return (
    <DefaultLayout title="Breadcrumbs" subtitle="Separates of react nodes with separators">
      <Content.Section title="Breadcrumbs">
        <Content.Text>Typical breadcrumbs</Content.Text>
        <Content.Area>Content goes here</Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
