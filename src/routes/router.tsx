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
import SegmentedControlPage from "../pages/individual/controls/SegmentedControlPage.tsx";
import CheckBoxPage from "../pages/individual/controls/CheckBoxPage.tsx";
import RadioButtonPage from "../pages/individual/controls/RadioButtonPage.tsx";
import PaginationPage from "../pages/individual/controls/PaginationPage.tsx";
import BreadCrumbsPage from "../pages/individual/controls/BreadCrumbsPage.tsx";
import TabsPage from "../pages/individual/controls/TabsPage.tsx";
import AlertHeroPage from "../pages/individual/alerts/AlertHeroPage.tsx";
import AlertInlinePage from "../pages/individual/alerts/AlertInlinePage.tsx";
import AlertToastPage from "../pages/individual/alerts/AlertToastPage.tsx";
import ComponentProgressPage from "../pages/other/ComponentProgressPage.tsx";
import ColorsPage from "../pages/other/ColorsPage.tsx";
import DrawerPage from "../pages/individual/controls/DrawerPage.tsx";
import DropdownPage from "../pages/individual/controls/DropdownPage.tsx";
import FilterPage from "../pages/individual/controls/FilterPage.tsx";
import LabelPage from "../pages/individual/controls/LabelPage.tsx";
import LinkPage from "../pages/individual/controls/LinkPage.tsx";
import ModalPage from "../pages/individual/controls/ModalPage.tsx";
import PopoverPage from "../pages/individual/controls/PopoverPage.tsx";
import ProgressBarPage from "../pages/individual/controls/ProgressBarPage.tsx";
import SearchFilePage from "../pages/individual/controls/SearchFilePage.tsx";
import SearchGeneralPage from "../pages/individual/controls/SearchGeneralPage.tsx";
import StepsHorizontalPage from "../pages/individual/controls/StepsHorizoontalPage.tsx";
import StepsVerticalPage from "../pages/individual/controls/StepsVerticalPage.tsx";
import TextPage from "../pages/individual/controls/TextPage.tsx";
import TooltipPage from "../pages/individual/controls/TooltipPage.tsx";

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
      <Route path="dropdown" element={<DropdownPage />} />
      <Route path="filter" element={<FilterPage />} />
      <Route path="label" element={<LabelPage />} />
      <Route path="link" element={<LinkPage />} />
      <Route path="modal" element={<ModalPage />} />
      <Route path="popover" element={<PopoverPage />} />
      <Route path="progress-bar" element={<ProgressBarPage />} />
      <Route path="search-file" element={<SearchFilePage />} />
      <Route path="search-general" element={<SearchGeneralPage />} />
      <Route path="steps-horizontal" element={<StepsHorizontalPage />} />
      <Route path="steps-vertical" element={<StepsVerticalPage />} />
      <Route path="text" element={<TextPage />} />
      <Route path="tooltip" element={<TooltipPage />} />

      {/*Date/time  */}
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="dateinput" element={<DateInputPage />} />
      <Route path="datetime-picker" element={<DateTimePickerPage />} />

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
