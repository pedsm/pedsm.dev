import { NextApiRequest, NextApiResponse } from 'next'

export type RungneRequest = {
	productLink: string
	code: string
}

export type RungneResponse = {
	success: boolean
	affiliateProductLink: string
}

const getProductRedirect = (productLink: string) => {
	const url = new URL(productLink)
	const queryParams = new URLSearchParams()
	queryParams.set('redirect', url.pathname)

	return queryParams
}

const baseRungneLink = 'https://rungne.com/discount/'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Only allow POST requests


	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	try {
		console.log('Request body', req.body)
		const { productLink, code } = req.body as RungneRequest

		// Validate required fields
		if (!code) {
			return res.status(400).json({ success: false, message: 'Something went wrong' })
		}

		if(productLink == null || productLink == '') {
			console.log('No product link provided, generating direct link')
			const rungneResponse: RungneResponse = {
				success: true,
				affiliateProductLink: `${baseRungneLink}${code}`,
			}

			return res.status(200).json(rungneResponse)
		}

		const productRedirect = getProductRedirect(productLink)
		const rungneResponse: RungneResponse = {
			success: true,
			affiliateProductLink: `${baseRungneLink}${code}/?${productRedirect.toString()}`,
		}


		return res.status(200).json(rungneResponse)

	} catch (error) {
		console.error('Error processing rungne request:', error)
		return res.status(500).json({ error: 'Internal server error' })
	}
}
