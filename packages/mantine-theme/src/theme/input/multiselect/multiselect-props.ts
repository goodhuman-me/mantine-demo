import { MultiSelect } from "@mantine/core";
import cx from "clsx";

import { inputVars } from "../input-vars";
import inputClasses from "../input.module.css";

import multiSelectClasses from "./multiselect.module.css";

import { defaultInputProps } from "../default-props";

// TODO: Style the dropdown
export const multiselectProps = MultiSelect.extend({
  classNames: { ...inputClasses, input: cx(inputClasses.input, multiSelectClasses.input) },
  defaultProps: defaultInputProps,
  vars: inputVars,
});
