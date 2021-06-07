import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import marked from 'marked'
import Title from '/components/title'
import Skeleton from '../../components/skeleton'
import projects from '../../projects.json'

async function fetchMarkdown(url) {
  const res = await fetch(url)
  return res.text()
}

function LoadingPage() {
  return (
    <>
      <>Loading...</>
      <Skeleton height={49} />
      <Skeleton height={18} />
      <Skeleton height={18} />
    </>
  )
}

export default function ProjectView() {
  const [md, setMd] = useState()

  const router = useRouter()
  const { id } = router.query

  const project = projects.find(proj => proj.id === id)
  useEffect(() => {
    if (id == null) {
      return
    }
    fetchMarkdown(`https://raw.githubusercontent.com/pedsm/${id}/master/README.md`)
      .then((m) => setMd(m))
      .catch(console.error)
  }, [id])

  if (id == null) {
    return <section className="section">
      <LoadingPage></LoadingPage>
    </section>
  }


  return (
    <>
      <section className="section">
        {md == null
          ? (<LoadingPage></LoadingPage>)
          : (
            <>
              <Title>{project.id}</Title>
              <div className="ghContent" dangerouslySetInnerHTML={{
                __html: marked(md, {
                  baseUrl: project.github + '/raw/master/'
                })
              }}></div>
            </>
          )}
      </section>
    </>
  )
}
