import React, { useState } from "react";
import {
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CustomModal from "../components/customModal/CustomModal";
import DialogContent from "@mui/material/DialogContent";
import FactFindingActionForm from "./FactFindingActionForm";
import AddIcon from "@mui/icons-material/Add";
import IssueSubIssueType from "../components/issueSubIssueType";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const initialIssues = [
  {
    issueType: "Deductible Income/Deductible Income",
    startDate: "01/12/2025",
    endDate: "",
    employer: "LONDONDERRY SCHOOL DISTRICT",
    cmt: "Yes",
    emp: "N/A",
    rsa: "RSA 282 A-14,15,22",
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

const FactFinding = () => {
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

  // const handleNewIssueChange = (e) => {
  //   setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
  // };
  const formik = useFormik({
    initialValues: {
      issues: [
        {
          id: uuidv4(),
          issueType: {},
          subIssueType: {},
          issueStartDate: null,
          issueEndDate: null,
        },
      ],
    },
    // validationSchema: rescheduleValidationSchema,
    validateOnChange: true,
    validateOnBlur: false,
  });

  return (
    <Stack spacing={2}>
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
                "References",
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
              <TableRow
                key={index}
                sx={{
                  // "&:nth-of-type(odd)": {
                  //   backgroundColor: "#C8C8C8",
                  // },
                  "&:nth-of-type(even)": {
                    backgroundColor: "#E8E8E8",
                  },
                }}
              >
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
                      <Stack
                        width={"90%"}
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Typography>{issue.issueType}</Typography>
                        <Typography>....</Typography>
                      </Stack>
                      <IconButton
                        onClick={() =>
                          startEditing(index, "issueType", issue.issueType)
                        }
                      >
                        {/* <EditIcon /> */}
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
                          {/* <EditIcon /> */}
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
                    {/* <EditIcon onClick={() => setEditActionForm(true)} /> */}
                    <ZoomInIcon onClick={() => setEditActionForm(true)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={8}>
                <Stack
                  direction="row"
                  alignItems="center"
                  onClick={() => setShowForm(true)}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <AddIcon fontSize="medium" color="white" />
                  <Typography variant="h6" fontSize={"16px"}>
                    Add New Issue
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
            {showForm && (
              <TableRow>
                <TableCell colSpan={8}>
                  <IssueSubIssueType formik={formik} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add New Issue Button */}
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
        sx={{ width: "15%" }}
      >
        + Add New Issue
      </Button> */}

      {/* New Issue Form */}
      {/* <Paper sx={{ padding: 1, width: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => setShowForm(true)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            paddingBottom: showForm ? "10px" : "",
          }}
        >
          <AddIcon fontSize="medium" color="white" />
          <Typography variant="h6" fontSize={"18px"}>
            Add New Issue
          </Typography>
        </Stack>

        {showForm && (
          <Stack>
            <IssueSubIssueType formik={formik} />
          </Stack>
        )}
      </Paper> */}

      {editActionForm && (
        <CustomModal
          open={editActionForm}
          onClose={() => setEditActionForm(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          title="Fact Finding"
          maxWidth={"lg"}
          titleBgColor="#183084"
          titleTextColor="white"
          closeIconColor="white"
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

