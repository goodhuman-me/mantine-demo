import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { ReactNode } from "react";

const ContentSection = ({
  title,
  text,
  children,
  divider: hasDivider = true,
}: {
  title?: string | ReactNode;
  text?: string | ReactNode;
  children: ReactNode;
  divider?: boolean;
}) => (
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

const ContentText = (props: { children: ReactNode }) => (
  <Text c="var(--brand-body-dark-2)">{props.children}</Text>
);

const ContentBox = (props: { children: ReactNode }) => (
  <Box mt="xs">{props.children}</Box>
);

export const Content = {
  Section: ContentSection,
  Text: ContentText,
  Box: ContentBox,
};
