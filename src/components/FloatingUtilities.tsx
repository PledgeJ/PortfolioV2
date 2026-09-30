import { Fab, Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import ThemeToggle from '../components/ThemeToggle'
import Socials from './Socials';

export default function FloatingUtilities() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [dimScroll, setDimScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

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
  }, [dimScroll]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='hidden lg:flex gap-2'>
          <ThemeToggle />
        </div>

        <div className="flex lg:hidden items-center relative">
          {/* Sliding Part */}
          <div
            className={`flex flex-row gap-1.5 sm:gap-2 items-center transition-all duration-300 ease-out origin-right ${
              isOpen
                ? 'opacity-100 translate-x-0 max-w-125 pointer-events-auto mr-2'
                : 'opacity-0 translate-x-6 max-w-0 pointer-events-none mr-0 overflow-hidden'
            }`}
          >
            <Socials />
            <ThemeToggle />
          </div>

          {/* Toggle Button */}
          <Fab
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              width: 48,
              height: 48,
              backgroundColor: 'var(--color-card-bg)',
              border: '1px solid',
              borderColor: 'var(--color-border-line)',
              boxShadow: 3,
              color: 'var(--color-alt-text)',
              '&:hover': {
                backgroundColor: 'var(--color-card-hover)',
              },
              '&:active': {
                backgroundColor: 'var(--color-card-bg)',
                boxShadow: 3,
              },
            }}
            aria-label="Toggle utility menu"
          >
            {isOpen ? (
              <IoClose style={{ fontSize: '22px' }} />
            ) : (
              <HiDotsVertical style={{ fontSize: '20px' }} />
            )}
          </Fab>
          </div>
        </Box>

        <Box
          className="right-21 lg:right-31.25"
          sx={{
            position: 'fixed',
            bottom: 24,
            zIndex: 1290,
            transition: (theme) =>
              theme.transitions.create(['opacity', 'transform'], {
                duration: 300,
              }),
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? 'scale(0.8)' : 'scale(1)',
            pointerEvents: isOpen ? 'none' : 'auto',
          }}
        >
          {/* Button to go to the top */}
          <Fab
            onClick={scrollToTop}
            sx={{
              pointerEvents: dimScroll ? 'auto' : 'none',
              width: 48,
              height: 48,
              display: isOpen ? 'none' : 'flex',
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
              '&:active': {
                backgroundColor: 'var(--color-card-bg)',
                boxShadow: 3,
              },
            }}
            aria-label="Scroll back to top"
          >
            <FaArrowUp />
          </Fab>
        </Box>
    </>
  )
}
