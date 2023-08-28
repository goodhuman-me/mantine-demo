import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        Navigation
        <nav>
          <Link to="/buttons">Test</Link> <br />
          <Link to="/buttons">Test</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
