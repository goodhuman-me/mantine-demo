import { Table, Title, Text, Code, Progress, Box } from "@good/ui/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

const { Thead, Tbody, Th, Tr, Td } = Table;

const progressStatus = {
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

function StatusDescriptionTable() {
  return (
    <Content.Section divider={false} mb="5rem">
      <Content.Area>
        <Table>
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Design</Td>
              <Td>Component still in design phase; no code has been written yet.</Td>
            </Tr>
            <Tr>
              <Td>Development</Td>
              <Td>Design complete; component is ready for development.</Td>
            </Tr>
            <Tr>
              <Td>In progress</Td>
              <Td>Component is currently being developed.</Td>
            </Tr>
            <Tr>
              <Td>Page created</Td>
              <Td>Page created for component but component not done yet.</Td>
            </Tr>
            <Tr>
              <Td>Unstyled component</Td>
              <Td>Component page created and component is done but not styled yet.</Td>
            </Tr>
            <Tr>
              <Td>Minor touch-ups</Td>
              <Td>Component is styled but needs some minor touch-ups to be done before it can be considered complete.</Td>
            </Tr>
            <Tr>
              <Td>Complete</Td>
              <Td>Component is complete and ready to be used in production.</Td>
            </Tr>
          </Tbody>
        </Table>
      </Content.Area>
    </Content.Section>
  );
}

export default function ComponentProgressPage() {
  return (
    <DefaultLayout title="Components progress" subtitle="Progress for completed components">
      <StatusDescriptionTable />

      <Content.Section title="List of components" divider={false}>
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
              <ComponentRow component="Alert hero" progress="p3" />
              <ComponentRow component="Alert inline" progress="p3" />
              <ComponentRow component="Alert toast" progress="p3" />
              <ComponentRow component="Breadcrumb" progress="p4" />
              <ComponentRow component="Button" progress="p5" />
              <ComponentRow component="Calendar" progress="p4" />
              <ComponentRow component="Checkbox" progress="p5" />
              <ComponentRow component="Data display" progress="p0" />
              <ComponentRow component="Date picker" progress="p5" />
              <ComponentRow component="Drawer" progress="p4" />
              <ComponentRow component="Dropdown" progress="p4" />
              <ComponentRow component="Filter button" progress="p3" />
              <ComponentRow component="Inline (edit table)" progress="p1" />
              <ComponentRow component="Label" progress="p3" />
              <ComponentRow component="Link" progress="p3" />
              <ComponentRow component="List field - Contextual menu" progress="p1" />
              <ComponentRow component="List field - Display" progress="p1" />
              <ComponentRow component="List field - Select" progress="p1" />
              <ComponentRow component="Modal" progress="p4" />
              <ComponentRow component="Pagination" progress="p4" />
              <ComponentRow component="Popover" progress="p4" />
              <ComponentRow component="Progress bar" progress="p5" />
              <ComponentRow component="Progress circle" progress="p1" />
              <ComponentRow component="Search file" progress="p3" />
              <ComponentRow component="Search general" progress="p3" />
              <ComponentRow component="Select field" progress="p5" />
              <ComponentRow component="Steps" progress="p4" />
              <ComponentRow component="Steps Vertical" progress="p4" />
              <ComponentRow component="Tab button" progress="p4" />
              <ComponentRow component="Tables" progress="p0" />
              <ComponentRow component="Text field" progress="p4" />
              <ComponentRow component="Title group" progress="p1" />
              <ComponentRow component="Tooltip" progress="p4" />
              <ComponentRow component="Top navigation" progress="p1" />
              <ComponentRow component="Widget" progress="p0" />
            </Tbody>
          </Table>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
