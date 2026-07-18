import React, { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle'

const FloatingUtilities: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [dimScroll, setDimScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!dimScroll && window.scrollY > 400) {
        setDimScroll(true)
      } else if (dimScroll && window.scrollY <= 400) {
        setDimScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [dimScroll])

  return (
    // circle menu with theme switcher and scroll to top
    <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-2 items-center justify-center">
      <ThemeToggle />

      {/* Button to go to the top */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-card-bg border border-alt-text/20 shadow-lg text-base cursor-pointer transition-all duration-300 text-alt-text/80 hover:scale-102
          ${dimScroll ? 'opacity-100' : 'opacity-50 pointer-events-none'}
        `}
        aria-label="Scroll back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default FloatingUtilities
