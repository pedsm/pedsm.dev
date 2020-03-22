import projects from '../projects'

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      {projects.map((proj, i) => (
        <article className="project" key={i}>
          <img src={proj.img} height="200px"></img>
          <div className="info">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <div className="links">
              {proj.env ? <a href={proj.env}>Try it</a>: ''}
              <a href={proj.github}>GitHub</a>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}