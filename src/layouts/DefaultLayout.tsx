import { Container, Divider, Text, Title } from "@mantine/core";
import HeaderContainer from "../components/Header";
import { PropsWithChildren } from "react";

type DefaultLayoutProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
}>;

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Container fluid className="p-0">
      <HeaderContainer title={props.title} subtitle={props.subtitle} />

      <Container size="md" p="xl">
        {props.children}
      </Container>
    </Container>
  );
}
