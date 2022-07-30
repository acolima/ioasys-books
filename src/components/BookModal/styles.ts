import styled from 'styled-components';

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;

	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(2px);

	display: flex;
	gap: 5px;
	flex-direction: column;
	align-items: center;

	@media (max-width: 601px) {
		flex-direction: column;
		align-items: center;

		min-height: 100%;
	}
`;

const CloseButton = styled.div`
	width: 100%;

	display: flex;
	justify-content: flex-end;
	align-items: center;

	padding: 20px;

	button {
		width: 32px;
		height: 32px;

		border-radius: 50%;
		border: 1px solid rgba(51, 51, 51, 0.2);

		text-align: center;

		background: #ffffff;

		cursor: pointer;
	}
`;

const Container = styled.div`
	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 20px;

	width: 90vw;

	@media (min-width: 728px) {
		width: 90%;

		flex-direction: row;
	}
`;

const BookCover = styled.div`
	width: 50%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

	img {
		width: 55%;
	}
`;

const BookDetails = styled.div`
	flex: 1;

	padding: 48px;

	font-family: 'Heebo';
	font-weight: 400;
	font-size: 12px;
	color: #333333;

	width: 100%;

	@media (max-width: 728px) {
		padding: 12px 48px;
	}
`;

const BookTitle = styled.h1`
	font-weight: 500;
	font-size: 28px;
	line-height: 40px;
`;

const BookAuthors = styled.h2`
	line-height: 20px;
	color: #ab2680;
`;

const Label = styled.h2`
	font-family: 'Heebo';
	font-weight: 500;
	font-size: 12px;
	line-height: 28px;
	text-transform: uppercase;
	color: #333333;

	margin-top: 32px;

	@media (max-width: 601px) {
		margin-top: 5px;
	}
`;

const Details = styled.div`
	width: 100%;

	text-align: left;

	display: flex;
	flex-direction: column;
`;

const Value = styled.p`
	font-weight: 500;
	line-height: 28px;

	display: flex;
	justify-content: space-between;

	span {
		line-height: 20px;
		text-align: right;
		color: #999;
	}
`;

const BookDescription = styled.p`
	font-family: 'Heebo';
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;

	color: #999;
`;

export {
	Backdrop,
	BookAuthors,
	BookCover,
	BookDetails,
	BookDescription,
	BookTitle,
	Container,
	CloseButton,
	Label,
	Details,
	Value,
};
