import { Box, Link, Typography } from "@mui/material";
import type React from "react";

interface ProjectBoxProps {
  title?: string;
  subtext?: string;
  link?: {url: string, text: string};
  outlineColour?: string;
  children?: React.ReactNode;
}

export function SmallProjectBox({
  title = '',
  subtext = '',
  link = {url: '', text: ''},
  children,
}: ProjectBoxProps): React.JSX.Element {
  return (
    <>
      <Box
        sx={{
          maxWidth: 470,
          display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between',
          backgroundColor: 'var(--color-card-bg)', padding: 1.2, py: 1.5,
          borderTopLeftRadius: 8, borderTopRightRadius: 8,
          borderBottomLeftRadius: link.text ? 0 : 8, borderBottomRightRadius: link.text ? 0 : 8,
        }}
      >
        <Box>
          <Typography variant='h2' sx={{ fontSize: '1.4rem', ml: 0.5}}>{title}</Typography>
          <Typography variant='h2' sx={{ fontSize: '1rem', color: 'var(--color-alt-text)', ml: 0.5}}>{subtext}</Typography>
        </Box>

        {children}
      </Box>

      <Box sx={{ backgroundColor: 'var(--color-card-bg)', mt: 0.7, p: 0.7, maxWidth: 470,
        borderTopLeftRadius: 0, borderTopRightRadius: 0,
        borderBottomLeftRadius: 8, borderBottomRightRadius: 8,
       }}>
        <Link sx={{ ml: 0.5 }} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</Link>
      </Box>
    </>
  );
}