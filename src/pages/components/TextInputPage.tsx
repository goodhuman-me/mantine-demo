import { Flex, TextInput, Button } from "@mantine/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function TextInputPage() {
  return (
    <DefaultLayout title="TextInput" subtitle="Boxes for you to enter text">
      <Content.Header>Basic usage</Content.Header>
      <Content.Section>
        <TextInput label="First name" description="Your legal first name" placeholder="First name..." />
      </Content.Section>

      <Content.Header>Sizes</Content.Header>

      <Content.Section>
        <Flex direction="column" align="flex-start" gap="xl">
          <TextInput
            label="TextField label (xs)"
            description="TextField description"
            placeholder="TextField placeholder text"
            size="xs"
          />
          <TextInput
            label="TextField label (sm)"
            description="TextField description"
            placeholder="TextField placeholder text"
            size="sm"
          />
          <TextInput
            label="TextField label (md)"
            description="TextField description"
            placeholder="TextField placeholder text"
            size="md"
          />
          <TextInput
            label="TextField label (lg)"
            description="TextField description"
            placeholder="TextField placeholder text"
            size="lg"
          />
        </Flex>
      </Content.Section>

      <Content.Header>Sizes</Content.Header>
    </DefaultLayout>
  );
}
