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
      <Route path="Buttons" element={<ButtonsPage />} />
      <Route path="Typography" element={<TypographyPage />} />

      <Route path="Text-field" element={<TextInputPage />} />
      <Route path="Select-field" element={<SelectPage />} />
      <Route path="Autocomplete-field" element={<AutocompletePage />} />
      <Route path="Multiselect-field" element={<MultiSelectPage />} />
      <Route path="TagsInput-field" element={<TagsInputPage />} />

      <Route path="Calendar" element={<CalendarPage />} />
      <Route path="DateInput-field" element={<DateInputPage />} />
      <Route path="DateTimePicker-field" element={<DateTimePickerPage />} />

      <Route path="Notifications" element={<NotificationsPage />} />
      <Route path="Other-styles" element={<OtherStylesPage />} />

      <Route path="Sample-layout" element={<SampleLayout />} />
      <Route path="Temp-test-page" element={<TempTestPage />} />
    </Route>
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
