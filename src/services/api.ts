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

	return { data: response.data, token: response.headers['authorization'] };
}

async function getBooks(token: string, page: number) {
	const config = createConfig(token);

	const response = await axios.get(
		`${BASE_URL}/books?page=${page}&amount=12`,
		config
	);

	return response.data;
}

export const api = {
	getBooks,
	signIn,
};
