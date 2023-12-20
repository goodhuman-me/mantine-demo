import { Link, Outlet } from 'react-router-dom';
import { router } from './routes/router';

import { AppShell, Box, Burger, Code, Group, NavLink, Space, Stack, ThemeIcon, Title } from '@good/ui/core';
import { useDisclosure } from '@good/ui/hooks';

import {
	AlertCircle,
	AlphabetLatin,
	Barbell,
	BoxModel2,
	CalendarPlus,
	ChevronRight,
	CircleCheck,
	CircleDot,
	Click,
	ColorFilter,
	Components,
	EditCircle,
	FileSearch,
	Filter,
	Forms,
	GripHorizontal,
	GripVertical,
	Icon,
	InputSearch,
	Link as LinkIcon,
	Notification,
	SourceCode,
	StackPop,
	Tag,
	Target,
	TextCaption,
	Tooltip,
	Webhook,
} from 'tabler-icons-react';

function App() {
	const [opened, { toggle }] = useDisclosure(true);

	// @ts-expect-error -- quiet, you
	const routes = router?.routes[0]?.children.filter((route) => route.path !== '/') as { path: string }[];

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { desktop: !opened, mobile: !opened },
			}}
		>
			<AppShell.Header>
				<Group p='sm' gap={'xs'}>
					<Burger opened={opened} onClick={toggle} />

					<Group gap='xs'>
						<SourceCode className='text-gray-400' size={'1.5rem'} />
						<Title order={4}>
							<Code>@good/mantine</Code> <span className='font-normal text-gray-700'>components</span>
						</Title>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar style={{ overflowY: 'auto' }}>
				<NavMenu />
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavMenu = () => (
	<Stack mt='md' gap='md'>
		<Box>
			<NavHeader title='Home' />
			<NavLinkWithIcon label='Home' to='/' />
			<NavLinkWithIcon label='Components progress' to='components-progress' SideIcon={Webhook} />
			<NavLinkWithIcon label='SSO test' to='/sso-test' />
		</Box>

		<Box>
			<NavHeader title='Bookings' />
			<NavLinkWithIcon label='Create bookings' to='bookings/create-booking' SideIcon={Click} />
		</Box>

		<Box>
			<NavHeader title='Buttons' />
			<NavLinkWithIcon label='Buttons' to='buttons' SideIcon={Click} />
		</Box>

		<Box>
			<NavHeader title='Inputs' />
			<NavLinkWithIcon label='Text input' to='text-input' SideIcon={Forms} />
			<NavLinkWithIcon label='Select' to='select' SideIcon={Forms} />
			<NavLinkWithIcon label='Autocomplete' to='autocomplete' SideIcon={Forms} />
			<NavLinkWithIcon label='MultiSelect' to='multiselect' SideIcon={Forms} />
			<NavLinkWithIcon label='TagsInput' to='tags-input' SideIcon={Forms} />
		</Box>

		<Box>
			<NavHeader title='Controls' />
			<NavLinkWithIcon label='Checkbox' to='checkbox' SideIcon={CircleCheck} />
			<NavLinkWithIcon label='Dropdown menu' to='dropdown-menu' SideIcon={EditCircle} />
			<NavLinkWithIcon label='Filter' to='filter' SideIcon={Filter} />
			<NavLinkWithIcon label='Label' to='label' SideIcon={Tag} />
			<NavLinkWithIcon label='Link' to='link' SideIcon={LinkIcon} />
			<NavLinkWithIcon label='Progress Bar' to='progress-bar' SideIcon={Barbell} />
			<NavLinkWithIcon label='Radio' to='radio' SideIcon={CircleDot} />
			<NavLinkWithIcon label='Search File' to='search-file' SideIcon={FileSearch} />
			<NavLinkWithIcon label='Search General' to='search-general' SideIcon={InputSearch} />
		</Box>

		<Box>
			<NavHeader title='Popovers & modals' />
			<NavLinkWithIcon label='Drawer' to='drawer' SideIcon={EditCircle} />
			<NavLinkWithIcon label='Modal' to='modal' SideIcon={Target} />
			<NavLinkWithIcon label='Popover' to='popover' SideIcon={StackPop} />
			<NavLinkWithIcon label='Tooltip' to='tooltip' SideIcon={Tooltip} />
		</Box>

		<Box>
			<NavHeader title='Navigation' />
			<NavLinkWithIcon label='Breadcrumbs' to='breadcrumbs' SideIcon={EditCircle} />
			<NavLinkWithIcon label='Pagination' to='pagination' SideIcon={EditCircle} />
			<NavLinkWithIcon label='Segmented Control' to='segmented-control' SideIcon={EditCircle} />
			<NavLinkWithIcon label='Steps Horizontal' to='steps-horizontal' SideIcon={GripHorizontal} />
			<NavLinkWithIcon label='Tabs' to='tabs' SideIcon={EditCircle} />
		</Box>

		<Box>
			<NavHeader title='Date/time' />
			<NavLinkWithIcon label='Calendar' to='calendar' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='DateInput' to='dateinput' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='DateTimePicker' to='datetime-picker' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='DatePicker' to='date-picker' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='DatePickerInput' to='date-picker-input' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='MonthPicker' to='month-picker' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='MonthPickerInput' to='month-picker-input' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='YearPicker' to='year-picker' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='YearPickerInput' to='year-picker-input' SideIcon={CalendarPlus} />
			<NavLinkWithIcon label='TimeInput' to='time-input' SideIcon={CalendarPlus} />
		</Box>

		<Box>
			<NavHeader title='Alerts' />
			<NavLinkWithIcon label='Alert Hero' to='alert-hero' SideIcon={AlertCircle} />
			<NavLinkWithIcon label='Alert Inline' to='alert-inline' SideIcon={AlertCircle} />
			<NavLinkWithIcon label='Alert Toast' to='alert-toast' SideIcon={AlertCircle} />
		</Box>

		<Box>
			<NavHeader title='Others' />
			<NavLinkWithIcon label='Colors' to='colors' SideIcon={ColorFilter} />
			<NavLinkWithIcon label='Typography' to='typography' SideIcon={AlphabetLatin} />
			<NavLinkWithIcon label='Notifications' to='notifications' SideIcon={Notification} />
			<NavLinkWithIcon label='Other styles' to='other-styles' SideIcon={BoxModel2} />
			<Space h='xl' />
			<NavLinkWithIcon label='Sample layout' to='sample-layout' SideIcon={Webhook} />
			<NavLinkWithIcon label='Test page' to='temp-test' SideIcon={Webhook} />
			<NavLinkWithIcon label='Components progress' to='components-progress' SideIcon={Webhook} />
		</Box>
	</Stack>
);

const NavHeader = (props: { title: string }) => (
	<Box px='xs' pb='xs'>
		<Title order={5}>{props.title}</Title>
	</Box>
);

const NavLinkWithIcon = ({ to, label, SideIcon = Components }: { label: string; to: string; SideIcon?: Icon }) => (
	<Link to={to}>
		<NavLink
			leftSection={
				<ThemeIcon variant='transparent' size='sm' color='gray'>
					<SideIcon />
				</ThemeIcon>
			}
			rightSection={
				<ThemeIcon variant='transparent' size='sm' color='gray'>
					<ChevronRight />
				</ThemeIcon>
			}
			label={label}
			p='0.3rem'
			component={'button'}
		/>
	</Link>
);
