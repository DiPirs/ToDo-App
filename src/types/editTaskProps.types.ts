import type { ITask } from './task.types'

export interface EditTaskModalProps {
	task: ITask
	onClose: () => void
	onUpdateTask: (updatedTask: ITask) => void
}
