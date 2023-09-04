import { Box, Divider, Stack, Text, Title, TitleOrder } from "@mantine/core";
import { PropsWithChildren, ReactNode } from "react";

const ContentSection = ({
  title,
  titleOrder = 3,
  children,
  divider: hasDivider = true,
}: PropsWithChildren<{
  title?: string | ReactNode;
  titleOrder?: number;
  divider?: boolean;
}>) => (
  <Stack gap="md">
    {title && (
      <Title c="var(--brand-body-dark-2)" order={titleOrder}>
        {title}
      </Title>
    )}
    {children}
    {hasDivider && <Divider my="lg" />}
  </Stack>
);

const ContentHeader = ({ order = 2, children }: PropsWithChildren<{ order?: TitleOrder }>) => (
  <Box mb="lg">
    <Title order={order}>{children}</Title>
  </Box>
);

const ContentText = (props: PropsWithChildren) => <Text c="var(--brand-body-dark-2)">{props.children}</Text>;

const ContentBox = (props: PropsWithChildren) => <Box mt="xs">{props.children}</Box>;

export const Content = {
  Header: ContentHeader,
  Section: ContentSection,
  Text: ContentText,
  Area: ContentBox,
};
