import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { Auth } from './pages/auth';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/rated" element={<h1>Rated</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
