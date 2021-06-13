import { useRepos } from '/client/github'
import StatRoller from '/components/statRoller'

export default function numbers() {
  const repos = useRepos('pedsm')
  const starCount = repos.reduce((a,b) => {
    return a + b.stargazers_count
  }, 0)
  const watcherCount = repos.reduce((a,b) => {
    return a + b.watchers_count
  }, 0)

  return (
    <section className="section">
      <h1>Numbers</h1>
      <div className="numbers">
        <StatRoller number={starCount} description={'GH stars'} />
        <StatRoller number={repos.length} description={'Public GH repos'} />
        <StatRoller number={watcherCount} description={'GH Watcher count'} />
      </div>
    </section>
  )
}