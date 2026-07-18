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
      className="flex items-center gap-2 pointer-events-auto w-24 px-4 h-12 justify-center rounded-full bg-card-bg border border-alt-text/20 shadow-lg text-base cursor-pointer transition-all duration-300 active:scale-95 text-alt-text/80 hover:scale-102"
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
