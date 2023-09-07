import { TextInput } from "@mantine/core";

import { textInputVars } from "../input/input-resolver";
import classes from "../input/input.module.css";
import { inputDefaultProps } from "../input/input-constants";

export const textInputProps = TextInput.extend({
  classNames: classes,
  defaultProps: inputDefaultProps,
  vars: textInputVars,
});
