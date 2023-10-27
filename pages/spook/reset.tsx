import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { getVoted, resetVote } from '/utils/voteLogic';

export default function SpookHome() {
	const router = useRouter()

	useEffect(() => {
		resetVote()
		console.log('Reset vote', getVoted())
		router.push('/spook')
	}, [])

	return (
		<div className="spookMain">

			<img alt="Jack o latern" src="/spook/jack.svg"></img>

			<h1>Spooky Halloween 2023</h1>

		</div>
	)
}