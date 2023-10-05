import { TagsInput } from "@good/ui/core";
import cx from "clsx";

import { inputVars } from "../input-vars";
import inputClasses from "../input.module.css";
import multiSelectClasses from "../multiselect/multiselect.module.css";
import { defaultInputProps } from "../default-props";

// TODO input margin for small size  doesn't look good, need to fix it
// TODO Disabled state css isn't working
export const tagsInputProps = TagsInput.extend({
  classNames: { ...inputClasses, input: cx(inputClasses.input, multiSelectClasses.input) },
  defaultProps: defaultInputProps,
  vars: inputVars,
});
