import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { RungneRequest, RungneResponse } from 'pages/api/rungne'
import { useEffect, useState } from 'react'

export default function Rungne() {
	const [code, setCode] = useState('')
	const [productLink, setProductLink] = useState('')
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		setCopied(false)
	}, [code, productLink])


	const { mutate, isPending, error, data } = useMutation({
		mutationKey: ['rungne', code],
		mutationFn: async (data: RungneRequest) => {
			console.log('requesting', data)
			const res = await axios.post<RungneResponse>('/api/rungne', data)
			console.log('response', res.data)
			return res.data
		}
	})

	useEffect(() => {
		if (error) {
			console.error(error)
		}
	}, [error])

	return <section className="main section">
		<h1>Rungne link generator</h1>

		<p>If you like the tool drop me a follow and like on instagram</p> 
		<a style={{padding: '10px', backgroundImage: 'linear-gradient(to right top, rgb(253, 141, 50), rgb(163, 7, 186))', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center'}} href="https://www.instagram.com/pedsm.betamax/" target="_blank" rel="noopener noreferrer">pedsm.betamax</a>

		<input type="text" placeholder="Link to product (e.g. https://rungne.com/products/maglock-75g) leave blank if you just want the rungne main page" value={productLink} onChange={(e) => setProductLink(e.target.value)} />
		<input type="text" placeholder="Your affiliate code (e.g. CRIMPS)" value={code} onChange={(e) => setCode(e.target.value)} />
		<button disabled={isPending} onClick={() => mutate({ productLink, code })}>{isPending ? 'Generating...' : 'Generate'}</button>

		{data && <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
			<h2>Generated link</h2>
			<p>As I said before no guarantee this works, but it probably will work.</p>
			<a style={{textDecoration: 'underline'}} href={data.affiliateProductLink} target="_blank" rel="noopener noreferrer">{data.affiliateProductLink}</a>
			<button onClick={() => {
				navigator.clipboard.writeText(data.affiliateProductLink)
				setCopied(true)
			}}>{copied ? 'Copied!' : 'Copy'}</button>
		</div>}

		{error && <div>
			<p>Something went wrong, make sure your code is correct otherwise, reach out to pedsm.betamax on the Rungne discord and maybe I can help you out.</p>
		</div>}

		<p>This is a random tool I made for myself so I can't guarantee it will work 100% of the time, but it should work most of the time. Test it out yourself by opening the link in a new incognito window and seeing if the discount code is auto applied on checkout.</p>
	</section>
}
