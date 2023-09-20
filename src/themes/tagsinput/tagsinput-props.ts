import { TagsInput } from "@mantine/core";
import cx from "clsx";

import { inputVars } from "../input/input-vars";
import inputClasses from "../input/input.module.css";
import multiSelectClasses from "../multiselect/multiselect.module.css";
import { defaultInputProps } from "../input/default-props";

// TODO input margin for small size  doesn't look good, need to fix it
// TODO Disabled state css isn't working
export const tagsInputProps = TagsInput.extend({
  classNames: { ...inputClasses, input: cx(inputClasses.input, multiSelectClasses.input) },
  defaultProps: defaultInputProps,
  vars: inputVars,
});
