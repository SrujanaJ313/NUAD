import React from "react";
import { Stack, IconButton } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

function NavigationArrows({
  activeStep,
  handleBackNavigation,
  handleNextNavigation,
}) {
  return (
    <Stack direction={"row"}>
      <IconButton disabled={activeStep?.label === "Contact Party"}>
        <ArrowCircleLeftOutlinedIcon
          fontSize="large"
          sx={{
            color:
              activeStep?.label === "Contact Party" ? "#BDBDBD" : "#183084",
          }}
          onClick={handleBackNavigation}
        />
      </IconButton>

      <IconButton disabled={activeStep?.label === "End Date"}>
        <ArrowCircleRightOutlinedIcon
          fontSize="large"
          sx={{
            color: activeStep?.label === "End Date" ? "#BDBDBD" : "#183084",
          }}
          onClick={handleNextNavigation}
        />
      </IconButton>
    </Stack>
  );
}

export default NavigationArrows;

