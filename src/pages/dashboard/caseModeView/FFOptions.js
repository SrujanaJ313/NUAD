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
    <Paper elevation={3} style={{ width: "210px" }}>
      <List>
        {options.map((option, index) => (
          <ListItem key={index} dense>
            <ListItemIcon>
              <Checkbox edge="start" size="small" />
            </ListItemIcon>
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FFOptions;
