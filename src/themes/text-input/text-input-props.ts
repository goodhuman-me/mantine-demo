import { TextInput } from "@mantine/core";

import textInputClasses from "./text-input.module.css";

export const textInputProps = TextInput.extend({
  classNames: {
    input: textInputClasses.input,
    label: textInputClasses.label,
  },
});
