import { MultiSelect } from "@mantine/core";

import { inputVars } from "../input/input-vars";
import inputClasses from "./multiselect.module.css";
import { defaultInputProps } from "../input/default-props";

// TODO: Style the dropdown
export const multiselectProps = MultiSelect.extend({
  classNames: inputClasses,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
