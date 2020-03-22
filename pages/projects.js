import projects from '../projects'

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