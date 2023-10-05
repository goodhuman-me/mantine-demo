import { AutocompleteFactory, MultiSelectFactory, PartialVarsResolver, SelectFactory, TextInputFactory } from "@mantine/core";

type InputTypes = TextInputFactory | SelectFactory | AutocompleteFactory | MultiSelectFactory;

export const inputVars: PartialVarsResolver<InputTypes> = (_theme, props) => {
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
