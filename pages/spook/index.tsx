import { useState, useEffect } from 'react'
import axios from 'axios'
import { getVoted, markVote } from '/utils/voteLogic';
import { useRouter } from 'next/router';

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
	const router = useRouter()
	const [options, setOptions] = useState<Participant[]>([])
	const [loading, setLoading] = useState(true)
	const [selection, setSelection] = useState<string | null>(null)
	const [voter, setVoter] = useState<string | null>(null)

	const buttonEnabled = selection !== null && voter !== null && voter !== 'none'

	useEffect(() => {
		const voted = getVoted()
		if(voted === true) {
			router.push('/spook/done')
		}
		axios.get<{ participants: Participant[] }>('/api/spook').then((res) => {
			const data = res.data
			setOptions(data.participants)
			setSelection(data.participants[0].name)
			setLoading(false)
		})
	}, [])

	const submit = async () => {
		if(buttonEnabled === false) return
		setLoading(true)
		await axios.post('/api/spook', {
			answer: selection,
			sentBy: voter,
			fingerPrint: generateDeviceFingerprint()
		})
		markVote()
		router.push('/spook/done')
		setLoading(false)
	}

	return (
		<div className="spookMain">

			<img alt="Jack o latern" src="/spook/jack.svg"></img>

			<h1>Spooky Halloween 2023</h1>

			<p>My name is:</p>
			<select onChange={(e) => setVoter(e.target.value)}>
				<option className='option' value='none'>What's your name?</option>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}> {a.name}</option>
				))}
			</select>
			<p>Best costume goes to:</p>
			<select onChange={(e) => setSelection(e.target.value)}>
				{options.map((a, i) => (
					<option className="option" key={i} value={a.name}>{a.costume} ({a.name})</option>
				))}
			</select>
			{loading 
				? (
					<div className='spookButton disabled'>
						Loading...
					</div>
				)
				: (
					<div className={'spookButton ' + (buttonEnabled ? '' : 'disabled')} onClick={submit}>
						Submit
					</div>
				)
			}
		</div>
	)
}