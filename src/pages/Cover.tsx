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
            // boxShadow: 6, (L performance)
          }}
          poster="src/assets/sunrise mountain.png"
        />

        {/* Intro panel */}
        <Box>
          <Typography variant='h1' sx={{ fontSize: '2rem', marginTop: 5 }}>Hi, I'm Jacob!</Typography>
          <br/>
          <p>I'm a 2nd year computer science undergrad, and also a drone pilot specialising in building surveys and event filming</p>
          <p>I'd like to hopefully get into the electronics or networking fields in the future</p>
          <br/>
          <p>I started building and flying drones around October 2021, and have since worked on building surveys and </p>
          <p>I then got the opportunity to work doing technical surveys of building facades</p>
          <br/>
          <p>I find that I'm a very visual person, who loves colours and anything that I think looks super cool</p>
          <p>An animator that I really like is OffScript, who created Aira and Aurthur</p>
          <Box
            component='img'
            sx = {{
              borderRadius: '30px',
              width: 200,
            }}
            alt='Authur and Aira by OffScript'
            src='src\assets\authur+aira.jpg'
          />

          <Box
            component='img'
            sx = {{
              borderRadius: '30px',
              height: 200,
            }}
            alt='Me and my friends skiing'
            src='src\assets\ski.jpg'
          />
          
        </Box>

      </Box>
    </>
  );
}
