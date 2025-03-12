import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  FormControlLabel,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CustomModal from "../components/customModal/CustomModal";
import DialogContent from "@mui/material/DialogContent";
import FactFindingActionForm from "./FactFindingActionForm";
import NavigationArrows from "./NavigationArrows";

const initialIssues = [
  {
    issueType: "Deductible Income/Deductible Income",
    startDate: "01/12/2025",
    endDate: "",
    employer: "LONDONDERRY SCHOOL DISTRICT",
    cmt: "Yes",
    emp: "N/A",
    rsa: "RSA 282 A-14, 15, 22, '&' EMP 502.07",
  },
  {
    issueType: "Availability / Transportation",
    startDate: "01/19/2025",
    endDate: "01/24/2025",
    employer: "",
    cmt: "No",
    emp: "N/A",
    rsa: "RSA 282-A:31 (c) '&' (d)",
  },
  {
    issueType: "Fixed / Do not meet performance",
    startDate: "01/21/2025",
    endDate: "",
    employer: "LONDONDERRY SCHOOL DISTRICT",
    cmt: "Yes",
    emp: "No",
    rsa: "RSA 282-A:32 I (b)",
  },
  {
    issueType: "Ability / IIlness or injury",
    startDate: "01/20/2025",
    endDate: "01/24/2025",
    employer: "",
    cmt: "Yes",
    emp: "N/A",
    rsa: "RSA 282-A:31 (c)",
  },
];

const FactFinding = ({
  handleNextNavigation,
  handleBackNavigation,
  activeStep,
}) => {
  const [issues, setIssues] = useState(initialIssues);
  const [editIndex, setEditIndex] = useState(null);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editActionForm, setEditActionForm] = useState(false);
  const [newIssue, setNewIssue] = useState({
    issueType: "",
    subIssueType: "",
    employer: "",
    detectionDate: "",
    assignToSelf: "No",
  });

  const startEditing = (index, field, value) => {
    setEditIndex(index);
    setEditField(field);
    setEditValue(value);
  };

  const saveEdit = () => {
    const updatedIssues = [...issues];
    updatedIssues[editIndex][editField] = editValue;
    setIssues(updatedIssues);
    setEditIndex(null);
    setEditField(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditField(null);
  };

  const handleNewIssueChange = (e) => {
    setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
  };

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack width={"50%"}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#183084" }}>
            Fact Finding
          </Typography>
        </Stack>
        <Stack width={"50%"} direction={"row"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            NHES Law Book
          </Button>
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent="flex-end">
        <Stack
          direction={"row"}
          justifyContent="flex-end"
          sx={{ width: "35%" }}
        >
          <NavigationArrows
            activeStep={activeStep}
            handleBackNavigation={handleBackNavigation}
            handleNextNavigation={handleNextNavigation}
          />
        </Stack>
      </Stack>

      {/* Issues Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#183084" }}>
              {[
                "Issue Type/Sub-Type",
                "Start Date",
                "End Date",
                "Employer",
                "CMT",
                "EMP",
                "RSA & EMP",
                "Actions",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map((issue, index) => (
              <TableRow key={index}>
                {/* Editable Issue Type */}
                <TableCell>
                  {editIndex === index && editField === "issueType" ? (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent={"space-between"}
                    >
                      <Stack>
                        <FormControl fullWidth>
                          <InputLabel id="issue-subtype-label">
                            Select Issue Type/Sub-Type
                          </InputLabel>
                          <Select
                            labelId="issue-subtype-label"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            label="Select an option"
                            size="small"
                            sx={{ width: "200px" }}
                          >
                            <MenuItem value="Deductible Income/Deductible Income">
                              Deductible Income/Deductible Income
                            </MenuItem>
                            <MenuItem value="Availability / Transportation">
                              Availability / Transportation
                            </MenuItem>
                            <MenuItem value="Fixed / Do not meet performance">
                              Fixed / Do not meet performance
                            </MenuItem>
                            <MenuItem value="Ability / IIlness or injury">
                              Ability / IIlness or injury
                            </MenuItem>
                            {/* Add more MenuItem components as needed */}
                          </Select>
                        </FormControl>
                      </Stack>
                      <Stack direction={"row"}>
                        <IconButton onClick={saveEdit} color="success">
                          <CheckIcon />
                        </IconButton>
                        <IconButton onClick={cancelEdit} color="error">
                          <CloseIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  ) : (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent={"space-between"}
                    >
                      <Stack width={"90%"} direction="row" justifyContent={"space-between"}>
                        <Typography>{issue.issueType}</Typography>
                        <Typography>....</Typography>
                      </Stack>
                      <IconButton
                        onClick={() =>
                          startEditing(index, "issueType", issue.issueType)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Stack>
                  )}
                </TableCell>

                <TableCell>{issue.startDate}</TableCell>
                <TableCell>{issue.endDate || "--"}</TableCell>

                {/* Editable Employer */}
                {issue?.employer ? (
                  <TableCell>
                    {editIndex === index && editField === "employer" ? (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent={"space-between"}
                      >
                        <Stack>
                          <FormControl fullWidth>
                            <InputLabel id="employer-label">
                              Select Employer
                            </InputLabel>
                            <Select
                              labelId="employer-label"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              label="Select an option"
                              size="small"
                              sx={{ width: "200px" }}
                            >
                              <MenuItem value="LONDONDERRY SCHOOL DISTRICT">
                                LONDONDERRY SCHOOL DISTRICT
                              </MenuItem>
                              <MenuItem value="LONDONDERRY SCHOOL DISTRICT">
                                LONDONDERRY SCHOOL DISTRICT
                              </MenuItem>
                              <MenuItem value="LONDONDERRY SCHOOL DISTRICT">
                                LONDONDERRY SCHOOL DISTRICT
                              </MenuItem>
                              {/* Add more MenuItem components as needed */}
                            </Select>
                          </FormControl>
                        </Stack>
                        <Stack direction={"row"}>
                          <IconButton onClick={saveEdit} color="success">
                            <CheckIcon />
                          </IconButton>
                          <IconButton onClick={cancelEdit} color="error">
                            <CloseIcon />
                          </IconButton>
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent={"space-between"}
                      >
                        <Typography>{issue.employer || "--"}</Typography>
                        <IconButton
                          onClick={() =>
                            startEditing(index, "employer", issue.employer)
                          }
                        >
                          <EditIcon />
                        </IconButton>
                      </Stack>
                    )}
                  </TableCell>
                ) : (
                  <TableCell></TableCell>
                )}

                <TableCell>{issue.cmt}</TableCell>
                <TableCell>{issue.emp}</TableCell>
                <TableCell>
                <Stack direction="row" justifyContent={"space-between"}>
                <Typography>{issue.rsa}</Typography>
                <Typography>....</Typography>
                </Stack>

                  </TableCell>

                {/* Actions Column */}
                <TableCell>
                  <IconButton>
                    <EditIcon onClick={() => setEditActionForm(true)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add New Issue Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
        sx={{ width: "15%" }}
      >
        + Add New Issue
      </Button>

      {/* New Issue Form */}
      {showForm && (
        <Paper sx={{ padding: 2, width: "100%" }}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Issue Type Dropdown */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Issue Type
              </Typography>
              <Select
                fullWidth
                name="issueType"
                value={newIssue.issueType}
                onChange={handleNewIssueChange}
                displayEmpty
              >
                <MenuItem value="">Select Issue Type</MenuItem>
                <MenuItem value="Deductible Income">Deductible Income</MenuItem>
                <MenuItem value="Availability">Availability</MenuItem>
                <MenuItem value="Fired">Fired</MenuItem>
                <MenuItem value="Illness">Illness</MenuItem>
              </Select>
            </Box>

            {/* Issue Sub-Type Dropdown */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Issue Sub-Type
              </Typography>
              <Select
                fullWidth
                name="subIssueType"
                value={newIssue.subIssueType}
                onChange={handleNewIssueChange}
                displayEmpty
              >
                <MenuItem value="">Click OK to Load This List</MenuItem>
                <MenuItem value="Sub Type 1">Sub Type 1</MenuItem>
                <MenuItem value="Sub Type 2">Sub Type 2</MenuItem>
              </Select>
            </Box>

            {/* Employer Dropdown */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Employer
              </Typography>
              <Select
                fullWidth
                name="employer"
                value={newIssue.employer}
                onChange={handleNewIssueChange}
                displayEmpty
              >
                <MenuItem value="">Select Employer</MenuItem>
                <MenuItem value="LONDONDERRY SCHOOL DISTRICT">
                  LONDONDERRY SCHOOL DISTRICT
                </MenuItem>
              </Select>
            </Box>

            {/* Detection Date Field */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Detection Date
              </Typography>
              <TextField
                fullWidth
                type="date"
                name="detectionDate"
                value={newIssue.detectionDate}
                onChange={handleNewIssueChange}
              />
            </Box>
            {/* Start Date Field */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Start Date
              </Typography>
              <TextField
                fullWidth
                type="date"
                name="startDate"
                value={newIssue.startDate}
                onChange={handleNewIssueChange}
              />
            </Box>

            {/* Assign to Self Radio Buttons */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: "#183084", fontWeight: "bold" }}
              >
                Assign to Self:
              </Typography>
              <RadioGroup
                row
                name="assignToSelf"
                value={newIssue.assignToSelf}
                onChange={handleNewIssueChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Stack>
        </Paper>
      )}

      {editActionForm && (
        <CustomModal
          open={editActionForm}
          onClose={() => setEditActionForm(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          title="Fact Finding Questions"
          maxWidth={"lg"}
        >
          <DialogContent>
            <Stack
              width="100%"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <FactFindingActionForm />
            </Stack>
          </DialogContent>
          {/* <DialogActions sx={{ margin: 2 }}>
              <Button variant="contained" onClick={() => handleLogout()}>
                Close
              </Button>
            </DialogActions> */}
        </CustomModal>
      )}
    </Stack>
  );
};

export default FactFinding;

