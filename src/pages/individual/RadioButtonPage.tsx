import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function RadioButtonPage() {
  return (
    <DefaultLayout title="Radio buttons" subtitle="Multiple choice input">
      <Content.Section title="Radio buttons">
        <Content.Text>
          Stylish wrappers for <Code>radio</Code> elemnents
        </Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
}
