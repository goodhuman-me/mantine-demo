import { useState } from 'react';
import { TextInput, Title, Text, Code, Center, Button, Group, Box, Stack } from '@good/ui/core';

import DefaultLayout from '../../layouts/DefaultLayout';
import { Content } from '../../components/Content';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../firebase-app/config';

export default function SSOTestPage() {
	const [login, setLogin] = useState<string>('jirwong@yahoo.com');
	const [password, setPassword] = useState<string>('HappyMoonHunts761!');
	const [messages, setMessages] = useState<string[]>([]);

	async function doLogin() {
		const auth = getAuth(firebaseApp);
		try {
			const res = await signInWithEmailAndPassword(auth, login, password);
			// console.log(res.user.email);
			appendMessage(`Logged in as ${res.user.email}`);
		} catch (error) {
			appendMessage((error as Error).message);
		}
	}

	function appendMessage(message: string) {
		setMessages([...messages, message]);
	}

	return (
		<DefaultLayout title='SSO test' subtitle='SSO test page'>
			<Content.Section>
				<Box>
					<Content.Header>Login right here</Content.Header>

					<TextInput
						onChange={(event) => setLogin(event.currentTarget.value)}
						value={login}
						size='md'
						placeholder='Email...'
						mb='0.5rem'
						style={{ width: '300px' }}
					/>
					<TextInput
						onChange={(event) => setPassword(event.currentTarget.value)}
						value={password}
						size='md'
						placeholder='Password...'
						mb='lg'
						style={{ width: '300px' }}
					/>
					<Button onClick={doLogin}>Log me in</Button>
				</Box>
			</Content.Section>

			<Box mt='lg' mb='lg'>
				<Content.Header>Status</Content.Header>
				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						Utilities
					</Text>

					<Group>
						{/* <Button onClick={() => appendMessage('test')}>Append message</Button> */}
						{/* sdsdf */}
					</Group>
				</Box>

				<Stack p='lg' bg='gray.1' className='rounded-xl'>
					{messages.map((message) => (
						<Text size='0.9rem'>{message}</Text>
					))}
				</Stack>
			</Box>
		</DefaultLayout>
	);
}
