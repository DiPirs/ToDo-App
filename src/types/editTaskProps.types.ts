import type { ITask } from './task.types'

export interface IEditTaskModalProps {
	task: ITask
	onClose: () => void
	onUpdateTask: (updatedTask: ITask) => void
}
