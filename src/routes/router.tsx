import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import ButtonPage from "../pages/ButtonsPage.tsx";
import Home from "../pages/HomePage.tsx";
import TextInputPage from "../pages/TextInputPage.tsx";
import TypographyPage from "../pages/TypographyPage.tsx";
import SampleLayout from "../pages/SampleLayoutPage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      {/* <Route path="Buttons" element={<ButtonPage />} /> */}
      {/* <Route path="TextInput" element={<TextInputPage />} /> */}
      {/* <Route path="Typography" element={<TypographyPage />} /> */}
      <Route path="SampleLayout" element={<SampleLayout />} />
    </Route>
    <Route path="/test" element={<div>test</div>} />
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
