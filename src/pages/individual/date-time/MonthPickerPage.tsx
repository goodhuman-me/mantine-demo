import { Title, Text, Code, Center } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function MonthPickerPage() {
  return (
    <DefaultLayout title="MonthPicker" subtitle="Inline month, multiple months and months range picker">
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
