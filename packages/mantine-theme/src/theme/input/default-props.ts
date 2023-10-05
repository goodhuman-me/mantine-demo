import { AutocompleteProps, MultiSelectProps, SelectProps, TextInputProps } from "@mantine/core";

type DefaultInputProps = Partial<SelectProps> & Partial<TextInputProps> & Partial<AutocompleteProps> & Partial<MultiSelectProps>;

export const defaultInputProps: DefaultInputProps = {
  size: "md",
};
