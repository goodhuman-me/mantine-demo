import { ActionIcon, Box, Button, Flex, Title } from "@mantine/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Analyze } from "tabler-icons-react";

export const ButtonsPage = () => (
  <DefaultLayout title="Buttons" subtitle="A collection of clickable things">
    <Box id="variants">
      <Content.Header>Variants</Content.Header>
      <Content.Section title="Filled variant" divider={false} mb="xl">
        <Content.Text>Solid filled button with custom theme colors</Content.Text>
        <Content.Area>
          <Flex gap="md">
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
          </Flex>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Outline variant" divider={false} mb="xl">
        <Content.Text>Outline button with custom theme colors</Content.Text>
        <Content.Area>
          <Flex gap="md">
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
          </Flex>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Transparent variant">
        <Content.Text>Transparent button with custom theme colors</Content.Text>
        <Content.Area>
          <Flex gap="md">
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
          </Flex>
        </Content.Area>
      </Content.Section>
    </Box>

    <Box id="sizes">
      <Content.Header>Sizes</Content.Header>
      <Content.Section title="Sizes">
        <Content.Text>4 different sizes for the button</Content.Text>
        <Content.Area>
          <Flex gap="md" align="center">
            <Button size="xs">Xsmall</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Flex>
        </Content.Area>
      </Content.Section>
    </Box>

    <Box id="icons">
      <Content.Header>Icons support</Content.Header>

      <Content.Section title="Left icons" mb="xl" divider={false}>
        <Content.Text>⚠️ Icon sizes to be determined</Content.Text>
        <Content.Area>
          <Flex gap="md" align="center">
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
          </Flex>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Right icons" mb="xl" divider={false}>
        <Content.Area>
          <Flex align="center" gap="md">
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
          </Flex>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Both sides" mb="xl" divider={false}>
        <Content.Area>
          <Flex align="center" gap="md">
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
          </Flex>
        </Content.Area>
      </Content.Section>
      <Content.Section title="Icons with variants/colors">
        <Content.Area>
          <Flex gap="md" direction="column">
            <Flex gap="md" align="center">
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
            </Flex>
            <Flex gap="md" align="center">
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
            </Flex>
            <Flex gap="md" align="center">
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
            </Flex>
          </Flex>
        </Content.Area>
      </Content.Section>
    </Box>

    <Box id="loading-states">
      <Content.Header>Loading states</Content.Header>
      <Content.Section title="Variants">
        <Content.Area>
          <Flex direction="column" gap="lg">
            <Flex gap="md">
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
            </Flex>
            <Flex gap="md">
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
            </Flex>
            <Flex gap="md">
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
            </Flex>
          </Flex>
        </Content.Area>
      </Content.Section>
    </Box>

    <Box id="action-icond">
      <Content.Header>Action Icons</Content.Header>

      <Content.Section title="Sizes" divider={false} mb="xl">
        <Flex gap="md" align="center">
          <ActionIcon size="xs">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="sm">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="md">
            <Analyze />
          </ActionIcon>
          <ActionIcon size="lg">
            <Analyze />
          </ActionIcon>
        </Flex>
      </Content.Section>

      <Content.Section title="Variants">
        <Flex gap="md">
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
        </Flex>
        <Flex gap="md">
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
        </Flex>
        <Flex gap="md">
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
        </Flex>
      </Content.Section>
    </Box>
  </DefaultLayout>
);
