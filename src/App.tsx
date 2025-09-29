import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	return (
		<div className='page'>
			<Sidebar />
			<main className='main'>
				<h1>My Tasks</h1>
			</main>
		</div>
	)
}

export default App
