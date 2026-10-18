import { Box, Link, Typography } from "@mui/material";
import type React from "react";

interface ProjectBoxProps {
  title?: string;
  imgPath: string;
  link?: {url: string, text: string};
  outlineColour?: string;
  children?: React.ReactNode;
}

export function ProjectBox({
  title = '',
  imgPath,
  link = {url: '', text: ''},
  children,
  outlineColour = '',
}: ProjectBoxProps): React.JSX.Element {
  return (
    <Box
      sx={{
        maxWidth: 470,
      }}
    >
      <Typography variant='h2' sx={{ fontSize: '1.4rem', mt: 5, mb: 2, ml: 0.5}}>{title}</Typography>

      <Box
        component='img'
        src={imgPath}
        sx={{
          width: '100%',
          border: outlineColour ? `1px solid var(${outlineColour})`: 'none',
          borderRadius: 3,
          mb: 2,
          objectFit: 'cover',
          aspectRatio: '16/9'
        }}
      />

      <Link href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</Link>

      {children}
    </Box>
  );
}