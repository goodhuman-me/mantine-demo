import { Box, Button, Flex, Title } from "@mantine/core";
import { Content } from "../components/Content";
import DefaultLayout from "../layouts/DefaultLayout";
import { Analyze } from "tabler-icons-react";

export const ButtonsPage = () => (
  <DefaultLayout title="Buttons" subtitle="A collection of clickable things">
    <Box id="variants">
      <Content.Header>Variants</Content.Header>
      <Content.Section title="Filled variant">
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
      <Content.Section title="Outline variant">
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
      <Content.Section title="Left icons">
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
      <Content.Section title="Right icons">
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
      <Content.Section title="Both sides">
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
    </Box>

    <Box id="loading-states">
      <Content.Header>Loading states</Content.Header>
      <Content.Section title="Filled variants">
        <Content.Area>
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
        </Content.Area>
      </Content.Section>

      <Content.Section title="Outline variants">
        <Content.Area>
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
        </Content.Area>
      </Content.Section>

      <Content.Section title="Transparent variants">
        <Content.Area>
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
        </Content.Area>
      </Content.Section>
    </Box>
  </DefaultLayout>
);
