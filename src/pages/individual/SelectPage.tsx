import { Title, Text, Select, Stack } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

//  TODO
const SelectPage: React.FunctionComponent = (props) => {
  return (
    <DefaultLayout title="Select field" subtitle="Input field with multiple selectable values">
      <Content.Header>Basic select field</Content.Header>
      <Content.Section title="Section header">
        <Content.Text>Section textInvidunt no dolores accusam gubergren et sea, erat.</Content.Text>

        <Content.Area>
          <Stack>
            <Select
              label="What do you think of the NBA Finals Game 3?"
              data={[
                { value: "1", label: "Hall of fame!" },
                { value: "2", label: "I loved it." },
                { value: "3", label: "It was alright." },
                { value: "4", label: "Meh, I've seen better." },
                { value: "5", label: "I fell asleep." },
              ]}
            />

            <Select error />
          </Stack>
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
};

export default SelectPage;
