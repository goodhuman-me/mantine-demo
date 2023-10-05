import { Title, Text, Code, Center, Box, Group, Stack, Select, MantineSize } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { MonthPicker } from "@mantine/dates";
import { useState } from "react";

export default function MonthPickerPage() {
  const [calendarSize, setCalendarSize] = useState<string | null>("md");

  return (
    <DefaultLayout title="MonthPicker" subtitle="Inline month, multiple months and months range picker">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Typical MonthPicker iusage">
        <Content.Text>
          Typical <Code>MonthPicker</Code> usage
        </Content.Text>
        <Content.Area>
          <MonthPicker />
        </Content.Area>
      </Content.Section>

      <Content.Section title="MonthPicker options">
        <Stack gap="xl" align="flex-start">
          <Box className="text-center">
            <Text>Allow multiple selects</Text>
            <MonthPicker type="multiple" />
          </Box>
          <Box className="text-center">
            <Text>Select a range</Text>
            <MonthPicker type="range" />
          </Box>

          <Box className="text-center">
            <Text>Multiple columns</Text>
            <MonthPicker type="range" numberOfColumns={2} />
          </Box>
        </Stack>
      </Content.Section>

      <Content.Section title="MonthPicker sizes">
        <Stack gap="xs" align="flex-start">
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
          <MonthPicker size={calendarSize as MantineSize} />
        </Stack>
      </Content.Section>
    </DefaultLayout>
  );
}
