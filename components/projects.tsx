import Tag from './tag'
import projects from '../projects'

export default function Projects() {
  return (
    <section className="section">
      <div className="content">
        <h2>Projects</h2>
        <div className="projects">
        {projects.map((proj, i) => (
          <article className="project" key={i}>
            <div className="info">
              <h3>{proj.id}</h3>
              <p>{proj.description}</p>
              <div className="links">
                {proj.env ? <a href={proj.env}>Try it</a> : ''}
                <a href={proj.github}>GitHub</a>
              </div>
              {proj.tags.map(tag => (<Tag tag={tag}/>))}
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}