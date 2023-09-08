import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function PaginationPage() {
  return (
    <DefaultLayout title="Pagination" subtitle="Page navigation control">
      <Content.Section title="Pagination">
        <Content.Text>Typical pagination</Content.Text>
        <Content.Area>Content goes here</Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
