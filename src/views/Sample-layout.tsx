import { Button, Text } from "@mantine/core";
import { ContentSection } from "../components/ContentSection";
import DefaultLayout from "../layouts/DefaultLayout";

export default function SampleLayout() {
  return (
    <DefaultLayout title="Buttons" subtitle="Something">
      <ContentSection title="All sizes" text="All sizes for the button">
        <Button>Button</Button>
      </ContentSection>

      <ContentSection title="All sizes" text="All sizes for the button">
        <Text>More content here</Text>
      </ContentSection>
    </DefaultLayout>
  );
}
