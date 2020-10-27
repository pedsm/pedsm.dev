import Projects from '../components/projects'
export default function Home() {
  return (
    <>
    <section className="main section">
      <div className="content">
        <h2 className="is-size-3">Hi, I'm Pedro</h2>
        <p>Full-stack developer, speaker, mentor, hacker, technical writer</p>
        <p>Currently based in Birmingham, UK</p>
      </div>
    </section>
    <Projects />
    </>
  )
}