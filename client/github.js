export async function getRepo(name) {
  const res = await fetch(`https://api.github.com/repos/pedsm/${name}`, 
    process.env.GH_AUTH 
    ? {
      headers: {
        Authorization: process.env.GH_AUTH
      }
    } 
  : {})
  return res.json() 
}