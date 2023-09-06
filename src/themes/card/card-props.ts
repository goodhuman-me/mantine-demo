import { Card } from "@mantine/core";

import cardClassNames from "./card.module.css";

export const cardProps = Card.extend({
  classNames: cardClassNames,
});
