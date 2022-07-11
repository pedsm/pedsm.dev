import { useState, useEffect } from 'react'

async function ghFetch(url: string) {
  const res = await fetch(url,
    process.env.GH_AUTH 
    ? {
      headers: {
        Authorization: process.env.GH_AUTH
      }
    } 
    : {}
  )
  return res.json()
}

export async function getRepo(name: string) {
  return ghFetch(`https://api.github.com/repos/pedsm/${name}`)
}

export async function getReposFromUser(name: string) {
  return ghFetch(`https://api.github.com/users/${name}/repos?per_page=100`)
}

export function useRepos(name: string) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
      getReposFromUser(name)
        .then((repos) => { 
          setRepos(repos) 
        })
        .catch(console.error)
    }, []
  )

  return repos
}