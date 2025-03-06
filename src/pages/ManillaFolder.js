import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Styled component for the folder tab
const FolderTab = styled(Box)(({ selected }) => ({
  height: "36px",
  position: "relative",
  // backgroundColor: selected ? "#E8F4EA" : "#A58F7B",
  backgroundColor:  "#E8F4EA" ,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#183084", // White font color
  cursor: "pointer",
  transform: "rotate(90deg)",
  marginBottom: "16px", // Gap between tabs
  zIndex: selected ? 3 : 2,
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    height: "36px",
    width: "30px",
    borderRadius: "10px 10px 0px 0px",
    // backgroundColor: selected ? "#8B7355" : "#A58F7B", // Light brown color
    backgroundColor: "#E8F4EA", // Light brown color
    zIndex: -1,
  },
  "&:before": {
    left: "-20px",
    top: 0,
    transform: "skewX(-20deg)",
  },
  "&:after": {
    right: "-20px",
    top: 0,
    transform: "skewX(20deg)",
  },
  "&:hover": {
    backgroundColor: "#8B7355", // Darker brown on hover
    color: "#fff",
    zIndex: 3,
    "&:before, &:after": {
      backgroundColor: "#8B7355", // Darker brown on hover
    },
  },
}));


const tabs = [
  { label: "Applications Filed", selected: true },
  { label: "CCFs Filed", selected: false},
  { label: "Determinations", selected: false },
  { label: "Employment History", selected: false },
  { label: "WS Requirements", selected: false },
];

const ManillaFolder = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        // height: "calc(100vh - 128px)", // Adjust height to fit between header and footer
        display: "flex",
        alignItems: "center",
        // justifyContent: "flex-end",
        // paddingTop: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "rotate(360deg)",
          transformOrigin: "left top",
          gap: 12, // Add gap between tabs
          marginTop:"25px"
        }}
      >
        {tabs.map((tab, index) => (
          <FolderTab key={index} selected={tab.selected}>
            <Typography
              sx={{
                marginLeft: "8px",
                marginRight: "8px",
                fontWeight: "bold",
              }}
            >
              {tab.label}
            </Typography>
          </FolderTab>
        ))}
      </Box>
    </Box>
  );
};

export default ManillaFolder;