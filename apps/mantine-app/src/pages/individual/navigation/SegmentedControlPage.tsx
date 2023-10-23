import { Title, Text, Code, SegmentedControl, Stack, Center } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';
import { BrandNeteaseMusic, GuitarPick, Mailbox, Music } from 'tabler-icons-react';

export default function SegmentedControlPage() {
	return (
		<DefaultLayout title='Segmented control' subtitle='A linear set of two or more segments'>
			<Content.Section title='Segmented control'>
				<Content.Text>
					Default <Code>Segmented Control</Code>
				</Content.Text>
				<Content.Area>
					<SegmentedControl data={['Inbox', 'Sent', 'Draft', 'Deleted']} />
				</Content.Area>
			</Content.Section>
			<Content.Section title='Sizes'>
				<Content.Text>
					Various sizes for <Code>Segmented Control</Code>
				</Content.Text>
				<Content.Area>
					<Stack align='flex-start'>
						<Title order={5}>x-small</Title>
						<SegmentedControl data={['Guitars', 'Drums', 'Keyboards', 'Mixers']} size='xs' />

						<Title order={5}>small</Title>
						<SegmentedControl data={['Guitars', 'Drums', 'Keyboards', 'Mixers']} size='sm' />

						<Title order={5}>medium</Title>
						<SegmentedControl data={['Guitars', 'Drums', 'Keyboards', 'Mixers']} size='md' />

						<Title order={5}>large</Title>
						<SegmentedControl data={['Guitars', 'Drums', 'Keyboards', 'Mixers']} size='lg' />

						<Title order={5}>x-large</Title>
						<SegmentedControl data={['Guitars', 'Drums', 'Keyboards', 'Mixers']} size='xl' />
					</Stack>
				</Content.Area>
			</Content.Section>
			<Content.Section title='States'>
				<Content.Text>
					Different states for <Code>Segmented Control</Code>
				</Content.Text>
				<Content.Area>
					<Stack align='flex-start'>
						<Title order={5}>Disabled</Title>
						<SegmentedControl data={['Distortion', 'Chorus', 'Delay', 'Reverb']} disabled />
					</Stack>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Controls with icons'>
				<Content.Text>
					Custom rendering/icons for <Code>Segmented Control</Code>
				</Content.Text>
				<Content.Area>
					<Stack align='flex-start'>
						<SegmentedControl
							data={[
								{
									value: 'guitar',
									label: (
										<Center>
											<GuitarPick /> <Text ml='8px'>Guitar</Text>
										</Center>
									),
								},
								{
									value: 'piano',
									label: (
										<Center>
											<Music /> <Text ml='8px'>Piano</Text>
										</Center>
									),
								},
								{
									value: 'netease',
									label: (
										<Center>
											<BrandNeteaseMusic /> <Text ml='8px'>Netease</Text>{' '}
										</Center>
									),
								},
							]}
						/>
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
