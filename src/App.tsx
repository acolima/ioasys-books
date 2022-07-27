import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Books, SignIn } from './pages/index';

import './assets/reset.css';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/books' element={<Books />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
