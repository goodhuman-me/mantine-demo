import { DateTimePicker } from "@mantine/dates";

import classes from "../../input/input.module.css";

export const dateTimePickerProps = DateTimePicker.extend({
  classNames: classes,
});
