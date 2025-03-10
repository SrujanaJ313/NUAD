import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Typography,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NavigationArrows from "./NavigationArrows";

const data = [
  {
    label: "R",
    uiAccount: "000009948-000",
    employer: "Londonderry School District",
    designation: "LEU MRE",
    startDate: "11/17/2024",
    endDate: "11/15/2025",
    liable: "40.0000",
    status: "CHG",
  },
  {
    label: "T",
    uiAccount: "000027791-000",
    employer: "Premium Retail Services, Inc.",
    designation: "MRE",
    startDate: "11/17/2024",
    endDate: "12/21/2024",
    liable: "60.0000",
    status: "CHG",
  },
  {
    label: "T",
    uiAccount: "000027791-000",
    employer: "Premium Retail Services, Inc.",
    designation: "MRE",
    startDate: "12/22/2024",
    endDate: "01/04/2025",
    liable: "60.0000 WS",
    status: "CHG",
  },
  {
    label: "T",
    uiAccount: "000027791-000",
    employer: "Premium Retail Services, Inc.",
    designation: "MRE",
    startDate: "01/05/2025",
    endDate: "11/15/2025",
    liable: "60.0000",
    status: "CHG",
  },
];

const benefitChargingDetailsdata = [
  {
    date: "11/23/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
  {
    date: "11/30/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
  {
    date: "12/07/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
  {
    date: "12/14/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
  {
    date: "12/21/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
  {
    date: "12/28/2024",
    status: "Pay Held",
    paid: "$0.00",
    benefit: "$0.00",
    charges: "$0.00",
    credits: "$0.00",
    mutualized: "$0.00",
    netCharges: "$0.00",
  },
];

const SubmitCancelButtons = () => {
  return (
    <>
      <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>
        Submit
      </Button>
      <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>
        Cancel
      </Button>
    </>
  );
};

function ReviewCharging({
  handleNextNavigation,
  handleBackNavigation,
  activeStep,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [currencyExchange, setCurrencyExchange] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  const showCurrencyDetails = () => {
    setCurrencyExchange(true);
    setSelectedOption("");
    setViewDetails(false);
  };

  const showViewDetails = () => {
    setCurrencyExchange(false);
    setSelectedOption("");
    setViewDetails(true);
  };

  return (
    <Stack spacing={2} p={2}>
      <Typography variant="h6" sx={{ color: "#183084", fontWeight: "bold" }}>
        Current Charge Liabilities
      </Typography>
      <Stack direction={"row"} justifyContent="flex-end">
      <Stack direction={"row"} justifyContent="flex-end" sx={{ width: "35%" }}>
      <NavigationArrows
            activeStep={activeStep}
            handleBackNavigation={handleBackNavigation}
            handleNextNavigation={handleNextNavigation}
          />
      </Stack>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#183084" }}>
              {[
                "",
                "UI Account #",
                "Employer Name",
                "Designation",
                "Start Date",
                "End Date",
                "Liable %",
                "Status",
                "Actions",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.uiAccount}</TableCell>
                <TableCell>{row.employer}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.liable}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <VisibilityIcon
                    sx={{ cursor: "pointer", mr: 1 }}
                    onClick={showViewDetails}
                  />
                  <CurrencyExchangeIcon
                    sx={{ cursor: "pointer" }}
                    onClick={showCurrencyDetails}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={2} alignItems="center">
        <FormControlLabel
          control={<Checkbox />}
          label="Charging has been reviewed"
        />
        <RadioGroup
          row
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            setCurrencyExchange(false);
            setViewDetails(false);
          }}
        >
          <FormControlLabel
            value="noChanges"
            control={<Radio />}
            label="No Changes Needed"
          />
          <FormControlLabel
            value="adjustTax"
            control={<Radio />}
            label="Adjust Taxpaying Charges"
          />
          <FormControlLabel
            value="reassess"
            control={<Radio />}
            label="Reassess Charging"
          />
        </RadioGroup>

        {!selectedOption && <SubmitCancelButtons />}

      </Stack>

      {selectedOption === "adjustTax" && (
        <Stack spacing={2} p={2}>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#183084",
              color: "white",
              fontWeight: "bold",
              padding: 1,
            }}
          >
            Adjust Taxpaying Charges
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#183084" }}>
                  {[
                    "",
                    "UI Account #",
                    "Employer Name",
                    "Start Date",
                    "End Date",
                  ].map((header) => (
                    <TableCell
                      key={header}
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, 2).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.label}</TableCell>
                    <TableCell>{row.uiAccount}</TableCell>
                    <TableCell>{row.employer}</TableCell>
                    <TableCell>
                      <TextField type="date" size="small" />
                    </TableCell>
                    <TableCell>
                      <TextField type="date" size="small" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TextField
            label="Add Employer"
            variant="outlined"
            size="small"
            sx={{ width: "30%" }}
          />
          <Stack direction="row" spacing={2}>
            <Stack sx={{ width: "50%" }}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                    I have reviewed charges
                  </Typography>
                }
              />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ width: "50%" }}>
              <SubmitCancelButtons />
            </Stack>
          </Stack>
        </Stack>
      )}

      {currencyExchange && (
        <>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#183084",
              color: "white",
              fontWeight: "bold",
              padding: 1,
            }}
          >
            Redirect Charging to the Fund
          </Typography>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Stack spacing={2} p={2}>
              <Stack spacing={2}>
                <FormControl size="small" sx={{ width: "20%" }}>
                  <Select defaultValue="Fund Charge">
                    <MenuItem value="Fund Charge">Fund Charge</MenuItem>
                  </Select>
                </FormControl>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Start Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      sx: { color: "#183084", fontWeight: "bold" },
                    }}
                    size="small"
                    sx={{ width: "20%" }}
                  />
                  <TextField
                    label="End Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      sx: { color: "#183084", fontWeight: "bold" },
                    }}
                    size="small"
                    sx={{ width: "20%" }}
                  />
                  <TextField
                    label="Fund Charge %"
                    type="number"
                    defaultValue={100}
                    InputLabelProps={{
                      sx: { color: "#183084", fontWeight: "bold" },
                    }}
                    size="small"
                    sx={{ width: "20%" }}
                  />
                </Stack>
                <FormControl size="small" sx={{ width: "40%" }}>
                  <InputLabel sx={{ color: "#183084", fontWeight: "bold" }}>
                    Reason
                  </InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="">Select One</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Decision Comments"
                  multiline
                  rows={3}
                  size="small"
                  InputLabelProps={{
                    sx: { color: "#183084", fontWeight: "bold" },
                  }}
                  sx={{ width: "70%" }}
                />
              </Stack>
            </Stack>
          </Paper>
        </>
      )}

      {viewDetails && (
        <>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#183084",
              color: "white",
              fontWeight: "bold",
              padding: 1,
            }}
          >
            View Details
          </Typography>
          <Stack spacing={2} p={2}>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", color: "#183084", fontWeight: "bold" }}
            >
              Benefit Charging Details - Londonderry School District
            </Typography>
            <Stack>
              <Stack direction="row" spacing={2}>
                <Box
                  component={Paper}
                  sx={{
                    width: "35%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    height: "60px",
                  }}
                >
                  <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
                    - Charged to Account: $434.00
                  </Typography>
                  <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
                    Total Benefits: $427.00
                  </Typography>
                </Box>
                <TableContainer component={Paper} sx={{ width: "65%" }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#183084", color: "white" }}>
                        {[
                          "W/E Date",
                          "Status",
                          "Date Paid",
                          "Benefit Amount",
                          "Charges",
                          "Credits",
                          "Mutualized",
                          "Net Charges",
                        ].map((header) => (
                          <TableCell
                            key={header}
                            sx={{ color: "white", fontWeight: "bold" }}
                          >
                            {header}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {benefitChargingDetailsdata.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.paid}</TableCell>
                          <TableCell>{row.benefit}</TableCell>
                          <TableCell>{row.charges}</TableCell>
                          <TableCell>{row.credits}</TableCell>
                          <TableCell>{row.mutualized}</TableCell>
                          <TableCell>{row.netCharges}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default ReviewCharging;

