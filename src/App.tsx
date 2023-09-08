import { Link, Outlet } from "react-router-dom";
import { router } from "./routes/router";

import { AppShell, Box, Burger, Group, NavLink, Space, Stack, ThemeIcon, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ChevronRight, Components, Home } from "tabler-icons-react";

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
          <Title order={4} className="ml-2">
            Mantine v7 exploration
          </Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
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
  <Stack mt="lg" gap="md">
    <Box>
      <NavHeader title="Home" />
      <NavLinkWithIcon label="Home" to="/" />
    </Box>

    <Box>
      <NavHeader title="Buttons components" />
      <NavLinkWithIcon label="Buttons" to="buttons" />
    </Box>

    <Box>
      <NavHeader title="Input components" />
      <NavLinkWithIcon label="Text input" to="text-input" />
      <NavLinkWithIcon label="Select" to="select" />
      <NavLinkWithIcon label="Autocomplete" to="autocomplete" />
      <NavLinkWithIcon label="MultiSelect" to="multiselect" />
      <NavLinkWithIcon label="TagsInput" to="tags-input" />
    </Box>

    <Box>
      <NavHeader title="Date/time components" />
      <NavLinkWithIcon label="Calendar" to="calendar" />
      <NavLinkWithIcon label="DateInput" to="dateinput" />
      <NavLinkWithIcon label="DateTime Picker" to="datetime-picker" />
    </Box>

    <Box>
      <NavHeader title="Others" />
      <NavLinkWithIcon label="Typography" to="typography" />
      <NavLinkWithIcon label="Notifications" to="notifications" />
      <NavLinkWithIcon label="Other styles" to="other-styles" />
      <Space h="xl" />
      <NavLinkWithIcon label="Sample layout" to="sample-layout" />
      <NavLinkWithIcon label="Test page" to="temp-test" />
    </Box>
  </Stack>
);

const NavHeader = (props: { title: string }) => (
  <Box px="sm" pb="xs">
    <Title order={5}>{props.title}</Title>
  </Box>
);

const NavLinkWithIcon = (props: { label: string; to: string }) => (
  <Link to={props.to}>
    <NavLink
      leftSection={
        <ThemeIcon variant="transparent" size="sm" color="gray">
          <Components />
        </ThemeIcon>
      }
      rightSection={
        <ThemeIcon variant="transparent" size="sm" color="gray">
          <ChevronRight />
        </ThemeIcon>
      }
      label={props.label}
    />
  </Link>
);
