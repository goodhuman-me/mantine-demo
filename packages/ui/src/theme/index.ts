import type { PartialDeep } from "type-fest";
import { MantineTheme, createTheme } from "@good/ui/core";

import { variantColorResolver } from "./colors/variant-colors";

import "./colors/colors.module.css";
import activeClasses from "./common/active.module.css";

import { fontsProps } from "./fonts";

import { actionIconProps } from "./action-icon/action-icon-props";
import { buttonProps } from "./button/button-props";
import { cardProps } from "./card/card-props";

import { autocompleteProps } from "./input/autocomplete/autocomplete-props";
import { selectProps } from "./input/select/select-props";
import { textInputProps } from "./input/textinput/text-input-props";
import { multiselectProps } from "./input/multiselect/multiselect-props";
import { tagsInputProps } from "./input/tagsinput/tagsinput-props";

import { anchorProps } from "./anchor/anchor-props";
import { breadcrumbsProps } from "./breadcrumbs/breadcrumbs-props";
import { checkboxProps } from "./checkbox/checkbox-props";
import { paginationProps } from "./pagination/pagination-props";
import { radioProps } from "./radio/radio-props";
import { segmentedControlProps } from "./segmented-control/segmented-control-props";
import { stepperProps } from "./stepper/stepper-props";
import { tabsProps } from "./tabs/tabs-props";

import { notificationProps } from "./notification/notification-props";

import { calendarProps } from "./datetime/calendar/calendar-props";
import { dateInputProps } from "./datetime/date-input/date-input-props";
import { dateTimePickerProps } from "./datetime/datetime-picker/datetime-picker-props";
import { datePickerProps } from "./datetime/date-picker/date-picker-props";
import { datePickerInputProps } from "./datetime/date-picker-input/date-picker-input-props";
import { monthPickerProps } from "./datetime/month-picker/month-picker-props";
import { monthPickerInputProps } from "./datetime/month-picker-input/month-picker-input-props";
import { yearPickerProps } from "./datetime/year-picker/year-picker-props";
import { yearPickerInputProps } from "./datetime/year-picker-input/year-picker-input-props";
import { timeInputProps } from "./datetime/time-input/time-input-props";

export const goodTheme: PartialDeep<MantineTheme> = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,

  ...fontsProps,

  components: {
    // buttons
    Button: buttonProps,
    ActionIcon: actionIconProps,
    Card: cardProps,

    // inputs
    TextInput: textInputProps,
    Select: selectProps,
    Autocomplete: autocompleteProps,
    MultiSelect: multiselectProps,
    TagsInput: tagsInputProps,

    // controls
    Checkbox: checkboxProps,
    Radio: radioProps,
    Anchor: anchorProps,

    // navigation
    Breadcrumbs: breadcrumbsProps,
    SegmentedControl: segmentedControlProps,
    Pagination: paginationProps,
    Stepper: stepperProps,
    Tabs: tabsProps,

    // date/time
    Calendar: calendarProps,
    DateInput: dateInputProps,
    DateTimePicker: dateTimePickerProps,
    DatePicker: datePickerProps,
    DatePickerInput: datePickerInputProps,
    MonthPicker: monthPickerProps,
    MonthPickerInput: monthPickerInputProps,
    YearPicker: yearPickerProps,
    YearPickerInput: yearPickerInputProps,
    TimeInput: timeInputProps,

    // notifications
    Notification: notificationProps,
  },
});
