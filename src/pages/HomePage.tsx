import { Text, Title, Container, Flex } from "@mantine/core";
import { Components } from "tabler-icons-react";

export default function Home() {
  return (
    <Container className="px-6 py-10" size="md">
      <Flex align="center">
        <Title c="var(--brand-body-dark-2)" order={1}>
          <Components className="mr-2 text-blue-400" size={20} />
          Mantine/GoodHuman design spike
        </Title>
      </Flex>
      <Title order={3} className="my-4" c="var(--brand-body-dark-2)">
        Hello!
      </Title>
      <div className="mt-4">
        <Text className="underline font-bold" c="var(--brand-body-dark-1)">
          If this text has been underlined & bold, it means that Tailwind is
          working correctly.
        </Text>

        <br />
        <Text>Feel free to click around and explore the components!</Text>
      </div>
      <br />
    </Container>
  );
}
