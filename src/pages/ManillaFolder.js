import React from "react";
import { Box, Typography, styled } from "@mui/material";

const FolderTab = styled(Box)({
  backgroundColor: "#e8f4ea",
  color: "black",
  fontSize: "18px", // Slightly reduced font size for better fit
  fontFamily: "serif",
  textAlign: "center",
  width: "150px", // Reduced width
  padding: "10px",
  transform: "rotate(90deg)",
  outline:"1px solid black",
  clipPath:
    "path('M 15 0 H 125 A 15 15 0 0 1 140 15 V 65 A 15 15 0 0 1 125 80 Q 110 100 70 100 Q 30 100 15 80 A 15 15 0 0 1 0 65 V 15 A 15 15 0 0 1 15 0 Z')", // Proportionally adjusted
});

const tabs = [
  { label: "Applications Filed", selected: true },
  { label: "CCFs Filed", selected: false },
  { label: "Determinations", selected: false },
  { label: "Employment History", selected: false },
  { label: "WS Requirements", selected: false },
];

const ManillaFolder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignContent: "flex-start",
          justifyContent:"center",
          backgroundColor:"white",
          gap: 16, // Adjusted spacing for balance
          height: "100%",
        }}
      >
        {tabs.map((tab, index) => (
          <FolderTab key={index} selected={tab.selected}>
            <Typography
              sx={{
                marginLeft: "6px",
                marginRight: "6px",
                fontWeight: "bold",
                fontSize: "13px", // Further reduced to fit
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
