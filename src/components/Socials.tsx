import { Fab } from '@mui/material';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className='flex flex-row gap-2'>
      <Fab
        href="https://www.instagram.com/jacobpledge"
        target='_blank'
        rel='noopener noreferrer'
        variant="extended"
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'var(--color-card-hover)',
          },
        }}
      >
        <FaInstagram style={{ fontSize: '25px', margin: 0, color: '#e1306c' }}/>
      </Fab>

      <Fab
        href="https://www.linkedin.com/in/pledgej"
        target='_blank'
        rel='noopener noreferrer'
        variant="extended"
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'var(--color-card-hover)',
          },
          '&:active': {
            backgroundColor: 'var(--color-card-bg)',
            boxShadow: 3,
          },
        }}
      >
        <FaLinkedin style={{ fontSize: '25px', margin: 0, color: '#0077B5' }}/>
      </Fab>

      <Fab
        href="https://github.com/PledgeJ"
        target='_blank'
        rel='noopener noreferrer'
        variant="extended"
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'var(--color-card-hover)',
          },
          '&:active': {
            backgroundColor: 'var(--color-card-bg)',
            boxShadow: 3,
          },
        }}
      >
        <FaGithub style={{ fontSize: '25px', margin: 0 }}/>
      </Fab>
    </div>
  )
}
