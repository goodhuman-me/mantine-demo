import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";

const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<div>Home</div>} />
    <Route path="buttons" element={<div>Buttons</div>} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
