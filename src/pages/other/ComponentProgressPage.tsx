import { Table, Title, Text, Code, Progress } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

const { Thead, Tbody, Th, Tr, Td } = Table;

const progressStatus = {
  // p0: "Design not done",
  // p1: "Ready for development",
  // p2: "In progress",
  // p3: "Page created",
  // p4: "Unstyled component",
  // p5: "Minor touch ups",
  // p6: "Complete",
  p0: {
    label: "🕕 Design",
    color: "cyan",
  },
  p1: {
    label: "🕕 Development",
    color: "yellow",
  },
  p2: {
    label: "🕕 In progress",
    color: "blue",
  },
  p3: {
    label: "🕕 Page created",
    color: "pink",
  },
  p4: {
    label: "🕕 Unstyled component",
    color: "orange",
  },
  p5: {
    label: "🕕 Minor touch ups",
    color: "teal",
  },
  p6: {
    label: "🕕 Complete",
    color: "green",
  },
};

function ComponentRow(props: { component: string; progress: keyof typeof progressStatus }) {
  const { component, progress } = props;

  const { label, color } = progressStatus[progress];
  const percentageValue = (parseInt(progress.replace("p", "")) + 1) * (100 / 7);

  return (
    <Tr>
      <Td>{component}</Td>
      <Td>
        <Progress.Root size={20}>
          <Progress.Section value={percentageValue} color={color}>
            <Progress.Label>{label}</Progress.Label>
          </Progress.Section>
        </Progress.Root>
      </Td>
    </Tr>
  );
}

export default function ComponentProgressPage() {
  return (
    <DefaultLayout title="Components progress" subtitle="Progress for completed components">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="List of components">
        <Content.Text>Current state of components</Content.Text>
        <Content.Area>
          <Table verticalSpacing="sm">
            <Thead>
              <Tr>
                <Th>Component</Th>
                <Th>Progress</Th>
              </Tr>
            </Thead>
            <Tbody>
              <ComponentRow component="Accordion" progress="p0" />
              <ComponentRow component="Accordion" progress="p1" />
              <ComponentRow component="Accordion" progress="p2" />
              <ComponentRow component="Accordion" progress="p3" />
              <ComponentRow component="Accordion" progress="p4" />
              <ComponentRow component="Accordion" progress="p5" />
              <ComponentRow component="Accordion" progress="p6" />
            </Tbody>
          </Table>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
