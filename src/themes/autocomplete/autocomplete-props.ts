import { Autocomplete } from "@mantine/core";

import { inputVars } from "../input/input-vars";
import inputClasses from "../input/input.module.css";
import { defaultInputProps } from "../input/default-props";

export const autocompleteProps = Autocomplete.extend({
  classNames: inputClasses,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
