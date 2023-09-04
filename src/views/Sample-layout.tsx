import { Text, Container, Title, Divider } from "@mantine/core";
import HeaderContainer from "../components/HeaderContainer";
import DefaultLayout from "../layouts/DefaultLayout";

export default function SampleLayout() {
  return (
    <DefaultLayout title="Buttons" subtitle="Something">
      <Title order={3} mb="md">
        Something something
      </Title>
      <Text>Some accompanying text</Text>
      <Divider mt="xl" mb="lg" />
      <Text>Somertusdfgiudsyg</Text>
    </DefaultLayout>
  );
}
