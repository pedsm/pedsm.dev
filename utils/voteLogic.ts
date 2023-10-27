export function markVote() {
	localStorage.setItem('voted', 'true')
}

export function resetVote() {
	localStorage.setItem('voted', 'false')
}

export function getVoted() {
	if (localStorage) {
		return localStorage.getItem('voted') == 'true'
	}
	return false
}