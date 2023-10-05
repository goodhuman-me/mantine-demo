import { Container, Divider, Text, Title } from "@good/ui/core";
import HeaderContainer from "../components/Header";
import { PropsWithChildren } from "react";

type DefaultLayoutProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  headerSize?: string;
  containerSize?: string;
}>;

export default function DefaultLayout({ title, subtitle, headerSize = "md", containerSize = "md", children }: DefaultLayoutProps) {
  return (
    <Container className="p-0" size={containerSize}>
      <HeaderContainer title={title} subtitle={subtitle} headerSize={headerSize} />

      <Container size={containerSize} p="xl">
        {children}
      </Container>
    </Container>
  );
}
