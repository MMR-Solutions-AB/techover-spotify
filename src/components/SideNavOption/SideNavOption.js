import React from 'react';
import { Box } from '@mui/material';

export default function SideNavOption({ name, Icon }) {
  return (
    <Box
      pl={3}
      sx={{
        color: 'text.secondary',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        '&:hover': {
          color: '#fff',
        },
        cursor: 'pointer',
      }}
    >
      {Icon && <Icon style={{ fontSize: '32px' }} />}
      {name}
    </Box>
  );
}
