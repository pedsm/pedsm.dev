import { getReposFromUser } from '/client/github'
import { twitterGet } from '/client/twitter'
import StatRoller from '/components/statRoller'

export default function numbers({ twitter, repos }) {
  const starCount = repos.reduce((a,b) => {
    return a + b.stargazers_count
  }, 0)

  return (
    <section className="section">
      <h1>Numbers</h1>
      <div className="numbers">
        <StatRoller number={starCount} description={'Github Stars'} url="https://github.com/pedsm" />
        <StatRoller number={repos.length} description={'GitHub Repos'} url="https://github.com/pedsm" />
        <StatRoller number={twitter.public_metrics.followers_count} description={'Twitter followers'} url="https://twitter.com/pedsm/" />
        <StatRoller number={twitter.public_metrics.tweet_count} description={'Tweets'} url="https://twitter.com/pedsm/" />
      </div>
    </section>
  )
}

export async function getStaticProps(ctx) {
  const [twitterUser, repos] = await Promise.all([
    twitterGet('https://api.twitter.com/2/users/by/username/pedsm?user.fields=public_metrics'),
    getReposFromUser('pedsm')
  ])

  return {
    props: {
      twitter: twitterUser.data,
      repos,
    }
  }
}