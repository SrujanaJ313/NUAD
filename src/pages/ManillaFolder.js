import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Styled component for the folder tab
const FolderTab = styled(Box)(({ selected }) => ({
  height: "36px",
  position: "relative",
  backgroundColor: selected ? "#8B7355" : "#A58F7B", // Light brown color
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff", // White font color
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
    backgroundColor: selected ? "#8B7355" : "#A58F7B", // Light brown color
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
  { label: "Review CCFs Filed", selected: true },
  { label: "Review WS Req.", selected: false},
  { label: "Review EMP History", selected: false },
  { label: "Review CAPS Filed", selected: false },
  { label: "Review DTMs", selected: false },
];

const ManillaFolder = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f7",
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