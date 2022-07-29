import styled from 'styled-components';

const Container = styled.div`
	max-width: 272px;
	min-height: 160px;

	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
	border-radius: 4px;
	padding: 19px 16px;

	background-color: #fff;

	display: flex;
	gap: 16px;

	cursor: pointer;

	@media (max-width: 1401px) {
		width: 252px;
	}

	@media (max-width: 901px) {
		width: 100%;
	}

	@media (max-width: 601px) {
		min-width: 90%;
	}
`;

const BookCover = styled.div`
	margin: auto 0;

	filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

const BookDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-family: 'Heebo';
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: #999999;
`;

const BookTitle = styled.h1`
	font-weight: 500;
	font-size: 14px;
	color: #333333;
`;

const BookAuthor = styled.h2`
	color: #ab2680;
`;

export { BookAuthor, BookCover, BookDetails, BookTitle, Container };
