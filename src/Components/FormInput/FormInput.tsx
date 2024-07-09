export interface FormInputProps {
	type?: 'text' | 'password' | 'date'
	placeholder?: string;
  label?: string;
}

export const FormInput = ({ type, placeholder, label }: FormInputProps) => {
	return (
		<>
			<label className="text-body-1 font-regular text-default">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="appearance-none font-regular rounded-[0.5px] p-[4px] text-body-1 placeholder:text-disabled w-full min-h-[12px] text-default border-regular border-highlight hover:border-normalHover"
			/>
		</>
	)
}
