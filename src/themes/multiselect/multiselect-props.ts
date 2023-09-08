import { MultiSelect } from "@mantine/core";

import { inputVars } from "../input/input-vars";
import inputClasses from "../input/input.module.css";
import { defaultInputProps } from "../input/default-props";

// TODO: Fix Error/disabled states
export const multiselectProps = MultiSelect.extend({
  classNames: inputClasses,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
