import type { IHeaderProps } from '../../types/headerProps.types'
import TodoForm from '../TodoForm/TodoForm'
import './Header.scss'

export default function Header({ AddTask }: IHeaderProps) {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1>My Tasks</h1>
				<TodoForm onAddTask={AddTask} />
			</div>
			<hr />
		</header>
	)
}
