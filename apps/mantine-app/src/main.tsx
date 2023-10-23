import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@good/ui/core';
import { Notifications } from '@good/ui/notifications';
import { DatesProvider } from '@good/ui/dates';

import { router } from './routes/router.tsx';
import { theme } from './themes/theme.ts';

import '@good/ui/core/styles.css';
import '@good/ui/dates/styles.css';
import '@good/ui/notifications/styles.css';
import '@good/ui/code-highlight/styles.css';

import './index.css';

import { goodTheme } from '@good/ui';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider theme={goodTheme}>
			<Notifications position='top-right' limit={5} />
			<DatesProvider
				settings={{
					locale: 'en-AU',
					firstDayOfWeek: 1,
					weekendDays: [0, 6],
				}}
			>
				<RouterProvider router={router} />
			</DatesProvider>
		</MantineProvider>
	</React.StrictMode>,
);
