import {
	BookAuthor,
	BookCover,
	BookDetails,
	BookTitle,
	Container,
} from './styles';

import { IBook } from '../../pages/Main';
import defaultCover from '../../assets/images/defaultCover.png';

interface Props {
	book: IBook;
	setBook: React.Dispatch<React.SetStateAction<IBook | null>>;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Book({ book, setBook, setOpenModal }: Props) {
	const cover = book.imageUrl || defaultCover;

	const authors = book.authors.join(', ');

	function handleDisplayBook() {
		setBook(book);
		setOpenModal(true);
	}

	return (
		<Container onClick={handleDisplayBook}>
			<BookCover>
				<img src={cover} alt={book.title} width={81} />
			</BookCover>
			<BookDetails>
				<div>
					<BookTitle>{book.title}</BookTitle>
					<BookAuthor>{authors}</BookAuthor>
				</div>
				<div>
					<p>{book.pageCount} páginas</p>
					<p>Editora {book.publisher}</p>
					<p>Publicado em {book.published}</p>
				</div>
			</BookDetails>
		</Container>
	);
}

export default Book;
