import React from "react";
import {
  Stack,
  Typography,
  TextField,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const questions = {
  "Claimant Fact Finding": [
    "You must report any monies you received/expect to receive due to separation, including, but not limited to: Paid Time Off, Sick Pay, Severance, Wages in Lieu of Notice, Bonus, Warn pay and Supplemental Unemployment Plan Pay. Please answer all questions applicable for the types of pay you received:",
    "Vacation Pay - Please provide the gross amount (before taxes), how many hours, days or weeks this money is equal to, and the date paid, if already received.",
    "Paid Time Off (PTO) - Please provide the gross amount (before taxes), how many hours, days or weeks this money is equal to, and the date paid, if already received.$14401.85. 275.43 hours of PTO. Received 1 Nov 2024.",
    "Sick Pay - Please provide the gross amount (before taxes), how many hours, days or week). weeks this money is equal to, and the date paid, if already received.",
    "Severance (Separation) Pay - Please provide the gross amount (before taxes), how many hours, days or weeks this money is equal to, and the date paid. If already received. S12549.72. Six weeks of pay. Received 19 Nov 2024.",
    "Wages in Lieu of Notice - Please provide the gross amount (before taxes), how many hours, days or weeks this money is equal to, and the date paid, if already received.",
    "BONUS - Please provide the gross amount (before taxes), how many hours, days or weeks this money is equal to (if known), and the date paid, if already received. Explain the type of bonus you received or will receive. (Examples: Attendance, Stay, Safety,",
  ],
  "Employer Fact Finding": [
    "Please provide your name, phone number and email address.",
    "You must report any and all monies paid or you expect to pay because of the individual's separation. Please answer all questions applicable for the types paid to this individual:",
    "How many hours per week, did they normally work?",
    "During the last week how many hours did they work (Sunday through Saturday)?",
    "If they were a salaried employee, provide the gross salary amount (before taxes) they were paid and pay perlod end date. (Paid weekly or salaried at $1000.00 paid every other week).",
    "If they were an hourly employee, provide the rate and frequency of pay. (For example: $15.00 per hour, paid weekly)",
    "Wages in Lieu of Notice - provide the gross amount (before taxes).",
    "Severance Pay - provide the gross amount (before taxes).",
    "Vacation Pay or Pald Time Off (PTO) - provide the gross amount (before taxes).",
    "Sick Time - provide the gross amount (before taxes).",
  ],
};

const FactFindingActionForm = () => {
  return (
    <Stack width="100%" justifyContent="center" alignItems="center" mt={2}>
      <Stack width="100%" justifyContent="center" alignItems="center" mt={2}>
        <TableContainer
          component={Paper}
          sx={{ width: "90%", border: "2px solid #ccc" }}
        >
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {Object.keys(questions).map((sectionTitle) => (
                  <TableCell
                    key={sectionTitle}
                    sx={{
                      backgroundColor: "#183084",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1rem",
                      borderRight: "2px solid white",
                      width: "50%",
                    }}
                  >
                    {sectionTitle}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {Array.from({
                length: Math.max(
                  ...Object.values(questions).map((q) => q.length)
                ),
              }).map((_, index) => (
                <TableRow key={index}>
                  {Object.values(questions).map(
                    (sectionQuestions, sectionIndex) => (
                      <TableCell
                        key={sectionIndex}
                        sx={{ borderRight: "2px solid #ccc" }}
                      >
                        {index < sectionQuestions.length ? (
                          <>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: "bold", mb: 1 }}
                            >
                              {index + 1}. {sectionQuestions[index]}
                            </Typography>
                            <TextField
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={2}
                              placeholder="Enter your response"
                            />
                          </>
                        ) : null}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
              {/* Additional Information Row */}
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ borderTop: "2px solid #ccc", padding: "10px" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    + Previously captured Additional Info from claimant
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    + Previously captured Additional Info from employer
                  </Typography>
                  <Divider sx={{ my: 1, backgroundColor: "#ccc" }} />
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    <strong>Certified By:</strong> M. Tyrle (STF) on 02/28/2025
                    11:39
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    <strong>Employer confirms:</strong> LDW 10/24/24, ROP
                    $52.29/hr, PTO $14,401.85/275.43 hrs, Severance
                    $12,549.72/240 hrs, 32 hrs in Last week, paid $418.32/8 hrs
                    to equal 40 w/e 10/26/24.
                  </Typography>
                </TableCell>
              </TableRow>
              {/* Reasoning Section */}
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ borderTop: "2px solid #ccc", padding: "10px" }}
                >
                  {/* Reasoning Input */}
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Reasoning
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Enter reasoning here"
                    sx={{ mb: 2 }}
                  />

                  {/* Certification Checkboxes */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Button variant="contained" size="medium">
                      Certify
                    </Button>
                    <FormControlLabel control={<Checkbox />} label="Claimant" />
                    <FormControlLabel control={<Checkbox />} label="Employer" />
                  </Stack>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small">
                      OK
                    </Button>
                    <Button variant="contained" size="medium">
                      Cancel
                    </Button>
                    <Button variant="contained" size="medium">
                      View Employer Response
                    </Button>
                    <Button variant="contained" size="medium">
                      Print
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default FactFindingActionForm;

