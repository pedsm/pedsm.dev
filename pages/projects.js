import Title from '/components/title'
import Tag from '/components/tag'
import { getRepo } from '/client/github'
import Link from 'next/link'

import projJson from '../projects'

export default function Projects({ projects }) {
  return (
    <>
      <Title>Projects</Title>
      <section className="section">
        <div className="content">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((proj, i) => (
              <article className="project" key={i}>
                <div className="right">
                  <i className="fas fa-star"></i> {proj.stargazers_count}
                </div>
                <Link href={`/project/${proj.name}`}>
                  <div style={{cursor: 'pointer'}}>
                  <h3>
                    {proj.name}
                    {' '}
                    {proj.repo.tags.map((tag, i) => (<Tag key={i} tag={tag} />))}
                  </h3>
                  <p>{proj.description}</p>
                  </div>
                </Link>
                <div className="links">
                  {proj.env ? <a href={proj.env}>Try it</a> : ''}
                  {/* <a href={proj.html_url} target="_blank"><i className="fab fa-github fa-lg"></i></a> */}
                  <a href={proj.html_url} target="_blank">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const repos = await Promise.all(
    projJson.map(async (repo) => {
      const ghRepo = await getRepo(repo.id)
      return {
        repo,
        ...ghRepo
      }
    })
  )
  return {
    props: {
      projects: repos
    }
  }
}