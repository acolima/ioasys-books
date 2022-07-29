import styled from 'styled-components';

interface Props {
	disabled?: boolean;
}

const Container = styled.div`
	background-image: url('background2.png'), url('background1.png');
	background-size: cover;
	background-blend-mode: darken;

	width: 100vw;
	min-height: 100vh;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 80%;
	height: 100px;

	margin: 0 auto;

	div {
		display: flex;
		align-items: center;
		gap: 16px;
	}
`;

const UserName = styled.h3`
	font-family: 'Heebo';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;

	color: #333333;

	span {
		font-weight: 500;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const Button = styled.button<Props>`
	width: 32px;
	height: 32px;

	border-radius: 50%;

	border: 1px solid rgba(51, 51, 51, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	${(props) => props.disabled && 'color: #33333366 '}
`;

const BooksContainer = styled.div`
	width: 80%;

	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;

	row-gap: 16px;

	@media (max-width: 1201px) {
		grid-template-columns: repeat(3, auto);
	}

	@media (max-width: 901px) {
		width: 90%;
		grid-template-columns: repeat(2, auto);
		justify-content: space-around;
	}

	@media (max-width: 601px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}
`;

const Paging = styled.div`
	width: 80%;
	margin: 0 auto;

	font-family: 'Heebo';
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;

	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: flex-end;

	color: #333333;

	padding: 10px 0;

	span {
		font-weight: 500;
	}

	@media (max-width: 601px) {
		justify-content: center;
	}
`;

export { BooksContainer, Button, Container, Header, Paging, UserName };
