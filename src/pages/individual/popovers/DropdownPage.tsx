import { Title, Text, Code, Center, Menu, Button } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { CloudDownload, CloudUpload, DoorExit, FileMusic, NewSection, Settings, Trash } from "tabler-icons-react";

const ProjectMenu: React.FC = () => (
  <>
    <Menu.Label>File actions</Menu.Label>
    <Menu.Item leftSection={<FileMusic />}>New project</Menu.Item>
    <Menu.Item leftSection={<CloudUpload />}>Save project</Menu.Item>
    <Menu.Item leftSection={<CloudDownload />}>Load project</Menu.Item>
    <Menu.Divider />
    <Menu.Item leftSection={<Settings />}>Settings</Menu.Item>
    <Menu.Divider />
    <Menu.Item leftSection={<Trash />} color="red">
      Delete project
    </Menu.Item>
    <Menu.Item leftSection={<DoorExit />}>Close app</Menu.Item>
  </>
);

export default function DropdownPage() {
  return (
    <DefaultLayout title="Dropdown menu" subtitle="Combine a list of secondary actions into single interactive area">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Dropdown menu">
        <Content.Text>
          Typical <Code>Menu</Code> usage
        </Content.Text>
        <Content.Area>
          <Menu shadow="md" width={200} withArrow>
            <Menu.Target>
              <Button>Menu actions</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <ProjectMenu />
            </Menu.Dropdown>
          </Menu>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
