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
        <div style={{ justifyContent: 'space-around' }} className="level-item">
          <div className="menu-item">
            <Link href="/"><a className="is-size-5">Home</a></Link>
          </div>
          <div className="menu-item">
            <Link href="/projects"><a className="is-size-5">Projects</a></Link>
          </div>
          <div className="menu-item">
            <Link href="/about"><a className="is-size-5">About</a></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}