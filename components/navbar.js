import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="level">
      <div className="level-left">
        <h1 className="is-size-3">
          <Link href="/">
            <a>pedsm.dev</a>
          </Link>
        </h1>
      </div>
      <div className="level-right">
        <div className="level-item">
          <Link href="/"><a className="is-size-5 has-text-weight-bold">Home</a></Link>
        </div>
        <div className="level-item">
          <Link href="/about"><a className="is-size-5 has-text-weight-bold">About</a></Link>

        </div>
      </div>
    </nav>
  )
}