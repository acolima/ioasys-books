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
}

function Book({ book }: Props) {
	const cover = book.imageUrl || defaultCover;

	return (
		<Container>
			<BookCover>
				<img src={cover} alt={book.title} width={81} />
			</BookCover>
			<BookDetails>
				<div>
					<BookTitle>{book.title}</BookTitle>
					{book.authors.map((author) => (
						<BookAuthor key={author}>{author}</BookAuthor>
					))}
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
