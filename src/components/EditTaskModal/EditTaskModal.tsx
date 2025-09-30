import React, { useState } from 'react'
import './EditTaskModal.scss'
import type { TTypeTask } from '../../types/task.types'
import type { EditTaskModalProps } from '../../types/editTaskProps.types'

export default function EditTaskModal({
	task,
	onClose,
	onUpdateTask,
}: EditTaskModalProps) {
	const [text, setText] = useState(task.text)
	const [type, setType] = useState<TTypeTask>(task.type)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const updatedTask = { ...task, text, type }
		onUpdateTask(updatedTask)
	}

	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<h2 className='modal__title'>Edit Task</h2>
				<form onSubmit={handleSubmit} className='modal__form'>
					<div className='form__field'>
						<label htmlFor='editTaskText' className='field-label'>
							Task Text
						</label>
						<input
							id='editTaskText'
							type='text'
							className='field-change'
							value={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
					<div className='form__field'>
						<label htmlFor='editTaskType' className='field-label'>
							Task Type
						</label>
						<select
							id='editTaskType'
							value={type}
							className='field-change'
							onChange={e => setType(e.target.value as TTypeTask)}
						>
							<option value='toDo'>To Do</option>
							<option value='inProcess'>In Process</option>
							<option value='done'>Done</option>
						</select>
					</div>
					<div className='form__actions'>
						<button type='submit' className='form__actions-button save'>
							Save
						</button>
						<button
							type='button'
							className='form__actions-button cancel'
							onClick={onClose}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
