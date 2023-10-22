import { useState } from 'react'

const options = [
	{ name: "Mika", costume: "Remy" },
	{ name: "Pedro", costume: "Alfredo Linguini" },
]

const selectOptions = options.map((a) => ({
	label: `${a.costume} (${a.name})`,
	value: a.name
}))


export default function SpookHome() {
	const [selection, setSelection] = useState<string | null>(null)
	const [voter, setVoter] = useState<string | null>(null)

	return (
		<div className="spookMain">
			<h1>Spooktacular Halloween 2023</h1>
		
			<select onChange={(e) => setSelection(e.target.value)}>
				{options.map((a,i) => (
					<option className="option" key={i}>{a.costume} ({a.name})</option>
				))}
			</select>
			<br></br>
			<select onChange={(e) => setSelection(e.target.value)}>
				{options.map((a,i) => (
					<option className="option" key={i}> ({a.name})</option>
				))}
			</select>
		</div>
	)
}