export type TTypeTask = 'toDo' | 'inProcess' | 'done'

export interface ITask {
	id: number
	text: string
	isCompleted: boolean
	type: TTypeTask
}
