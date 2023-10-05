import { Container, Group, Text, Title } from "@mantine/core";
import { Components, WaveSine } from "tabler-icons-react";

export default function Home() {
  return (
    <Container className="px-6 py-10" size="md">
      <Group align="center" gap={"xs"}>
        <Components className="mr-2 text-blue-400" size={20} />
        <Title c="var(--brand-body-dark-2)" order={1}>
          Mantine/GoodHuman design spike
        </Title>
      </Group>
      <Group mb={0} p={0} my={"md"}>
        <Title order={3} c="var(--brand-body-dark-2)">
          <WaveSine />
          Hello!
        </Title>
      </Group>
      <div className="mt-4">
        <Text className="underline font-bold" c="var(--brand-body-dark-1)">
          If this text has been underlined & bold, it means that Tailwind is working correctly.
        </Text>
        <br />
        <Text>Feel free to click around and explore the components!</Text>
      </div>
      <br />
    </Container>
  );
}
