import { useState } from 'react'
import type { TTypeTask } from '../../types/task.types'
import type { ITodoListProps } from '../../types/todoProps.types'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({ tasks, onDeleteTask }: ITodoListProps) {
	const [filter, setFilter] = useState<TTypeTask>('toDo')

	const filteredTasks = tasks.filter(task => {
		if (filter === 'toDo') return true
		if (filter === 'inProgress') return task.type === 'inProgress'
		if (filter === 'done') return task.isCompleted
		return false
	})

	return (
		<>
			<div className='choose__list'>
				<button
					className={`toDoList_title ${
						filter === 'toDo' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('toDo')}
				>
					All Tasks {tasks.length}
				</button>
				<button
					className={`toDoList_title ${
						filter === 'inProgress' ? 'activeButtonList' : ''
					}`}
					onClick={() => setFilter('inProgress')}
				>
					In Progress {tasks.filter(task => task.type === 'inProgress').length}
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
				{filteredTasks.map(task => (
					<TodoItem
						key={task.id}
						task={task}
						onEdit={() => console.log('Edit task:', task.id)}
						onDelete={() => onDeleteTask(task.id)}
					/>
				))}
			</ul>
		</>
	)
}
