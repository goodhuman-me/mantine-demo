import { Title, Text, Code, Center } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';

export default function AlertHeroPage() {
	return (
		<DefaultLayout title='Alert hero' subtitle='Alert hero'>
			<Content.Section title='Alert here'>
				<Content.Text>Typical Alert Hero usage</Content.Text>
				<Content.Area>
					<Content.Text>
						To be imported from <Code>@good/components</Code>
					</Content.Text>
					<Center bg='gray.0' p='3rem' style={{ borderRadius: '1rem' }}>
						<Text fz='lg' c='gray.6'>
							🚧&nbsp;&nbsp;&nbsp;Coming soon&nbsp;&nbsp;&nbsp;🚧
						</Text>
					</Center>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
