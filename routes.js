import { BrowserRouter, Routes } from 'react-router-dom';

import Navbar from 'components/Navbar'

export default function Route() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<div>Home</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
