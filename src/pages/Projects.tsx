import { Box, Typography } from '@mui/material';
import { Header } from '../components/Header'
import { ProjectBox } from '../components/ProjectBox';

import { IoLogoElectron } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { Skills } from '../components/Projects/Skills';
import { Pill } from '../components/Pill';
import { GiSolderingIron } from 'react-icons/gi';
import { SmallProjectBox } from '../components/SmallProjectBox';

export default function Projects() {
  return (
    <>
      <Header />

      <Box sx={{
        width: '100%', pl: 2, pr: 2, mx: 'auto',
        display: 'inline-flex', flexWrap: 'wrap', gap: 4.5
      }}>

        {/* Experience */}
        <Skills />

        {/* OBS Overlay */}
        <ProjectBox 
          title={"OBS Overlay"} 
          media={{type: 'img', path:"/projects/OBSOverlay.webp"}}
          outlineColour={"--color-accent-orange"}
          link={{url: "https://github.com/PledgeJ/OBSOverwatchOverlay", text:"Github repo"}}
        >
          <Typography sx={{ my: 1.7 }}>
            Created an overlay for OBS (specific to the game Overwatch) to help keep score, and display information and statistics in between games, during streams. This has been used during streams for events at the
            {' '}<Box component="span" sx={{ fontWeight: 800 }}>University of Nottingham</Box>{' '}
            for events such as Notts Clash, and the UoN Draft Tournament.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
            <Pill colour={"#2566AF"}><IoLogoElectron /></Pill>
            <Typography>+</Typography>
            <Pill colour={"#30aed1"}><FaReact /></Pill>
            <Pill colour={"#2B7489"}><SiTypescript /></Pill>
          </Box>
        </ProjectBox>

        {/* Drone */}
        <ProjectBox 
          title={"Custom FPV Drone"} 
          media={{type: 'video', path: 'projects/BuildTimelapse.webm', cover:'cover/redFPVDrone.webp'}}
          outlineColour={"--color-accent-orange"}
        >
          <Typography sx={{ my: 1.7 }}>
            Building an FPV drone with 
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
            <Pill colour={"#808080"}><GiSolderingIron /></Pill>
          </Box>
        </ProjectBox>

        {/* This website */}
        <ProjectBox 
          title={"This portfolio"} 
          media={{type: 'img', path: "/projects/thisWebsite.webp"}}
          outlineColour={"--color-accent-orange"}
        >
          <Typography sx={{ my: 1.7 }}>
            Showing off these projects, and my drone work on a website, and making it a project in itself.
            This website uses React+Vite+TS, paired with MaterialUI. It is hosted on an Oracle Cloud compute 
            instance, and I added CD to deploy on the machine whenever changes are pushed.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
            <Pill colour={"#30aed1"}><FaReact /></Pill>
            <Pill colour={"#2B7489"}><SiTypescript /></Pill>
          </Box>
        </ProjectBox>

        {/* Compact project section */}
        <Box
          sx={{pb: 7}}
        >
          {/* Line */}
          <Box 
            sx={{ width: '100%', height: 2, backgroundColor: 'var(--color-alt-text)', borderRadius: 20, opacity: 0.2, my: 5 }}
          />

          <SmallProjectBox title={"Test"} link={{url: "https://github.com/PledgeJ/OBSOverwatchOverlay", text:"Github repo"}}>
            <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
              <Pill colour={"#30aed1"}><FaReact /></Pill>
              <Pill colour={"#2B7489"}><SiTypescript /></Pill>
            </Box>
          </SmallProjectBox>

          {/* Line */}
          <Box 
            sx={{ width: '100%', height: 2, backgroundColor: 'var(--color-alt-text)', borderRadius: 20, opacity: 0.2, my: 5 }}
          />
        </Box>
        
      </Box>
    </>
  );
}
