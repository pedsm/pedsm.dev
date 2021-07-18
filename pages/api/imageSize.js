import imageSize from 'image-size'
import jimp from 'jimp'

export default async function handler(req, res) {
  const { url } = req.query
  
  try {
    const imageRes = await fetch(url)
    const rawImg = await imageRes.arrayBuffer()
    const buffer = Buffer.from(rawImg)
    const size = imageSize(buffer)
    const smallImg = (await jimp.read(buffer)).resize(size.width/10, size.width/10)
    return res.status(200).json({
      url,
      ...size,
      smallImg: await smallImg.getBase64Async(jimp.AUTO)
    })
  } catch(e) {
    console.error(e)
    return res.status(400).json({
      error: "Bad request"
    })
  }


}