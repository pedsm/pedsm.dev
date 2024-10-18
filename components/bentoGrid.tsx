export default function BentoGrid() {

	return (
		<div className="section bento">
			<a className="monopoly item" href="https://monopoly.pedsm.dev/" target="_blank">
				<h3 className="flicker">Monopoly mastermind</h3>
				<p>The perfect time waster</p>
			</a>
			<a href="https://pl-poker.io" target="_blank" className="poker item">
				<div className="canvas">
					<div className="deck-card card-throw delay-100">7</div>
					<div className="deck-card card-throw delay-200">7</div>
					<div className="deck-card card-throw delay-300">5</div>
				</div>
				<div className="bottom">
					<h3>Pl poker</h3>
					<p>The best online planning poker</p>
				</div>
			</a>
			<a href="https://project-guilds.vercel.app" target="_blank" className="guilds item">
				<div>
					<h3>Project guilds</h3>
					<p>My overly ambitious browser game</p>
				</div>
			</a>
		</div>
	)
}