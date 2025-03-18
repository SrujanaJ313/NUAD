import React from "react";
import { Box, Typography, styled } from "@mui/material";

const FolderTab = styled(Box)({
  backgroundColor: "#a0d2a8",
  color: "black",
  fontSize: "10px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  width: "55px",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  writingMode: "vertical-lr",
  // borderLeft: "1px solid black",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  // flexShrink: 0,
  // margin: "3px 5px 3px 0",
  margin: "0px 5px 0px 0",
});

const tabs = [
  { label: "Applications Filed", selected: true },
  { label: "CCFs Filed", selected: false },
  { label: "Determinations", selected: false },
  { label: "Employment History", selected: false },
  { label: "WS Requirements", selected: false },
];

const ManillaFolder = ({ activeStep }) => {
  const GapFillTab = styled(Box)({
    backgroundColor: "#a0d2a8",
    width: "38px",
    // height: activeStep.label === "Record Decision" ? "150px" : "70px", // Use the height prop or default to 150px
    height: "11px", // Use the height prop or default to 150px
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignContent: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "white",
        // gap: 1,
        // height: "100%",
      }}
    >
      {tabs.map((tab, index) => (
        <>
          <FolderTab key={index} selected={tab.selected}>
            <Typography
              sx={{
                marginLeft: "6px",
                // marginRight: "6px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              {/* {tab.label === "Employment History"
                ? tab.label.split(" ").reverse().join(" ")
                : tab.label} */}
                {tab.label}
            </Typography>
          </FolderTab>
          <GapFillTab></GapFillTab>
        </>
      ))}
    </Box>
  );
};

export default ManillaFolder;

