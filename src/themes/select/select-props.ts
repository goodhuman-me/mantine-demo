import { Select } from "@mantine/core";

import { inputVars } from "../input/input-vars";
import classes from "../input/input.module.css";
import { defaultInputProps } from "../input/default-props";

export const selectProps = Select.extend({
  classNames: classes,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
