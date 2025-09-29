import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList() {
	return (
		<>
			<div className='choose__list'>
				<button className='toDoList_title activeButtonList'>All Task 2</button>
				<button className='toDoList_title'>In progress</button>
				<button className='toDoList_title'>Done</button>
			</div>
			<ul className='toDoList'>
				<TodoItem />
				<TodoItem />
			</ul>
		</>
	)
}
