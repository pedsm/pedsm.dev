import Head from 'next/head'
import { ReactNode } from 'react-markdown'

export default function Title({children}: {children: ReactNode}) {
  return (
    <Head>
      <title>{children?.toString()} - pedsm.dev</title>
    </Head>
  )

}