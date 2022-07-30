import { IoCloseOutline } from 'react-icons/io5';
import { IBook } from '../../pages/Main';

import quotes from '../../assets/images/quotes.png';
import defaultCover from '../../assets/images/defaultCover.png';

import {
	Backdrop,
	BookAuthors,
	BookCover,
	BookDetails,
	BookDescription,
	BookTitle,
	Container,
	CloseButton,
	Details,
	Label,
	Value,
} from './styles';

interface Props {
	book: IBook;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function BookModal({ book, setOpenModal }: Props) {
	const cover = book.imageUrl || defaultCover;
	const authors = book.authors.join(', ');

	return (
		<Backdrop>
			<CloseButton>
				<button onClick={() => setOpenModal(false)}>
					<IoCloseOutline fontSize='25px' />
				</button>
			</CloseButton>

			<Container>
				<BookCover>
					<img src={cover} alt={`${book.title} cover`} />
				</BookCover>

				<BookDetails>
					<BookTitle>{book.title}</BookTitle>
					<BookAuthors>{authors}</BookAuthors>

					<Label>Informações</Label>
					<Details>
						<Value>
							Páginas<span>{book.pageCount} páginas</span>
						</Value>
						<Value>
							Editora<span>Editora {book.publisher}</span>
						</Value>
						<Value>
							Publicação<span>{book.published}</span>
						</Value>
						<Value>
							Idioma<span>{book.language}</span>
						</Value>
						<Value>
							Título Original<span>{book.title}</span>
						</Value>
						<Value>
							ISBN-10<span>{book.isbn10}</span>
						</Value>
						<Value>
							ISBN-13<span>{book.isbn13}</span>
						</Value>
					</Details>

					<Label>Resenha da editora</Label>
					<BookDescription>
						<img src={quotes} />
						{' ' + book.description}
					</BookDescription>
				</BookDetails>
			</Container>
		</Backdrop>
	);
}

export default BookModal;
