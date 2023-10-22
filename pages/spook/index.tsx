import { useState } from 'react'
import Select from 'react-select'

const options = [
	{ name: "Mika", costume: "Remy" },
	{ name: "Pedro", costume: "Alfredo Linguini" },
]

const selectOptions = options.map((a) => ({
	label: `${a.costume} (${a.name})`,
	value: a.name
}))


export default function SpookHome() {
	const [selection, setSelection] = useState(selectOptions[0])

	return (
		<div className="spookMain">
			<h1>Spooktacular Halloween 2023</h1>
			<Select 
				defaultValue={selectOptions[0]}
				onChange={(newVal: {value: string, label: string}) => {
					setSelection(newVal)
					return
				}}
				options={selectOptions}
				styles={{backgroundColor: 'orange'}}
			/>
		
			<br></br>

			<select>
				{options.map((a,i) => (
					<option className="option" key={i}>{a.costume} ({a.name})</option>
				))}
			</select>
		</div>
	)
}