import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Redirect() {
    const router = useRouter()
    const url = router.query.url as string
    
    useEffect(() => {
        if (url && typeof url === 'string') {
            window.location.href = url
        }
    }, [router.query])

    return <section className="main section">
        <h1>Redirect</h1>
        <p>Redirecting you to {url}</p>
    </section>
}