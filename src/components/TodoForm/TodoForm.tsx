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
			<h2 className='formNewTask__title'>Create task</h2>
			<div className='formNewTask__inputWrapper'>
				<label htmlFor='textNewTask' className='inputWrapper__label'>
					Input new task
				</label>
				<input
					id='textNewTask'
					name='textNewTask'
					type='text'
					className='inputWrapper__input'
					placeholder='Input new task...'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</div>
			<div className='formNewTask__selectWrapper'>
				<label htmlFor='selectTaskType' className='selectWrapper__label'>
					Select task type
				</label>
				<select
					id='selectTaskType'
					name='selectTaskType'
					className='selectWrapper__selectType'
					value={type}
					onChange={e => setType(e.target.value as ITask['type'])}
				>
					<option value='toDo'>Need to do</option>
					<option value='inProcess'>In process</option>
				</select>
			</div>
			<button className='formNewTask__button'>
				<img src={addIconUrl} alt='Добавить задачу' />
			</button>
		</form>
	)
}
