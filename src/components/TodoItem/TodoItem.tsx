import type { ITask } from '../../types/task.types'
import type { ITodoItemProps } from '../../types/todoProps.types'
import './TodoItem.scss'
import deleteIconUrl from '/delete.svg'
import editingIconUrl from '/editing.svg'

export default function TodoItem({
	task,
	onEdit,
	onDelete,
	onToggleCompletion,
}: ITodoItemProps) {
	const setTag = (task: ITask) => {
		if (task.type === 'toDo') return 'Need to do'
		if (task.type === 'inProgress') return 'In process'
		if (task.type === 'done') return 'Well done'
		return 'none tag'
	}

	return (
		<li className='toDoList__item'>
			<input
				className='item__checkbox'
				type='checkbox'
				checked={task.isCompleted}
				onChange={onToggleCompletion}
			/>
			<span className='item__taskText'>{task.text}</span>
			<span className={`item__taskTag taskTag__${task.type}`}>
				{setTag(task)}
			</span>
			<button className='item__button button__editing' onClick={onEdit}>
				<img
					src={editingIconUrl}
					alt='Редактировать задачу'
					className='editing__icon'
				/>
			</button>
			<button className='item__button button__delete' onClick={onDelete}>
				<img
					src={deleteIconUrl}
					alt='Удалить задачу'
					className='delete__icon'
				/>
			</button>
		</li>
	)
}
