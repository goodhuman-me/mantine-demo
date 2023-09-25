import { Title, Text, Code, Center, Drawer, Button, Box, TextInput, Group, Flex, Stack } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { times } from "ramda";

type DrawerPosition = "bottom" | "left" | "right" | "top";

const DrawerPage: React.FunctionComponent = () => {
  const [mainDrawerOpened, { open: openMainDrawer, close: closeMainDrawer }] = useDisclosure(false);
  const [positionDrawerOpened, { open: openPositionDrawer, close: closePositionDrawer }] = useDisclosure(false);
  const [sizeDrawerOpened, { open: openSizeDrawer, close: closeSizeDrawer }] = useDisclosure(false);
  const [stickyDrawerOpened, { open: openStickyDrawer, close: closeStickyDrawer }] = useDisclosure(false);

  const [drawerSize, setDrawerSize] = useState<string | number>("md");
  const [drawerPosition, setDrawerPosition] = useState("left");

  const setPositionAndOpen = (position: string) => {
    setDrawerPosition(position);
    openPositionDrawer();
  };

  const setSizeAndOpen = (size: string | number) => {
    setDrawerSize(size);
    openSizeDrawer();
  };

  const SpammyText = () =>
    times(
      () => (
        <Box>
          <Text fw="bold" fz="xl" mb="xs">
            The awesome dog
          </Text>
          <Text mb="xl">The quick brown fox jumped over the lazy dog </Text>
        </Box>
      ),
      100,
    );

  return (
    <DefaultLayout title="Drawer" subtitle="Display overlay area at any side of the screen">
      <Content.Section title="Drawer">
        <Content.Text>
          Typical <Code>Drawer</Code> usage
        </Content.Text>
        <Content.Area>
          <Drawer opened={mainDrawerOpened} onClose={closeMainDrawer} title="Create a new customer" size="lg">
            <ContactForm onClose={closeMainDrawer} />
          </Drawer>

          <Button onClick={openMainDrawer}>Open drawer</Button>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Drawer positions">
        <Content.Text>
          <Code>Drawer</Code> can be placed at any side of the screen
        </Content.Text>

        <Content.Area>
          <Group>
            <Button variant="outline" onClick={() => setPositionAndOpen("left")}>
              Left
            </Button>
            <Button variant="outline" onClick={() => setPositionAndOpen("top")}>
              Top
            </Button>
            <Button variant="outline" onClick={() => setPositionAndOpen("right")}>
              Right
            </Button>
            <Button variant="outline" onClick={() => setPositionAndOpen("bottom")}>
              Bottom
            </Button>
          </Group>

          <Drawer
            opened={positionDrawerOpened}
            onClose={closePositionDrawer}
            title="Create a new customer"
            size="lg"
            position={drawerPosition as DrawerPosition}
          >
            <ContactForm onClose={closePositionDrawer} />
          </Drawer>
        </Content.Area>
      </Content.Section>

      <Content.Section title="sizes">
        <Content.Text>
          <Code>Drawer</Code> can be invoked with different sizes
        </Content.Text>
        <Content.Area>
          <Group>
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
            <Button variant="outline" onClick={() => setSizeAndOpen("100%")}>
              full
            </Button>
            <Button variant="outline" onClick={() => setSizeAndOpen("40rem")}>
              40rem
            </Button>
          </Group>
        </Content.Area>

        <Drawer opened={sizeDrawerOpened} onClose={closeSizeDrawer} title="Create a new customer" size={drawerSize} position="left">
          <ContactForm onClose={closeSizeDrawer} />
        </Drawer>
      </Content.Section>

      <Content.Section title="Scrollable regions">
        <Content.Text>Drawers has a scrollable region with sticky headers.</Content.Text>
        <Content.Area>
          <Button onClick={openStickyDrawer}>Show drawer</Button>
        </Content.Area>

        <Drawer opened={stickyDrawerOpened} onClose={closeStickyDrawer} title="Sticky header">
          <SpammyText />
        </Drawer>
      </Content.Section>
    </DefaultLayout>
  );
};

export default DrawerPage;

const ContactForm: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <Stack gap="md">
      <Text>Please enter your details</Text>

      <Group gap="md">
        <TextInput label="First Name" placeholder="First name" className="flex-1" />
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
