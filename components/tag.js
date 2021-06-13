const tagMap = {
  oss: "OSS",
  desktop: "Desktop",
  web: "Web"
}

export default function Tag({tag}) {

  return (
    <span className={`tag ${tag}`}>{tagMap[tag]}</span>
  )

}