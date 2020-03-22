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
  // {
  //   path: '/about', 
  //   name: 'About'
  // }
]

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="level">
      <div className="level-left">
        <h1 className="is-size-3">
          <Link href="/">
            <a>pedsm.dev{router.pathname}</a>
          </Link>
        </h1>
      </div>
      <div className="level-right">
        <div style={{ justifyContent: 'space-around' }} className="level-item">
          {links.map(link => (
            <div className="menu-item">
              <Link href={link.path}>
                <a className={`is-size-5${router.pathname === link.path ? ' is-active': ''}`}>
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