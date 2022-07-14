import { useState, useEffect } from 'react'

type StatRollerProps = {
  number: number,
  description: string,
  url: string
}

export default function StatRoller({ number, description, url }: StatRollerProps) {
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
    <a target="_blank" href={url}>
      <div className="card">
        <span className="big">{Math.round(num)}</span>
        <p>{description}</p>
        <i className="right fas fa-external-link-alt"></i>
      </div>
    </a>
  )
}