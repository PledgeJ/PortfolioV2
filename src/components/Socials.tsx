import { Button } from '@mui/material';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className='flex flex-row gap-2'>
      <Button
        href="https://www.instagram.com/jacobpledge"
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          padding: 0,
          minWidth: 0,
          minHeight: 0,
          width: 48,
          height: 48,
          borderRadius: 10,
          boxShadow: 3
        }}
      >
        <FaInstagram style={{ fontSize: '25px', margin: 0, color: '#e1306c' }}/>
      </Button>

      <Button
        href="https://www.linkedin.com/in/pledgej"
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          padding: 0,
          minWidth: 0,
          minHeight: 0,
          width: 48,
          height: 48,
          borderRadius: 10,
          boxShadow: 3
        }}
      >
        <FaLinkedin style={{ fontSize: '25px', margin: 0, color: '#0077B5' }}/>
      </Button>

      <Button
        href="https://github.com/PledgeJ"
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          backgroundColor: 'var(--color-card-bg)',
          color: 'rgba(var(--alt-text), 0.8)',
          gap: 1,
          textTransform: 'none',
          padding: 0,
          minWidth: 0,
          minHeight: 0,
          width: 48,
          height: 48,
          borderRadius: 10,
          boxShadow: 3
        }}
      >
        <FaGithub style={{ fontSize: '25px', margin: 0 }}/>
      </Button>
    </div>
  )
}
