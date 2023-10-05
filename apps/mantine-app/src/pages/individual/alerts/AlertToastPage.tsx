import { Title, Text, Code, Center } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function AlertToastPage() {
  return (
    <DefaultLayout title="Alert toast" subtitle="Alert toast">
      <Content.Section title="Alert toast">
        <Content.Text>Typical alert usage</Content.Text>
        <Content.Area>
          <Center bg="gray.0" p="3rem" style={{ borderRadius: "1rem" }}>
            <Content.Text>
              To be imported from <Code>@good/components</Code>
            </Content.Text>
            <Text fz="lg" c="gray.6">
              🚧&nbsp;&nbsp;&nbsp;Coming soon&nbsp;&nbsp;&nbsp;🚧
            </Text>
          </Center>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
