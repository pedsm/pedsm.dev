export function getApiUrl(): string {
  if(isLocal()) {
    return `http://${process.env.VERCEL_URL}/`
  }
  return `https://${process.env.VERCEL_URL}/`
}

export function isLocal(): boolean {
  return process.env.VERCEL !== '1'
}