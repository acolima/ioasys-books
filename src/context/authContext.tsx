import { createContext, useState } from 'react';

interface IAuthContext {
	data: AuthData | null;
	token: string | null;
	setLocalAuth: (authData: AuthData) => void;
	setLocalToken: (token: string) => void;
	signOut: () => void;
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
	const persistedToken: string = JSON.parse(localStorage.getItem('token')!);

	const [data, setData] = useState<AuthData | null>(persistedAuth);
	const [token, setToken] = useState<string | null>(persistedToken);

	function setLocalAuth(authData: AuthData) {
		setData(authData);
		localStorage.setItem('authData', JSON.stringify(authData));
	}

	function setLocalToken(authToken: string) {
		setToken(authToken);
		localStorage.setItem('token', JSON.stringify(authToken));
	}

	function signOut() {
		localStorage.removeItem('authData');
		localStorage.removeItem('token');
	}

	return (
		<AuthContext.Provider
			value={{ data, token, setLocalAuth, setLocalToken, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
}
