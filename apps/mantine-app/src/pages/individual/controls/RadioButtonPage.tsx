import { useState } from "react";
import { Title, Text, Code, Radio, Stack, Center } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function RadioButtonPage() {
  const [value, setValue] = useState("mug");

  return (
    <DefaultLayout title="Radio buttons" subtitle="Multiple choice input">
      <Content.Section title="Radio buttons">
        <Content.Text>
          Cool wrappers for <Code>Radio</Code> elements
        </Content.Text>
        <Content.Area>
          <Radio label="Opt in for emails" description="I wish to be contacted by the marketing team for promotions" checked />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Radio groups">
        <Content.Text>
          Grouped <Code>Radio</Code> components
        </Content.Text>
        <Content.Area>
          <Radio.Group
            label="Please select your starting free gift"
            description="This will be given to you when you enter the Matrix."
            value={value}
            onChange={setValue}
          >
            <Stack mt="lg">
              <Radio value="mug" label="Mug" description="You can store drinks in this." checked />
              <Radio value="bug" label="Bug" description="Jumps, flies and generally friendly." checked />
              <Radio value="toy" label="Toy" description="Visit your childhood dreams." checked />
              <Radio value="mobile" label="Mobile" description="Reception not guaranteed." checked />
              <Radio value="nothing" label="Nothing" description="Go into the Matrix as you came from it." checked />
            </Stack>
          </Radio.Group>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Label">
        <Content.Text>
          Custom <Code>Radio</Code> labels & descriptions
        </Content.Text>
        <Content.Area>
          <Radio
            label={
              <Center bg="pink" c="white" style={{ borderRadius: "var(--mantine-radius-default)" }} p="4px">
                Chicken & chips
              </Center>
            }
            description={
              <Center bg="pink.0" p="xs" style={{ borderRadius: "var(--mantine-radius-default)" }}>
                Always the best pub food, no argument
              </Center>
            }
            checked
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Various <Code>Radio</Code> sizes
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <Radio label="x-small" description="Tis but a scratch." checked size="xs" />
            <Radio label="small" description="Tis but a scratch." checked size="sm" />
            <Radio label="medium" description="Tis but a scratch." checked size="md" />
            <Radio label="large" description="Tis but a scratch." checked size="lg" />
            <Radio label="x-large" description="Tis but a scratch." checked size="xl" />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          Different <Code>Radio</Code> states
        </Content.Text>
        <Content.Area>
          <Text fw="bold" mb="sm">
            Error state
          </Text>
          <Radio
            label="What is your quest?"
            description="To seek the Holy Grail."
            checked
            error="Silly sod, no such thing as holy grails."
          />
        </Content.Area>
        <Content.Area>
          <Text fw="bold" mb="sm">
            Disabled state
          </Text>
          <Radio label="I am invincible!" description="No you're not, good sir, you're just a loony." checked disabled />
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
//
