import { useState } from "react";
import { ComboboxData, Table, Text, Title, Code, Select, Flex, TitleOrder, Group } from "@mantine/core";
import { Content } from "../../components/Content";
import DefaultLayout from "../../layouts/DefaultLayout";

const textSizeValues: ComboboxData = [
  { label: "XXSmall", value: "xxs" },
  { label: "Xsmall", value: "xs" },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
  { label: "XLarge", value: "xl" },
];

const titleOrderValues: ComboboxData = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];

export default function TypographyPage() {
  const [paragraphSize, setParagraphSize] = useState<string | null>("md");
  const [titleOrder, setTitleOrder] = useState<string | null>("1");

  return (
    <DefaultLayout title="Typography" subtitle="All things type related">
      <Content.Section title="Title (Heading)">
        <Content.Text>All heading sizes</Content.Text>
        <Content.Area>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Order</Table.Th>
                <Table.Th>Example</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">1</Code>
                  <Code>(34px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={1}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">2</Code>
                  <Code>(26px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={2}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">3</Code>
                  <Code>(22px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={3}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">4</Code>
                  <Code>(18px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={4}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">5</Code>
                  <Code>(16px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={5}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">6</Code>
                  <Code>(14px)</Code>
                </Table.Td>
                <Table.Td>
                  <Title order={6}>Quick brown foxes</Title>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Text">
        <Content.Text>All Text sizes</Content.Text>
        <Content.Area>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Size</Table.Th>
                <Table.Th>Example</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">xxs</Code>
                  <Code>(22px)</Code>
                </Table.Td>
                <Table.Td>
                  <Text size="xxs">Happy old squirrel, hop o squirrel, hop to the trees!</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">xs</Code>
                </Table.Td>
                <Table.Td>
                  <Text size="xs">Happy old squirrel, hop o squirrel, hop to the trees!</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">sm</Code>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">Happy old squirrel, hop o squirrel, hop to the trees!</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">md</Code>
                </Table.Td>
                <Table.Td>
                  <Text size="md">Happy old squirrel, hop o squirrel, hop to the trees!</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Code mr="xs">lg</Code>
                </Table.Td>
                <Table.Td>
                  <Text size="lg">Happy old squirrel, hop o squirrel, hop to the trees!</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Content.Area>
      </Content.Section>

      <Content.Section title="Sample paragraphs">
        <div className="flex flex-row items-start">
          <Group gap="lg">
            <Select
              label="Title order"
              data={titleOrderValues}
              value={titleOrder?.toString()}
              defaultValue={"1"}
              onChange={setTitleOrder}
            />
            <Select
              label="Text size"
              data={textSizeValues}
              value={paragraphSize}
              defaultValue={"md"}
              onChange={setParagraphSize}
            />
          </Group>
        </div>
        <Content.Area>
          <Title mb="md" order={parseInt(titleOrder as string) as TitleOrder}>
            The Raven excerpts
          </Title>
          <Text size={paragraphSize as string}>
            Merely this was here never and ember. Ever ungainly or not lamplight followed his back lenore, forgiveness
            on that and shorn. The unto whispered stronger dreaming and of. Said what door the door, my his the darkness
            this uttered name one, thee then guessing footfalls there my faster of maiden. That mien the pallas shadows
            or seraphim peering, much a this than stood, nothing whispered.
          </Text>
          <br />
          <Text size={paragraphSize as string}>
            A each the evilprophet gloated velvet, shore shore shall stillness has in then a into silken. Did eagerly
            maiden the dreaming that doubting the a. Weary i ancient morrow turning out usby ominous, tapping our so
            door yore a ungainly hath. Discourse uttered soul bird we. Grave tapping core soul dreaming fact beating
            this on. Sorrow mefilled or lady mortals from i a surcease. Nights presently heart nepenthe chamber while
            yore shadow the. Weak name the head god black, thinking.
          </Text>
          <br />
          <Text size={paragraphSize as string}>
            Bust so and yore its december. Flown myself is no that whom guessing his still upon. Back upstarting ancient
            lenore flitting my clasp floating deep the. Surely let quoth there suddenly fact door, not little bird
            chamber thereis lamplight more, on lenore name angels whose or is came maiden. Some flown i and raven, yet
            distant did more countenance, this kind lenore grim shrieked, chamber sainted that heard with chamber what
            what. And ominous raven hath footfalls heard grim. Clasp here shore bore craven, than on friends back the
            nothing days eagerly front. Thing i throws.
          </Text>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}
