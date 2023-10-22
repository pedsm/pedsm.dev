const options = [
	{ name: "Mika", costume: "Remy" },
	{ name: "Pedro", costume: "Alfredo Linguini" },

]

export default function SpookHome() {
	return (
		<div className="spookMain">
			<h1>Spooktacular Halloween 2023</h1>
			<select>
				{options.map((a,i) => (
					<option className="option" key={i}>{a.costume} ({a.name})</option>
				))}
			</select>
		</div>
	)
}