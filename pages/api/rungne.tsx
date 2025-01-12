import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export type RungneRequest = {
  productLink: string
  code: string
}

export type RungneResponse = {
  success: boolean
  affiliateProductLink: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
		console.log('Request body', req.body)
    const { productLink, code } = req.body as RungneRequest

    // Validate required fields
    if (!productLink || !code) {
      return res.status(400).json({ success: false, message: 'Something went wrong' })
    }
		console.log('Going to fetch code')
		const response = await axios.get(`https://rungne.com/${code}`, {
			maxRedirects: 5
		})
		const resultingUrl = response.request.res.responseUrl
		const queryParams = new URLSearchParams(resultingUrl.split('?')[1])
		if(queryParams.get('snowball') == null) {
			return res.status(400).json({ error: 'We couldn\'t make a link for you make sure you entered a valid affiliate code.' })
		}

		console.log('Code fetched', queryParams)

		const productUrl = new URL(productLink)
		for (const [key, value] of queryParams.entries()) {
			productUrl.searchParams.set(key, value)
		}
		console.log('Product URL', productUrl.toString())

		const rungneResponse: RungneResponse = {
			success: true,
			affiliateProductLink: productUrl.toString()
		}
    return res.status(200).json(rungneResponse)

  } catch (error) {
    console.error('Error processing rungne request:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
