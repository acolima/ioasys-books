import styled from 'styled-components';

const Container = styled.div`
	background-image: url('login-background.png');
  background-size: cover;

	width: 100vw;
	height: 100vh;

	position: relative;

	@media (max-width: 601px) {
		background-position: -380px;
	}
`;

const Form = styled.form`
	display: flex;
	gap: 16px;
	flex-direction: column;
	justify-content: center;

	position: absolute;
	left: 100px;

	height: 100vh;
	width: 368px;

	@media (max-width: 601px) {
		position: relative;
		left: 0;

		width: 90vw;

		margin: 0 auto;
	}
`;

const InputContainer = styled.div`
	width: 100%;
	height: 60px;

	background: rgba(0, 0, 0, 0.32);
	backdrop-filter: blur(2px);

	border-radius: 4px;
	padding: 5px 16px;

	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Label = styled.label`
	font-family: 'Heebo';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: #ffffff;

	opacity: 0.5;
`;

const Input = styled.input`
	font-family: 'Heebo';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
`;

const Button = styled.button`
	width: 85px;
	height: 36px;

	background: #ffffff;
	border-radius: 44px;

	position: absolute;
	right: 12px;
	bottom: 12px;

	cursor: pointer;

	font-family: 'Heebo';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #b22e6f;
	text-align: center;
`;

const Tooltip = styled.div`
	width: 60%;

	background: rgba(255, 255, 255, 0.4);

	font-family: 'Heebo';
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	color: #ffffff;
	text-align: center;

	padding: 10px;

	position: relative;

	::after {
		content: '';
		position: absolute;
		top: -24px;
		left: 20px;
		margin: 10px;
		border-width: 7px;
		border-style: solid;
		border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
	}
`;

export { Button, Container, Form, Input, InputContainer, Label, Tooltip };
