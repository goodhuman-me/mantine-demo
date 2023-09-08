import { Title, Text, Code } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function CheckBoxPage() {
  return (
    <DefaultLayout title="Checkbox" subtitle="Binary select input">
      <Content.Section title="Checkbox">
        <Content.Text>Binary boolean input</Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
}
