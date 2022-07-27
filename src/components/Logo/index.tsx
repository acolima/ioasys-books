import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

interface Props {
	loginPage: boolean;
}

function Logo({ loginPage }: Props) {
	return (
		<Container loginPage={loginPage}>
			<img src={logo} /> Books
		</Container>
	);
}

export default Logo;

interface Props {
	loginPage: boolean;
}

const Container = styled.div<Props>`
	width: 368px;

	display: flex;
	align-items: center;
	gap: 15px;

	font-family: 'Heebo';
	font-style: normal;
	font-weight: 300;
	font-size: 28px;

	color: #ffffff;
	${(props) => !props.loginPage && 'filter: invert(85%);'};
	padding-bottom: 34px;

	@media (max-width: 601px) {
		width: 90vw;
	}
`;
