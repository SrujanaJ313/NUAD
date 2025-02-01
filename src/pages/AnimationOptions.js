import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack as ArrowBackwardIcon, Close as CloseIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AnimationOptions = () => {
  const [open, setOpen] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState([]);
  const options = [
    { label: 'Page 1', path: '/page1' },
    { label: 'Page 2', path: '/page2' },
    { label: 'Page 3', path: '/page3' },
    { label: 'Page 4', path: '/page4' },
    { label: 'Page 5', path: '/page5' },
  ];

  const navigate = useNavigate(); // For navigation to different pages
  
  const handleClick = () => {
    setOpen(!open);

    if (!open) {
      // Play sound and show options one by one
      options.forEach((_, index) => {
        setTimeout(() => {
          setOptionsVisible((prev) => [...prev, index]); // Show next option
        }, index * 1000); // Delay 1 second for each option
      });
    } else {
      setOptionsVisible([]); // Hide options when clicked again
    }
  };

  const handleOptionClick = (path) => {
    navigate(path); // Navigate to the selected page
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // Align to the left
        alignItems: 'center',
      }}
    >
      {/* Arrow Icon Button */}
      <IconButton
        sx={{
          position: 'absolute',
          right: 0,
          zIndex: 10,
        }}
        onClick={handleClick}
      >
         {open ? (
          <CloseIcon sx={{ fontSize: 40 }} />
        ) : (
          <ArrowBackwardIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>

      {/* Options List */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 5,
        }}
      >
        {open &&
          options.map((option, index) => (
            <Box
              key={index}
              sx={{
                opacity: optionsVisible.includes(index) ? 1 : 0,
                transform: optionsVisible.includes(index)
                  ? 'translateY(0)'
                  : 'translateX(100%)',
                transition: `all 1s ease-out`,
                marginBottom: '8px',
                backgroundColor: '#f0f0f0',
                padding: '16px 24px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '300px',
                cursor: 'pointer',
              }}
              onClick={() => handleOptionClick(option.path)} // Navigate on click
            >
              <Typography variant="h6">{option.label}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default AnimationOptions;
