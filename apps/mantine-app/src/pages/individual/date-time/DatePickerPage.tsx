import { Title, Text, Code, Center, Box, Stack, Group, Select, MantineSize } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";

export default function DatePickerPage() {
  const [calendarSize, setCalendarSize] = useState<string | null>("md");

  return (
    <DefaultLayout title="DatePicker" subtitle="Inline date, multiple dates and dates range picker">
      <Content.Section title="Basic DatePicker usage">
        <Content.Text>
          Typical <Code>DatePicker</Code> usage
        </Content.Text>
        <Content.Area>
          <DatePicker />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Various options">
        <Content.Text>
          Different options for <Code>DatePicker</Code>
        </Content.Text>

        <Group gap="xl">
          <Box className="text-center">
            <Text mb="sm">Allow multi selects</Text>
            <DatePicker type="multiple" />
          </Box>
          <Box className="text-center">
            <Text mb="sm">Select by range</Text>
            <DatePicker type="range" />
          </Box>
          <Box className="text-center">
            <Text mb="sm">Hide days not in month</Text>
            <DatePicker type="range" hideOutsideDates />
          </Box>
        </Group>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various sizes for <Code>DatePicker</Code>
        </Content.Text>

        <Stack gap="xl" align="flex-start">
          <Select
            value={calendarSize}
            data={[
              // "xs", "sm", "md", "lg", "xl"
              { value: "xs", label: "x-small (xs)" },
              { value: "sm", label: "small (sm)" },
              { value: "md", label: "medium (md)" },
              { value: "lg", label: "large (lg)" },
              { value: "xl", label: "x-large (xl)" },
            ]}
            onChange={setCalendarSize}
            allowDeselect={false}
          />
          <DatePicker size={calendarSize as MantineSize} />
        </Stack>
      </Content.Section>
    </DefaultLayout>
  );
}
