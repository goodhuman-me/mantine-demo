import { SelectProps, TextInputProps } from "@mantine/core";

type DefaultInputProps = Partial<SelectProps> & Partial<TextInputProps>;

export const inputDefaultProps: DefaultInputProps = {
  size: "md",
};
