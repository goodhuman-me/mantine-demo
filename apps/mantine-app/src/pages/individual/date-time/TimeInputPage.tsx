import { Title, Text, Code, Center, Stack, Box } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';
import { TimeInput } from '@good/ui/dates';

export default function TimeInputPage() {
	return (
		<DefaultLayout title='TimeInput' subtitle='Time input'>
			{/* <Content.Header>Header</Content.Header> */}
			<Content.Section title='Typical'>
				<Content.Text>
					Typical <Code>TimeInput</Code>usage
				</Content.Text>
				<Content.Area>
					<TimeInput
						label='When would you like to hold your rock concert?'
						description='The rock gods will be pleased.'
						style={{ width: '600px' }}
					/>
				</Content.Area>
			</Content.Section>

			{/* <Content.Section title="MonthPickerInput options">
        <Content.Text>
          <Code>MonthPickerInput</Code> with error
        </Content.Text>
        <Content.Area>
          <Stack gap="xl">
            <Box>
              <Text mb="sm">Multi select</Text>
              <TimeInput
                placeholder="Select your month"
                label="Actually, we might not be able to make it on that month; choose a few just in case."
                description="To be safe yeah."
                type="multiple"
                style={{ width: "600px" }}
              />
            </Box>
            <Box>
              <Text mb="sm">Select by range</Text>
              <TimeInput
                placeholder="Select your month"
                label="You know, just in case your rock concert is a multi-month event."
                description="Who knows, maybe you're a rock god."
                type="range"
                style={{ width: "600px" }}
              />
            </Box>
          </Stack>
        </Content.Area>
      </Content.Section> */}

			<Content.Section title='Sizes'>
				<Content.Text>
					Various <Code>TimePickerInput</Code> sizes
				</Content.Text>
				<Content.Area>
					<Stack gap='lg'>
						<TimeInput size='xs' label='x-small' style={{ width: '400px' }} />
						<TimeInput size='sm' label='small' style={{ width: '400px' }} />
						<TimeInput size='md' label='medium' style={{ width: '400px' }} />
						<TimeInput size='lg' label='large' style={{ width: '400px' }} />
						<TimeInput size='xl' label='x-large' style={{ width: '400px' }} />
					</Stack>
				</Content.Area>
			</Content.Section>

			<Content.Section title='States'>
				<Content.Text>
					<Code>TimePickerInput</Code> states
				</Content.Text>

				<Content.Area>
					<Stack gap='xl'>
						<Box>
							<Text mb='sm'>Error</Text>
							<TimeInput label='Oh no! Something went wrong' error style={{ width: '400px' }} />
						</Box>
						<Box>
							<Text mb='sm'>Disabled</Text>
							<TimeInput label="MC Hammer's comeback tour" disabled style={{ width: '400px' }} />
						</Box>
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
