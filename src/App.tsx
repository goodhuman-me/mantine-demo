// import { Button } from "@mantine/core";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [opened, { toggle }] = useDisclosure();

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
          <Link to="/buttons">Buttons</Link>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
