import { Link, Outlet } from "react-router-dom";
import { router } from "./routes/router";

import { AppShell, Burger, NavLink, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ChevronRight, Components, Home } from "tabler-icons-react";

function App() {
  const [opened, { toggle }] = useDisclosure(true);

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
        <div className="flex flex-row items-center justify-content p-2.5">
          <Burger opened={opened} onClick={toggle} />
          <Title order={4} className="ml-2">
            Mantine v7 exploration
          </Title>
        </div>
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
  <div className="flex flex-col mt-4">
    <div className="px-3 py-2">
      <Title order={6}>Navigation</Title>
    </div>

    <div className="mb-4">
      <Link to="/">
        <NavLink label="Home" leftSection={<Home size="1rem" />} rightSection={<ChevronRight size="1rem" />} />
      </Link>
    </div>

    <div className="px-3 py-2">
      <Title order={6}>Individual components</Title>
    </div>

    <div>
      {routes.map((route) => (
        <Link key={route.path} to={route.path as string}>
          <NavLink
            label={route.path}
            leftSection={<Components size="1rem" />}
            rightSection={<ChevronRight size="1rem" />}
          />
        </Link>
      ))}
    </div>
  </div>
);
