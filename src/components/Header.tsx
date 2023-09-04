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
      className="border-gray-200 border-solid border-0 border-b"
    >
      <Container size="md" p="xl">
        <Title
          order={1}
          className={subtitle && "mb-4"}
          c="var(--brand-body-dark-2)"
        >
          {title}
        </Title>
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
