import { Text, Button } from "@good/ui/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

export default function TempTestPage() {
  return (
    <DefaultLayout
      title="Temporary test page"
      subtitle="Nothing to see here, just temporary component tests"
    >
      <Content.Section>
        <Button variant="filled" color="accent" disabled size="md">
          Some button here
        </Button>
      </Content.Section>
    </DefaultLayout>
  );
}
