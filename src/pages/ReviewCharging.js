import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Typography, Checkbox, Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const data = [
  { label: "R", uiAccount: "000009948-000", employer: "Londonderry School District", designation: "LEU MRE", startDate: "11/17/2024", endDate: "11/15/2025", liable: "40.0000", status: "CHG" },
  { label: "T", uiAccount: "000027791-000", employer: "Premium Retail Services, Inc.", designation: "MRE", startDate: "11/17/2024", endDate: "12/21/2024", liable: "60.0000", status: "CHG" },
  { label: "T", uiAccount: "000027791-000", employer: "Premium Retail Services, Inc.", designation: "MRE", startDate: "12/22/2024", endDate: "01/04/2025", liable: "60.0000", status: "WS" },
  { label: "T", uiAccount: "000027791-000", employer: "Premium Retail Services, Inc.", designation: "MRE", startDate: "01/05/2025", endDate: "11/15/2025", liable: "60.0000", status: "CHG" },
];

function ReviewCharging() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Stack spacing={2} p={2}>
      <Typography variant="h6" sx={{ color: "#183084", fontWeight: "bold" }}>Current Charge Liabilities</Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#183084" }}>
              {["", "UI Account #", "Employer Name", "Designation", "Start Date", "End Date", "Liable %", "Status", "Actions"].map((header) => (
                <TableCell key={header} sx={{ color: "white", fontWeight: "bold" }}>{header}</TableCell>
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
                  <VisibilityIcon sx={{ cursor: "pointer", mr: 1 }} />
                  <CurrencyExchangeIcon sx={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControlLabel control={<Checkbox />} label="Charging has been reviewed" />
        <RadioGroup row value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <FormControlLabel value="noChanges" control={<Radio />} label="No Changes Needed" />
          <FormControlLabel value="adjustTax" control={<Radio />} label="Adjust Taxpaying Charges" />
          <FormControlLabel value="reassess" control={<Radio />} label="Reassess Charging" />
        </RadioGroup>
        <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>Submit</Button>
        <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>Cancel</Button>
      </Stack>
      
      {selectedOption === "adjustTax" && (
        <Stack spacing={2} p={2}>
          <Typography variant="h6" sx={{ color: "#183084", fontWeight: "bold" }}>Adjust Taxpaying Charges</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#183084" }}>
                  {["UI Account #", "Employer Name", "Start Date", "End Date"].map((header) => (
                    <TableCell key={header} sx={{ color: "white", fontWeight: "bold" }}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, 2).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.uiAccount}</TableCell>
                    <TableCell>{row.employer}</TableCell>
                    <TableCell><TextField type="date" size="small" /></TableCell>
                    <TableCell><TextField type="date" size="small" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TextField label="Add Employer" variant="outlined" size="small" fullWidth />
          <FormControlLabel control={<Checkbox />} label="I have reviewed charges" />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>Submit</Button>
            <Button variant="contained" sx={{ bgcolor: "#183084", color: "white" }}>Cancel</Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default ReviewCharging;
