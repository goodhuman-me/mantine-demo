import { PartialVarsResolver, TextInput, TextInputFactory } from "@mantine/core";

import textInputClasses from "./text-input.module.css";

const textInputVars: PartialVarsResolver<TextInputFactory> = (theme, props) => {
  switch (props.size) {
    case "xs":
      return {
        input: {
          fontSize: "var(--mantine-font-size-xs)",
          minHeight: "1.75rem",
          height: "1.75rem",
        },
      };
    case "sm":
      return {
        input: {
          fontSize: "var(--mantine-font-size-sm)",
          height: "2rem",
          minHeight: "2rem",
        },
      };
    case "md":
      return {
        input: {
          fontSize: "var(--mantine-font-size-sm)",
          height: "2.75rem",
          minHeight: "2.75rem",
        },
      };
    case "lg":
      return {
        input: {
          fontSize: "var(--mantine-font-size-md)",
          height: "3.5rem",
          minHeight: "3.5rem",
        },
      };
    default:
      return {};
  }
};
export const textInputProps = TextInput.extend({
  classNames: {
    input: textInputClasses.input,
    label: textInputClasses.label,
    description: textInputClasses.description,
  },
  defaultProps: {
    size: "md",
  },
  vars: textInputVars,
});
