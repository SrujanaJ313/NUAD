import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const tabs = [
  { label: "Review CCFs Filed", color: "#4CAF50" },
  { label: "Review WS Req.", color: "#00796B" },
  { label: "Review EMP History", color: "#FFC107" },
  { label: "Review CAPS Filed", color: "#0D47A1" },
  { label: "Review DTMs", color: "#E64A19" },
];

const AnimationOptions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "transparent",
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
        {tabs.map((tab, index) => (
          <ListItem
            key={index}
            sx={{
              height: "20vh",
              backgroundColor: tab.color,
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              padding: "0px 0px",
              // marginBottom: "8px",
              // borderRadius: "10px 0 0 10px",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              // width: "fit-content",
              transform: "rotate(360deg)",
              writingMode: "vertical-rl",
            }}
          >
            <ListItemText
              primary={tab.label}
              primaryTypographyProps={{
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AnimationOptions;
