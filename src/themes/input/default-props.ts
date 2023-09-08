import { AutocompleteProps, SelectProps, TextInputProps } from "@mantine/core";

type DefaultInputProps = Partial<SelectProps> & Partial<TextInputProps> & Partial<AutocompleteProps>;

export const defaultInputProps: DefaultInputProps = {
  size: "md",
};
