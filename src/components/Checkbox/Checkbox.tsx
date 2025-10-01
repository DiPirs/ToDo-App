import type { ICheckboxProps } from '../../types/checkboxProps.types'
import './Checkbox.scss'

export default function Checkbox({
	name,
	className,
	checked,
	onChangeFn,
}: ICheckboxProps) {
	return (
		<label className='custom-checkbox'>
			<input
				name={name}
				className={className}
				type='checkbox'
				checked={checked}
				onChange={onChangeFn}
			/>
			<span className='checkmark'></span>
		</label>
	)
}
