import { Box, Typography } from "@mui/material";
import type React from "react";

import { FaPython, FaJava, FaHtml5, FaCss, FaUnity } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiDavinciresolve } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandAdobePremiere } from "react-icons/tb";
import { GiSolderingIron } from "react-icons/gi";
import { Pill } from "../Pill";

export function Skills(): React.JSX.Element {
  return (
    <Box
      sx={{
        maxWidth: 470,
      }}
    >
      <Typography variant='h2' sx={{ fontSize: '1.4rem', mt: 5, mb: 2, ml: 0.5}}>Skills</Typography>

      <Typography variant='h2' sx={{ fontSize: '1rem', mb: 1.5, ml: 0.5}}>Programming languages:</Typography>
      
      <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
        <Pill text={"Python"} colour={"#3572A5"}><FaPython /></Pill>
        <Pill text={"ANSI C"} colour={"#555555"}></Pill>
        <Pill text={"Java"} colour={"#B07219"}><FaJava /></Pill>
        <Pill text={"TypeScript"} colour={"#2B7489"}><SiTypescript /></Pill>
        <Pill text={"HTML"} colour={"#E44B23"}><FaHtml5 /></Pill>
      </Box>
      <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
        <Pill text={"CSS"} colour={"#563D7C"}><FaCss /></Pill>
        <Pill text={"JavaScript"} colour={"#c9b72c"}><FaJsSquare /></Pill>
      </Box>

      <Typography variant='h2' sx={{ fontSize: '1rem', mb: 1.5, ml: 0.5}}>UI Frameworks:</Typography>
      <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
        <Pill text={"React"} colour={"#30aed1"}><FaReact /></Pill>
        <Pill text={"Electron"} colour={"#2566AF"}><IoLogoElectron /></Pill>
      </Box>

      <Typography variant='h2' sx={{ fontSize: '1rem', mb: 1, ml: 0.5}}>Other:</Typography>
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <Pill text={"Unity"} colour={"#000000"}><FaUnity /></Pill>
        <Pill text={"Video editing"} colour={"#9999FF"}><SiDavinciresolve /></Pill>
        <Pill text={"Basic electronic work"} colour={"#808080"}><GiSolderingIron /></Pill>
      </Box>
    </Box>
  );
}