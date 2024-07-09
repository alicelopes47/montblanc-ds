export interface DateInputProps {
  label: string;
}

export const DateInput = ({label}: DateInputProps) => {
	return (
		<>
      <label className="text-body-1 font-regular text-default">{label}</label>
			<div className="flex gap-[5px]">
				<select
					required
					className="appearance-none text-center bg-white relative font-regular rounded-[0.5px] p-[4px] text-body-1 placeholder:text-disabled min-h-[12px] max-w-[40px] text-default border-regular border-highlight hover:border-normalHover"
				>
					<option
						disabled
						selected
						hidden
						value=""
						className="text-disabled font-normal"
					>
						MM
					</option>
					<option value="01">01</option>
					<option value="02">02</option>
					<option value="03">03</option>
					<option value="04">04</option>
					<option value="05">05</option>
					<option value="06">06</option>
					<option value="07">07</option>
					<option value="08">08</option>
					<option value="09">09</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
				<select
					required
					className="appearance-none bg-white relative font-regular min-w-[60px] max-w-[60px]  rounded-[0.5px] p-[4px] text-center text-body-1 placeholder:text-disabled w-full min-h-[12px] text-default border-regular border-highlight hover:border-normalHover"
				>
					<option
						value=""
						disabled
						selected
						hidden
						className="text-disabled font-normal"
					>
						AAAA
					</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
					<option value="2030">2030</option>
					<option value="2031">2031</option>
					<option value="2032">2032</option>
					<option value="2033">2033</option>
					<option value="2034">2034</option>
					<option value="2035">2035</option>
					<option value="2036">2036</option>
					<option value="2037">2037</option>
					<option value="2038">2038</option>
					<option value="2039">2039</option>
					<option value="2040">2040</option>
				</select>
			</div>
		</>
	)
}
