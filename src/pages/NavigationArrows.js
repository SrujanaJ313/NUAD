import React from "react";
import { Stack } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

function NavigationArrows({
  activeStep,
  handleBackNavigation,
  handleNextNavigation,
}) {
  return (
    <>
      <Stack width={"20%"}>
        <ArrowCircleLeftOutlinedIcon
          fontSize="large"
          sx={{
            color: activeStep?.label === "Contact" ? "#BDBDBD" : "#183084",
            "&:hover": {
              cursor:
                activeStep?.label === "Contact" ? "not-allowed" : "pointer",
            },
          }}
          onClick={handleBackNavigation}
        />
      </Stack>
      <Stack>
        <ArrowCircleRightOutlinedIcon
          fontSize="large"
          sx={{
            color: activeStep?.label === "End Date" ? "#BDBDBD" : "#183084",
            "&:hover": {
              cursor:
                activeStep?.label === "End Date" ? "not-allowed" : "pointer",
            },
          }}
          onClick={handleNextNavigation}
        />
      </Stack>
    </>
  );
}

export default NavigationArrows;

