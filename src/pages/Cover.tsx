import { Header } from '../components/Header'

import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { TbDrone } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { ProjectBox } from '../components/ProjectBox';

export default function Cover() {
  return (
    <>
      <Header />

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
          maxHeight: '40vh',
          objectFit: 'cover'
        }}
        poster="/cover/sunrise mountain.png"
      />

      <Box sx={{
        width: '100%', pl: 2, pr: 2, mx: '2', justifyContent: 'center',
        display: 'inline-flex', flexWrap: 'wrap', gap: 4.5, mt: 5
      }}>

        {/* Intro */}
        <ProjectBox 
          title={"Hi, I'm Jacob!"}
          media={{type: 'img', path:"/cover/ski.webp"}}
          outlineColour={"--color-accent-green"}
        >
          <Typography sx={{ my: 1.7 }}>
            I'm a 2nd year computer science undergraduate at the University of Nottingham, and also a drone pilot 
            specialising in building surveys and event filming. I'd like to hopefully get into the electronics or
            networking fields in the future
          </Typography>
        </ProjectBox>

        {/* Drone */}
        <ProjectBox 
          title={"Drones"} 
          media={{type: 'img', path:"/cover/redFPVDrone.webp"}}
          outlineColour={"--color-accent-green"}
        >
          <Typography sx={{ my: 1.7 }}>
            I started building and flying drones around October 2021, and have since worked on building surveys, and I
            then got the opportunity to work doing technical surveys of building facades
          </Typography>
        </ProjectBox>

        {/* OffScript */}
        <ProjectBox 
          media={{type: 'img', path:"/cover/arthur.webp"}}
          outlineColour={"--color-accent-green"}
        >
          <Typography sx={{ my: 1.7 }}>
            I'm a very visual person, who likes colours and anything that I think looks super cool. 
            An animator that I really love the style of is OffScript, who created the characters Aira and Aurthur
          </Typography>
        </ProjectBox>

        {/* Check out work */}
        <Box sx={{ width: '100%', mb: 12, maxWidth: 470 }}>
          <Typography variant='h2' sx={{ fontSize: '1.4rem', mt: 5, mb: 2, ml: 0.5}}>Check out my work:</Typography>

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
              component={Link}
              to='/drone'
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
              component={Link}
              to='/projects'
            >
              <FaCode className='size-20'/>
              Projects
            </Button>
          </Box>
        </Box>


      </Box>
    </>
  );
}
