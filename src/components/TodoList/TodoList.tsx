import { useState } from 'react'
import type { TTypeTask } from '../../types/task.types'
import type { ITodoListProps } from '../../types/todoProps.types'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({
	tasks,
	onDeleteTask,
	onToggleTaskCompletion,
	onEditTask,
}: ITodoListProps) {
	const [filter, setFilter] = useState<TTypeTask>('toDo')

	const sortedTasks = [...tasks].sort((a, b) => {
		const order = { all: 0, toDo: 1, inProcess: 2, done: 3 }
		return order[a.type] - order[b.type]
	})

	const filteredTasks = sortedTasks.filter(task => {
		if (filter === 'all') return true
		if (filter === 'toDo') return task.type === 'toDo'
		if (filter === 'inProcess') return task.type === 'inProcess'
		if (filter === 'done') return task.isCompleted
		return false
	})

	return (
		<>
			<div className='choose__list'>
				<button
					className={`toDoList_title ${
						filter === 'all' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('all')}
				>
					All Tasks {tasks.length}
				</button>
				<button
					className={`toDoList_title ${
						filter === 'toDo' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('toDo')}
				>
					Need to do {tasks.filter(task => task.type === 'toDo').length}
				</button>
				<button
					className={`toDoList_title ${
						filter === 'inProcess' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('inProcess')}
				>
					In process {tasks.filter(task => task.type === 'inProcess').length}
				</button>
				<button
					className={`toDoList_title ${
						filter === 'done' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('done')}
				>
					Done {tasks.filter(task => task.isCompleted).length}
				</button>
			</div>
			<ul className='toDoList'>
				{filteredTasks.length > 0 ? (
					filteredTasks.map(task => (
						<TodoItem
							key={task.id}
							task={task}
							onEdit={() => onEditTask(task)}
							onDelete={() => onDeleteTask(task.id)}
							onToggleCompletion={() => onToggleTaskCompletion(task.id)}
						/>
					))
				) : (
					<span className='no-tasks'>There are no tasks. Add new tasks!</span>
				)}
			</ul>
		</>
	)
}
