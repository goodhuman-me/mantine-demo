import { Select } from "@mantine/core";

import { textInputVars } from "../input/input-resolver";
import classes from "../input/input.module.css";
import { inputDefaultProps } from "../input/input-constants";

export const selectProps = Select.extend({
  classNames: classes,
  defaultProps: inputDefaultProps,
  vars: textInputVars,
});
