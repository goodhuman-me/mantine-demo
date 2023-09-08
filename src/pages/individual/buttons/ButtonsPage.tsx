import { CodeHighlight } from "@mantine/code-highlight";
import { ActionIcon, Anchor, Box, Button, Code, CopyButton, FileButton, Group, Text, Title } from "@mantine/core";
import { Analyze, Clipboard, ClipboardCopy, Upload } from "tabler-icons-react";
import { Content } from "../../../components/Content";
import DefaultLayout from "../../../layouts/DefaultLayout";

export const ButtonsPage = () => (
  <DefaultLayout title="Buttons" subtitle="A collection of clickable things">
    <Box id="variants">
      <Content.Header>Variants</Content.Header>
      <Content.Section title="Filled variant" divider={false} mb="xl">
        <Content.Text>Solid filled button with custom theme colors</Content.Text>
        <Content.Area>
          <Group gap="md">
            <Button variant="filled" color="accent">
              Accent
            </Button>
            <Button variant="filled" color="warning">
              Warning
            </Button>
            <Button variant="filled" color="danger">
              Danger
            </Button>
            <Button variant="filled" color="neutral">
              Neutral
            </Button>
          </Group>
        </Content.Area>

        <Content.Area>
          <Content.Text>
            <Title order={4}>Sample code</Title>
          </Content.Text>
          <CodeHighlight
            language="tsx"
            mt="md"
            code={`
<Button variant="filled" color="accent">Accent</Button>
<Button variant="filled" color="warning">Warning</Button>
<Button variant="filled" color="danger">Danger</Button>
<Button variant="filled" color="neutral">Neutral</Button>`}
          />
        </Content.Area>
      </Content.Section>
      <Content.Section title="Outline variant" divider={false} mb="xl">
        <Content.Text>Outline button with custom theme colors</Content.Text>
        <Content.Area>
          <Group gap="md">
            <Button variant="outline" color="accent">
              Accent
            </Button>
            <Button variant="outline" color="warning">
              Warning
            </Button>
            <Button variant="outline" color="danger">
              Danger
            </Button>
            <Button variant="outline" color="neutral">
              Neutral
            </Button>
          </Group>
        </Content.Area>

        <Content.Area>
          <Content.Text>
            <b>Sample code</b>
          </Content.Text>
          <CodeHighlight
            language="tsx"
            mt="md"
            code={`
<Button variant="outline" color="accent">Accent</Button>
<Button variant="outline" color="warning">Warning</Button>
<Button variant="outline" color="danger">Danger</Button>
<Button variant="outline" color="neutral">Neutral</Button>`}
          />
        </Content.Area>
      </Content.Section>
      <Content.Section title="Transparent variant">
        <Content.Text>Transparent button with custom theme colors</Content.Text>
        <Content.Area>
          <Group gap="md">
            <Button variant="transparent" color="accent">
              Accent
            </Button>
            <Button variant="transparent" color="warning">
              Warning
            </Button>
            <Button variant="transparent" color="danger">
              Danger
            </Button>
            <Button variant="transparent" color="neutral">
              Neutral
            </Button>
          </Group>
        </Content.Area>

        <Content.Area>
          <Content.Text>
            <b>Sample code</b>
          </Content.Text>
          <CodeHighlight
            language="tsx"
            mt="md"
            code={`
<Button variant="transparent" color="accent">Accent</Button>
<Button variant="transparent" color="warning">Warning</Button>
<Button variant="transparent" color="danger">Danger</Button>
<Button variant="transparent" color="neutral">Neutral</Button>`}
          />
        </Content.Area>
      </Content.Section>
    </Box>
    <Box id="sizes">
      <Content.Header>Sizes</Content.Header>
      <Content.Section title="Sizes">
        <Content.Text>4 different sizes for the button</Content.Text>
        <Content.Area>
          <Group gap="md" align="center">
            <Button size="xs">X-small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Group>
        </Content.Area>
      </Content.Section>
    </Box>
    <Box id="icons">
      <Content.Header>Icons support</Content.Header>

      <Content.Section title="Left icons" mb="xl" divider={false}>
        <Content.Text>⚠️ Icon sizes to be determined</Content.Text>
        <Content.Area>
          <Group gap="md" align="center">
            <Button size="xs" leftSection={<Analyze size={14} />}>
              Xsmall
            </Button>
            <Button size="sm" leftSection={<Analyze size={16} />}>
              Small
            </Button>
            <Button size="md" leftSection={<Analyze size={16} />}>
              Medium
            </Button>
            <Button size="lg" leftSection={<Analyze size={16} />}>
              Large
            </Button>
          </Group>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Right icons" mb="xl" divider={false}>
        <Content.Area>
          <Group align="center" gap="md">
            <Button size="xs" rightSection={<Analyze size={14} />}>
              Xsmall
            </Button>
            <Button size="sm" rightSection={<Analyze size={16} />}>
              Small
            </Button>
            <Button size="md" rightSection={<Analyze size={16} />}>
              Medium
            </Button>
            <Button size="lg" rightSection={<Analyze size={16} />}>
              Large
            </Button>
          </Group>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Both sides" mb="xl" divider={false}>
        <Content.Area>
          <Group align="center" gap="md">
            <Button size="xs" leftSection={<Analyze size={14} />} rightSection={<Analyze size={14} />}>
              Xsmall
            </Button>
            <Button size="sm" leftSection={<Analyze size={14} />} rightSection={<Analyze size={16} />}>
              Small
            </Button>
            <Button size="md" leftSection={<Analyze size={14} />} rightSection={<Analyze size={16} />}>
              Medium
            </Button>
            <Button size="lg" leftSection={<Analyze size={14} />} rightSection={<Analyze size={16} />}>
              Large
            </Button>
          </Group>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Icons with variants/colors">
        <Content.Area>
          <Group gap="md" direction="column">
            <Group gap="md" align="center">
              <Button color="accent" variant="filled" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="warning" variant="filled" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="danger" variant="filled" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="neutral" variant="filled" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
            </Group>
            <Group gap="md" align="center">
              <Button color="accent" variant="outline" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="warning" variant="outline" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="danger" variant="outline" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="neutral" variant="outline" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
            </Group>
            <Group gap="md" align="center">
              <Button color="accent" variant="transparent" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="warning" variant="transparent" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="danger" variant="transparent" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
              <Button color="neutral" variant="transparent" leftSection={<Analyze size={14} />}>
                Accent
              </Button>
            </Group>
          </Group>
        </Content.Area>
      </Content.Section>
    </Box>
    <Box id="loading-states">
      <Content.Header>Loading states</Content.Header>
      <Content.Section title="Variants">
        <Content.Area>
          <Group direction="column" gap="lg">
            <Text>Filled</Text>
            <Group gap="md">
              <Button loading variant="filled" color="accent">
                Accent
              </Button>
              <Button loading variant="filled" color="warning">
                Warning
              </Button>
              <Button loading variant="filled" color="danger">
                Danger
              </Button>
              <Button
                loading
                variant="filled"
                color="neutral"
                // Note - seems to be a bug in Mantine, where the loading indicator is not spinning
                loaderProps={{
                  color: "var(--brand-body-main)",
                }}
              >
                Neutral
              </Button>
            </Group>

            <Text>Outline</Text>
            <Group gap="md">
              <Button loading variant="outline" color="accent">
                Accent
              </Button>
              <Button loading variant="outline" color="warning">
                Warning
              </Button>
              <Button loading variant="outline" color="danger">
                Danger
              </Button>
              <Button loading variant="outline" color="neutral">
                Neutral
              </Button>
            </Group>

            <Text>Outline</Text>
            <Group gap="md">
              <Button loading variant="transparent" color="accent">
                Accent
              </Button>
              <Button loading variant="transparent" color="warning">
                Warning
              </Button>
              <Button loading variant="transparent" color="danger">
                Danger
              </Button>
              <Button loading variant="transparent" color="neutral">
                Neutral
              </Button>
            </Group>
          </Group>
        </Content.Area>
      </Content.Section>
    </Box>
    <Box id="loading-states">
      <Content.Header>Disabled states</Content.Header>
      <Content.Section title="Variants">
        <Content.Area>
          <Group direction="column" gap="lg">
            <Text>Filled</Text>
            <Group gap="md">
              <Button disabled variant="filled" color="accent">
                Accent
              </Button>
              <Button disabled variant="filled" color="warning">
                Warning
              </Button>
              <Button disabled variant="filled" color="danger">
                Danger
              </Button>
              <Button disabled variant="filled" color="neutral">
                Neutral
              </Button>
            </Group>

            <Text>Outline</Text>
            <Group gap="md">
              <Button disabled variant="outline" color="accent">
                Accent
              </Button>
              <Button disabled variant="outline" color="warning">
                Warning
              </Button>
              <Button disabled variant="outline" color="danger">
                Danger
              </Button>
              <Button disabled variant="outline" color="neutral">
                Neutral
              </Button>
            </Group>

            <Text>Transparent</Text>
            <Group gap="md">
              <Button disabled variant="transparent" color="accent">
                Accent
              </Button>
              <Button disabled variant="transparent" color="warning">
                Warning
              </Button>
              <Button disabled variant="transparent" color="danger">
                Danger
              </Button>
              <Button disabled variant="transparent" color="neutral">
                Neutral
              </Button>
            </Group>
          </Group>
        </Content.Area>
      </Content.Section>
    </Box>
    <Box id="action-icons">
      <Content.Header>Action Icons</Content.Header>

      <Content.Section title="Sizes" divider={false} mb="xl">
        <Content.Text>Outline</Content.Text>
        <Group gap="md" align="center">
          <ActionIcon size="xs" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="sm" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="md" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="lg" variant="filled">
            <Analyze />
          </ActionIcon>
        </Group>

        <Content.Text>Outline</Content.Text>
        <Group gap="md" align="center">
          <ActionIcon size="xs" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="sm" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="md" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="lg" variant="outline">
            <Analyze />
          </ActionIcon>
        </Group>

        <Content.Text>Transparent</Content.Text>
        <Group gap="md" align="center">
          <ActionIcon size="xs" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="sm" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="md" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <Analyze />
          </ActionIcon>
        </Group>
      </Content.Section>

      <Content.Section title="Variants">
        <Content.Text>Outline</Content.Text>
        <Group gap="md">
          <ActionIcon color="accent" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="warning" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="danger" variant="filled">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="neutral" variant="filled">
            <Analyze />
          </ActionIcon>
        </Group>

        <Text>Filled</Text>
        <Group gap="md">
          <ActionIcon color="accent" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="warning" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="danger" variant="outline">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="neutral" variant="outline">
            <Analyze />
          </ActionIcon>
        </Group>

        <Text>Transparent</Text>
        <Group gap="md">
          <ActionIcon color="accent" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="warning" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="danger" variant="transparent">
            <Analyze />
          </ActionIcon>
          <ActionIcon color="neutral" variant="transparent">
            <Analyze />
          </ActionIcon>
        </Group>
      </Content.Section>
    </Box>

    <Box>
      <Content.Header>Other aux buttons</Content.Header>
      <Content.Section title="Copy to clipboard" divider={false}>
        <Content.Text>
          Clicking on this will copy the value <Code>https://team.goodhuman.me</Code> to your clipboard.
        </Content.Text>
        <Content.Area>
          <CopyButton value="https://team.goodhuman.me">
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "accent"} onClick={copy} size="md" leftSection={<ClipboardCopy />}>
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </CopyButton>
        </Content.Area>
      </Content.Section>

      <Content.Section title="File handing">
        <Content.Text>Clicking on this will open the file picker.</Content.Text>

        <Content.Area>
          <FileButton onChange={() => {}} accept="image/png,image/jpeg">
            {(props) => (
              <Button {...props} size="md" leftSection={<Upload />}>
                Upload file
              </Button>
            )}
          </FileButton>
        </Content.Area>
      </Content.Section>
    </Box>
  </DefaultLayout>
);
