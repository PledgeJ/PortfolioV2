import Header from '../components/Header'

import { Box, Typography, Button } from '@mui/material';

import { TbDrone } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";

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
          poster="src/assets/Cover/sunrise mountain.png"
        />

        {/* Intro panel */}
        <Box
          className="grid lg:grid-cols-2 gap-8 mx-4 sm:mx-12"
        >
          <Typography variant='h1' sx={{ fontSize: '2rem', marginTop: 5 }}>Hi, I'm Jacob!</Typography>

          {/* 1st box */}
          <Box
            className='col-start-1 row-start-2 col-span-2 lg:col-span-1'
            sx={{
              alignItems: 'center',
              justifyItems: 'center',
              gap: 4
            }}
          >
            <Box>
              <p>I'm a 2nd year computer science undergraduate at the University of Nottingham, and also a drone pilot specialising in building surveys and event filming.</p>
              <br/>
              <p>I'd like to hopefully get into the electronics or networking fields in the future</p>
            </Box>

            <br/>
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box
                component='img'
                sx = {{
                  borderRadius: '20px',
                  height: 220,
                }}
                alt='Me and my friends skiing'
                src='src/assets/Cover/ski.jpg'
              />    
            </Box>   

             
          </Box>

          {/* Drones */}
          <Box
            className='col-start-1 row-start-3 col-span-2 lg:col-span-1 lg:row-start-2'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4
            }}
          >
            {/* Line */}
            <Box 
              className='lg:mb-8 lg:order-3 lg:mt-4'
              sx={{
                width: '100%',
                height: 2,
                backgroundColor: 'white',
                borderRadius: 20,
                opacity: 0.2
              }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box
                component='img'
                sx = {{
                  borderRadius: '20px',
                  width: 400,
                }}
                alt='FPV Drone'
                src='src/assets/Cover/redFPVDrone.jpg'
              />
            </Box>

            <p>I started building and flying drones around October 2021, and have since worked on building surveys, and I then got the opportunity to work doing technical surveys of building facades</p>
          
            <Box 
              className='lg:hidden'
              sx={{
                width: '100%',
                height: 2,
                backgroundColor: 'white',
                borderRadius: 20,
                opacity: 0.2
              }}
            />
          </Box>

          {/* Offscript */}
          <Box
            className='col-start-1 col-span-2 lg:col-span-1 row-start-4 lg:col-start-2 lg:row-start-3'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              gap: 4,
            }}
          >
            <Box
              component='img'
              sx = {{
                borderRadius: '20px',
                width: {xs:150, md:170},
              }}
              alt='Authur and Aira by OffScript'
              src='src/assets/Cover/authur+aira.jpg'
            />

            <p>I'm a very visual person, who likes colours and anything that I think looks super cool. 
              An animator that I really love the style of is OffScript, who created the characters Aira and Aurthur</p>
            
          </Box>

          {/* Check out work */}
          <Box
            className='col-start-1 col-span-2 lg:col-span-1 row-start-5 lg:row-start-3'
          >
            <Box 
              className='mb-8'
              sx={{
                width: '100%',
                height: 2,
                backgroundColor: 'white',
                borderRadius: 20,
                opacity: 0.2
              }}
            />  

            <Typography variant='h2' sx={{ fontSize: '1.5rem', marginBottom: 3 }}>Check out my work:</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly'
              }}
            >
              <Button
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  width: '40%',
                  height: '100%',
                  backgroundColor: 'var(--color-card-bg)',
                  color: {xs:'var(--color-main-text)', md:'var(--color-alt-text)'},
                  borderRadius: 2,
                  '&:hover': {
                    color: 'var(--color-main-text)',
                    scale: 1.01
                  },
                }}
              >
                <TbDrone className='size-20'/>
                Drone work
              </Button>

              <Button
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  width: '40%',
                  height: '100%',
                  backgroundColor: 'var(--color-card-bg)',
                  color: {xs:'var(--color-main-text)', md:'var(--color-alt-text)'},
                  borderRadius: 2,
                  '&:hover': {
                    color: 'var(--color-main-text)',
                    scale: 1.01
                  },
                }}
              >
                <FaCode className='size-20'/>
                Projects
              </Button>
            </Box>

            <Box sx={{height: 100}}/>
          </Box>

        </Box>

      </Box>
    </>
  );
}
