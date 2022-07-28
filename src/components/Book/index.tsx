import {
	BookAuthor,
	BookCover,
	BookDetails,
	BookTitle,
	Container,
} from './styles';

function Book() {
	return (
		<Container>
			<BookCover>
				<img
					src='https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg'
					width={81}
				/>
			</BookCover>
			<BookDetails>
				<div>
					<BookTitle>Crossing the Chasm</BookTitle>
					<BookAuthor>Geoffrey A. Moore</BookAuthor>
				</div>
				<div>
					<p>150 páginas</p>
					<p>Editora Loyola</p>
					<p>Publicado em 2020</p>
				</div>
			</BookDetails>
		</Container>
	);
}

export default Book;
