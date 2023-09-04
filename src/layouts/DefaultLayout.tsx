import { Container, Divider, Text, Title } from "@mantine/core";
import HeaderContainer from "../components/Header";
import { ReactNode } from "react";

export default function DefaultLayout(props: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Container fluid className="p-0">
      <HeaderContainer title={props.title} subtitle={props.subtitle} />

      <Container size="md" p="xl">
        {props.children}
      </Container>
    </Container>
  );
}
