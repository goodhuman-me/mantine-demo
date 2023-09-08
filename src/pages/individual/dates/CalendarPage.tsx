import { useState } from "react";
import { Title, Text, Code, Indicator, Stack, Group, Select, MantineSize } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

import { Calendar } from "@mantine/dates";

export default function CalendarPage() {
  const [calendarSize, setCalendarSize] = useState<string | null>("md");

  return (
    <DefaultLayout title="Calendar" subtitle="Base Calendar component">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Calendar">
        <Content.Text>
          Base calendar component used in various <Code>DatePicker</Code> components
        </Content.Text>
        <Content.Area>
          <Calendar />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Static calendar">
        <Content.Text>Static calendar that's not interactive</Content.Text>
        <Content.Area>
          <Calendar static />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Marked days">
        <Content.Text>Marking certain days with an indicator</Content.Text>
        <Content.Area>
          <Calendar
            renderDay={(date) => {
              const day = date.getDate();
              return (
                <Indicator size={6} color="red" offset={-2} disabled={![1, 2, 3, 4, 5, 6].includes(day)}>
                  <div>{day}</div>
                </Indicator>
              );
            }}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Size">
        <Content.Text>Different sizes</Content.Text>
        <Content.Area>
          <Stack align="flex-start" gap="xl">
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
            <Calendar size={calendarSize as MantineSize} />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
