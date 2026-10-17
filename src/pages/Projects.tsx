import { Box, Typography } from '@mui/material';
import { Header } from '../components/Header'
import { ProjectBox } from '../components/ProjectBox';

import { IoLogoElectron } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { Skills } from '../components/Projects/Skills';

export default function Projects() {
  return (
    <>
      <Header />

      <Box sx={{
        ml: 2, mr: 2,
      }}>

        {/* Experience */}
        <Skills />

        {/* OBS Overlay */}
        <ProjectBox 
          title={"OBS Overlay"} 
          imgPath={"/placeholder.jpg"}
          outlineColour={"--color-accent-orange"}
          link={{url: "https://github.com/PledgeJ/OBSOverwatchOverlay", text:"Github repo"}}
        >
          <Typography sx={{ my: 1.7 }}>
            Created an overlay for OBS (specific to the game Overwatch) to help keep score and display information and statistics during streams. This has been used during streams for events at the
            {' '}<Box component="span" sx={{ fontWeight: 800 }}>
              University of Nottingham
            </Box>{' '}
            for events such as Notts Clash, and the UoN Draft Tournament.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, fontSize: 21 }}>
            <IoLogoElectron />
            <Typography>+</Typography>
            <FaReact />
            <SiTypescript />
          </Box>
        </ProjectBox>
        
      </Box>
    </>
  );
}
