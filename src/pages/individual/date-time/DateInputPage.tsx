import { Title, Text, Code, Group, Stack, Divider } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { DateInput } from "@mantine/dates";

export default function DateInputPage() {
  return (
    <DefaultLayout title="DateInput" subtitle="Date input with dropdown calendar">
      <Content.Section title="Basic DateInput usage">
        <Content.Text>
          Basic <Code>DateInput</Code> usage
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="xl">
            <DateInput
              label="Let's pick an appointment date!"
              placeholder="Click here to select one"
              description="Any days, all day"
              clearable
            />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="DateInput with time input">
        <Content.Text>
          Allow time to be entered for <Code>DateInput</Code>
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="xl">
            <DateInput
              label="What time should the alarm ring?"
              placeholder="Click here to select one"
              description="Fizz buzz"
              valueFormat="DD/MM/YYYY HH:mm:ss"
              defaultValue={new Date()}
              clearable
            />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various sizes for <Code>DateInput</Code>
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="xl">
            <DateInput label="x-small (xs)" defaultValue={new Date()} size="xs" />
            <DateInput label="small (sm)" defaultValue={new Date()} size="sm" />
            <DateInput label="medium (md)" defaultValue={new Date()} size="md" />
            <DateInput label="large (lg)" defaultValue={new Date()} size="lg" />
            <DateInput label="x-large (xl)" defaultValue={new Date()} size="xl" />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          Different for <Code>DateInput</Code>
        </Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="xl">
            <DateInput label="Error" defaultValue={new Date()} error />
            <DateInput label="Disabled" defaultValue={new Date()} disabled />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
