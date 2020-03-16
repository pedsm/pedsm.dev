const projects = [
  {
    name: "iemanja",
    github: "https://github.com/pedsm/iemanja",
    description: "A desktop mermaid editor",
    img: "https://raw.githubusercontent.com/pedsm/iemanja/master/.github/iemanja1.png",
  },
  {
    name: "Safe postcode",
    github: "https://github.com/pedsm/safePostcode",
    description: "Is my postcode safe?",
    env:"https://safepostcode.pedsm.now.sh/",
    img: "https://github.com/pedsm/safePostcode/raw/master/.github/safepostcode.png",
  }
]
export default function Projects() {
  return (
    <section className="section">
      <h2 className="is-size-3">Projects</h2>
      {projects.map((proj, i) => (
        <article className="project" key={i}>
          <img className="is-1by1" src={proj.img} height="200px" loading="lazy"></img>
          <div className="info">
            <h3 className="is-size-4">{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.env ? <a href={proj.env}>Try it</a>: ''}
            <br></br>
            <a href={proj.github}>GitHub</a>
          </div>
        </article>
      ))}
    </section>
  )
}