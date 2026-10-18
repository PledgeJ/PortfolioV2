import { Box, Link, Typography } from "@mui/material";
import type React from "react";

interface ProjectBoxProps {
  title?: string;
  link?: {url: string, text: string};
  outlineColour?: string;
  children?: React.ReactNode;
}

export function SmallProjectBox({
  title = '',
  link = {url: '', text: ''},
  children,
}: ProjectBoxProps): React.JSX.Element {
  return (
    <Box
      sx={{
        maxWidth: 470,
        display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between',
        mt: 2, backgroundColor: 'var(--color-card-bg)', padding: 1, py: 1.5, borderRadius: 2
      }}
    >
      <Typography variant='h2' sx={{ fontSize: '1.4rem', ml: 0.5}}>{title}</Typography>

      <Box sx={{display: 'inline-flex', alignItems: 'center', gap: 3}}>
        <Link href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</Link>
        {children}
      </Box>
    </Box>
  );
}