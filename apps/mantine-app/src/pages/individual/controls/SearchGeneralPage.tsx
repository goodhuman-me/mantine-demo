import { Title, Text, Code, Center } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function SearchGeneralPage() {
  return (
    <DefaultLayout title="Search general" subtitle="Search general">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Under construction">
        <Content.Text>Typical usage</Content.Text>
        <Content.Area>
          <Center bg="gray.0" p="3rem" style={{ borderRadius: "1rem" }}>
            <Text fz="lg" c="gray.6">
              🚧&nbsp;&nbsp;&nbsp;Coming soon&nbsp;&nbsp;&nbsp;🚧
            </Text>
          </Center>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
