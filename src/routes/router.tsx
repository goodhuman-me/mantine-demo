import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage.tsx";
import SampleLayout from "../pages/SampleLayoutPage.tsx";
import { ButtonsPage } from "../pages/ButtonsPage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Buttons" element={<ButtonsPage />} />
      {/* <Route path="Buttons" element={<ButtonPage />} /> */}
      {/* <Route path="TextInput" element={<TextInputPage />} /> */}
      {/* <Route path="Typography" element={<TypographyPage />} /> */}
      <Route path="SampleLayout" element={<SampleLayout />} />
    </Route>
    <Route path="/test" element={<div>test</div>} />
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
