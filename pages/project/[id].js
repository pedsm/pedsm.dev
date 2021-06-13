import marked from 'marked'
import Title from '/components/title'
import { getRepo } from '/client/github'
import projects from '../../projects.json'

export default function ProjectView({ md, project, repo }) {
  const baseUrl = project.github + '/raw/master/'

  return (
    <section className="section">
      <Title>{project.id}</Title>
      <div className="right-data">
        <p>
          <i className={`fas fa-star`}></i>
          {' '}
          {repo.stargazers_count}
          {' '}
          <i className={`fas fas fa-exclamation-circle`}></i>
          {' '}
          {repo.open_issues_count}
        </p>
      </div>

      <div className="ghContent" dangerouslySetInnerHTML={{
        __html: marked(md, {
          baseUrl,
          gfm: true
        })
      }}></div>
    </section>
  )
}

export function getStaticPaths() {
  const routes = {
    paths: projects.map(proj => ({
      params: { id: proj.id }
    })),
    fallback: false,
  }
  return routes
}

export async function getStaticProps(context) {
  const { id } = context.params
  console.log('Buidling:', id)

  const project = projects.find(proj => proj.id == id)
  const res = await fetch(`https://raw.githubusercontent.com/pedsm/${id}/master/README.md`)
  const md = await res.text()
  const repo = await getRepo(id)

  return {
    props: {
      md,
      project,
      repo,
      baseUrl: project.github + '/raw/master/'
    },
    revalidate: 10,
  }
}