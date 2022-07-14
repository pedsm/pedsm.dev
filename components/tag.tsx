export enum ProjectTag {
  OSS="OSS",
  DESKTOP="Desktop",
  WEB="Web",
}

export default function Tag({tag}: {tag: ProjectTag}) {

  return (
    <span className={`tag ${tag}`}>{tag}</span>
  )

}