import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getReposFromUser, GithubRepo } from '/client/github'
import { twitterGet, TwitterUser } from '/client/twitter'
import StatRoller from '/components/statRoller'
import Title from '/components/title'

export default function numbers({ twitter, repos }: { twitter: TwitterUser, repos: GithubRepo[] }) {
  const starCount = repos.reduce((a,b) => {
    return a + b.stargazers_count
  }, 0)

  return (
    <section className="section">
      <Title>Numbers</Title>
      <h2>Numbers</h2>
      <div className="numbers">
        <StatRoller number={starCount} description={'Github Stars'} url="https://github.com/pedsm" />
        <StatRoller number={repos.length} description={'GitHub Repos'} url="https://github.com/pedsm?tab=repositories" />
        <StatRoller number={twitter.public_metrics.followers_count} description={'Twitter followers'} url="https://twitter.com/pedsm/followers" />
        <StatRoller number={twitter.public_metrics.tweet_count} description={'Tweets'} url="https://twitter.com/pedsm/" />
      </div>
    </section>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const [twitterUser, repos] = await Promise.all([
    twitterGet('https://api.twitter.com/2/users/by/username/pedsm?user.fields=public_metrics'),
    getReposFromUser('pedsm')
  ])

  return {
    props: {
      twitter: twitterUser,
      repos,
    },
    revalidate: 10,
  }
}