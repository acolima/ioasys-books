import Logo from '../../components/Logo';
import {
	Button,
	Container,
	Form,
	Input,
	InputContainer,
	Label,
} from './styles';

function SignIn() {
	return (
		<Container>
			<Form>
				<Logo loginPage={true} />
				<InputContainer>
					<Label htmlFor='email-input'>Email</Label>
					<Input id='email-input' type='email' />
				</InputContainer>

				<InputContainer>
					<Label htmlFor='password-input'>Senha</Label>
					<Input id='password-input' type='password' />

					<Button>Entrar</Button>
				</InputContainer>
			</Form>
		</Container>
	);
}

export default SignIn;
