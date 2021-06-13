import { useState, useEffect } from 'react'

export default function StatRoller({ number, description, url }) {
  const [num, setNum] = useState(0)
  const growRate = number/60;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(num < number) {
        setNum(num + growRate)
      }
    }, 16)
    return () => {
      clearTimeout(timeout)
    }
  }, [num, number])

  return (
    <a className="right" href={url}>
      <div className="stat">
        <span>{Math.round(num)}</span>
        <p>{description}</p>
        <i className="right fas fa-external-link-alt"></i>
      </div>
    </a>
  )
}