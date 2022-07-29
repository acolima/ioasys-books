import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface SignInData {
	email: string;
	password: string;
}

function createConfig(token: string | undefined) {
	return {
		headers: { Authorization: `Bearer ${token}` },
	};
}

async function signIn(body: SignInData) {
	const response = await axios.post(`${BASE_URL}/auth/sign-in`, body);

	return {
		data: response.data,
		authorizationToken: response.headers['authorization'],
		refreshToken: response.headers['refresh-token'],
	};
}

async function getBooks(token: string, page: number) {
	const config = createConfig(token);

	const response = await axios.get(
		`${BASE_URL}/books?page=${page}&amount=12`,
		config
	);

	return response.data;
}

async function refreshToken(token: string) {
	const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
		refreshToken: token,
	});

	return {
		aToken: response.headers['authorization'],
		rToken: response.headers['refresh-token'],
	};
}

export const api = {
	getBooks,
	signIn,
	refreshToken,
};
