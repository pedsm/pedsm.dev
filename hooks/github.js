import { useEffect, useState } from "react"

async function fetchMarkdown(url) {
  const res = await fetch(url)
  return res.text()
}

export default function useRepo(repoId) {
  const [repo, setRepo] = useState({
    md: null,
  })

  useEffect(() => {
    if(repoId == null) {
      return
    }
    console.debug(`Fetching repo ${repoId}`)
    fetchMarkdown(`https://raw.githubusercontent.com/pedsm/${repoId}/master/README.md`)
      .then((m) => setRepo({
        md: m
      }))
      .catch(console.error)
  }, [repoId])

  return repo
}