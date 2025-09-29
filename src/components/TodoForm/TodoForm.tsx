import { useState } from 'react'
import type { ITask } from '../../types/task.types'
import type { ITodoFormProps } from '../../types/todoProps.types'
import './TodoForm.scss'
import addIconUrl from '/add.svg'

export default function TodoForm({ onAddTask }: ITodoFormProps) {
	const [text, setText] = useState('')
	const [type, setType] = useState<ITask['type']>('toDo')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (text.trim()) {
			onAddTask(text, type)
			setText('')
			setType('toDo')
		}
	}

	return (
		<form className='formNewTask' onSubmit={handleSubmit}>
			<h2 className='formNewTask__title'>Input new task</h2>
			<input
				type='text'
				className='formNewTask__input'
				placeholder='Input new task...'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<select
				className='formNewTask__selectType'
				value={type}
				onChange={e => setType(e.target.value as ITask['type'])}
			>
				<option value='toDo'>To Do</option>
				<option value='inProgress'>In progress</option>
			</select>
			<button className='formNewTask__button'>
				<img src={addIconUrl} alt='Добавить задачу' />
			</button>
		</form>
	)
}
