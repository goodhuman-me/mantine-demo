import { Stack, TextInput, ThemeIcon } from '@good/ui/core';
import { CurrencyDollarAustralian, Mail, MailOff } from 'tabler-icons-react';
import { Content } from '../../../components/Content';
import DefaultLayout from '../../../layouts/DefaultLayout';

export default function TextInputPage() {
	return (
		<DefaultLayout title='TextInput' subtitle='Boxes for you to enter text'>
			<Content.Header>Basic Text field</Content.Header>
			<Content.Section>
				<Content.Text>Est sea aliquyam sea sit.</Content.Text>
				<Stack gap='lg'>
					<TextInput label='Favorite color' description='What is your favorite color?' placeholder='Enter color here...' />
					<TextInput label='Spirit animal' description='What is your spirit animal?' placeholder='Describe your spirit animal...' />
				</Stack>
			</Content.Section>

			<Content.Header>Sizes</Content.Header>

			<Content.Section>
				<Content.Text>Est sea aliquyam sea sit.</Content.Text>
				<Stack align='flex-start' gap='xl'>
					<TextInput
						label='TextField label (xs)'
						// description="Support"
						placeholder='How many wood can a woodchuck chuck?'
						size='xs'
						style={{ width: '400px' }}
					/>
					<TextInput
						label='TextField label (sm)'
						// description="TextField description"
						placeholder='How many wood can a woodchuck chuck?'
						size='sm'
						style={{ width: '400px' }}
					/>
					<TextInput
						label='TextField label (md)'
						// description="TextField description"
						placeholder='How many wood can a woodchuck chuck?'
						size='md'
						style={{ width: '400px' }}
					/>
					<TextInput
						label='TextField label (lg)'
						// description="TextField description"
						placeholder='How many wood can a woodchuck chuck?'
						size='lg'
						style={{ width: '400px' }}
					/>
				</Stack>
			</Content.Section>

			<Content.Header>Various states</Content.Header>
			<Content.Section>
				<Content.Text>Est sea aliquyam sea sit.</Content.Text>
				<Stack align='flex-start' gap='xl'>
					<TextInput label='Error state' placeholder='This TextField contains errors' style={{ width: '400px' }} error />
					<TextInput label='Disabled state' placeholder='This TextField is disabled.' style={{ width: '400px' }} disabled />
				</Stack>
			</Content.Section>

			<Content.Header>Icons</Content.Header>

			<Content.Section>
				<Content.Text>Est sea aliquyam sea sit.</Content.Text>
				<Stack align='flex-start' gap='xs'>
					<TextInput
						label='Left icon'
						placeholder='TextField placeholder text'
						style={{ width: '400px' }}
						leftSection={
							<ThemeIcon size='sm' variant='transparent' color='gray'>
								<CurrencyDollarAustralian />
							</ThemeIcon>
						}
					/>
					<TextInput
						placeholder='TextField placeholder text'
						style={{ width: '400px' }}
						leftSection={
							<ThemeIcon size='md' variant='gradient' gradient={{ from: 'green', to: 'blue' }}>
								<Mail />
							</ThemeIcon>
						}
					/>
					<TextInput
						label='Right icon'
						placeholder='TextField placeholder text'
						style={{ width: '400px' }}
						rightSection={
							<ThemeIcon size='md' variant='transparent' color='cyan'>
								<MailOff />
							</ThemeIcon>
						}
					/>
				</Stack>
			</Content.Section>
		</DefaultLayout>
	);
}
