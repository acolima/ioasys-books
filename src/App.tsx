import './assets/styles/reset.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, SignIn } from './pages/index';

import { AuthProvider } from './context/authContext';

import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<AuthProvider>
			<ToastContainer autoClose={2000} />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/books' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
