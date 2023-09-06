import { Link, Outlet } from "react-router-dom";
import { router } from "./routes/router";

import { AppShell, Box, Burger, Group, NavLink, Stack, ThemeIcon, Title } from "@mantine/core";
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
      <Box px="sm" pb="xs">
        <Title order={6}>Navigation</Title>
      </Box>
      <Link to="/">
        <NavLink
          label="Home"
          leftSection={
            <ThemeIcon variant="transparent" size="sm" color="gray">
              <Home size="1rem" />
            </ThemeIcon>
          }
          rightSection={
            <ThemeIcon variant="transparent" size="sm" color="gray">
              <ChevronRight />
            </ThemeIcon>
          }
        />
      </Link>
    </Box>

    <Box>
      <Box px="sm" pb="xs">
        <Title order={6}>Individual components</Title>
      </Box>
      {routes.map((route) => (
        <Link key={route.path} to={route.path as string}>
          <NavLink
            label={route.path.replaceAll("-", " ")}
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
          />
        </Link>
      ))}
    </Box>
  </Stack>
);
