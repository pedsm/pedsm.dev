export function getApiUrl() {
  if(isLocal()) {
    return `http://${process.env.VERCEL_URL}/`
  }
  return `https://${process.env.VERCEL_URL}/`
}

export function isLocal() {
  return process.env.VERCEL != 1
}