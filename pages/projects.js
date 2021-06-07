import projects from '../projects'
import Head from 'next/head'
import Tag from '../components/tag'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - pedsm.dev</title>
      </Head>
      <section className="section">
        <div className="content">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((proj, i) => (
              <article className="project" key={i}>
                <h3>
                  <Link href={`/project/${proj.id}`}>{proj.name}</Link>
                  {' '}
                  {proj.tags.map((tag, i) => (<Tag key={i} tag={tag} />))}
                </h3>
                <p>{proj.description}</p>
                <div className="links">
                  {proj.env ? <a href={proj.env}>Try it</a> : ''}
                  <a href={proj.github}>GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}