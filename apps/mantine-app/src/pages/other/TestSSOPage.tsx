import { useEffect, useState } from 'react';
import { TextInput, Text, Button, Group, Box, Stack, Divider, Grid, CopyButton, ButtonGroup } from '@good/ui/core';

import { User, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';

import DefaultLayout from '../../layouts/DefaultLayout';
import { Content } from '../../components/Content';

import { entraIdProvider, firebaseAuth, jumpCloudProvider } from '../../firebase-app/config';

const Row = ({ name, value }: { name: string; value?: string | null }) => (
	<Grid>
		<Grid.Col span={2}>{name}</Grid.Col>
		<Grid.Col span={10}>{value}</Grid.Col>
	</Grid>
);

export default function SSOTestPage() {
	const [email, setEmail] = useState<string>('jirwong@yahoo.com');
	const [password, setPassword] = useState<string>('HappyMoonHunts761!');
	const [messages, setMessages] = useState<string[]>([]);
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [idToken, setIdToken] = useState<string | undefined>('');

	// const auth = getAuth(firebaseApp);
	firebaseAuth.onAuthStateChanged(async (user) => {
		setCurrentUser(user);
		const idToken = await user?.getIdToken();
		setIdToken(idToken);

		if (user) {
			setCurrentUser(user);
			const idToken = await user?.getIdToken();
			setIdToken(idToken);
		}
	});

	async function loginWithFirebase() {
		try {
			const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
			appendMessage(`Logged in as ${res.user.email}`);
			console.log(JSON.stringify(res));
		} catch (error) {
			appendMessage((error as Error).message);
		}
	}

	async function loginWithJumpCloud() {
		signInWithRedirect(firebaseAuth, jumpCloudProvider);
	}

	async function loginWithEntraId() {
		signInWithRedirect(firebaseAuth, entraIdProvider);
	}

	function appendMessage(message: string) {
		setMessages([...messages, message]);
	}

	async function displayRedirectStatus() {
		const result = await getRedirectResult(firebaseAuth);
		console.log(JSON.stringify(result));
	}

	async function displayCurrentUser() {
		console.dir(firebaseAuth.currentUser);
		// console.log(JSON.stringify(firebaseAuth.currentUser));
	}

	async function logoutUser() {
		const res = await firebaseAuth.signOut();
		console.log(res);
	}

	useEffect(() => {
		// displayRedirectStatus();
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
						<Button onClick={loginWithJumpCloud}>Login with Jumpcloud</Button>
						<Button onClick={loginWithEntraId}>Login with EntraID</Button>
					</Group>
				</Box>
			</Content.Section>

			<Box mt='lg' mb='lg'>
				<Content.Header>Login information</Content.Header>

				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						Login status
					</Text>
					<Stack gap='0.2rem'>
						<Row name='Am I logged in?' value={currentUser !== null ? '✅ Yes' : '❌ No'} />
						<Row name='uid' value={currentUser?.uid} />
						<Row name='Display name' value={currentUser?.displayName} />
						<Row name='Email' value={currentUser?.email} />
						<Row name='Is anonymous?' value={currentUser?.isAnonymous.toString()} />
					</Stack>
				</Box>

				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						Utilities
					</Text>

					<Group>
						<Button onClick={displayRedirectStatus} variant='outline'>
							Show redirect status
						</Button>
						<Button onClick={displayCurrentUser} variant='outline'>
							Get current user
						</Button>
						<Button onClick={logoutUser} variant='outline'>
							Logout user
						</Button>
					</Group>
				</Box>

				<Box mb='xl'>
					<Text fw='bold' size='lg' mb='lg'>
						accessToken
					</Text>
					<Box p='lg' bg='blue.0' className='rounded-xl text-wrap break-all'>
						<Text size='0.9rem' c='gray.6' className='text-wrap' mb='md'>
							{idToken}
						</Text>
					</Box>
					<CopyButton value={idToken ?? ''}>
						{({ copy }) => (
							<Button mt='md' onClick={copy} disabled={!idToken}>
								Copy token
							</Button>
						)}
					</CopyButton>
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
