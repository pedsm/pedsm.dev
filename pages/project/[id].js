import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Title from '/components/title'
import { getRepo } from '/client/github'
import remarkUnwrapImages from 'remark-unwrap-images'
import projects from '../../projects.json'
import React from 'react'

export default function ProjectView({ md, project, repo, imageMap }) {
  const components = {
    img: (node) => {
      const imageDetails = imageMap[node.src]
      return <Image
        placeholder="blur"
        width={imageDetails.width}
        height={imageDetails.height}
        src={imageDetails.url}
        blurDataURL={imageDetails.smallImg}
        alt={node.alt}>
      </Image>
    },
  }

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
          {' '}
          <a href={project.github} target='_blank'><i className='fab fa-github'></i></a>
        </p>
      </div>

      <ReactMarkdown
        className="ghContent"
        components={components}
        linkTarget="_blank"
        remarkPlugins={[remarkUnwrapImages]}
      >{md}</ReactMarkdown>
      <p style={{ textAlign: 'right' }}>
        <a href={project.github} target="_blank">Check it on GitHub</a>
      </p>
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
  const appURL = process.env.VERCEL_URL
  const { id } = context.params
  console.log('Buidling:', id)
  console.log(appURL)

  const project = projects.find(proj => proj.id == id)
  const res = await fetch(`https://raw.githubusercontent.com/pedsm/${id}/master/README.md`)
  const md = await res.text()
  const repo = await getRepo(id)
  const baseUrl = project.github + '/raw/master/'
  const imageMap = {}
  const IMG_URL_REGEX = /!\[.*\]\((?<url>.*)\)/gm
  let match;
  while ((match = IMG_URL_REGEX.exec(md)) !== null) {
    const { url } = match.groups
    imageMap[url] = null
  }

  //Optimise this to promises in a nicer way
  await Promise.all(Object.keys(imageMap).map(async (url) => {
    const res = await fetch(`${appURL}api/imageSize?url=${baseUrl}${url}`)
    const imageDetails = await res.json()
    imageMap[url] = imageDetails
  }))

  return {
    props: {
      md,
      project,
      repo,
      baseUrl,
      imageMap,
    },
    revalidate: 10,
  }
}