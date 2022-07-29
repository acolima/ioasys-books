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
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { errorAlert } from '../../utils/toastAlerts';
import MainPageSkeleton from '../../components/MainPageSkeleton';
import BookModal from '../../components/BookModal';

export interface IBook {
	id: string;
	title: string;
	description: string;
	authors: string[];
	pageCount: string;
	category: string;
	imageUrl: string;
	isbn10: string;
	isbn13: string;
	language: string;
	publisher: string;
	published: number;
}

function Main() {
	const { data, authorizationToken, refreshToken, setTokens, signOut } =
		useAuth();

	const [books, setBooks] = useState<IBook[] | null>(null);
	const [book, setBook] = useState<IBook | null>(null);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	let navigate = useNavigate();

	const mobileWidth = window.screen.width < 600;

	useEffect(() => {
		if (!data) {
			errorAlert('Faça o login novamente');
			navigate('/');
		}
		getBooks();
	}, [currentPage]);

	async function getBooks() {
		setLoading(true);
		try {
			const response = await api.getBooks(authorizationToken!, currentPage);
			setBooks(response.data);
			setNumberOfPages(Math.ceil(response.totalPages));
			setLoading(false);
		} catch (error: any) {
			errorAlert(error.response.data.errors.message);
		}
	}

	function handleLogout() {
		signOut();
		navigate('/');
	}

	function handlePreviousPage() {
		setCurrentPage(currentPage - 1);
	}

	function handleNextPage() {
		setCurrentPage(currentPage + 1);
	}

	setInterval(() => {
		handleRefreshToken();
	}, 3540000);

	async function handleRefreshToken() {
		try {
			const { aToken, rToken } = await api.refreshToken(refreshToken!);
			setTokens(aToken, rToken);
		} catch (error: any) {
			errorAlert(error.response.data.errors.message);
		}
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

			{loading ? (
				<MainPageSkeleton />
			) : (
				<BooksContainer>
					{books?.map((book) => (
						<Book
							key={book.id}
							book={book}
							setBook={setBook}
							setOpenModal={setOpenModal}
						/>
					))}
				</BooksContainer>
			)}

			<Paging>
				{mobileWidth ? (
					<>
						<Button onClick={handlePreviousPage} disabled={currentPage === 1}>
							<IoChevronBackSharp />
						</Button>
						Página <span>{currentPage}</span> de <span>{numberOfPages}</span>
						<Button
							onClick={handleNextPage}
							disabled={currentPage + 1 > numberOfPages}
						>
							<IoChevronForwardSharp />
						</Button>
					</>
				) : (
					<>
						Página <span>{currentPage}</span> de <span>{numberOfPages}</span>
						<Button onClick={handlePreviousPage} disabled={currentPage === 1}>
							<IoChevronBackSharp />
						</Button>
						<Button
							onClick={handleNextPage}
							disabled={currentPage + 1 > numberOfPages}
						>
							<IoChevronForwardSharp />
						</Button>
					</>
				)}
			</Paging>

			{openModal && <BookModal book={book!} setOpenModal={setOpenModal} />}
		</Container>
	);
}

export default Main;
