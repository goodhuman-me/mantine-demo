import { Title, Text, Code, Center, Breadcrumbs, Anchor } from "@mantine/core";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { Content } from "../../../components/Content";
import { ChevronRight } from "tabler-icons-react";

// const items = [
//   { title: "Mantine", href: "#" },
//   { title: "Mantine hooks", href: "#" },
//   { title: "use-id", href: "#" },
// ].map((item, index) => (
//   // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//   <Anchor href={item.href} key={index}>
//     {item.title}
//   </Anchor>
// ));

export default function BreadCrumbsPage() {
  return (
    <DefaultLayout title="Breadcrumbs" subtitle="Separates of react nodes with separators">
      <Content.Section title="Breadcrumbs">
        <Content.Text>
          Typical <Code>Breadcrumbs</Code> <br />
          <i>To create sample with dropdown navigators</i>
        </Content.Text>
        <Content.Area>
          <Breadcrumbs separator={<Text c="var(--brand-body-main)">/</Text>}>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              Native Instruments
            </Anchor>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              Effects
            </Anchor>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              Delays
            </Anchor>
            <Text c="var(--brand-body-dark-1)">Replika XT</Text>
          </Breadcrumbs>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Alternate separator">
        <Content.Text>
          Alternate <Code>Breadcrumbs</Code> separator <br />
        </Content.Text>
        <Content.Area>
          <Breadcrumbs separator={<ChevronRight size={14} color="var(--brand-body-main)" />}>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              D16
            </Anchor>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              Instruments
            </Anchor>
            <Anchor c="var(--brand-accent-main)" href="#wallet">
              Drums
            </Anchor>
            <Text c="var(--brand-body-dark-1)">Drumazon 2</Text>
          </Breadcrumbs>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
