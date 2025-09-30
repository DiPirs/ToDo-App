import type { ITask } from './task.types'

export interface ITodoListProps {
	tasks: ITask[]
	onDeleteTask: (id: number) => void
	onToggleTaskCompletion: (id: number) => void
	onEditTask: (task: ITask) => void
}

export interface ITodoItemProps {
	task: ITask
	onEdit: () => void
	onDelete: () => void
	onToggleCompletion: () => void
}

export interface ITodoFormProps {
	onAddTask: (text: string, type: ITask['type']) => void
}
