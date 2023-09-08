import { CopyButton, createTheme, Text, Notification } from "@mantine/core";

import { variantColorResolver } from "./colors/variant-colors";

import { buttonProps } from "./button/button-props";
import { actionIconProps } from "./action-icon/action-icon-props";
import { cardProps } from "./card/card-props";
import { textInputProps } from "./text-input/text-input-props";
import { selectProps } from "./select/select-props";

import "./colors/colors.module.css";

import activeClasses from "./common/active.module.css";
import { autocompleteProps } from "./autocomplete/autocomplete-props";
import { multiselectProps } from "./multiselect/multiselect-props";
import { tagsInputProps } from "./tagsinput/tagsinputs-props";
import { notificationProps } from "./notification/notification-props";

const defaultFontFamily =
  "'Messina Sans','--apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'";

export const theme = createTheme({
  focusRing: "auto",
  variantColorResolver,
  activeClassName: activeClasses.active,
  defaultRadius: 6,

  // Fonts
  fontFamily: defaultFontFamily,
  headings: {
    fontFamily: defaultFontFamily,
    sizes: {
      h1: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      h2: {
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
      },
      h3: {
        fontSize: "1.25rem",
        lineHeight: "2rem",
      },
      h4: {
        fontSize: "1rem",
        lineHeight: "1.75rem",
      },
      h5: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      h6: {
        fontSize: "0.75rem",
        lineHeight: "1.125rem",
      },
    },
  },
  fontSizes: {
    // @ts-expect-error -- Forcefully add xxs as a size
    xxs: "0.6875rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  lineHeights: {
    // @ts-expect-error -- Forcefully add xxs as a size
    xxs: "0.875rem",
    xs: "1rem",
    sm: "1.375rem",
    md: "1.375rem",
    lg: "1.5rem",
    xl: "1.75rem",
  },

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

    // notifications
    Notification: notificationProps,
  },
});

// const theme = createTheme({
//   components: {
//     TextInput: TextInput.extend({
//       classNames: (_theme, props) => ({
//         label: cx({ [classes.labelRequired]: props.required }),
//         input: cx({ [classes.inputError]: props.error }),
//       }),
//     }),
//   },
// });
