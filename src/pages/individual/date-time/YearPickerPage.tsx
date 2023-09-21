import { Title, Text, Code, Center, Stack, Box, Select, MantineSize } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useState } from "react";
import { YearPicker } from "@mantine/dates";

export default function YearPickerPage() {
  const [calendarSize, setCalendarSize] = useState<string | null>("md");

  return (
    <DefaultLayout title="YearPicker" subtitle="Inline year, multiple years and years range picker">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Typical YearPicker usage">
        <Content.Text>
          Typical <Code>YearPicker</Code> usage
        </Content.Text>
        <Content.Area>
          <YearPicker />
        </Content.Area>
      </Content.Section>

      <Content.Section title="YearPicker options">
        <Stack gap="xl" align="flex-start">
          <Box className="text-center">
            <Text>Allow multiple selects</Text>
            <YearPicker type="multiple" />
          </Box>
          <Box className="text-center">
            <Text>Select a range</Text>
            <YearPicker type="range" />
          </Box>

          <Box className="text-center">
            <Text>Multiple columns</Text>
            <YearPicker type="range" numberOfColumns={2} />
          </Box>
        </Stack>
      </Content.Section>

      <Content.Section title="YearPicker sizes">
        <Stack gap="xs" align="flex-start">
          <Select
            value={calendarSize}
            data={[
              { value: "xs", label: "x-small (xs)" },
              { value: "sm", label: "small (sm)" },
              { value: "md", label: "medium (md)" },
              { value: "lg", label: "large (lg)" },
              { value: "xl", label: "x-large (xl)" },
            ]}
            onChange={setCalendarSize}
            allowDeselect={false}
          />
          <YearPicker size={calendarSize as MantineSize} />
        </Stack>
      </Content.Section>
    </DefaultLayout>
  );
}
