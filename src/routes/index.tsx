import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/HomePage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
		</BrowserRouter>
	);
}

