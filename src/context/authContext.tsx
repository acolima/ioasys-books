import { createContext, useState } from 'react';

interface IAuthContext {
	data: AuthData | null;
	authorizationToken: string | null;
	refreshToken: string | null;
	setLocalAuth: (authData: AuthData) => void;
	setTokens: (aToken: string, rToken: string) => void;
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
	const persistedAuthToken: string = JSON.parse(
		localStorage.getItem('authorizationToken')!
	);
	const persistedRefreshToken: string = JSON.parse(
		localStorage.getItem('refreshToken')!
	);

	const [data, setData] = useState<AuthData | null>(persistedAuth);
	const [authorizationToken, setAuthorizationToken] = useState<string | null>(
		persistedAuthToken
	);
	const [refreshToken, setRefreshToken] = useState<string | null>(
		persistedRefreshToken
	);

	function setLocalAuth(authData: AuthData) {
		setData(authData);
		localStorage.setItem('authData', JSON.stringify(authData));
	}

	function setLocalAuthorizationToken(aToken: string) {
		setAuthorizationToken(aToken);
		localStorage.setItem('authorizationToken', JSON.stringify(aToken));
	}

	function setLocalRefreshToken(rToken: string) {
		setRefreshToken(rToken);
		localStorage.setItem('refreshToken', JSON.stringify(rToken));
	}

	function setTokens(aToken: string, rToken: string) {
		setLocalAuthorizationToken(aToken);
		setLocalRefreshToken(rToken);
	}

	function signOut() {
		localStorage.removeItem('authData');
	}

	return (
		<AuthContext.Provider
			value={{
				data,
				authorizationToken,
				refreshToken,
				setLocalAuth,
				setTokens,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
