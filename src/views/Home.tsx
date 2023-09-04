import { Text, Title, Container } from "@mantine/core";

export default function Home() {
  return (
    <Container className="p-6" size="sm">
      <Title>Mantine/GoodHuman design spike</Title>
      <Title order={2} className="my-4">
        Hello!
      </Title>
      <div className="mt-4">
        <Text className="underline font-bold">
          If this text has been underlined & bold, it means that Tailwind is
          working correctly. <br />
          Yay!
        </Text>
      </div>
      <br />
    </Container>
  );
}
