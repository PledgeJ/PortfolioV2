import React, { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle'

import { Fab } from '@mui/material';

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
    <>
      {/* circle menu with theme switcher and scroll to top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-2 items-center justify-center">
        <ThemeToggle />

        {/* Button to go to the top */}
        <Fab
          onClick={scrollToTop}
          sx={{
            pointerEvents: dimScroll ? 'auto' : 'none',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid',
            borderColor: 'var(--color-border-line)',
            boxShadow: 3,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
            color: 'var(--color-alt-text)',
            opacity: dimScroll ? 1 : 0.5,
            '&:hover': {
              transform: 'scale(1.02)',
              backgroundColor: 'var(--color-card-bg)'
            },
          }}
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </Fab>
      </div>
    </>
  )
}

export default FloatingUtilities
