import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';

import Book from '../../components/Book';

import logoutIcon from '../../assets/images/logout-icon.png';

import { IoChevronBackSharp } from 'react-icons/io5';
import { IoChevronForwardSharp } from 'react-icons/io5';

import {
	BooksContainer,
	Button,
	Container,
	Header,
	Paging,
	UserName,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function Main() {
	const { data, signOut } = useAuth();

	let navigate = useNavigate();

	useEffect(() => {
		if (!data) {
			toast.error('Faça o login novamente', {
				position: toast.POSITION.TOP_CENTER,
			});
			navigate('/');
		}
	}, []);

	function handleLogout() {
		signOut();
		navigate('/');
	}

	return (
		<Container>
			<Header>
				<Logo loginPage={false} />

				<div>
					<UserName>
						{data?.gender === 'F' ? 'Bem-vinda, ' : 'Bem vindo, '}
						<span>{data?.name}</span>
					</UserName>

					<Button onClick={handleLogout}>
						<img src={logoutIcon} />
					</Button>
				</div>
			</Header>

			<BooksContainer>
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
			</BooksContainer>

			<Paging>
				Página <span>1</span> de <span>100</span>
				<Button>
					<IoChevronBackSharp />
				</Button>
				<Button>
					<IoChevronForwardSharp />
				</Button>
			</Paging>
		</Container>
	);
}

export default Main;
