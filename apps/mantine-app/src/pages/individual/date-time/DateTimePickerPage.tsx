import { Title, Text, Code, Stack } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { DateTimePicker } from "@mantine/dates";

export default function DateTimePickerPage() {
  return (
    <DefaultLayout title="DateTimePicker" subtitle="Capture datetime from the user">
      <Content.Section title="Date time picker">
        <Content.Text>
          Sample <Code>DateTimePicker</Code> usage
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="lg">
            <DateTimePicker
              label="What time would you like us to serve you lunch?"
              description="Let us know when you're hungry"
              placeholder="Click here to select date/time"
              clearable
            />

            <DateTimePicker
              label="We can be as precise as seconds!"
              description="In case you're that precise!"
              placeholder="Click here to select date/time"
              withSeconds
              clearable
            />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various sizes for <Code>DateTimePicker</Code>
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="lg">
            <DateTimePicker label="x-small (xs)" size="xs" placeholder="Select a date/time" />
            <DateTimePicker label="small (sm)" size="sm" placeholder="Select a date/time" />
            <DateTimePicker label="medium (md)" size="md" placeholder="Select a date/time" />
            <DateTimePicker label="large (lg)" size="lg" placeholder="Select a date/time" />
            <DateTimePicker label="x-large (xl)" size="xl" placeholder="Select a date/time" />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          Different states for <Code>DateTimePicker</Code>
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="lg">
            <DateTimePicker label="Error" placeholder="Oh no! Something went wrong" error />
            <DateTimePicker label="Disabled" placeholder="Oh no! Something went wrong" disabled />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
