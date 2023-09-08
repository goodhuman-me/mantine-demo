import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage.tsx";
import SampleLayout from "../pages/SampleLayoutPage.tsx";
import { ButtonsPage } from "../pages/individual/buttons/ButtonsPage.tsx";
import TempTestPage from "../pages/TempTestPage.tsx";
import TypographyPage from "../pages/individual/TypographyPage.tsx";
import TextInputPage from "../pages/individual/inputs/TextInputPage.tsx";
import OtherStylesPage from "../pages/individual/OtherStylesPage.tsx";
import SelectPage from "../pages/individual/inputs/SelectPage.tsx";
import AutocompletePage from "../pages/individual/inputs/AutocompletePage.tsx";
import MultiSelectPage from "../pages/individual/inputs/MultiSelectPage.tsx";
import TagsInputPage from "../pages/individual/inputs/TagsInputPage.tsx";
import NotificationsPage from "../pages/individual/NotificationsPage.tsx";
import CalendarPage from "../pages/individual/dates/CalendarPage.tsx";
import DateInputPage from "../pages/individual/dates/DateInputPage.tsx";
import DateTimePickerPage from "../pages/individual/dates/DateTimePickerPage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="buttons" element={<ButtonsPage />} />

      <Route path="text-input" element={<TextInputPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="autocomplete" element={<AutocompletePage />} />
      <Route path="multiselect" element={<MultiSelectPage />} />
      <Route path="tags-input" element={<TagsInputPage />} />

      <Route path="calendar" element={<CalendarPage />} />
      <Route path="dateinput" element={<DateInputPage />} />
      <Route path="datetime-picker" element={<DateTimePickerPage />} />

      <Route path="typography" element={<TypographyPage />} />
      <Route path="notifications" element={<NotificationsPage />} />
      <Route path="other-styles" element={<OtherStylesPage />} />

      <Route path="sample-layout" element={<SampleLayout />} />
      <Route path="temp-test" element={<TempTestPage />} />
    </Route>
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
