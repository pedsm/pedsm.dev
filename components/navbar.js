import { useRouter } from 'next/router'
import Link from 'next/link'

const links = [
  {
    path: '/', 
    name: 'Home'
  },
  {
    path: '/projects', 
    name: 'Projects'
  },
  {
    path: '/numbers', 
    name: 'Numbers'
  }
]

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="menu">
      <div>
        <Link href="/">
          <h1 style={{cursor: 'pointer'}}>
              pedsm.dev
          </h1>
        </Link>
      </div>
      <div>
        <div style={{ justifyContent: 'space-around' }} className="links">
          {links.map((link, i) => (
            <div key={i} className="menu-item">
              <Link href={link.path}>
                <a className={`${router.pathname === link.path ? ' is-active': ''}`}>
                  {link.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}