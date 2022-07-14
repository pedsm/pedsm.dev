import { json } from "stream/consumers"

const token = process.env.TWITTER_BEARER_TOKEN 

export type TwitterUser = {
  id: number
  public_metrics: {
    followers_count: number,
    tweet_count: number
  }
}

export async function twitterGet(url: string): Promise<TwitterUser> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "pedsm.dev",
      "Authorization": `Bearer ${token}`,
    }
  })
  const json = await res.json() as { data: TwitterUser }
  return json.data
}