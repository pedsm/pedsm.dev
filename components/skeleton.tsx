export default function skeleton({ height }: { height: number }) {
  const divHeight = height || 36 
  return (
    <div style={{height: divHeight}} className="skeleton"></div>
  )
}