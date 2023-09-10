import { Title, Text, Code, Checkbox, Stack, Box, Group } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function CheckBoxPage() {
  return (
    <DefaultLayout title="Checkbox" subtitle="Binary select input">
      <Content.Section title="Checkbox">
        <Content.Text>
          Basic <Code>Checkbox</Code> usage
        </Content.Text>
        <Content.Area>
          <Checkbox
            label="By checking this, I agree to finish this bowl of chili without consuming any fluids later."
            defaultChecked
            description="I understand that this is a very bad idea."
          />
        </Content.Area>
        <Content.Area>
          <Checkbox label="Select all rows" indeterminate />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Checkbox group">
        <Content.Text>
          A group of <Code>Checkbox</Code> components
        </Content.Text>
        <Content.Area>
          <Checkbox.Group label="What is the greatest distortion pedal of all time?" description="Check all that applies" withAsterisk>
            <Group mt="xs">
              <Checkbox label="Boss DS-1" />
              <Checkbox label="Boss MT-2" />
              <Checkbox label="Proco Rat" />
              <Checkbox label="Gamechanger Plasma" />
              <Checkbox label="Ibanez TubeScreamer" />
              <Checkbox label="My custom pedal made from loose parts of my car" />
              <Checkbox label="None of these lame boxes" />
            </Group>
          </Checkbox.Group>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various <Code>Checkbox</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <Checkbox description="Cool beans make cool meals." label="x-small" size="xs" defaultChecked />
            <Checkbox description="Cool beans make cool meals." label="small" size="sm" defaultChecked />
            <Checkbox description="Cool beans make cool meals." label="medium" size="md" defaultChecked />
            <Checkbox description="Cool beans make cool meals." label="large" size="lg" defaultChecked />
            <Checkbox description="Cool beans make cool meals." label="x-large" size="xl" defaultChecked />
          </Stack>
        </Content.Area>
      </Content.Section>
      <Content.Section title="States">
        <Content.Text>
          Different <Code>Checkbox</Code> states
        </Content.Text>
        <Content.Area>
          <Stack gap="lg">
            <Box>
              <Text fw="bold" mb="sm">
                Error state
              </Text>
              <Checkbox
                label="I shot the sheriff."
                description="But I did not shoot the deputy."
                error="Oh no! You have to admit your guilt to proceed."
              />
            </Box>

            <Box>
              <Text fw="bold" mb="sm">
                Disabled state
              </Text>
              <Checkbox label="I want to sell my Bitcoin inventory." disabled description="This feature has been temporarily disabled." />
            </Box>
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
