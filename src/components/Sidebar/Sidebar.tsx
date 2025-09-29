import './Sidebar.scss'
import logoIconUrl from '/logo.svg'
import taskIconUrl from '/task.svg'

export default function Sidebar() {
	return (
		<aside className='sidebar'>
			<img className='sidebar__logo' src={logoIconUrl} alt='Логотип' />
			<nav className='sidebar__nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<button className='nav__button activeButtonNav'>
							<img src={taskIconUrl} alt='Задания' className='nav__img' />
							Tasks
						</button>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
