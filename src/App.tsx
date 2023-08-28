import { Outlet, Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { MantineProvider, createTheme } from "@mantine/core";

function App() {
  return (
    <div>
      {/* <div>
        Navigation
        <nav>
          <Link to="/buttons">Test</Link> <br />
          <Link to="/buttons">Test</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div> */}
      <div>
        <Button color="blue" variant="outline">
          Click me
        </Button>
      </div>
    </div>
  );
}

export default App;
