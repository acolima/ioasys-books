import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import {
	Button,
	Container,
	Form,
	Input,
	InputContainer,
	Label,
	Tooltip,
} from './styles';
import { api } from '../../services/api';
import Logo from '../../components/Logo';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { setLocalAuth, setTokens } = useAuth();

	let navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('authData')) navigate('/books');
	}, [navigate]);

	async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			const { data, authorizationToken, refreshToken } = await api.signIn({
				email,
				password,
			});
			setLocalAuth(data);
			setTokens(authorizationToken, refreshToken);
			navigate('/books');
		} catch (error: any) {
			setErrorMessage(error.response.data.errors.message);
		}
	}

	return (
		<Container>
			<Form onSubmit={(e) => handleSignIn(e)}>
				<Logo loginPage={true} />
				<InputContainer>
					<Label htmlFor='email-input'>Email</Label>
					<Input
						id='email-input'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InputContainer>

				<InputContainer>
					<Label htmlFor='password-input'>Senha</Label>
					<Input
						id='password-input'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button id='sign-in-button' type='submit'>
						Entrar
					</Button>
				</InputContainer>

				{errorMessage && <Tooltip>{errorMessage}</Tooltip>}
			</Form>
		</Container>
	);
}

export default SignIn;
