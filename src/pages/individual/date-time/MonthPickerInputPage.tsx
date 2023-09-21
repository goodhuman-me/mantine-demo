import { Title, Text, Code, Center, Box, Stack } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { MonthPickerInput } from "@mantine/dates";

export default function MonthPickerInputPage() {
  return (
    <DefaultLayout title="MonthPickerInput" subtitle="Month, multiple months and months range picker input">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Typical">
        <Content.Text>
          Typical <Code>MonthPickerInput</Code>usage
        </Content.Text>
        <Content.Area>
          <MonthPickerInput
            placeholder="Select your month"
            label="When would you like to hold your rock concert?"
            description="The rock gods will be pleased."
            style={{ width: "600px" }}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="MonthPickerInput options">
        <Content.Text>
          <Code>MonthPickerInput</Code> with error
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Box>
              <Text mb="sm">Multi select</Text>
              <MonthPickerInput
                placeholder="Select your month"
                label="Actually, we might not be able to make it on that month; choose a few just in case."
                description="To be safe yeah."
                type="multiple"
                style={{ width: "600px" }}
              />
            </Box>
            <Box>
              <Text mb="sm">Select by range</Text>
              <MonthPickerInput
                placeholder="Select your month"
                label="You know, just in case your rock concert is a multi-month event."
                description="Who knows, maybe you're a rock god."
                type="range"
                style={{ width: "600px" }}
              />
            </Box>
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various <Code>MonthPickerInput</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="lg">
            <MonthPickerInput size="xs" label="x-small" placeholder="x-small" style={{ width: "400px" }} />
            <MonthPickerInput size="sm" label="small" placeholder="small" style={{ width: "400px" }} />
            <MonthPickerInput size="md" label="medium" placeholder="medium" style={{ width: "400px" }} />
            <MonthPickerInput size="lg" label="large" placeholder="large" style={{ width: "400px" }} />
            <MonthPickerInput size="xl" label="x-large" placeholder="x-large" style={{ width: "400px" }} />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          <Code>MonthPickerInput</Code> states
        </Content.Text>

        <Content.Area>
          <Stack gap="xl">
            <Box>
              <Text mb="sm">Error</Text>
              <MonthPickerInput label="Oh no! Something went wrong" placeholder="Choose a month here" error style={{ width: "400px" }} />
            </Box>
            <Box>
              <Text mb="sm">Disabled</Text>
              <MonthPickerInput label="MC Hammer's comeback tour" placeholder="Can't touch this" disabled style={{ width: "400px" }} />
            </Box>
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
