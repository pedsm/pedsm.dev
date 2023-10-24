import { useState, useEffect } from 'react'
import axios from 'axios'

type Participant = {
	id: string,
	name: string,
	costume: string,
}

function generateDeviceFingerprint() {
    var fingerprint = [];

    // User agent
    fingerprint.push(navigator.userAgent);

    // Platform
    fingerprint.push(navigator.platform);

    // Hardware details
    fingerprint.push(navigator.hardwareConcurrency || 'N/A');

    // CPU architecture
		//@ts-ignore
    fingerprint.push(navigator.cpuClass || navigator.platform || 'N/A');

    // Do similar for other device-specific attributes if needed

    // Join all the information
    return fingerprint.join('|');
}


export default function SpookHome() {
	const [options, setOptions] = useState<Participant[]>([])
	const loading = options.length === 0
	const [selection, setSelection] = useState<string | null>(null)
	const [voter, setVoter] = useState<string | null>(null)

	useEffect(() => {
		axios.get<{ participants: Participant[] }>('/api/spook').then((res) => {
			const data = res.data
			setOptions(data.participants)
		})
	}, [])

	const submit = async () => {
		await axios.post('/api/spook', {
			answer: selection,
			sentBy: voter,
			fingerPrint: generateDeviceFingerprint()
		})
		console.log('Submitted')
	}

	return (
		<div className="spookMain">

			<img alt="Jack o latern" src="/spook/jack.svg"></img>

			<h1>Spooky Halloween 2023</h1>

			<p>Best costume goes to:</p>
			<select onChange={(e) => setSelection(e.target.value)}>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}>{a.costume} ({a.name})</option>
				))}
			</select>
			<p>My name is:</p>
			<select onChange={(e) => setVoter(e.target.value)}>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}> {a.name}</option>
				))}
			</select>
			{loading 
				? (
					<div className='spookButton'>
						Loading...
					</div>
				)
				: (
					<div onClick={submit} className='spookButton'>
						Submit
					</div>
				)
			}
		</div>
	)
}