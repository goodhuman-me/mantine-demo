import { Title, Text, Code, Center, Modal, Button, Stack, Group, TextInput, Box } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function ModalPage() {
  const [mainOpened, { open: openMain, close: closeMain }] = useDisclosure();
  const [sizeOpened, { open: openSize, close: closeSize }] = useDisclosure();
  const [fullOpened, { open: openFull, close: closeFull }] = useDisclosure();

  const [size, setSize] = useState<string | number>("md");

  const setSizeAndOpen = (size: string | number) => {
    setSize(size);
    openSize();
  };

  return (
    <DefaultLayout title="Modal" subtitle="An accessible overlay dialog">
      <Content.Section title="Modal">
        <Content.Text>
          Typical <Code>Modal</Code> usage
        </Content.Text>
        <Content.Area>
          <Button onClick={openMain}>Open modal</Button>

          <Modal opened={mainOpened} onClose={closeMain} title={"Customer form"}>
            <ContactForm onClose={closeMain} />
          </Modal>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Modal options">
        <Content.Text>Modal sizes</Content.Text>
        <Content.Area>
          <Modal opened={sizeOpened} onClose={closeSize} title={"Customer form"} size={size}>
            <ContactForm onClose={closeSize} />
          </Modal>
          <Group gap="md">
            <Button variant="outline" onClick={() => setSizeAndOpen("xs")}>
              xs
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("sm")}>
              sm
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("md")}>
              md
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("lg")}>
              lg
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("xl")}>
              xl
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("55rem")}>
              55rem
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("70%")}>
              70%
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("100%")}>
              100%
            </Button>
          </Group>
        </Content.Area>

        <Box mt="lg">
          <Content.Text>Modal sizes</Content.Text>
        </Box>

        <Content.Area>
          <Modal
            opened={fullOpened}
            onClose={closeFull}
            title={"Customer form"}
            fullScreen
            radius={0}
            transitionProps={{ transition: "fade", duration: 200 }}
          >
            <ContactForm onClose={closeFull} />
          </Modal>
          <Button variant="outline" onClick={openFull}>
            Full screen
          </Button>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}

const ContactForm: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <Stack gap="md">
      <Text>Please enter your details</Text>

      <Group gap="md">
        <TextInput label="First Name" placeholder="First name" className="flex-1" data-autofocus />
        <TextInput label="Last Name" placeholder="Last name" className="flex-1" />
      </Group>
      <TextInput label="Email" placeholder="Email" className="flex-1" />
      <TextInput label="Mobile number" placeholder="Mobile number" className="flex-1" />
      <Button mt="lg" onClick={props.onClose}>
        Save
      </Button>
    </Stack>
  );
};
