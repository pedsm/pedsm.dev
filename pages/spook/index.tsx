import { useState } from 'react'
import axios from 'axios'

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

	const submit = async () => {
		await axios.post('/api/spook', {
			answer: selection,
			sentBy: voter
		})
		console.log('Submitted')
	}

	return (
		<div className="spookMain">
			<h1>Spooktacular Halloween 2023</h1>

			<select onChange={(e) => setSelection(e.target.value)}>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}>{a.costume} ({a.name})</option>
				))}
			</select>
			<select onChange={(e) => setVoter(e.target.value)}>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}> {a.name}</option>
				))}
			</select>
			<div onClick={submit} className='spookButton'>
				Submit vote
			</div>
		</div>
	)
}