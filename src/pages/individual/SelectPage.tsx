import { Title, Text, Select, Stack, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

//  TODO
const SelectPage: React.FunctionComponent = (props) => {
  return (
    <DefaultLayout title="Select field" subtitle="Input field with multiple selectable values">
      <Content.Header>Basic select field</Content.Header>
      <Content.Section title="Section header">
        <Content.Text>Section textInvidunt no dolores accusam gubergren et sea, erat.</Content.Text>

        <Content.Area>
          <Stack>
            <Select
              label="What do you think of the NBA Finals Game 3?"
              description="Let us know what you think!"
              data={[
                { value: "1", label: "Hall of fame!" },
                { value: "2", label: "I loved it." },
                { value: "3", label: "It was alright." },
                { value: "4", label: "Meh, I've seen better." },
                { value: "5", label: "I fell asleep." },
              ]}
            />
            <Select
              label="Who's the MVP for NBA Season 2022/2023?"
              description="Let us know what you think!"
              data={[
                { value: "1", label: "Stephen Curry" },
                { value: "2", label: "Lebron James" },
                { value: "3", label: "James Harden" },
                { value: "4", label: "Jovic Nikola" },
                { value: "5", label: "Kevin Durant" },
              ]}
            />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various sizes for <Code>Select</Code> component
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="xs" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="sm" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="md" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="lg" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="xl" />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Various statees">
        <Content.Text>
          Various states for <Code>Select</Code> component
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="xs" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="sm" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="md" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="lg" />
            <Select label="Small" data={[{ value: "item-1", label: "Item 1" }]} size="xl" />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
};

export default SelectPage;
