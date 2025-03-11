import { useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ManillaFolder from "./ManillaFolder";
import ContactParty from "./ContactParty";
import ReviewCharging from "./ReviewCharging";
import FactFinding from "./FactFinding";
import RecordDecision from "./RecordDecision";
import EndDate from "./EndDate";

const STEPS = [
  {
    label: "Contact Party",
    active: true,
    stepNumber: 0,
    completionStatus: "N",
    bgColor: "#183084",
    color: "white",
    component: ContactParty,
  },
  {
    label: "Fact Finding",
    active: false,
    stepNumber: 1,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
    component: FactFinding,
  },
  {
    label: "Review Charging",
    active: false,
    stepNumber: 2,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
    component: ReviewCharging,
  },
  {
    label: "Record Decision",
    active: false,
    stepNumber: 3,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
    component: RecordDecision,
  },
  {
    label: "End Date",
    active: false,
    stepNumber: 4,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
    component: EndDate,
  },
];

const WorkonCase = () => {
  const [steps, setSteps] = useState(STEPS);
  const [activeStep, setActiveStep] = useState(STEPS[0]);

  const handleNextNavigation = () => {
    const currentActiveStep = activeStep.stepNumber + 1;
    const changedSteps = steps.map((step) => {
      if (step.stepNumber === currentActiveStep) {
        return { ...step, active: true, bgColor: "#183084", color: "white" };
      } else if (step.stepNumber < currentActiveStep) {
        return {
          ...step,
          active: false,
          completionStatus: "Y",
          bgColor: "#e8f4ea",
          color: "#183084",
        };
      } else {
        return step;
      }
    });
    setActiveStep(STEPS[currentActiveStep]);
    setSteps(changedSteps);
  };

  const handleBackNavigation = () => {
    const currentActiveStep = activeStep.stepNumber - 1;
    const changedSteps = steps.map((step) => {
      if (step.stepNumber === currentActiveStep) {
        return { ...step, active: true, bgColor: "#183084", color: "white" };
      } else if (step.stepNumber > currentActiveStep) {
        return {
          ...step,
          active: false,
          completionStatus: "Y",
          bgColor: "white",
          color: "black",
        };
      } else {
        return step;
      }
    });
    setActiveStep(STEPS[currentActiveStep]);
    setSteps(changedSteps);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Left Side: Main Content */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
        <Stack spacing={2} sx={{ minHeight: "90vh" }}>
          {/* Adjudicate Header */}
          <Paper
            sx={{
              width: "100%",
              margin: "auto",
              padding: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography variant="h6" color="primary" fontWeight="bold">
               {activeStep.label}
              </Typography>
              <Stack direction="row" spacing={4}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" fontWeight="bold">
                    Case Due Date:&nbsp;
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#183084", fontWeight: "bold" }}
                  >
                    1/23/2025
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" fontWeight="bold">
                    Issues:&nbsp;
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#183084", fontWeight: "bold" }}
                  >
                    4
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" fontWeight="bold">
                    Claim Status:&nbsp;
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#183084", fontWeight: "bold" }}
                  >
                    Valid Final
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" fontWeight="bold">
                    WBA:&nbsp;
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#183084", fontWeight: "bold" }}
                  >
                    $427.00
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>

          {/* Steps Navigation */}
          <Stack direction="row" spacing={0}>
            {steps.map((step) => (
              <Paper
                key={step.label}
                sx={{
                  p: 3,
                  bgcolor: step.bgColor,
                  color: step.color,
                  textAlign: "center",
                  flex: 1,
                  borderRadius: 0,
                  clipPath:
                    "polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: step.active ? "scale(1.05)" : "scale(1)",
                  boxShadow: step.active
                    ? "0px 10px 20px rgba(0, 0, 0, 0.3)"
                    : "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  zIndex: step.active ? 1 : 0,
                  marginLeft: step.stepNumber !== 0 ? "-3%" : "",
                }}
              >
                <Typography
                  variant="h6"
                  fontSize={step.active ? "bold" : "medium"}
                >
                  {step.stepNumber + 1}. {step.label}
                </Typography>
              </Paper>
            ))}
          </Stack>
          {activeStep && (
            <activeStep.component
              handleBackNavigation={handleBackNavigation}
              handleNextNavigation={handleNextNavigation}
              activeStep={activeStep}
            />
          )}
        </Stack>
      </Box>

      {/* Right Side: ManillaFolder */}
        <ManillaFolder />
    </Box>
  );
};

export default WorkonCase;