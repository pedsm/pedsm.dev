import Head from 'next/head'

export default function Title({children}) {
  return (
    <Head>
      <title>{children} - pedsm.dev</title>
    </Head>
  )

}