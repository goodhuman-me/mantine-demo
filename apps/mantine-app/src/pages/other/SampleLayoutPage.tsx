import { Button, Text } from "@mantine/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function SampleLayout() {
  return (
    <DefaultLayout title="Sample layout" subtitle="Some description of the page">
      <Content.Section title="Section title">
        <Content.Text>Some description here. More text to be filled here.</Content.Text>
        <Content.Area>
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
        </Content.Area>
      </Content.Section>

      <Content.Section title="All sizes">
        <Content.Text>Some description here. More text to be filled here.</Content.Text>
        <Content.Area>
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
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
