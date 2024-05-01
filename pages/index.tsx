import BentoGrid from '/components/bentoGrid'
import Title from '/components/title'

export default function Home() {
  return (
    <>
      <Title>Home</Title>
      <section className="main section">
          <h2 className="is-size-3">Hi, I'm Pedro</h2>
          <p>Developer, mentor, hacker, writer</p>
      </section>
      <BentoGrid />
    </>
  )
}
