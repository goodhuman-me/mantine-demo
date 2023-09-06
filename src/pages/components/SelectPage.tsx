import { Title, Text } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";

//  TODO
const SelectPage: React.FunctionComponent = (props) => {
  return (
    <DefaultLayout title="Page title" subtitle="Sub title here">
      <Content.Header>Header</Content.Header>
      <Content.Section title="Section header">
        <Content.Text>Section text</Content.Text>
      </Content.Section>
    </DefaultLayout>
  );
};

export default SelectPage;
