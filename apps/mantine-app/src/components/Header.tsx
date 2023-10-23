import { Anchor, Box, Container, Group, ThemeIcon, Title, Text } from '@good/ui/core';
import { Components, Link } from 'tabler-icons-react';

type HeaderContainerProps = {
	title?: string;
	subtitle?: string;
	headerSize?: string;
};

export default function HeaderContainer({ title, subtitle, headerSize = 'md' }: HeaderContainerProps) {
	return (
		<Container className='border-gray-200 border-solid border-0 border-b px-0' size={headerSize}>
			<Container size={headerSize} p='xl'>
				<Group align='center' gap={'0.1rem'} className={subtitle && 'mb-3'}>
					<ThemeIcon variant='filled' mr='xs' color='var(--brand-accent-main)'>
						<Components />
					</ThemeIcon>
					<Title order={1} c='var(--brand-body-dark-2)'>
						{title}
					</Title>
				</Group>

				{subtitle && (
					<Title order={3} fw='normal' c='var(--brand-body-dark-1)' mb='0'>
						{subtitle}
					</Title>
				)}

				{/* <Box>
          <Text>
            Full documentation at <Anchor href="https://v7.mantine.dev/core/button">https://v7.mantine.dev/core/button</Anchor>
          </Text>
        </Box> */}
			</Container>
		</Container>
	);
}
