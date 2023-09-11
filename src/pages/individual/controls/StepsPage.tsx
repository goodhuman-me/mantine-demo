import { Stepper, Title, Text, Code, Center, Box, Button, Group, Select, Flex, MantineSize, Checkbox, Stack } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useState } from "react";

export default function StepsPage() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [active2, setActive2] = useState(0);
  const nextStep2 = () => setActive2((current) => (current < 3 ? current + 1 : current));
  const prevStep2 = () => setActive2((current) => (current > 0 ? current - 1 : current));

  const [active3, setActive3] = useState(0);
  const nextStep3 = () => setActive3((current) => (current < 3 ? current + 1 : current));
  const prevStep3 = () => setActive3((current) => (current > 0 ? current - 1 : current));

  const [active4, setActive4] = useState(0);
  const nextStep4 = () => setActive4((current) => (current < 3 ? current + 1 : current));
  const prevStep4 = () => setActive4((current) => (current > 0 ? current - 1 : current));

  const [hStepperSize, setHStepperSize] = useState<string | null>("md");
  const [vStepperSize, setVStepperSize] = useState<string | null>("md");

  return (
    <DefaultLayout title="Steps - Horizontal" subtitle="Horizontal steps display">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Horizontal steps">
        <Content.Text>
          Typical <Code>Steps</Code> - Horizontal usage <br />
          <i>Note - This looks different from the design system; needs development work</i>
        </Content.Text>
        <Content.Area>
          <Stepper active={active} onStepClick={setActive} mt="xl">
            <Stepper.Step label="Step 1" description="Build a snowman?">
              <Center mt="lg">Do you want to build a snowman?</Center>
            </Stepper.Step>
            <Stepper.Step label="Step 2" description="Build a snow cart?">
              <Center mt="lg">Do you want to build a snow cart?</Center>
            </Stepper.Step>
            <Stepper.Step label="Step 3" description="Launch them both?">
              <Center mt="lg">Do you want to build a launch them?</Center>
            </Stepper.Step>
            <Stepper.Completed>
              <Center mt="lg">
                They're now in outer space, to find another race. <br />
              </Center>
            </Stepper.Completed>
          </Stepper>

          <Center>
            <Group mt="xl">
              <Button size="md" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button size="md" onClick={nextStep}>
                Next
              </Button>
            </Group>
          </Center>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Horizontal steps - sizes">
        <Content.Text>
          Various <Code>Steps</Code> - Horizontal sizes
        </Content.Text>

        <Stack align="flex-start">
          <Select value={hStepperSize} data={["xs", "sm", "md", "lg", "xl"]} onChange={setHStepperSize} allowDeselect={false} size="md" />
        </Stack>
        <Content.Area>
          <Stepper active={active2} onStepClick={setActive} size={hStepperSize as MantineSize}>
            <Stepper.Step label="Step 1" description="What what?" disabled={true}>
              <Center mt="lg">Here comes the hotstepper</Center>
            </Stepper.Step>
            <Stepper.Step label="Step 2" description="Oh oh">
              <Center mt="lg">I'm the lyrical gangster</Center>
            </Stepper.Step>
            <Stepper.Step label="Step 3" description="Ahh">
              <Center mt="lg">Pick up the crew in-a de area</Center>
            </Stepper.Step>
            <Stepper.Completed>
              <Center mt="lg">
                Still rocking like that <br />
              </Center>
            </Stepper.Completed>
          </Stepper>

          <Center>
            <Group mt="xl">
              <Button size="md" variant="outline" onClick={prevStep2}>
                Back
              </Button>
              <Button size="md" onClick={nextStep2}>
                Next
              </Button>
            </Group>
          </Center>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Vertical steps">
        <Content.Text>
          Typical <Code>Steps</Code> - Vertical usage <br />
          <i>Note - This looks different from the design system; needs development work</i>
        </Content.Text>
        <Content.Area>
          <Stepper active={active3} onStepClick={setActive3} mt="xl" orientation="vertical">
            <Stepper.Step label="Step 1" description="Build a snowman?" />
            <Stepper.Step label="Step 2" description="Build a snow cart?" />
            <Stepper.Step label="Step 3" description="Launch them both?" />
          </Stepper>

          <Group>
            <Button size="md" variant="outline" onClick={prevStep3}>
              Back
            </Button>
            <Button size="md" onClick={nextStep3}>
              Next
            </Button>
          </Group>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Vertical steps sizes">
        <Content.Text>
          Typical <Code>Steps</Code> - Vertical usage <br />
          <i>Note - This looks different from the design system; needs development work</i>
        </Content.Text>

        <Content.Area>
          <Stack align="flex-start">
            <Select value={vStepperSize} data={["xs", "sm", "md", "lg", "xl"]} onChange={setVStepperSize} allowDeselect={false} size="md" />
          </Stack>
          <Stepper active={active3} onStepClick={setActive3} mt="xl" orientation="vertical" size={vStepperSize as MantineSize}>
            <Stepper.Step label="Step 1" description="Build a snowman?" />
            <Stepper.Step label="Step 2" description="Build a snow cart?" />
            <Stepper.Step label="Step 3" description="Launch them both?" />
          </Stepper>

          <Group>
            <Button size="md" variant="outline" onClick={prevStep3}>
              Back
            </Button>
            <Button size="md" onClick={nextStep3}>
              Next
            </Button>
          </Group>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
