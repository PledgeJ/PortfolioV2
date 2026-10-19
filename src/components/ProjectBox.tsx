import { Box, Link, Typography } from "@mui/material";
import type React from "react";

interface ProjectBoxProps {
  title?: string;
  media: {type: 'img' | 'video', path: string, cover?: string};
  link?: {url: string, text: string};
  outlineColour?: string;
  children?: React.ReactNode;
}

export function ProjectBox({
  title = '',
  media = {type: 'img', path: ''},
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

      {media.type == 'img' ? (
        <Box
          component='img'
          src={media.path}
          sx={{
            width: '100%',
            border: outlineColour ? `1px solid var(${outlineColour})`: 'none',
            borderRadius: 3,
            mb: 2,
            objectFit: 'cover',
            aspectRatio: '16/9'
          }}
        />
      ) : (
        <Box 
          component='video'
          src={media.path}
          muted
          playsInline
          autoPlay
          loop
          sx={{
            width: '100%',
            border: outlineColour ? `1px solid var(${outlineColour})`: 'none',
            borderRadius: 3,
            mb: 2,
            objectFit: 'cover',
            aspectRatio: '16/9'
          }}
          poster={media.cover}
        />
      )}

      <Link href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</Link>

      {children}
    </Box>
  );
}