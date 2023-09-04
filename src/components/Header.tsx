import { Container, Flex, ThemeIcon, Title } from "@mantine/core";
import { Components } from "tabler-icons-react";

export default function HeaderContainer({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <Container bg="var(--brand-body-light-3)" className="border-gray-200 border-solid border-0 border-b">
      <Container size="md" p="xl">
        <Flex align="center" className={subtitle && "mb-3"}>
          <ThemeIcon variant="filled" mr="xs" color="var(--brand-accent-main)">
            <Components />
          </ThemeIcon>
          <Title order={1} c="var(--brand-body-dark-2)">
            {title}
          </Title>
        </Flex>
        {subtitle && (
          <Title
            order={4}
            fw="normal"
            styles={{
              root: {
                color: "var(--brand-body-dark-2)",
              },
            }}
          >
            {subtitle}
          </Title>
        )}
      </Container>
    </Container>
  );
}
