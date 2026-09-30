import { Button } from '@mui/material';
import { useState, useEffect } from 'react'

import { RiContrast2Fill, RiContrast2Line } from "react-icons/ri";

export default function ThemeToggle() {
  // Checking the last used theme
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Updating the theme when it changes
  useEffect(() => {
    const root = window.document.documentElement

    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <Button
      onClick={() => setIsDark(!isDark)}
      sx={{
        backgroundColor: 'var(--color-card-bg)',
        color: 'rgba(var(--alt-text), 0.8)',
        gap: 1,
        textTransform: 'none',
        padding: 0,
        minWidth: 0,
        minHeight: 0,
        height: 48,
        width: 90,
        borderRadius: 10,
        boxShadow: 3
      }}
    >
      {isDark ? <RiContrast2Fill style={{ fontSize: '20px' }} /> : <RiContrast2Line style={{ fontSize: '20px' }} />}
      {isDark ? 'Dark' : 'Light'}
    </Button>
  )
}
