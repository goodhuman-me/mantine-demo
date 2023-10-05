import { Title, Text, Code, Center, Pagination, Input, Stack } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function PaginationPage() {
  return (
    <DefaultLayout title="Pagination" subtitle="Page navigation control">
      <Content.Section title="Pagination">
        <Content.Text>
          Typical <Code>Pagination</Code> usage
        </Content.Text>

        <Content.Area>
          <Pagination total={20} withEdges />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Siblings">
        <Content.Text>
          Side siblings for <Code>Pagination</Code>
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Stack gap="xs">
              <Text size="sm">1 sibling (default)</Text>
              <Pagination siblings={1} total={30} value={7} withEdges />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">2 sibling)</Text>
              <Pagination siblings={2} total={30} value={7} withEdges />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">3 sibling</Text>
              <Pagination siblings={3} total={30} value={7} withEdges />
            </Stack>
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various <Code>Pagination</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Stack gap="xs">
              <Text size="sm">x-small</Text>
              <Pagination siblings={1} total={30} value={7} withEdges size="xs" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">small</Text>
              <Pagination siblings={2} total={30} value={7} withEdges size="sm" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">medium</Text>
              <Pagination siblings={3} total={30} value={7} withEdges size="md" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">large</Text>
              <Pagination siblings={3} total={30} value={7} withEdges size="lg" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm">x-large</Text>
              <Pagination siblings={3} total={30} value={7} withEdges size="xl" />
            </Stack>
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="State">
        <Content.Text>
          Different <Code>Pagination</Code> states
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Stack gap="xs">
              <Text size="sm">disabled</Text>
              <Pagination siblings={1} total={30} value={7} withEdges disabled />
            </Stack>
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
