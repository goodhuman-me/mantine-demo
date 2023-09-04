import { Container, Title } from "@mantine/core";

export default function HeaderContainer({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Container
      bg="var(--brand-body-light-3)"
      p="xl"
      className="border-gray-200 border-solid border-0 border-b"
    >
      <Container size="md">
        <Title order={1} className={subtitle && "mb-4"}>
          {title}
        </Title>
        {subtitle && (
          <Title
            order={4}
            fw="normal"
            styles={{
              root: {
                color: "var(--brand-body-dark-1)",
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
