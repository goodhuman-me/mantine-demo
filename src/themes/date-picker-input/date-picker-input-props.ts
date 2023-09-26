import { DatePickerInput } from "@mantine/dates";

import classes from "../input/input.module.css";

export const datePickerInputProps = DatePickerInput.extend({
  classNames: classes,
});
