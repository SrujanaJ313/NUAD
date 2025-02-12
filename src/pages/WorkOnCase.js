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
// import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const StyledTableCell = styled(TableCell)({
  color: "inherit", // Inherit color from parent
});

const STEPS = [
  { label: "Contact", active: true, stepNumber: 0 },
  { label: "Charging", active: false, stepNumber: 1 },
  { label: "Fact Finding", active: false, stepNumber: 2 },
  { label: "Record Decision", active: false, stepNumber: 3 },
  { label: "End Date", active: false, stepNumber: 4 },
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
    const changedSteps = steps.map((step) =>
      step.stepNumber === activeStep.stepNumber + 1
        ? { ...step, active: true }
        : { ...step, active: false }
    );
    setActiveStep(STEPS[activeStep.stepNumber + 1]);
    setSteps(changedSteps);
  };

  const handleBackNavigation = () => {
    const changedSteps = steps.map((step) =>
      step.stepNumber === activeStep.stepNumber - 1
        ? { ...step, active: true }
        : { ...step, active: false }
    );
    setActiveStep(STEPS[activeStep.stepNumber - 1]);
    setSteps(changedSteps);
  };

  return (
    <Stack spacing={2} sx={{ p: 3, minHeight: "90vh" }}>
      {/* Steps Navigation */}
      <Stack direction="row" spacing={1}>
        {steps.map((step) => (
          <Paper
            key={step.label}
            sx={{
              p: 3,
              bgcolor: step.active ? "#004d00" : "#4CAF50",
              color: "white",
              textAlign:
                step.active && step.label === "Record Decision"
                  ? "right"
                  : "center",
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
            }}
          >
            <Typography variant="h6" fontSize={step.active ? "bold" : "medium"}>
              {step.stepNumber + 1}.{step.label}
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
            <Select
              label="Party"
              // value={formik.values.reassignReasonCd}
              value={""}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              name="party"
            >
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

          <IconButton
            // onClick={() => formik.resetForm()}
            aria-label="reset"
            sx={{ color: "#183084" }}
          >
            <RestartAltIcon />
          </IconButton>
          <Stack direction={"row"} justifyContent="end" sx={{ width: "25%" }}>
            <Stack width={"20%"}>
              <ArrowCircleLeftOutlinedIcon
                fontSize="large"
                sx={{
                  color: activeStep.label === "Contact" ? "#BDBDBD" : "#183084",
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
                <VisibilityIcon fontSize="medium" sx={{ marginTop: "9px" }} />
              </TableCell>
              <TableCell>Employer</TableCell>
              <TableCell>Premium Retail Services, Inc.</TableCell>
              <TableCell>01/15/2025</TableCell>
              <TableCell>10:15 AM</TableCell>
              <TableCell>Original</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>01/17/2025 10:15 AM</TableCell>
              {/* <TableCell>Provided email address for response...</TableCell> */}
              <TruncatedTableCell text="Provided email address for response to fact finding with message also left for a return phone call MTyrie025800" />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add, Next and Back Buttons */}
      {/* <Stack width={"12%"} direction={"row"} justifyContent={"space-between"}> */}
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
      {/* <Button
          variant="contained"
          color="primary"
          onClick={handleNextNavigation}
          disabled={activeStep.stepNumber === 4}
        >
          Next
        </Button> */}
      {/* </Stack> */}

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
                <Select
                  label="Party"
                  // value={formik.values.reassignReasonCd}
                  value={""}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  name="party"
                >
                  <MenuItem value="Ryan">Ryan Stevens</MenuItem>
                  <MenuItem value="Londonderry">
                    Londonderry School District
                  </MenuItem>
                  <MenuItem value="Symbio">Symbio Sys Solutions Inc</MenuItem>
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
                // value={formik.values.empName}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.empName && Boolean(formik.errors.empName)}
                // helperText={formik.touched.empName && formik.errors.empName}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="*Date"
                  value={null}
                  // onChange={(newValue) => {
                  //   if (newValue) {
                  //     formik.setFieldValue("reassignDt", newValue);
                  //   } else {
                  //     formik.setFieldValue("reassignDt", null);
                  //   }
                  // }}
                  slotProps={{
                    textField: { size: "small" },
                  }}
                  // onBlur={formik.handleBlur}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="date"
                      name="date"
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "#183084",
                          fontWeight: "bold",
                        },
                        width: "20%",
                        height: "32px",
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              <FormControl size="small" sx={{ width: "15%" }}>
                <InputLabel id="time-dropdown">*Time</InputLabel>
                <Select
                  label="Time"
                  // value={formik.values.reassignReasonCd}
                  value={""}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  name="time"
                >
                  <MenuItem value="Morning">Morning</MenuItem>
                  <MenuItem value="Afternoon">Afternoon</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ width: "15%" }}>
                <InputLabel id="type-dropdown">*Type</InputLabel>
                <Select
                  label="Type"
                  // value={formik.values.reassignReasonCd}
                  value={""}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  name="time"
                >
                  <MenuItem value="typeA">Type A</MenuItem>
                  <MenuItem value="typeB">Type B</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ width: "15%" }}>
                <InputLabel id="method-dropdown">*Method</InputLabel>
                <Select
                  label="Method"
                  // value={formik.values.reassignReasonCd}
                  value={""}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  name="time"
                >
                  <MenuItem value="methodA">Method A</MenuItem>
                  <MenuItem value="methodB">Method B</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Phone"
                size="small"
                variant="outlined"
                name="phoneNumber"
                // value={formik.values.entityTeleNumber}
                onChange={(event) => {
                  const { value } = event.target;
                  if (/^\d{0,10}$/.test(value)) {
                    // formik.setFieldValue("entityTeleNumber", value);
                  }
                }}
                // onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  ),
                }}
              />
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={null}
                label="Response Deadline"
                // onChange={(newValue) => {
                //   if (newValue) {
                //     formik.setFieldValue("reassignDt", newValue);
                //   } else {
                //     formik.setFieldValue("reassignDt", null);
                //   }
                // }}
                slotProps={{
                  textField: { size: "small" },
                }}
                sx={{ width: "25%" }}
                // onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="responseDeadline"
                    name="responseDeadline"
                    size="small"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#183084",
                        fontWeight: "bold",
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
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
                label="unauthorized person contacted - only display if the Method is selected as phone"
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
                    <TableCell>
                      <b>Date</b>
                    </TableCell>
                    <TableCell>
                      <b>Time</b>
                    </TableCell>
                    <TableCell>
                      <b>Type</b>
                    </TableCell>
                    <TableCell>
                      <b>Method</b>
                    </TableCell>
                    <TableCell>
                      <b>Response Deadline</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>E: Premium Retail Services, Inc.</TableCell>
                    <TableCell>01/15/2025</TableCell>
                    <TableCell>10:15 AM</TableCell>
                    <TableCell>Original</TableCell>
                    <TableCell>Phone: 603-856-7771</TableCell>
                    <TableCell>1/17/2025 10:15am</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
              <Radio checked size="small" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <b>Left Message:</b> Advising party that failure to respond by
                MM/DD/YYYY 00:00 AM/PM will result in determination based on
                available information.
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
  );
};

export default WorkonCase;

