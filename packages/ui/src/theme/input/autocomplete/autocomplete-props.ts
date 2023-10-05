import { Autocomplete } from "@mantine/core";

import { inputVars } from "../input-vars";
import inputClasses from "../input.module.css";
import { defaultInputProps } from "../default-props";

export const autocompleteProps = Autocomplete.extend({
  classNames: inputClasses,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
