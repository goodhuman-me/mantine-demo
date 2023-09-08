import { TagsInput } from "@mantine/core";

import { inputVars } from "../input/input-vars";
import inputClasses from "../input/input.module.css";
import { defaultInputProps } from "../input/default-props";

// TODO input margin for small size  doesn't look good, need to fix it
// TODO Error state borders css aren't working
// TODO Disabled state css isn't working
export const tagsInputProps = TagsInput.extend({
  classNames: inputClasses,
  defaultProps: defaultInputProps,
  vars: inputVars,
});
