import { Title, Text, Code, Center, Button, Tooltip, Group } from '@good/ui/core';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';

export default function TooltipPage() {
	return (
		<DefaultLayout title='Tooltip' subtitle='Renders tooltip at given element on mouse over or other event'>
			{/* <Content.Header>Header</Content.Header> */}
			<Content.Section title='Tooltip'>
				<Content.Text>
					Typical <Code>Tooltip</Code> usage
				</Content.Text>
				<Content.Area>
					<Tooltip label='Enter the matrix' withArrow>
						<Button>Pick up call</Button>
					</Tooltip>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Tooltip options'>
				<Content.Text>Tooltip can be placed at different positions aroud the target element</Content.Text>

				<Content.Area>
					<Group gap='md'>
						<Tooltip label='Top' position='top' withArrow>
							<Button variant='outline'>Top</Button>
						</Tooltip>
						<Tooltip label='Right' position='right' withArrow>
							<Button variant='outline'>Right</Button>
						</Tooltip>
						<Tooltip label='Bottom' position='bottom' withArrow>
							<Button variant='outline'>Bottom</Button>
						</Tooltip>
						<Tooltip label='Left' position='left' withArrow>
							<Button variant='outline'>Left</Button>
						</Tooltip>
					</Group>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
