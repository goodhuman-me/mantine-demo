import { Title, Text, Code, Center, Stack, Box } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { YearPickerInput } from "@good/ui/dates";

export default function YearPickerInputPage() {
  return (
    <DefaultLayout title="YearPickerInput" subtitle="Year, multiple years and years range picker input">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Typical">
        <Content.Text>
          Typical <Code>YearPickerInput</Code>usage
        </Content.Text>
        <Content.Area>
          <YearPickerInput
            placeholder="Select your year"
            label="What is the year of the Dragon?"
            description="Hint: It starts with a 1 or 2."
            style={{ width: "600px" }}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="YearPickerInput options">
        <Content.Text>
          <Code>YearPickerInput</Code> with error
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Box>
              <Text mb="sm">Multi select</Text>
              <YearPickerInput
                placeholder="Select your year"
                label="Actually, we might not be able to make it on that year; choose a few just in case."
                description="To be safe yeah."
                type="multiple"
                style={{ width: "600px" }}
              />
            </Box>
            <Box>
              <Text mb="sm">Select by range</Text>
              <YearPickerInput
                placeholder="Select your year"
                label="You know, just in case your rock concert is a multi-year event."
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
          Various <Code>YearPickerInput</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="lg">
            <YearPickerInput size="xs" label="x-small" placeholder="x-small" style={{ width: "400px" }} />
            <YearPickerInput size="sm" label="small" placeholder="small" style={{ width: "400px" }} />
            <YearPickerInput size="md" label="medium" placeholder="medium" style={{ width: "400px" }} />
            <YearPickerInput size="lg" label="large" placeholder="large" style={{ width: "400px" }} />
            <YearPickerInput size="xl" label="x-large" placeholder="x-large" style={{ width: "400px" }} />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          <Code>YearPickerInput</Code> states
        </Content.Text>

        <Content.Area>
          <Stack gap="xl">
            <Box>
              <Text mb="sm">Disabled</Text>
              <YearPickerInput label="Vanilla Ice's comeback tour" placeholder="Ice ice baby" disabled style={{ width: "400px" }} />
            </Box>
            <Box>
              <Text mb="sm">Error</Text>
              <YearPickerInput
                label="Oh no! No one wants to see Vanilla Ice"
                placeholder="Choose a year here"
                error
                style={{ width: "400px" }}
              />
            </Box>
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
