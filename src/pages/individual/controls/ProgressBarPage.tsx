import { Title, Text, Code, Center, Progress, Flex, Box, MantineColor } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";

export default function ProgressBarPage() {
  return (
    <DefaultLayout title="Progress bar" subtitle="A bar that represents progress">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Cool progress lines">
        <Content.Text>
          Basic <Code>Progress</Code> usage
        </Content.Text>
        <Content.Area>
          <Progress value={50} size="md" />
        </Content.Area>
      </Content.Section>

      <Content.Section title="Progress bar with labels">
        <Content.Text>
          Example <Code>Progress</Code> with labels & percentage
        </Content.Text>
        <Content.Area>
          <StyledProgress value={40} label={"Building completion"} color={"var(--color-lavender-ref)"} />
          <StyledProgress value={90} label={"Food"} color={"var(--color-blue-main)"} />
          <StyledProgress value={80} label={"Power consumption"} color={"var(--color-green-main)"} />
          <StyledProgress value={75} label={"Conveyor belts"} color={"var(--color-red-main)"} />
          <StyledProgress value={20} label={"Gold ore"} color={"var(--color-orange-main)"} />
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}

const StyledProgress = (props: { value: number; label: string; color?: MantineColor | string }) => (
  <Box mb="xl">
    <Text mb="4px" fw="600">
      {props.label}
    </Text>
    <Flex align="center">
      <Box style={{ flex: 1 }} mr="md">
        <Progress value={props.value} size="md" mt="3px" color={props.color} />
      </Box>
      <Text lh="1rem" color="var(--brand-body-dark-1)">
        {props.value}%
      </Text>
    </Flex>
  </Box>
);
