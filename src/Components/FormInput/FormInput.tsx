import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useState } from 'react'

export interface FormInputProps {
	type?: 'text' | 'password' | 'date'
	placeholder?: string
	label?: string
}

export const FormInput = ({ type, placeholder, label }: FormInputProps) => {
	const [showPassword, setShowPassword] = useState(false)

	const onPasswordIconClick = () => {
		if (showPassword) {
			setShowPassword(false)
		} else {
			setShowPassword(true)
		}
	}

	const getInputType = () => {
		if (type === 'password' && showPassword) {
			return 'text'
		}
		if (type === 'password' && !showPassword) {
			return 'password'
		}
		return type
	}

	return (
		<>
			<label className="text-body-1 font-regular text-default">{label}</label>
			<div className='relative flex justify-end items-center'>
				<input
					type={getInputType()}
					placeholder={placeholder}
					className={`appearance-none font-regular rounded-[0.5px] p-[4px] text-body-1 placeholder:text-disabled w-full min-h-[12px] text-default border-regular border-highlight hover:border-normalHover ${type === 'password' ? 'pr-[30px]' : ''}`}
				/>
				{type === 'password' &&
					(showPassword ? (
						<EyeOutlined
							className="absolute text-[20px] right-2"
							onClick={onPasswordIconClick}
						/>
					) : (
						<EyeInvisibleOutlined
							className="absolute text-[20px] right-2"
							onClick={onPasswordIconClick}
						/>
					))}
			</div>
		</>
	)
}
