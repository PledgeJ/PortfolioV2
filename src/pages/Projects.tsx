import { Box, Typography } from '@mui/material';
import { Header } from '../components/Header'
import { ProjectBox } from '../components/ProjectBox';

import { IoLogoElectron } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5, FaPython, FaReact, FaUnity } from "react-icons/fa6";

import { Skills } from '../components/Projects/Skills';
import { Pill } from '../components/Pill';
import { GiSolderingIron } from 'react-icons/gi';
import { SmallProjectBox } from '../components/SmallProjectBox';
import { FaJsSquare } from 'react-icons/fa';

export default function Projects() {
  return (
    <>
      <Header />

      <Box sx={{
        width: '100%', pl: 2, pr: 2, mx: '2', justifyContent: 'center',
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
            Building an FPV drone from scratch. These drones stream a video feed into a pair of goggles for 
            the pilot to look through. This has helped me learn how every part of the drone works, so can easily repair 
            any existing drones. 
          </Typography>
          <Typography sx={{ my: 1.7 }}>
            Specs: ImpulseRC Apex 5", Speedybee F405 v3 (50A 4-in-1 ESC), iFlight Xing 2207 1800kv motors, 
            ExpressLRS Receiver, DJI air unit, 1300mah 6s LIPO
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

        <Box sx={{ width: '100%', mb: 12, maxWidth: 470 }}>
          {/* Line */}
          <Box 
            sx={{ width: '100%', height: 2, backgroundColor: 'var(--color-alt-text)', borderRadius: 20, opacity: 0.2, mb: 3 }}
          />

          {/* Compact project section */}
          <Box sx={{ width: '100%', maxHeight: 560, maxWidth: 470, overflow: 'scroll' }}>

            {/* NEA */}
            <SmallProjectBox 
              title={"Drone Simulator"} 
              subtext={'A-level comp sci NEA'}
              link={{url: "https://youtube.com/playlist?list=PLaX6B6HIwO3s&si=P-edPnMeaODAoCzZ", text:"Demo Videos"}}
            >
              <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
                <Pill colour={"#000000"}><FaUnity /></Pill>
                <Pill text={"C#"} colour={"#7355dd"}></Pill>
                <Pill colour={"#3572A5"}><FaPython /></Pill>
              </Box>
            </SmallProjectBox>

            <br/>

            {/* Yacobot */}
            <SmallProjectBox 
              title={"Discord bot"} 
              subtext={'Connected to gemini'}
              link={{url: "https://github.com/PledgeJ/Yacobot", text:"Github repo"}}
            >
              <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
                <Pill colour={"#3572A5"}><FaPython /></Pill>
              </Box>
            </SmallProjectBox>

            <br/>

            {/* HTML website */}
            <SmallProjectBox
              title={"'How old am I?'"} 
              subtext={'My first experience with HTML'}
              link={{url: "https://github.com/PledgeJ/how-old-am-I", text:"Github repo"}}
            >
              <Box sx={{ display: 'flex', gap: 1, fontSize: 21, alignItems: 'center' }}>
                <Pill colour={"#E44B23"}><FaHtml5 /></Pill>
                <Pill colour={"#c9b72c"}><FaJsSquare /></Pill>
              </Box>
            </SmallProjectBox>
          </Box>

          {/* Line */}
          <Box 
            sx={{ width: '100%', height: 2, backgroundColor: 'var(--color-alt-text)', borderRadius: 20, opacity: 0.2, mt: 3 }}
          />
        </Box>

      </Box>
    </>
  );
}
