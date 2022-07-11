import { useState, useEffect } from 'react'

export type GithubRepo = {
  name: string,
  description: string,
  html_url: string,
  id: string,
  stargazers_count: number
  open_issues_count: number
}

async function ghFetch<T>(url: string):Promise<T> {
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

export async function getRepo(name: string):Promise<GithubRepo> {
  return ghFetch<GithubRepo>(`https://api.github.com/repos/pedsm/${name}`)
}

export async function getReposFromUser(name: string):Promise<GithubRepo[]> {
  return ghFetch<GithubRepo[]>(`https://api.github.com/users/${name}/repos?per_page=100`)
}

export function useRepos(name: string) {
  const [repos, setRepos] = useState<GithubRepo[]>([])

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