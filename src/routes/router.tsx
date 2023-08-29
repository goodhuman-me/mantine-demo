import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import Buttons from "../views/Buttons.tsx";

const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<div>Home</div>} />
    <Route path="buttons" element={<Buttons />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
