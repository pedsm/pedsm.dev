const token = process.env.TWITTER_BEARER_TOKEN 

export async function twitterGet(url: string) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "pedsm.dev",
      "Authorization": `Bearer ${token}`,
    }
  })
  return res.json()
}