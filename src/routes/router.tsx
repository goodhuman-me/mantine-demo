import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage.tsx";
import SampleLayout from "../pages/other/SampleLayoutPage.tsx";
import { ButtonsPage } from "../pages/individual/buttons/ButtonsPage.tsx";
import TempTestPage from "../pages/other/TempTestPage.tsx";
import TypographyPage from "../pages/individual/TypographyPage.tsx";
import TextInputPage from "../pages/individual/inputs/TextInputPage.tsx";
import OtherStylesPage from "../pages/individual/OtherStylesPage.tsx";
import SelectPage from "../pages/individual/inputs/SelectPage.tsx";
import AutocompletePage from "../pages/individual/inputs/AutocompletePage.tsx";
import MultiSelectPage from "../pages/individual/inputs/MultiSelectPage.tsx";
import TagsInputPage from "../pages/individual/inputs/TagsInputPage.tsx";
import NotificationsPage from "../pages/individual/NotificationsPage.tsx";
import CalendarPage from "../pages/individual/date-time/CalendarPage.tsx";
import DateInputPage from "../pages/individual/date-time/DateInputPage.tsx";
import DateTimePickerPage from "../pages/individual/date-time/DateTimePickerPage.tsx";
import SegmentedControlPage from "../pages/individual/navigation/SegmentedControlPage.tsx";
import CheckBoxPage from "../pages/individual/controls/CheckBoxPage.tsx";
import RadioButtonPage from "../pages/individual/controls/RadioButtonPage.tsx";
import PaginationPage from "../pages/individual/navigation/PaginationPage.tsx";
import BreadCrumbsPage from "../pages/individual/navigation/BreadCrumbsPage.tsx";
import TabsPage from "../pages/individual/navigation/TabsPage.tsx";
import AlertHeroPage from "../pages/individual/alerts/AlertHeroPage.tsx";
import AlertInlinePage from "../pages/individual/alerts/AlertInlinePage.tsx";
import AlertToastPage from "../pages/individual/alerts/AlertToastPage.tsx";
import ComponentProgressPage from "../pages/other/ComponentProgressPage.tsx";
import ColorsPage from "../pages/other/ColorsPage.tsx";
import DrawerPage from "../pages/individual/popovers/DrawerPage.tsx";
import DropdownPage from "../pages/individual/popovers/DropdownPage.tsx";
import FilterPage from "../pages/individual/controls/FilterPage.tsx";
import LabelPage from "../pages/individual/controls/LabelPage.tsx";
import LinkPage from "../pages/individual/controls/LinkPage.tsx";
import ModalPage from "../pages/individual/popovers/ModalPage.tsx";
import PopoverPage from "../pages/individual/popovers/PopoverPage.tsx";
import ProgressBarPage from "../pages/individual/controls/ProgressBarPage.tsx";
import SearchFilePage from "../pages/individual/controls/SearchFilePage.tsx";
import SearchGeneralPage from "../pages/individual/controls/SearchGeneralPage.tsx";
import StepsPage from "../pages/individual/navigation/StepsPage.tsx";
import TooltipPage from "../pages/individual/popovers/TooltipPage.tsx";
import DatePickerPage from "../pages/individual/date-time/DatePickerPage.tsx";
import { DatePickerInput } from "@mantine/dates";
import MonthPickerPage from "../pages/individual/date-time/MonthPickerPage.tsx";
import MonthPickerInputPage from "../pages/individual/date-time/MonthPickerInputPage.tsx";
import YearPickerInputPage from "../pages/individual/date-time/YearPickerInputPage.tsx";
import YearPickerPage from "../pages/individual/date-time/YearPickerPage.tsx";
import TimeInputPage from "../pages/individual/date-time/TimeInputPage.tsx";
import DatePickerInputPage from "../pages/individual/date-time/DatePickerInputPage.tsx";

const routes = (
  <>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      {/* Buttons  */}
      <Route path="buttons" element={<ButtonsPage />} />

      {/* Inputs */}
      <Route path="text-input" element={<TextInputPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="autocomplete" element={<AutocompletePage />} />
      <Route path="multiselect" element={<MultiSelectPage />} />
      <Route path="tags-input" element={<TagsInputPage />} />

      {/* Controls */}
      <Route path="checkbox" element={<CheckBoxPage />} />
      <Route path="radio" element={<RadioButtonPage />} />
      <Route path="segmented-control" element={<SegmentedControlPage />} />
      <Route path="breadcrumbs" element={<BreadCrumbsPage />} />
      <Route path="pagination" element={<PaginationPage />} />
      <Route path="tabs" element={<TabsPage />} />
      <Route path="drawer" element={<DrawerPage />} />
      <Route path="dropdown-menu" element={<DropdownPage />} />
      <Route path="filter" element={<FilterPage />} />
      <Route path="label" element={<LabelPage />} />
      <Route path="link" element={<LinkPage />} />
      <Route path="modal" element={<ModalPage />} />
      <Route path="popover" element={<PopoverPage />} />
      <Route path="progress-bar" element={<ProgressBarPage />} />
      <Route path="search-file" element={<SearchFilePage />} />
      <Route path="search-general" element={<SearchGeneralPage />} />
      <Route path="steps-horizontal" element={<StepsPage />} />
      <Route path="tooltip" element={<TooltipPage />} />

      {/*Date/time  */}
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="dateinput" element={<DateInputPage />} />
      <Route path="datetime-picker" element={<DateTimePickerPage />} />
      <Route path="date-picker" element={<DatePickerPage />} />
      <Route path="date-picker-input" element={<DatePickerInputPage />} />
      <Route path="month-picker" element={<MonthPickerPage />} />
      <Route path="month-picker-input" element={<MonthPickerInputPage />} />
      <Route path="year-picker" element={<YearPickerPage />} />
      <Route path="year-picker-input" element={<YearPickerInputPage />} />
      <Route path="time-input" element={<TimeInputPage />} />

      {/* Alerts */}
      <Route path="alert-hero" element={<AlertHeroPage />} />
      <Route path="alert-inline" element={<AlertInlinePage />} />
      <Route path="alert-toast" element={<AlertToastPage />} />

      {/* Others */}
      <Route path="typography" element={<TypographyPage />} />
      <Route path="notifications" element={<NotificationsPage />} />
      <Route path="other-styles" element={<OtherStylesPage />} />
      <Route path="colors" element={<ColorsPage />} />

      {/* Samples/tests */}
      <Route path="sample-layout" element={<SampleLayout />} />
      <Route path="temp-test" element={<TempTestPage />} />
      <Route path="components-progress" element={<ComponentProgressPage />} />
    </Route>
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
