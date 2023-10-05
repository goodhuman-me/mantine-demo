import { AutocompleteProps, MultiSelectProps, SelectProps, TextInputProps } from "@good/ui/core";

type DefaultInputProps = Partial<SelectProps> & Partial<TextInputProps> & Partial<AutocompleteProps> & Partial<MultiSelectProps>;

export const defaultInputProps: DefaultInputProps = {
  size: "md",
};
