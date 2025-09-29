import './TodoItem.scss'
import deleteIconUrl from '/delete.svg'
import editingIconUrl from '/editing.svg'

export default function TodoItem() {
	return (
		<li className='toDoList__item'>
			<input className='item__checkbox' type='checkbox' />
			<span className='item__taskText'>Текст задачи</span>
			<button className='item__button button__editing'>
				<img
					src={editingIconUrl}
					alt='Редактировать задачу'
					className='editing__icon'
				/>
			</button>
			<button className='item__button button__delete'>
				<img
					src={deleteIconUrl}
					alt='Удалить задачу'
					className='delete__icon'
				/>
			</button>
		</li>
	)
}
