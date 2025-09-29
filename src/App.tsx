import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
	return (
		<div className='page'>
			<Sidebar />
			<main className='main'>
				<h1>My Tasks</h1>
				<TodoForm />
				<hr />
				<TodoList />
			</main>
		</div>
	)
}

export default App
