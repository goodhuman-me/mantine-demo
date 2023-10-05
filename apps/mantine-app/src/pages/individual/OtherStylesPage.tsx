import { Box, Card, CardProps, Group, Stack, Text } from "@good/ui/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";

const CardWithTitle = ({ shadow = "sm" }: { shadow?: CardProps["shadow"] }) => (
  <Stack gap="sm" align="center">
    <Box>
      <Text size="xs" c="gray.7">
        Shadows - <b>{shadow}</b>
      </Text>
    </Box>

    <Card shadow={shadow} p="xl" radius="lg">
      <Text size="sm" c="gray.6">
        Card
      </Text>
    </Card>
  </Stack>
);

export default function OtherStylesPage() {
  return (
    <DefaultLayout title="Other style elements" subtitle="Misc. style elements & design tokens">
      <Content.Header>Elevation styles</Content.Header>
      <Content.Section divider={false}>
        <Content.Text>Boxes with elevation</Content.Text>

        <Content.Area>
          <Group gap="4rem">
            <CardWithTitle shadow="xs" />
            <CardWithTitle shadow="sm" />
            <CardWithTitle shadow="md" />
            <CardWithTitle shadow="lg" />
            <CardWithTitle shadow="xl" />
            <CardWithTitle shadow="xxl" />
          </Group>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
