import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import Buttons from "../views/Buttons.tsx";
import Home from "../views/Home.tsx";
import TextInput from "../views/TextInput.tsx";

const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="Buttons" element={<Buttons />} />
    <Route path="TextInput" element={<TextInput />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
