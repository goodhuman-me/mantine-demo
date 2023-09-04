import { Button, Text } from "@mantine/core";
import { Content } from "../components/Content";
import DefaultLayout from "../layouts/DefaultLayout";

export default function SampleLayout() {
  return (
    <DefaultLayout title="Buttons" subtitle="Some description of the page">
      <Content.Section title="Section title">
        <Content.Text>
          Some description here. More text to be filled here.
        </Content.Text>
        <Content.Box>
          <Button className="mr-4" variant="filled" color="accent">
            Accent
          </Button>
          <Button className="mr-4" variant="filled" color="warning">
            Warning
          </Button>
          <Button className="mr-4" variant="filled" color="danger">
            Danger
          </Button>
          <Button className="mr-4" variant="filled" color="neutral">
            Neutral
          </Button>
        </Content.Box>
      </Content.Section>

      <Content.Section title="All sizes" text="All sizes for the button">
        <Content.Text>More description</Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
}
