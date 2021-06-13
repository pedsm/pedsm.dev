import Title from '/components/title'
import Link from 'next/link'

export default function error() {
  return (
    <section className="section">
      <Title>Oops...</Title>
      <h1 className="is-size-1">Oops...</h1>
      <p>Something went wrong <Link href="/">Go home</Link></p>
    </section>
  )
}