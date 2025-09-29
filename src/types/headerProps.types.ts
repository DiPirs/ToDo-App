import type { ITask } from './task.types'

export interface IHeaderProps {
	AddTask: (text: string, type: ITask['type']) => void
}
