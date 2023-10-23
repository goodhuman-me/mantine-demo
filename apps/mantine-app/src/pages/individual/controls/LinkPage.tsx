import { Title, Text, Code, Center, Anchor, Stack, Button } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';

export default function LinkPage() {
	return (
		<DefaultLayout title='Links' subtitle='Things that navigate you away'>
			{/* <Content.Header>Header</Content.Header> */}
			<Content.Section title='Links (known as Anchor in Mantine)'>
				<Content.Text>
					Typical <Code>Anchor</Code> usage
				</Content.Text>
				<Content.Area>
					<Stack gap='xs'>
						<Text>
							Congratulations! You're in the running to win a brand new <b>Tesla Model S</b>.
						</Text>
						<Anchor variant='accent' href='https://www.nyan.cat/' target='_blank'>
							Tell me more!
						</Anchor>
						<Anchor variant='accent' href='https://yourethemannowdog.ytmnd.com/' target='_blank'>
							Not interested, I don't like Elon
						</Anchor>
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
