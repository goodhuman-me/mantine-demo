import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage.tsx";
import SampleLayout from "../pages/SampleLayoutPage.tsx";
import { ButtonsPage } from "../pages/components/ButtonsPage.tsx";
import TempTestPage from "../pages/TempTestPage.tsx";
import TypographyPage from "../pages/components/TypographyPage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Buttons" element={<ButtonsPage />} />
      <Route path="Typography" element={<TypographyPage />} />

      <Route path="SampleLayout" element={<SampleLayout />} />
      <Route path="TempTest" element={<TempTestPage />} />
    </Route>
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
