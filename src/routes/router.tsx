import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import Buttons from "../views/Buttons.tsx";
import Home from "../views/Home.tsx";

const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="buttons" element={<Buttons />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
