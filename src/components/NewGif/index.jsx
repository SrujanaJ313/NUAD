import React from 'react';
import { Box, Button, Typography } from '@mui/material';
// import NewBadge from './assets/new-badge.gif'; // Import your GIF

const GifWithText = () => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {/* Your Component (e.g., Button) */}
      <Button variant="contained">
        Click Me
      </Button>

      {/* GIF Badge */}
      <Box
        component="img"
        src={NewBadge}
        alt="New Badge"
        sx={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '50px',
          height: 'auto',
          pointerEvents: 'none', // Disable interaction
        }}
      />
    </Box>
  );
};

export default GifWithText;