import { Title, Text, Code, TagsInput, Stack } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useState } from "react";

export default function TagsInputPage() {
  const [demoValue, setDemoValue] = useState<string[]>(["Future Bass", "Breaks", "Forest Psytrance", "Dream Pop", "Darkwave"]);
  return (
    <DefaultLayout title="TagsInput" subtitle="Text field with tags input">
      <Content.Section title="Typical TagsInput field">
        <Content.Text>
          Typical usage of <Code>TagsInput</Code>
        </Content.Text>
        <Content.Area>
          <TagsInput
            label="Tag your newly uploaded song with genres/tags"
            description="Press enter to add a tag/genre"
            value={demoValue}
            onChange={setDemoValue}
          />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sizes">
        <Content.Text>
          Sizes for <Code>TagsInput</Code>
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <TagsInput label="x-small" size="xs" value={["Generic", "Basic"]} />
            <TagsInput label="small" size="sm" value={["Generic", "Basic"]} />
            <TagsInput label="medium" size="md" value={["Generic", "Basic"]} />
            <TagsInput label="large" size="lg" value={["Generic", "Basic"]} />
            <TagsInput label="x-large" size="xl" value={["Generic", "Basic"]} />
          </Stack>
        </Content.Area>
      </Content.Section>

      <Content.Section title="States">
        <Content.Text>
          Different states for <Code>TagsInput</Code>
        </Content.Text>
        <Content.Area>
          <Stack gap="md">
            <TagsInput label="Error" value={["Generic", "Basic"]} error />
            <TagsInput label="Disabled" value={["Generic", "Basic"]} disabled />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
