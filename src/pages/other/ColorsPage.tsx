import { Title, Text, Code, Center, Group, Card, Stack, Box, Grid, Divider } from "@mantine/core";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Content } from "../../components/Content";
import { CodeHighlight } from "@mantine/code-highlight";

export default function ColorsPage() {
  return (
    <DefaultLayout title="Colors" subtitle="Color palette" headerSize="xl" containerSize="xl">
      {/* <Content.Header>Header</Content.Header> */}
      <Content.Section title="Range of brand colors" divider={false}>
        <Content.Text>
          Represents the colors used in the <b>GoodHuman</b> design system. <br />
          These colors are used available as a CSS variable, and can be accessed in the various components like the following example: <br /> <br />
        </Content.Text>

        <CodeHighlight code={'<Text color="var(--brand-primary-hero)">This text is colored with the primary hero color</Text>'} mb="lg" />

        <Content.Area>
          {/* Primary */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Primary
            </Text>
            <Grid gutter="lg">
              <ColorItem bg="var(--brand-primary-hero)" category="Primary" color="Hero" />
              <ColorItem bg="var(--brand-primary-black)" category="Primary" color="Black" tc="white" />
              <ColorItem bg="var(--brand-primary-white)" category="Primary" color="White" bc="var(--brand-body-light-1)" />
            </Grid>
          </Box>

          {/* Accent */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Accent (Secondary)
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--brand-accent-dark-2)" category="Accent" color="accent-dark-2" tc="white" />
              <ColorItem span={2} bg="var(--brand-accent-dark-1)" category="Accent" color="accent-dark-1" tc="white" />
              <ColorItem span={4} bg="var(--brand-accent-main)" category="Accent" color="accent-main" tc="white" />
              <ColorItem span={2} bg="var(--brand-accent-light-1)" category="Accent" color="accent-light-1" tc="var(--brand-accent-dark-2)" />
              <ColorItem span={2} bg="var(--brand-accent-light-2)" category="Accent" color="accent-light-2" tc="var(--brand-accent-dark-2)" />
            </Grid>
          </Box>

          {/* Body */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Body (Neutral)
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--brand-body-dark-2)" category="Body" color="body-dark-2" tc="white" />
              <ColorItem span={2} bg="var(--brand-body-dark-1)" category="Body" color="body-dark-1" tc="white" />
              <ColorItem span={2} bg="var(--brand-body-main)" category="Body" color="body-main" tc="var(--brand-body-dark-2)" />
              <ColorItem span={2} bg="var(--brand-body-light-1)" category="Body" color="body-light-1" tc="var(--brand-body-dark-2)" />
              <ColorItem span={2} bg="var(--brand-body-light-2)" category="Body" color="body-light-2" tc="var(--brand-body-dark-2)" />
              <ColorItem span={2} bg="var(--brand-body-light-2)" category="Body" color="body-light-3" tc="var(--brand-body-dark-2)" />
            </Grid>
          </Box>

          <Divider mb="3rem" />

          <Title order={3} mb="xl">
            Individual colors
          </Title>

          {/* Lavender */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Lavender
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-lavender-dark-2)" category="Lavender" color="lavender-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-lavender-dark-1)" category="Lavender" color="lavender-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-lavender-main)" category="Lavender" color="lavender-main" tc="white" />
              <ColorItem span={2} bg="var(--color-lavender-light-1)" category="Lavender" color="lavender-l-1" tc="var(--color-lavender-dark-2)" />
              <ColorItem span={2} bg="var(--color-lavender-light-2)" category="Lavender" color="lavender-l-2" tc="var(--color-lavender-dark-2)" />
              <ColorItem span={2} bg="var(--color-lavender-light-2)" category="Lavender" color="lavender-ref" tc="var(--color-lavender-dark-2)" />
            </Grid>
          </Box>

          {/* Canary */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Canary
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-canary-dark-2)" category="Canary" color="canary-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-dark-1)" category="Canary" color="canary-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-main)" category="Canary" color="canary-main" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-light-1)" category="Canary" color="canary-l-1" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-l-2" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-ref" tc="var(--color-canary-dark-2)" />
            </Grid>
          </Box>

          {/* Lilac */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Lilac
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-lilac-dark-2)" category="Lilac" color="lilac-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-lilac-dark-1)" category="Lilac" color="lilac-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-lilac-main)" category="Lilac" color="lilac-main" tc="white" />
              <ColorItem span={2} bg="var(--color-lilac-light-1)" category="Lilac" color="lilac-l-1" tc="var(--color-lilac-dark-2)" />
              <ColorItem span={2} bg="var(--color-lilac-light-2)" category="Lilac" color="lilac-l-2" tc="var(--color-lilac-dark-2)" />
              <ColorItem span={2} bg="var(--color-lilac-light-2)" category="Lilac" color="lilac-ref" tc="var(--color-lilac-dark-2)" />
            </Grid>
          </Box>

          {/* Blue */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Blue
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-blue-dark-2)" category="Blue" color="blue-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-blue-dark-1)" category="Blue" color="blue-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-blue-main)" category="Blue" color="blue-main" tc="white" />
              <ColorItem span={2} bg="var(--color-blue-light-1)" category="Blue" color="blue-l-1" tc="var(--color-blue-dark-2)" />
              <ColorItem span={2} bg="var(--color-blue-light-2)" category="Blue" color="blue-l-2" tc="var(--color-blue-dark-2)" />
              <ColorItem span={2} bg="var(--color-blue-light-2)" category="Blue" color="blue-ref" tc="var(--color-blue-dark-2)" />
            </Grid>
          </Box>

          {/* Green */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Green
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-green-dark-2)" category="Green" color="green-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-green-dark-1)" category="Green" color="green-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-green-main)" category="Green" color="green-main" tc="white" />
              <ColorItem span={2} bg="var(--color-green-light-1)" category="Green" color="green-l-1" tc="var(--color-green-dark-2)" />
              <ColorItem span={2} bg="var(--color-green-light-2)" category="Green" color="green-l-2" tc="var(--color-green-dark-2)" />
              <ColorItem span={2} bg="var(--color-green-light-2)" category="Green" color="green-ref" tc="var(--color-green-dark-2)" />
            </Grid>
          </Box>

          {/* Orange */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Orange
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-orange-dark-2)" category="Orange" color="orange-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-orange-dark-1)" category="Orange" color="orange-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-orange-main)" category="Orange" color="orange-main" tc="white" />
              <ColorItem span={2} bg="var(--color-orange-light-1)" category="Orange" color="orange-l-1" tc="var(--color-orange-dark-2)" />
              <ColorItem span={2} bg="var(--color-orange-light-2)" category="Orange" color="orange-l-2" tc="var(--color-orange-dark-2)" />
              <ColorItem span={2} bg="var(--color-orange-light-2)" category="Orange" color="orange-ref" tc="var(--color-orange-dark-2)" />
            </Grid>
          </Box>

          {/* Red */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Red
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-red-dark-2)" category="Red" color="red-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-red-dark-1)" category="Red" color="red-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-red-main)" category="Red" color="red-main" tc="white" />
              <ColorItem span={2} bg="var(--color-red-light-1)" category="Red" color="red-l-1" tc="var(--color-red-dark-2)" />
              <ColorItem span={2} bg="var(--color-red-light-2)" category="Red" color="red-l-2" tc="var(--color-red-dark-2)" />
              <ColorItem span={2} bg="var(--color-red-light-2)" category="Red" color="red-ref" tc="var(--color-red-dark-2)" />
            </Grid>
          </Box>

          {/* Gray */}
          {/* <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Gry
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-canary-dark-2)" category="Canary" color="canary-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-dark-1)" category="Canary" color="canary-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-main)" category="Canary" color="canary-main" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-light-1)" category="Canary" color="canary-l-1" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-l-2" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-ref" tc="var(--color-canary-dark-2)" />
            </Grid>
          </Box> */}

          {/* Ocean */}
          <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Ocean
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-ocean-dark-2)" category="Ocean" color="ocean-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-ocean-dark-1)" category="Ocean" color="ocean-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-ocean-main)" category="Ocean" color="ocean-main" tc="white" />
              <ColorItem span={2} bg="var(--color-ocean-light-1)" category="Ocean" color="ocean-l-1" tc="var(--color-ocean-dark-2)" />
              <ColorItem span={2} bg="var(--color-ocean-light-2)" category="Ocean" color="ocean-l-2" tc="var(--color-ocean-dark-2)" />
              <ColorItem span={2} bg="var(--color-ocean-light-2)" category="Ocean" color="ocean-ref" tc="var(--color-ocean-dark-2)" />
            </Grid>
          </Box>

          {/* Overlay */}
          {/* <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Canary
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-canary-dark-2)" category="Canary" color="canary-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-dark-1)" category="Canary" color="canary-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-main)" category="Canary" color="canary-main" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-light-1)" category="Canary" color="canary-l-1" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-l-2" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-ref" tc="var(--color-canary-dark-2)" />
            </Grid>
          </Box> */}

          {/* Misc */}
          {/* <Box mb="4rem">
            <Text mb="0.75rem" fw="bold" c="var(--brand-body-dark-2)">
              Canary
            </Text>
            <Grid gutter="lg">
              <ColorItem span={2} bg="var(--color-canary-dark-2)" category="Canary" color="canary-d-2" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-dark-1)" category="Canary" color="canary-d-1" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-main)" category="Canary" color="canary-main" tc="white" />
              <ColorItem span={2} bg="var(--color-canary-light-1)" category="Canary" color="canary-l-1" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-l-2" tc="var(--color-canary-dark-2)" />
              <ColorItem span={2} bg="var(--color-canary-light-2)" category="Canary" color="canary-ref" tc="var(--color-canary-dark-2)" />
            </Grid>
          </Box> */}
        </Content.Area>
      </Content.Section>
    </DefaultLayout>
  );
}

type ColorItemProps = {
  bg?: string;
  bc?: string;
  category?: string;
  color?: string;
  span?: number;
  tc?: string;
};

const ColorItem: React.FC<ColorItemProps> = ({ bg, color, span = 4, tc = "black", category, bc = "white" }) => {
  return (
    <Grid.Col span={span}>
      <Center
        bg={bg}
        p="2.25rem"
        styles={{
          root: {
            borderRadius: "var(--mantine-radius-md)",
            borderWidth: "1px",
            borderColor: bc,
            borderStyle: "solid",
          },
        }}
      >
        <Stack gap={0} align="center">
          <Text size="xxs" c={tc} fw="800" mb="0.25rem">
            {category?.toUpperCase()}
          </Text>
          <Text size="xs" c={tc} fw="500">
            {color}
          </Text>
        </Stack>
      </Center>
    </Grid.Col>
  );
};
