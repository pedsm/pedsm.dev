import About from '/components/about'

export default function footer() {
  return (
    <footer className="section footer">
      <p>
        pedsm.dev is built by <a href="https://github.com/pedsm">Pedro Mendonça</a>, using <a href="https://nextjs.org/">Next.js</a> and deployed with <a href="https://vercel.com/">Vercel</a>
      </p>
      <About />
    </footer>
  )
}