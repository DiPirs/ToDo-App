import type { ITask } from '../../types/task.types'
import './TodoItem.scss'
import deleteIconUrl from '/delete.svg'
import editingIconUrl from '/editing.svg'
import type { ITodoItemProps } from '../../types/todoProps.types'
import Checkbox from '../Checkbox/Checkbox'

export default function TodoItem({
	task,
	onEdit,
	onDelete,
	onToggleCompletion,
}: ITodoItemProps) {
	const setTag = (task: ITask) => {
		if (task.type === 'toDo') return 'need to do'
		if (task.type === 'inProcess') return 'in process'
		if (task.type === 'done') return 'well done'
		return 'none tag'
	}

	return (
		<li className='toDoList__item'>
			<Checkbox
				name='itemStatus'
				className='item__checkbox'
				checked={task.isCompleted}
				onChangeFn={onToggleCompletion}
			/>
			<span className={`item__taskText item__${task.type}`}>{task.text}</span>
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
