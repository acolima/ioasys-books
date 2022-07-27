import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface SignInData {
	email: string;
	password: string;
}

async function signIn(body: SignInData) {
	const response = await axios.post(`${BASE_URL}/auth/sign-in`, body);

	return { data: response.data, token: response.headers['refresh-token'] };
}

export const api = {
	signIn,
};
