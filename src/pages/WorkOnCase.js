import { useState } from "react";
import {
  Stack,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormControl,
  InputLabel,
  styled,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import AnimationOptions from "./AnimationOptions";

const StyledTableCell = styled(TableCell)({
  color: "inherit", // Inherit color from parent
});

const STEPS = [
  {
    label: "Contact Party",
    active: true,
    stepNumber: 0,
    completionStatus: "N",
    bgColor: "#183084",
    color: "white",
  },
  {
    label: "Review Charging",
    active: false,
    stepNumber: 1,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
  },
  {
    label: "Fact Finding",
    active: false,
    stepNumber: 2,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
  },
  {
    label: "Record Decision",
    active: false,
    stepNumber: 3,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
  },
  {
    label: "End Date",
    active: false,
    stepNumber: 4,
    completionStatus: "N",
    bgColor: "white",
    color: "black",
  },
];

const WorkonCase = () => {
  const [isAddContactVisible, setIsAddContactVisible] = useState(false);
  const [steps, setSteps] = useState(STEPS);
  const [activeStep, setActiveStep] = useState(STEPS[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const TruncatedTableCell = ({ text, maxLength = 35 }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return (
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Typography>{truncatedText}</Typography>

        <IconButton
          size="small"
          onClick={() => {
            setIsExpanded(true);
            setIsAddContactVisible(false);
          }}
          sx={{ marginLeft: "4px" }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </TableCell>
    );
  };

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
                Adjudicate
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
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                  transform: step.active ? "scale(1.05)" : "scale(1)", // Scale up the active polygon
                  boxShadow: step.active
                    ? "0px 10px 20px rgba(0, 0, 0, 0.3)" // Stronger shadow for Z-axis effect
                    : "0px 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for inactive state
                  zIndex: step.active ? 1 : 0, // Ensure the active polygon is on top
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

          {/* Parties Section */}
          <TableContainer component={Paper}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ width: "100%", padding: "10px" }}
            >
              <FormControl size="small" sx={{ width: "30%" }}>
                <InputLabel id="party-dropdown">*Party</InputLabel>
                <Select label="Party" value={""} name="party">
                  <MenuItem value="Ryan">Ryan Stevens</MenuItem>
                  <MenuItem value="Londonderry">
                    Londonderry School District
                  </MenuItem>
                  <MenuItem value="Symbio">Symbio Sys Solutions Inc</MenuItem>
                  <MenuItem value="Pike">Pike Industries</MenuItem>
                  <MenuItem value="Parties">All Parties</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Checkbox />}
                label="Deadline has passed"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Deadline is upcoming"
              />

              <IconButton aria-label="reset" sx={{ color: "#183084" }}>
                <RestartAltIcon />
              </IconButton>
              <Stack
                direction={"row"}
                justifyContent="end"
                sx={{ width: "35%" }}
              >
                <Stack width={"20%"}>
                  <ArrowCircleLeftOutlinedIcon
                    fontSize="large"
                    sx={{
                      color:
                        activeStep.label === "Contact" ? "#BDBDBD" : "#183084",
                      "&:hover": {
                        cursor:
                          activeStep.label === "Contact"
                            ? "not-allowed"
                            : "pointer",
                      },
                    }}
                    onClick={handleBackNavigation}
                  />
                </Stack>
                <Stack>
                  <ArrowCircleRightOutlinedIcon
                    fontSize="large"
                    sx={{
                      color:
                        activeStep.label === "End Date" ? "#BDBDBD" : "#183084",
                      "&:hover": {
                        cursor:
                          activeStep.label === "End Date"
                            ? "not-allowed"
                            : "pointer",
                      },
                    }}
                    onClick={handleNextNavigation}
                  />
                </Stack>
              </Stack>
            </Stack>
          </TableContainer>

          {/* Table Section */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#183084", color: "white" }}>
                  <TableCell></TableCell>
                  <StyledTableCell>Party</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Time</StyledTableCell>
                  <StyledTableCell>Type</StyledTableCell>
                  <StyledTableCell>Method</StyledTableCell>
                  <StyledTableCell>Response Deadline</StyledTableCell>
                  <StyledTableCell>Comments</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      paddingTop: "0",
                      paddingBottom: "0",
                      paddingRight: "0px",
                      height: "100%",
                    }}
                  >
                    <VisibilityIcon
                      fontSize="medium"
                      sx={{ marginTop: "9px" }}
                    />
                  </TableCell>
                  <TableCell>Employer</TableCell>
                  <TableCell>
                    Premium Retail Services, Inc.- Jennifer Graf
                  </TableCell>
                  <TableCell>01/15/2025</TableCell>
                  <TableCell>10:15 AM</TableCell>
                  <TableCell>Original</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>01/17/2025 10:15 AM</TableCell>
                  <TruncatedTableCell text="Provided email address for response to fact finding with message also left for a return phone call MTyrie025800" />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Add, Next and Back Buttons */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsAddContactVisible(true);
              setIsExpanded(false);
            }}
            sx={{ width: "25%" }}
          >
            <AddIcon fontSize="large" color="white" /> Add New Contact Attempt
          </Button>

          {/* Attempt to Contact Entry Section on Add Button */}
          {isAddContactVisible && (
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ bgcolor: "#183084", color: "white", p: 1 }}
              >
                Attempt to Contact Details
              </Typography>
              <Stack spacing={2} mt={2}>
                <Stack direction="row" spacing={2}>
                  <FormControl size="small" sx={{ width: "15%" }}>
                    <InputLabel id="party-dropdown">*Party</InputLabel>
                    <Select label="Party" value={""} name="party">
                      <MenuItem value="Ryan">Ryan Stevens</MenuItem>
                      <MenuItem value="Londonderry">
                        Londonderry School District
                      </MenuItem>
                      <MenuItem value="Symbio">
                        Symbio Sys Solutions Inc
                      </MenuItem>
                      <MenuItem value="Pike">Pike Industries</MenuItem>
                      <MenuItem value="Parties">All Parties</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="*Name"
                    size="small"
                    variant="outlined"
                    sx={{ width: "15%" }}
                    name="name"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="*Date"
                      value={null}
                      slotProps={{
                        textField: { size: "small" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="date"
                          name="date"
                          size="small"
                          fullWidth
                          sx={{
                            width: "20%",
                            height: "32px",
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>

                  <FormControl size="small" sx={{ width: "15%" }}>
                    <InputLabel id="time-dropdown">*Time</InputLabel>
                    <Select label="Time" value={""} name="time">
                      <MenuItem value="Morning">Morning</MenuItem>
                      <MenuItem value="Afternoon">Afternoon</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl size="small" sx={{ width: "15%" }}>
                    <InputLabel id="type-dropdown">*Type</InputLabel>
                    <Select label="Type" value={""} name="time">
                      <MenuItem value="typeA">Type A</MenuItem>
                      <MenuItem value="typeB">Type B</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl size="small" sx={{ width: "15%" }}>
                    <InputLabel id="method-dropdown">*Method</InputLabel>
                    <Select label="Method" value={""} name="time">
                      <MenuItem value="methodA">Method A</MenuItem>
                      <MenuItem value="methodB">Method B</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <TextField
                    label="Phone"
                    size="small"
                    variant="outlined"
                    name="phoneNumber"
                    onChange={(event) => {
                      const { value } = event.target;
                      if (/^\d{0,10}$/.test(value)) {
                        // formik.setFieldValue("entityTeleNumber", value);
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+1</InputAdornment>
                      ),
                    }}
                  /> */}
                </Stack>

                <TextField
                  label="Response Deadline"
                  id="responseDeadline"
                  name="responseDeadline"
                  size="small"
                  sx={{
                    width: "25%",
                  }}
                />

                <RadioGroup>
                  <FormControlLabel
                    value="direct"
                    control={<Radio />}
                    label="Direct Contact made, see comments below"
                  />
                  <FormControlLabel
                    value="message"
                    control={<Radio />}
                    label="Left message advising party that failure to respond by MM/DD/YYYY 00:00 AM/PM will result in determination based on available information"
                  />
                  <FormControlLabel
                    value="unsuccessful"
                    control={<Radio />}
                    label="Unsuccessful contact attempt"
                  />
                  <FormControlLabel
                    value="unsuccessful"
                    control={<Radio />}
                    label="Unauthorized person contacted"
                  />
                </RadioGroup>
                <Stack direction="row" spacing={2} sx={{ width: "80%" }}>
                  <TextField
                    label="*Comments"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    sx={{ height: "50%" }}
                  />
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button variant="contained" color="primary">
                      ADD
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setIsAddContactVisible(false)}
                    >
                      CANCEL
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          )}

          {/* Plus Button Attempt to Contact Details */}
          {isExpanded && (
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ bgcolor: "#183084", color: "white", p: 1 }}
              >
                Attempt to Contact Details
              </Typography>
              <Stack spacing={2} mt={2}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Party</b>
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          <b>Date</b>
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          <b>Time</b>
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          <b>Type</b>
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          <b>Method</b>
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>

                          <b>Response Deadline</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          E: Premium Retail Services, Inc.- Jennifer Graf
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          01/15/2025
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>10:15 AM</TableCell>
                        <TableCell sx={{ padding: "6px" }}>Original</TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          Phone: 603-856-7771
                        </TableCell>
                        <TableCell sx={{ padding: "6px" }}>
                          1/17/2025 10:15am
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                  <Radio checked size="small" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <b>Left Message:</b> Advising party that failure to respond
                    by MM/DD/YYYY 00:00 AM/PM will result in determination based
                    on available information.
                  </Typography>
                </Box>
                <Paper
                  elevation={1}
                  sx={{ p: 2, bgcolor: "#f5f5f5", border: "1px solid #ccc" }}
                >
                  <Typography variant="body1">
                    <b>Comments:</b> Provided email address for response to fact
                    finding with message also left for a return phone call
                    MTyrie025800
                  </Typography>
                </Paper>
                <Stack direction="row" spacing={2} sx={{ width: "80%" }}>
                  <TextField
                    label="*Comments"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    sx={{ height: "50%" }}
                  />
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button variant="contained" color="primary">
                      ADD
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setIsAddContactVisible(false)}
                    >
                      CANCEL
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          )}
        </Stack>
      </Box>

      {/* Right Side: AnimationOptions */}
      <Box
        sx={{
          width: "auto", // Adjust width as needed
          height: "100vh",
          position: "sticky",
          top: 0,
          right: 0,
        }}
      >
        <AnimationOptions />
      </Box>
    </Box>
  );
};

export default WorkonCase;
