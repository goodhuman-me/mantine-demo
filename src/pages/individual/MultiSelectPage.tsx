import { Title, Text, Code, MultiSelect, Stack } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function MultiSelectPage() {
  return (
    <DefaultLayout title="MultiSelect" subtitle="Select with multiple selectable choices">
      <Content.Section title="Typical MultiSelect usage">
        <Content.Text>
          <Code>MultiSelect</Code> input field
        </Content.Text>
        <Content.Area>
          <MultiSelect
            label="What's your favorite Roland instrument?"
            description="You can select multiple options!"
            data={[
              { value: "tr-808", label: "TR-808" },
              { value: "tr-909", label: "TR-909" },
              { value: "tb-303", label: "TB-303" },
              { value: "juno-106", label: "Juno-106" },
              { value: "jupiter-8", label: "Jupiter-8" },
              { value: "d-50", label: "D-50" },
            ]}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various sizes for <Code>MultiSelect</Code>
        </Content.Text>
        <Content.Area>
          <Stack gap="lg">
            <MultiSelect label="x-small" placeholder="Pick a value" data={["chocobo"]} size="xs" />
            <MultiSelect label="small" placeholder="Pick a value" data={["chocobo"]} size="sm" />
            <MultiSelect label="medium" placeholder="Pick a value" data={["chocobo"]} size="md" />
            <MultiSelect label="large" placeholder="Pick a value" data={["chocobo"]} size="lg" />
            <MultiSelect label="x-large" placeholder="Pick a value" data={["chocobo"]} size="xl" />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          Different states for <Code>MultiSelect</Code> <br />
          <i>TODO: Error & disabled states not fully styled</i>
        </Content.Text>
        <Content.Area>
          <Stack gap="lg">
            <MultiSelect label="Error" placeholder="Pick a value" data={["chocobo"]} error />
            <MultiSelect label="Disabled" placeholder="Pick a value" data={["chocobo"]} disabled />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
