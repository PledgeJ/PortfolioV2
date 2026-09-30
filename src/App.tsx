import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cover from './pages/Cover';
import Drone from './pages/Drone';
import Projects from './pages/Projects';

import FloatingUtilities from './components/FloatingUtilities'

function App() 
{
	return (
		<>
		<Router>
			<Routes>
				<Route path='/' element={<Cover />} />
				<Route path='/drone' element={<Drone />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</Router>

		<FloatingUtilities />
		</>
	)
}

export default App
