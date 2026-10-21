import { Box, Typography } from '@mui/material';
import { Header } from '../components/Header'
import { ProjectBox } from '../components/ProjectBox';

export default function Drone() {
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
            I sat down with my Dad discussing how drones (which is a major hobby of mine) could be used in the structural
            engineering industry. Using drones to take pictures and videos of the outsides of buildings for the purpose of
            surveying their condition eliminates the need to pay someone to put up scaffolding, takes a lot less time, and
            allows you to get to places that a person wouldn’t be able to get to very easily.
          </Typography>
        </ProjectBox>

        {/* Building surveys */}
        <ProjectBox 
          title={"Building Surveys"} 
          media={{type: 'img', path: '/drone/BurtonSign.webp'}}
          outlineColour={"--color-accent-blue"}
        >
          <Typography sx={{ my: 1.7 }}>
            Taking close up videos and photos for structural engineers to use for surveying buildings. This allows them to
            carry out the surveys without having to get someone up on scaffolding.
          </Typography>
        </ProjectBox>

        {/* 3D Models */}
        <ProjectBox 
          title={"3D Models"} 
          media={{type: 'img', path: ''}}
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
