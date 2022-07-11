import imageSize from 'image-size'
import jimp from 'jimp'

export default async function calculateImageSize(url:string) {
  const imageRes = await fetch(url)
  const rawImg = await imageRes.arrayBuffer()
  const buffer = Buffer.from(rawImg)
  const size = imageSize(buffer)
  const smallImg = (await jimp.read(buffer)).resize(size.width!/10, size.width!/10)
  return {
    url,
    ...size,
    smallImg: await smallImg.getBase64Async(jimp.AUTO.toString())
  }
}