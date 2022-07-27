import { createContext, useState } from 'react';

interface IAuthContext {
	data: AuthData | null;
	token: string | null;
	signIn: (authData: AuthData, token: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface Props {
	children: React.ReactNode;
}

interface AuthData {
	id: string;
	name: string;
	birthdate: string;
	gender: string;
}

export function AuthProvider({ children }: Props) {
	const persistedAuth: AuthData = JSON.parse(localStorage.getItem('authData')!);

	const [data, setData] = useState<AuthData | null>(persistedAuth);
	const [token, setToken] = useState<string | null>(null);

	function signIn(authData: AuthData, token: string) {
		setData(authData);
		setToken(token);
		localStorage.setItem('authData', JSON.stringify(authData));
		localStorage.setItem('token', JSON.stringify(token));
	}

	return (
		<AuthContext.Provider value={{ data, token, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
