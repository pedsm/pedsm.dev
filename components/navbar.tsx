import { useRouter } from 'next/router'
import Link from 'next/link'

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
    </nav>
  )
}