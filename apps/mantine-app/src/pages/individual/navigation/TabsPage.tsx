import { Title, Text, Code, Center, Tabs, Box, Stack } from '@good/ui/core';
import { CodeHighlight } from '@good/ui/code-highlight';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { Content } from '../../../components/Content';

export default function TabsPage() {
	return (
		<DefaultLayout title='Tabs navigator' subtitle='Switch between different views'>
			<Content.Section title='Tabs'>
				<Content.Text>
					Typical <Code>Tabs</Code> usage
				</Content.Text>
				<Content.Area>
					<Tabs defaultValue='all-items'>
						<Tabs.List>
							<Tabs.Tab value='all-items'>All items</Tabs.Tab>
							<Tabs.Tab value='currency'>Currency</Tabs.Tab>
							<Tabs.Tab value='gems'>Gems</Tabs.Tab>
							<Tabs.Tab value='maps'>Maps</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value='all-items' p='xl' bg='var(--color-gray-light-3)'>
							<CodeHighlight code='const items: Things[] = [];' bg='var(--color-gray-light-3)' />
						</Tabs.Panel>

						<Tabs.Panel value='currency' p='xl' bg='var(--color-gray-light-3)'>
							<CodeHighlight code='const currencies: IOweYou[] = [];' bg='var(--color-gray-light-3)' />
						</Tabs.Panel>

						<Tabs.Panel value='gems' p='xl' bg='var(--color-gray-light-3)'>
							<CodeHighlight code='const gems: Stone[] = [];' bg='var(--color-gray-light-3)' />
						</Tabs.Panel>

						<Tabs.Panel value='maps' p='xl' bg='var(--color-gray-light-3)'>
							<CodeHighlight code='const maps: Paper[] = [];' bg='var(--color-gray-light-3)' />
						</Tabs.Panel>
					</Tabs>
				</Content.Area>
			</Content.Section>

			<Content.Section title='Tabs Variants'>
				<Content.Text>
					Different <Code>Tabs</Code> variants
				</Content.Text>

				<Content.Area>
					<Stack gap='xl'>
						<Box>
							<Text mb='sm'>
								<Code>default</Code> variant
							</Text>
							<Tabs defaultValue='apples' variant='default'>
								<Tabs.List>
									<Tabs.Tab value='apples'>Apples</Tabs.Tab>
									<Tabs.Tab value='oranges'>Oranges</Tabs.Tab>
									<Tabs.Tab value='bananas'>Bananas</Tabs.Tab>
								</Tabs.List>

								<Tabs.Panel value='apples' className='border-r border-l border-b border-t-0 border-solid border-gray-200'>
									<Box p='lg'>
										<CodeHighlight code='const apples: Fruit[] = [];' bg='white' />
									</Box>
								</Tabs.Panel>
							</Tabs>
						</Box>

						<Box>
							<Text mb='sm'>
								<Code>outline</Code> variant
							</Text>
							<Tabs defaultValue='apples' variant='outline'>
								<Tabs.List>
									<Tabs.Tab value='apples'>Apples</Tabs.Tab>
									<Tabs.Tab value='oranges'>Oranges</Tabs.Tab>
									<Tabs.Tab value='bananas'>Bananas</Tabs.Tab>
								</Tabs.List>

								<Tabs.Panel value='apples' className='border-r border-l border-b border-t-0 border-solid border-gray-200'>
									<Box p='lg'>
										<CodeHighlight code='const apples: Fruit[] = [];' bg='white' />
									</Box>
								</Tabs.Panel>
							</Tabs>
						</Box>

						<Box>
							<Text mb='sm'>
								<Code>pills</Code> variant
							</Text>
							<Tabs defaultValue='apples' variant='pills'>
								<Tabs.List>
									<Tabs.Tab value='apples'>Apples</Tabs.Tab>
									<Tabs.Tab value='oranges'>Oranges</Tabs.Tab>
									<Tabs.Tab value='bananas'>Bananas</Tabs.Tab>
								</Tabs.List>

								<Tabs.Panel value='apples' className='border border-solid border-gray-200' mt='lg'>
									<Box p='lg'>
										<CodeHighlight code='const apples: Fruit[] = [];' bg='white' />
									</Box>
								</Tabs.Panel>
							</Tabs>
						</Box>
					</Stack>
				</Content.Area>
			</Content.Section>
		</DefaultLayout>
	);
}
