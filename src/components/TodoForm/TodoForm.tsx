import './TodoForm.scss'
import addIconUrl from '/add.svg'

export default function TodoForm() {
	return (
		<form className='formNewTask'>
			<h2 className='formNewTask__title'>Input new task</h2>
			<input
				type='text'
				className='formNewTask__input'
				placeholder='Input new task...'
			/>
			<select className='formNewTask__selectType'>
				<option value='toDo'>To Do</option>
				<option value='inProgress'>In progress</option>
			</select>
			<button className='formNewTask__button'>
				<img src={addIconUrl} alt='Добавить задачу' />
			</button>
		</form>
	)
}
