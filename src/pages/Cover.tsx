import Header from '../components/Header'

import { Box, Typography } from '@mui/material';

export default function Cover() {
  return (
    <>
      <Header />
      
      <Box sx={{
        width: '100%',
        mx: 'auto',
        maxWidth: {
          xs: '100%',
          lg: '1200px',
        },     
        maxHeight: {
          xs: '400px',
          md: '70vh', 
        },
        marginTop: {sm: 0, md: 3 },
        px: {sm: 0, md: 3 },
      }}>

        {/* Hero video */}
        <Box 
          component='video'
          src='/videos/coverVideoV3.webm'
          muted
          playsInline
          autoPlay
          loop
          sx={{
            width: '100%',
            borderRadius: { xs: 0, md: 3 },
            boxShadow: 6,
          }}
        />

        {/* Intro panel */}
        <Box>
          <Typography variant='h1' sx={{ fontSize: '2rem', marginTop: 5 }}>Hi, I'm Jacob!</Typography>
          <p>I'm a 2nd year computer science undergrad, and also a drone pilot specialising in building surveys and event filming</p>
          <p>I'd like to hopefully get into the electronics or networking fields in the future</p>

          <p>I find that I'm a very visual person, who loves colours and anything that I think looks super cool</p>
        </Box>

      </Box>
    </>
  );
}
