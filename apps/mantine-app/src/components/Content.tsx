import { Box, Divider, MantineSize, MantineSpacing, Stack, StyleProp, Text, Title, TitleOrder } from '@good/ui/core';
import { PropsWithChildren, ReactNode } from 'react';

type ContentSectionProps = PropsWithChildren<{
	title?: string | ReactNode;
	titleOrder?: TitleOrder;
	divider?: boolean;
	mb?: StyleProp<MantineSpacing>;
	stackGap?: MantineSize | string | undefined;
}>;

const ContentSection = ({
	title,
	titleOrder = 3,
	children,
	divider: hasDivider = true,
	mb = 'xl',
	stackGap = 'md',
}: ContentSectionProps) => (
	<Stack gap={stackGap} mb={mb}>
		{title && (
			<Title c='var(--brand-body-dark-2)' order={titleOrder}>
				{title}
			</Title>
		)}
		{children}
		{hasDivider && <Divider mt='lg' />}
	</Stack>
);

const ContentHeader = ({ order = 2, children }: PropsWithChildren<{ order?: TitleOrder }>) => (
	<Box mb='lg'>
		<Title order={order}>{children}</Title>
	</Box>
);

const ContentText = ({ fw = 'normal', children }: PropsWithChildren<{ fw?: string }>) => (
	<Text c='var(--brand-body-dark-2)' fw={fw}>
		{children}
	</Text>
);

const ContentArea = (props: PropsWithChildren<{ mb?: StyleProp<MantineSpacing> }>) => (
	<Box mt='xs' mb={props.mb}>
		{props.children}
	</Box>
);

export const Content = {
	Header: ContentHeader,
	Section: ContentSection,
	Text: ContentText,
	Area: ContentArea,
};
