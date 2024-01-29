import { ChangeEvent } from 'react'

type InputPropsType = {
	value: string
	setValue: (value: string) => void
}

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setValue(event.currentTarget.value)
	}

	return (
		<input
			id={'hw04-input'}
			type='text'
			value={props.value}
			onChange={onChangeHandler}
		/>
	)
}
