export type TTypeTask = 'toDo' | 'inProgress' | 'done'

export interface ITask {
	id: number
	text: string
	isCompleted: boolean
	type: TTypeTask
}
