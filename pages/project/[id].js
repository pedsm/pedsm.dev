import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import marked from 'marked'
import projects from '../../projects.json'

async function fetchMarkdown(url) {
  const res = await fetch(url)
  return res.text()
}

export default function ProjectView() {
  const [md, setMd] = useState(null)

  const router = useRouter()
  const { id } = router.query

  const project = projects.find(proj => proj.id === id)
  console.log(project)
  useEffect(() => {
    fetchMarkdown('https://raw.githubusercontent.com/pedsm/safePostcode/master/README.md')
      .then((m) => setMd(m))
      .catch(console.error)
  }, [])


  return (
    <>
      <section className="section">
        <h2>{project.name}</h2>
        {/* <div dangerouslySetInnerHTML={{
          __html: marked(md, {
            baseUrl: project.github
          })
        }}></div> */}
      </section>
    </>
  )
}
