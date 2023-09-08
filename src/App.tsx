import { Link, Outlet } from "react-router-dom";
import { router } from "./routes/router";

import { AppShell, Box, Burger, Code, Group, NavLink, Space, Stack, ThemeIcon, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  AlphabetLatin,
  BoxModel2,
  CalendarPlus,
  ChevronRight,
  CircleCheck,
  CircleDot,
  Click,
  Components,
  EditCircle,
  Forms,
  Icon,
  Notification,
  Paperclip,
  Link as LinkIcon,
  SourceCode,
} from "tabler-icons-react";

function App() {
  const [opened, { toggle }] = useDisclosure(false);

  // @ts-expect-error -- quiet, you
  const routes = router?.routes[0]?.children.filter((route) => route.path !== "/") as { path: string }[];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: !opened, mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group p="sm" gap={"xs"}>
          <Burger opened={opened} onClick={toggle} />

          <Group gap="xs">
            <SourceCode className="text-gray-400" size={"1.5rem"} />
            <Title order={4}>
              <Code>@good/mantine</Code> <span className="font-normal text-gray-700">components</span>
            </Title>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar style={{ overflowY: "auto" }}>
        <NavMenu routes={routes} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

const NavMenu = ({ routes }: { routes: { path: string }[] }) => (
  <Stack mt="md" gap="lg">
    <Box>
      <NavHeader title="Home" />
      <NavLinkWithIcon label="Home" to="/" />
    </Box>

    <Box>
      <NavHeader title="Buttons" />
      <NavLinkWithIcon label="Buttons" to="buttons" SideIcon={Click} />
    </Box>

    <Box>
      <NavHeader title="Inputs" />
      <NavLinkWithIcon label="Text input" to="text-input" SideIcon={Forms} />
      <NavLinkWithIcon label="Select" to="select" SideIcon={Forms} />
      <NavLinkWithIcon label="Autocomplete" to="autocomplete" SideIcon={Forms} />
      <NavLinkWithIcon label="MultiSelect" to="multiselect" SideIcon={Forms} />
      <NavLinkWithIcon label="TagsInput" to="tags-input" SideIcon={Forms} />
    </Box>

    <Box>
      <NavHeader title="Controls" />
      <NavLinkWithIcon label="Segmented Control" to="segmented-control" SideIcon={EditCircle} />
      <NavLinkWithIcon label="Checkbox" to="checkbox" SideIcon={CircleCheck} />
      <NavLinkWithIcon label="Radio" to="radio" SideIcon={CircleDot} />
      <NavLinkWithIcon label="Breadcrumbs" to="breadcrumbs" SideIcon={LinkIcon} />
      <NavLinkWithIcon label="Pagination" to="pagination" SideIcon={LinkIcon} />
    </Box>

    <Box>
      <NavHeader title="Date/time" />
      <NavLinkWithIcon label="Calendar" to="calendar" SideIcon={CalendarPlus} />
      <NavLinkWithIcon label="DateInput" to="dateinput" SideIcon={CalendarPlus} />
      <NavLinkWithIcon label="DateTime Picker" to="datetime-picker" SideIcon={CalendarPlus} />
    </Box>

    <Box>
      <NavHeader title="Others" />
      <NavLinkWithIcon label="Typography" to="typography" SideIcon={AlphabetLatin} />
      <NavLinkWithIcon label="Notifications" to="notifications" SideIcon={Notification} />
      <NavLinkWithIcon label="Other styles" to="other-styles" SideIcon={BoxModel2} />
      <Space h="xl" />
      <NavLinkWithIcon label="Sample layout" to="sample-layout" SideIcon={Paperclip} />
      <NavLinkWithIcon label="Test page" to="temp-test" SideIcon={Paperclip} />
    </Box>
  </Stack>
);

const NavHeader = (props: { title: string }) => (
  <Box px="sm" pb="xs">
    <Title order={5}>{props.title}</Title>
  </Box>
);

const NavLinkWithIcon = ({ to, label, SideIcon = Components }: { label: string; to: string; SideIcon?: Icon }) => (
  <Link to={to}>
    <NavLink
      leftSection={
        <ThemeIcon variant="transparent" size="sm" color="gray">
          <SideIcon />
        </ThemeIcon>
      }
      rightSection={
        <ThemeIcon variant="transparent" size="sm" color="gray">
          <ChevronRight />
        </ThemeIcon>
      }
      label={label}
    />
  </Link>
);
