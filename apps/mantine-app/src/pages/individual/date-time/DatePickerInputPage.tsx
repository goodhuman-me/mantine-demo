import { Title, Text, Code, Center, Stack, Box } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { DatePickerInput } from "@mantine/dates";

export default function DatePickerInputPage() {
  return (
    <DefaultLayout title="DatePickerInput" subtitle="Date, multiple dates and dates range picker input">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Typical DatePickerInput usage">
        <Content.Text>
          Typical <Code>DatePickerInput</Code> usage
        </Content.Text>
        <Content.Area>
          <DatePickerInput
            placeholder="Water flower date"
            label="Sir Lancelot, when would you like to water the flowers?"
            description="Those flowers will be watered, my liege."
            style={{ width: "400px" }}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Various options">
        <Content.Text>
          Various options with <Code>DatePickerInput</Code>
        </Content.Text>

        <Stack gap="xl">
          <Box>
            <Text mb="sm">Selecting multiple dates</Text>
            <DatePickerInput
              placeholder="Select a few dates here"
              type="multiple"
              label="When should we deliver your steak?"
              description="We'll keep it warm until then!"
              style={{ width: "400px" }}
            />
          </Box>
          <Box>
            <Text mb="sm">Range selection</Text>
            <DatePickerInput
              placeholder="Starting/ending"
              type="range"
              label="How long will your quest be?"
              description="The longer the quest, the more glory!"
              style={{ width: "400px" }}
            />
          </Box>
        </Stack>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          <Code>DatePickerInput</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="lg" align="flex-start">
            <DatePickerInput size="xs" label="x-small" placeholder="x-small" style={{ width: "400px" }} />
            <DatePickerInput size="sm" label="small" placeholder="small" style={{ width: "400px" }} />
            <DatePickerInput size="md" label="medium" placeholder="medium" style={{ width: "400px" }} />
            <DatePickerInput size="lg" label="large" placeholder="large" style={{ width: "400px" }} />
            <DatePickerInput size="xl" label="x-large" placeholder="x-large" style={{ width: "400px" }} />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          <Code>DatePickerInput</Code> states
        </Content.Text>
        <Content.Area>
          <Stack gap="lg" align="flex-start">
            <DatePickerInput
              error
              placeholder="Let us read your future"
              label="Pick a date and we'll predict your future"
              description="Pick a date, any date"
              style={{ width: "400px" }}
            />

            <DatePickerInput
              disabled
              placeholder="Let us read your future"
              label="Pick a date and we'll predict your future"
              description="Pick a date, any date"
              style={{ width: "400px" }}
            />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
