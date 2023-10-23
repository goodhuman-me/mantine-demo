import { Title, Text, Autocomplete, Stack, Code } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';

export default function AutocompletePage() {
	return (
		<DefaultLayout title='Autocomplete field' subtitle='Field that auto completes'>
			<Content.Section title='Typical autocomplete field usage'>
				<Content.Text>
					<Code>Autocomplete</Code> field with autocomplete features
				</Content.Text>
				<Content.Area>
					<Autocomplete
						label="What's your favorite song from Nirvana?"
						description='Let us know what you think!'
						placeholder='Pick a value or type to search'
						data={[
							{ value: 'Smells Like Teen Spirit', label: 'Smells Like Teen Spirit' },
							{ value: 'Come As You Are', label: 'Come As You Are' },
							{ value: 'Lithium', label: 'Lithium' },
							{ value: 'In Bloom', label: 'In Bloom' },
							{ value: 'Heart-Shaped Box', label: 'Heart-Shaped Box' },
						]}
					/>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Sizes'>
				<Content.Text>
					Available sizes for <Code>Autocomplete</Code> <br />
					<i>Not all sizes are found in the design system, shown here for reference.</i>
				</Content.Text>

				<Content.Area>
					<Stack gap='lg'>
						<Autocomplete size='xs' label='x-small' placeholder='Pick a value' data={['Chocobo']} />
						<Autocomplete size='sm' label='small' placeholder='Pick a value' data={['Chocobo']} />
						<Autocomplete size='md' label='medium' placeholder='Pick a value' data={['Chocobo']} />
						<Autocomplete size='lg' label='large' placeholder='Pick a value' data={['Chocobo']} />
						<Autocomplete size='xl' label='x-large' placeholder='Pick a value' data={['Chocobo']} />
					</Stack>
				</Content.Area>
			</Content.Section>

			<Content.Section title='States'>
				<Content.Text>
					Various states for <Code>Autocomplete</Code>
				</Content.Text>
				<Content.Area>
					<Stack gap='lg'>
						<Autocomplete label='Error' placeholder='Pick a value' data={['Chocobo']} error />
						<Autocomplete label='Disabled' placeholder='Pick a value' data={['Chocobo']} disabled />
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
