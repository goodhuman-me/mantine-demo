import { Title, Text, Code, Center, Button, Popover, FloatingPosition, Group, TextInput, Stack } from "@good/ui/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useDisclosure } from "@good/ui/hooks";

function PositionalPopover(props: { position: string }) {
  const [opened, { open, close }] = useDisclosure();
  const { position } = props;
  return (
    <Popover position={position as FloatingPosition} withArrow shadow="md" width={400} opened={opened}>
      <Popover.Target>
        <Button variant="outline" className="capitalize" onMouseEnter={open} onMouseLeave={close}>
          {position}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Title order={3}>Hello!</Title>
        <Text mb="md">
          I am a popover. <br />I am positioned on {position} of the target element.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default function PopoverPage() {
  return (
    <DefaultLayout title="Popover" subtitle="Display popover section relative to given target element">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Popover">
        <Content.Text>Typical usage</Content.Text>
        <Content.Area>
          <Popover position="bottom" withArrow shadow="md" width={400}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Title order={3}>Hello!</Title>
              <Text mb="md">
                Welcome to the new realm. <br />
                You can now enter any portals you wish!
              </Text>
              <Button variant="gradient">Nice!</Button>
            </Popover.Dropdown>
          </Popover>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Popover options">
        <Content.Text>Positional popovers with hover state enabled</Content.Text>
        <Content.Area>
          <Group gap="lg">
            <PositionalPopover position="top" />
            <PositionalPopover position="bottom" />
            <PositionalPopover position="left" />
            <PositionalPopover position="right" />
          </Group>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Focus trapping">
        <Content.Text>Popover will trap focus inside it when opened</Content.Text>
        <Content.Area>
          <Popover position="bottom" withArrow shadow="md" width={400}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Stack gap="md">
                <Title order={5}>Login to account</Title>
                <Stack gap="0">
                  <TextInput placeholder="Full name" size="sm" />
                  <TextInput placeholder="Email" size="sm" />
                </Stack>
                <Button size="sm">Login</Button>
              </Stack>
            </Popover.Dropdown>
          </Popover>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
