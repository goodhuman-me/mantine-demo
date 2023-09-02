// import { Button } from "@mantine/core";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, Link } from "react-router-dom";

import { router } from "./routes/router";

function App() {
  const [opened, { toggle }] = useDisclosure();

  // console.log(router!.routes[0]!.children[1]!.path);

  const routes = router!.routes[0]!.children.filter(
    (route) => route.path !== "/"
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <div style={{ padding: "16px", fontWeight: "bold" }}>Header here</div>
      </AppShell.Header>

      <AppShell.Navbar>
        <div
          style={{
            paddingTop: "0px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Navigation</p>
          <Link to="/">Home</Link>
          {/* <Link to="/buttons">Buttons</Link> */}
          {/* <Link to="/textinput">Text input</Link> */}
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.path}
            </Link>
          ))}
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
