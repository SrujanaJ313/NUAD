import React from "react";
import { Box, Typography, styled } from "@mui/material";

const FolderTab = styled(Box)({
  backgroundColor: "#a0d2a8",
  //   #d0e9d4 (slightly darker)
  // #b8ddbe (medium darker)
  // #a0d2a8 (even darker)
  // #88c692 (much darker)
  color: "black",
  fontSize: "10px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  width: "45px",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  writingMode: "vertical-lr",
  borderLeft: "1px solid black",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  flexShrink: 0,
  margin:"3px 5px 3px 0"
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
        flexDirection: "column",
        // alignContent: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "white",
        gap: 1,
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
              fontSize: "15px",
            }}
          >
            {tab.label}
          </Typography>
        </FolderTab>
      ))}
    </Box>
  );
};

export default ManillaFolder;

