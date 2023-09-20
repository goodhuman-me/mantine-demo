import { MultiSelect } from "@mantine/core";
import cx from "clsx";

import { inputVars } from "../input/input-vars";
import inputClasses from "../input/input.module.css";

import multiSelectClasses from "./multiselect.module.css";

import { defaultInputProps } from "../input/default-props";

// TODO: Style the dropdown
export const multiselectProps = MultiSelect.extend({
  classNames: { ...inputClasses, input: cx(inputClasses.input, multiSelectClasses.input) },
  defaultProps: defaultInputProps,
  vars: inputVars,
});
