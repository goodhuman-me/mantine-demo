import { Code, Select, Stack } from '@good/ui/core';
import { Content } from '../../../components/Content';
import DefaultLayout from '../../../layouts/DefaultLayout';

//  TODO
const SelectPage: React.FunctionComponent = () => {
	return (
		<DefaultLayout title='Select field' subtitle='Input field with multiple selectable values'>
			<Content.Header>Basic select field (WIP)</Content.Header>
			<Content.Section title='Section header'>
				<Content.Text>Section textInvidunt no dolores accusam gubergren et sea, erat.</Content.Text>

				<Content.Area>
					<Stack>
						<Select
							label='What do you think of the NBA Finals Game 3?'
							description='Let us know what you think!'
							data={[
								{ value: '1', label: 'Hall of fame!' },
								{ value: '2', label: 'I loved it.' },
								{ value: '3', label: 'It was alright.' },
								{ value: '4', label: "Meh, I've seen better." },
								{ value: '5', label: 'I fell asleep.' },
							]}
						/>
						<Select
							label="Who's the MVP for NBA Season 2022/2023?"
							description='Let us know what you think!'
							data={[
								{ value: '1', label: 'Stephen Curry' },
								{ value: '2', label: 'Lebron James' },
								{ value: '3', label: 'James Harden' },
								{ value: '4', label: 'Jovic Nikola' },
								{ value: '5', label: 'Kevin Durant' },
							]}
						/>
					</Stack>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Sizes'>
				<Content.Text>
					Various sizes for <Code>Select</Code> component
				</Content.Text>
				<Content.Area>
					<Stack gap='md' align='flex-start'>
						<Select
							label='x-small'
							placeholder='x-small size'
							data={[{ value: 'item-1', label: 'Item 1' }]}
							size='xs'
							style={{ width: '320px' }}
						/>
						<Select
							label='small'
							placeholder='small size'
							data={[{ value: 'item-1', label: 'Item 1' }]}
							size='sm'
							style={{ width: '320px' }}
						/>
						<Select
							label='medium'
							placeholder='medium size'
							data={[{ value: 'item-1', label: 'Item 1' }]}
							size='md'
							style={{ width: '320px' }}
						/>
						<Select
							label='large'
							placeholder='large size'
							data={[{ value: 'item-1', label: 'Item 1' }]}
							size='lg'
							style={{ width: '320px' }}
						/>
						<Select
							label='x-large'
							placeholder='x-large size'
							data={[{ value: 'item-1', label: 'Item 1' }]}
							size='xl'
							style={{ width: '320px' }}
						/>
					</Stack>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Various states'>
				<Content.Text>
					Various states for <Code>Select</Code> component
				</Content.Text>
				<Content.Area>
					<Stack gap='lg'>
						<Select label='Error state' placeholder="Something's gone wrong!" data={[{ value: 'item-1', label: 'Item 1' }]} error />
						<Select label='Disabled state' data={[{ value: 'item-1', label: 'Item 1' }]} disabled />
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
};

export default SelectPage;
