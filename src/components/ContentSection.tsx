import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { ReactNode } from "react";

export const ContentSection = ({
  title,
  text,
  children,
  divider: hasDivider = true,
}: {
  title: string | ReactNode;
  text: string | ReactNode;
  children: ReactNode;
  divider?: boolean;
}) => (
  <Stack gap="xs">
    {title && (
      <Title c="var(--brand-body-dark-2)" order={4}>
        {title}
      </Title>
    )}
    {text && <Text c="var(--brand-body-dark-2)">{text}</Text>}
    <Box mt="xs">{children}</Box>
    {hasDivider && <Divider my="lg" />}
  </Stack>
);
