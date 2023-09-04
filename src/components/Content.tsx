import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { PropsWithChildren, ReactNode } from "react";

const ContentSection = ({
  title,
  children,
  divider: hasDivider = true,
}: PropsWithChildren<{
  title?: string | ReactNode;
  divider?: boolean;
}>) => (
  <Stack gap="md">
    {title && (
      <Title c="var(--brand-body-dark-2)" order={3}>
        {title}
      </Title>
    )}
    {children}
    {hasDivider && <Divider my="lg" />}
  </Stack>
);

const ContentText = (props: PropsWithChildren) => (
  <Text c="var(--brand-body-dark-2)">{props.children}</Text>
);

const ContentBox = (props: PropsWithChildren) => (
  <Box mt="xs">{props.children}</Box>
);

export const Content = {
  Section: ContentSection,
  Text: ContentText,
  Box: ContentBox,
};
