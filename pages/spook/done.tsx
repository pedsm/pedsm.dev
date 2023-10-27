import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { getVoted, resetVote } from '/utils/voteLogic';

export default function SpookHome() {
	const router = useRouter()

	useEffect(() => {
		if(getVoted() === false) {
			router.push('/spook')
		}
	}, [])

	return (
		<div className="spookMain">

			<img alt="Jack o latern" src="/spook/jack.svg"></img>

			<h1>Spooky Halloween 2023</h1>

			<p style={{textAlign: 'center', width: '100%'}}>Thank you!</p>
			<p style={{textAlign: 'center', width:'100%'}}>You have voted</p>

		</div>
	)
}