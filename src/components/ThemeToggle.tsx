import React, { useState, useEffect } from 'react'

import { RiContrast2Fill, RiContrast2Line } from "react-icons/ri";

const ThemeToggle: React.FC = () => {
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
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 rounded-full border border-border-line bg-card-bg px-4 py-2 text-sm font-medium text-main-text hover:border-accent-green transition-all cursor-pointer"
    >
      {isDark ? (
        <><span className="text-xl"><RiContrast2Fill /></span><span>Dark</span></>
      ) : (
        <><span className="text-xl"><RiContrast2Line /></span><span>Light</span></>
      )}
    </button>
  )
}

export default ThemeToggle
