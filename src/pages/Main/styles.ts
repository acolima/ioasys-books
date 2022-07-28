import styled from 'styled-components';

const Container = styled.div`
	background-image: url('background2.png'), url('background1.png');
	background-size: cover;
	background-blend-mode: darken;

	width: 100vw;
	height: 100vh;
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
`;

const Button = styled.button`
	width: 32px;
	height: 32px;

	border-radius: 50%;

	border: 1px solid rgba(51, 51, 51, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`;

const BooksContainer = styled.div`
	width: 80%;

	margin: 0 auto;

	display: grid;
	grid-template-columns: auto auto auto auto;
	justify-content: space-between;

	row-gap: 16px;
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

	padding-top: 10px;

	span {
		font-weight: 500;
	}
`;

export { BooksContainer, Button, Container, Header, Paging, UserName };
