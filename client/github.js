export async function getRepo(name) {
  const res = await fetch(`https://api.github.com/repos/pedsm/${name}`, {
    headers: {
      // TODO revoke this
      Authorization: process.env.GH_AUTH
    }
  })
  return res.json() 
}