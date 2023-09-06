import { Box, Card, CardProps, Flex, Stack, Text } from "@mantine/core";
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
          <Flex gap="4rem">
            <CardWithTitle shadow="xs" />
            <CardWithTitle shadow="sm" />
            <CardWithTitle shadow="md" />
            <CardWithTitle shadow="lg" />
            <CardWithTitle shadow="xl" />
            <CardWithTitle shadow="xxl" />
          </Flex>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
