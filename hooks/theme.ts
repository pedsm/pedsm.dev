import {useCallback, useEffect, useState} from 'react'

export function useTheme(fallBackTheme='dark') {
  const [theme, setTheme] = useState(fallBackTheme)
  if(process.browser) {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')
    useEffect(() => {
     setTheme(matcher.matches ? 'dark' : 'light')
    }, [])
    matcher.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    })
  }
  return theme
}