import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { Box, Link, Typography } from '@mui/material';
import { Header } from '../components/Header'
import { ProjectBox } from '../components/ProjectBox';

export default function Drone() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!pathname) return;

    // by default scroll to top
    if (!hash) window.scrollTo(0,0);

    const elem = document.getElementById(hash.slice(1));
    if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <p></p>
    
      <Box sx={{
        width: '100%', pl: 2, pr: 2, mx: '2', justifyContent: 'center',
        display: 'inline-flex', flexWrap: 'wrap', gap: 4.5, mt: 2, mb: 22
      }}>

        {/* Intro */}
        <ProjectBox 
          title={"Introduction"}
        >
          <Typography sx={{ my: 1.7 }}>
            I got my first drone in Autumn 2021, it was a DJI mini 2. Since then I've learned pretty much everything about drones,
            branching out to FPV drones, and drone racing. Learning about FPV drones also had me
            {' '}<Link component={RouterLink} to="/projects#drone">building my own FPV drone</Link>
            , where I learnt how to solder soldering and work with electronics in general.
            <br/><br/>
            I have turned this hobby into multiple opportunities by using my drones to make some people's work easier (see
            {' '}<Link component={RouterLink} to="/drone#build">Building Surveys</Link>), as well as helping advertise and documenting
            events (see {' '}<Link component={RouterLink} to="/drone#GH">Get Holed</Link>) through videos and photos.
          </Typography>
        </ProjectBox>

        {/* Building surveys */}
        <ProjectBox 
          id={'build'}
          title={"Building Surveys"} 
          media={{type: 'img', path: '/drone/BurtonSign.webp'}}
          outlineColour={"--color-accent-blue"}
        >
          <Typography sx={{ my: 1.7 }}> 
            Using drones to take pictures and videos of the outsides of buildings for the purpose of surveying their 
            condition eliminates the need to pay someone to put up scaffolding, takes a lot less time, and allows you
            to get to places that a person wouldn't be able to get to very easily. 
            <br/><br/>
            Below are some examples of my work with a local structual engineering company.
          </Typography>
        </ProjectBox>

        {/* 3D Models */}
        <ProjectBox 
          title={"3D Models"} 
          media={{type: 'img', path: 'drone/pointcloud.webp'}}
          outlineColour={"--color-accent-blue"}
        >
          <Typography sx={{ my: 1.7 }}>
            Experimenting with photogrammetry to create 3D models. These photos can be turned into a pointcloud, or a .ply 3D model.
            This pointcloud is of Woolton Hall, which was useful as it was unsafe to enter the site.
          </Typography>
        </ProjectBox>

        {/* Leiston Abbey */}
        <ProjectBox 
          title={"Survey - Leiston Abbey"} 
          media={{type: 'img', path: 'drone/LeistonAbbey.webp'}}
          outlineColour={"--color-accent-blue"}
        />

        {/* L'Oscar */}
        <ProjectBox 
          title={"Survey - L'Oscar Hotel"} 
          media={{type: 'img', path: 'drone/LOscar.webp'}}
          outlineColour={"--color-accent-blue"}
        />

        {/* Ark */}
        <ProjectBox 
          title={"Ark Swift Primary Academy video"} 
          media={{type: 'video', path: '/videos/ark.webm'}}
          outlineColour={"--color-accent-blue"}
          controls={true}
          muted={false}
          autoplay={false}
        >
          <Typography sx={{ my: 1.7 }}>
            Creating a video to show the finished product of Ark Swift Primary Academy
          </Typography>
        </ProjectBox>

        {/* Gascoigne */}
        <ProjectBox 
          title={"Gascoigne West video"} 
          media={{type: 'video', path: '/videos/gascoigne.webm'}}
          outlineColour={"--color-accent-blue"}
          controls={true}
          muted={false}
          autoplay={false}
        >
          <Typography sx={{ my: 1.7 }}>
            This video is to show the progress of MNP's Gascoigne West Project
          </Typography>
        </ProjectBox>

        {/* Get Holed picture */}
        <ProjectBox 
          id={'GH'}
          title={"Get Holed 2024 picture"} 
          media={{type: 'img', path: 'drone/ghPic.webp'}}
          outlineColour={"--color-accent-blue"}
        />

        {/* Get Holed */}
        <ProjectBox 
          title={"Get Holed - 2025"} 
        >
          <Box 
          component='video'
          src={'/videos/GH2025.webm'}
          playsInline
          controls
          loop
          sx={{
            height: '100%',
            border: `1px solid var(--color-accent-blue)`,
            borderRadius: 3,
            mb: 2,
            objectFit: 'cover',
            aspectRatio: '1/1'
          }}
        />
        </ProjectBox>
      </Box>
    </>
  );
}
