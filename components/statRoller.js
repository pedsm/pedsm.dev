import { useState, useEffect, useRef } from 'react'

export default function StatRoller({ number, description }) {
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
    <div className="stat">
      <span>{Math.round(num)}</span>
      <p>{description}</p>
    </div>
  )
}