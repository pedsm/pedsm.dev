import { useRouter } from 'next/router'
import Link from 'next/link'

const links = [
  {
    path: '/', 
    name: 'Home'
  }, {
    path: '/projects', 
    name: 'Projects'
  }, 
  {
    path: '/about', 
    name: 'About'
  }
]

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="menu">
      <div>
        <h1>
            pedsm.dev{router.pathname}
        </h1>
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