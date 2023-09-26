import { TextInput } from "@mantine/core";

import { inputVars } from "../input-vars";
import classes from "../input.module.css";
import { defaultInputProps } from "../default-props";

export const textInputProps = TextInput.extend({
  classNames: classes,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
