import React from "react";
import {
  Paper,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const options = [
  "Partially received",
  // "Received",
  // "To be reviewed",
  // "Review in progress",
  // "Review completed",
  // "FF Certified",
];

const FFOptions = () => {
  return (
    <Paper elevation={2} style={{ width: "180px" }}>
      <List>
        {options.map((option, index) => (
          <ListItem key={index} dense>
            <ListItemIcon
              sx={{ minWidth: "auto", padding: 0 }}
            >
              <Checkbox
                edge="start"
                size="small"
                sx={{
                  width: 16,
                  height: 16,
                  padding: 0,
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                }}
              />
            </ListItemIcon>
            <ListItemText sx={{padding:"0 10px",fontSize:"1px", fontSize:"5px"}} primary={option} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FFOptions;
