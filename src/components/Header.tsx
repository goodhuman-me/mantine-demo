import { Anchor, Box, Container, Group, ThemeIcon, Title, Text } from "@mantine/core";
import { Components, Link } from "tabler-icons-react";

export default function HeaderContainer({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <Container bg="var(--brand-body-light-3)" className="border-gray-200 border-solid border-0 border-b">
      <Container size="md" p="xl">
        <Group align="center" gap={"0.1rem"} className={subtitle && "mb-3"}>
          <ThemeIcon variant="filled" mr="xs" color="var(--brand-accent-main)">
            <Components />
          </ThemeIcon>
          <Title order={1} c="var(--brand-body-dark-2)">
            {title}
          </Title>
        </Group>

        {subtitle && (
          <Title order={4} fw="normal" c="var(--brand-body-dark-1)" mb="0">
            {subtitle}
          </Title>
        )}

        {/* <Box>
          <Text>
            Full documentation at <Anchor href="https://v7.mantine.dev/core/button">https://v7.mantine.dev/core/button</Anchor>
          </Text>
        </Box> */}
      </Container>
    </Container>
  );
}
