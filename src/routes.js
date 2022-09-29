import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PaginaPadrao from 'components/PaginaPadrao'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaPadrao />}>
					<Route index element={<div>Home</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}