import { useEffect, useState } from 'react';
import { TextInput, Title, Text, Code, Center, Button, Group, Box, Stack } from '@good/ui/core';

import { getAuth, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';

import DefaultLayout from '../../layouts/DefaultLayout';
import { Content } from '../../components/Content';

import { firebaseApp, samlProvider } from '../../firebase-app/config';

export default function SSOTestPage() {
	const [email, setEmail] = useState<string>('jirwong@yahoo.com');
	const [password, setPassword] = useState<string>('HappyMoonHunts761!');
	const [messages, setMessages] = useState<string[]>([]);

	const auth = getAuth(firebaseApp);

	async function loginWithFirebase() {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			// console.log(res.user.email);
			appendMessage(`Logged in as ${res.user.email}`);
		} catch (error) {
			appendMessage((error as Error).message);
		}
	}

	async function loginWithSAML() {
		signInWithRedirect(auth, samlProvider);
	}

	function appendMessage(message: string) {
		setMessages([...messages, message]);
	}

	async function displayRedirectStatus() {
		const result = await getRedirectResult(auth);
		console.log(result);
	}

	useEffect(() => {
		displayRedirectStatus();
	});

	return (
		<DefaultLayout title='SSO test' subtitle='SSO test page'>
			<Content.Section>
				<Box>
					<Content.Header>Login right here</Content.Header>

					<TextInput
						onChange={(event) => setEmail(event.currentTarget.value)}
						value={email}
						size='md'
						placeholder='Email...'
						mb='0.5rem'
						style={{ width: '368px' }}
					/>
					<TextInput
						onChange={(event) => setPassword(event.currentTarget.value)}
						value={password}
						size='md'
						placeholder='Password...'
						mb='lg'
						style={{ width: '368px' }}
					/>
					<Group>
						<Button onClick={loginWithFirebase}>Login with Firebase</Button>
						<Button onClick={loginWithSAML}>Login with Jumpcloud</Button>
					</Group>
				</Box>
			</Content.Section>

			<Box mt='lg' mb='lg'>
				<Content.Header>Status</Content.Header>
				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						Utilities
					</Text>

					<Group>
						<Button onClick={displayRedirectStatus} variant='outline'>
							Show redirect status
						</Button>
						{/* sdsdf */}
					</Group>
				</Box>

				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						SAML login status
					</Text>
					<Box p='lg' bg='blue.0' className='rounded-xl'>
						<Text size='0.9rem' c='gray.6'>
							Checking status...
						</Text>
					</Box>
				</Box>

				<Text fw='bold' size='lg' mb='lg'>
					Messages
				</Text>
				<Stack p='lg' bg='gray.1' className='rounded-xl'>
					{messages.length === 0 && (
						<Text size='0.9rem' c='gray.6'>
							Nothing yet
						</Text>
					)}

					{messages.map((message, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Text size='0.9rem' key={index}>
							{message}
						</Text>
					))}
				</Stack>
			</Box>
		</DefaultLayout>
	);
}
