import { useEffect, useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import type { ITask } from './types/task.types'

export default function App() {
	const [tasks, setTasks] = useState<ITask[]>(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			try {
				return JSON.parse(savedTasks) as ITask[]
			} catch (error) {
				console.error('Ошибка при загрузке задач из localStorage:', error)
			}
		}
		return []
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = (text: string, type: ITask['type']) => {
		const newTask: ITask = {
			id: Date.now(),
			text,
			isCompleted: false,
			type,
		}
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	const deleteTask = (id: number) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
	}

	const toggleTaskCompletion = (id: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id
					? {
							...task,
							isCompleted: !task.isCompleted,
							type: !task.isCompleted ? 'done' : 'toDo',
					  }
					: task
			)
		)
	}

	return (
		<div className='page'>
			<Sidebar />
			<main className='main'>
				<Header AddTask={addTask} />
				<div className='content'>
					<TodoList
						tasks={tasks}
						onDeleteTask={deleteTask}
						onToggleTaskCompletion={toggleTaskCompletion}
					/>
				</div>
			</main>
		</div>
	)
}
