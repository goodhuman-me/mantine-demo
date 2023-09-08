import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage.tsx";
import SampleLayout from "../pages/SampleLayoutPage.tsx";
import { ButtonsPage } from "../pages/individual/ButtonsPage.tsx";
import TempTestPage from "../pages/TempTestPage.tsx";
import TypographyPage from "../pages/individual/TypographyPage.tsx";
import TextInputPage from "../pages/individual/TextInputPage.tsx";
import OtherStylesPage from "../pages/individual/OtherStylesPage.tsx";
import SelectPage from "../pages/individual/SelectPage.tsx";
import AutocompletePage from "../pages/individual/AutocompletePage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Buttons" element={<ButtonsPage />} />
      <Route path="Typography" element={<TypographyPage />} />

      <Route path="Text-field" element={<TextInputPage />} />
      <Route path="Select-field" element={<SelectPage />} />
      <Route path="Autocomplete-field" element={<AutocompletePage />} />

      <Route path="Other-styles" element={<OtherStylesPage />} />

      <Route path="Sample-layout" element={<SampleLayout />} />
      <Route path="Temp-test-page" element={<TempTestPage />} />
    </Route>
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
