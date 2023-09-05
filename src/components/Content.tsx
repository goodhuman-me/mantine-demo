import { Box, Divider, Stack, StylePropSpacingValue, Text, Title, TitleOrder } from "@mantine/core";
import { PropsWithChildren, ReactNode } from "react";

type ContentSectionProps = PropsWithChildren<{
  title?: string | ReactNode;
  titleOrder?: TitleOrder;
  divider?: boolean;
  mb?: StylePropSpacingValue;
}>;

const ContentSection = ({
  title,
  titleOrder = 3,
  children,
  divider: hasDivider = true,
  mb = "lg",
}: ContentSectionProps) => (
  <Stack gap="md" mb={mb}>
    {title && (
      <Title c="var(--brand-body-dark-2)" order={titleOrder}>
        {title}
      </Title>
    )}
    {children}
    {hasDivider && <Divider mt="lg" />}
  </Stack>
);

const ContentHeader = ({ order = 2, children }: PropsWithChildren<{ order?: TitleOrder }>) => (
  <Box mb="lg">
    <Title order={order}>{children}</Title>
  </Box>
);

const ContentText = (props: PropsWithChildren) => <Text c="var(--brand-body-dark-2)">{props.children}</Text>;

const ContentArea = (props: PropsWithChildren<{ mb?: StylePropSpacingValue }>) => (
  <Box mt="xs" mb={props.mb}>
    {props.children}
  </Box>
);

export const Content = {
  Header: ContentHeader,
  Section: ContentSection,
  Text: ContentText,
  Area: ContentArea,
};
