import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import type React from "react";

interface pillProps {
  text?: string;
  colour: string;
  children?: React.ReactNode;
}

export function Pill({
  text='',
  colour,
  children,
}: pillProps): React.JSX.Element {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 0.7,
          backgroundColor: colour,
          padding: 1, borderRadius: 3,
          color: '#ffffff',
          minWidth: 50
        }}
      >
        {children}

        {text !== '' && <Typography variant='h2' sx={{ fontSize: '0.8rem', mt:0.2}}>{text}</Typography>}
      </Stack>
    </Box>
  )
}