import React, { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputLabel,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { v4 as uuidv4 } from "uuid";
import { reschedulingIssueListURL } from "../../helpers/Urls";
import client from "../../helpers/Api";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";

const IssueSubIssueType = ({ formik }) => {
  const [issueTypes, setIssueTypes] = useState([]);
  const [subIssueTypes, setSubIssueTypes] = useState([]);
  useEffect(() => {
    const fetchIssueTypes = async () => {
      try {
        const payload = {
          issueId: 0,
          module: "resea",
          page: "reschedule",
        };
        const data =
          process.env.REACT_APP_ENV === "mockserver"
            ? await client.get(reschedulingIssueListURL)
            : await client.post(reschedulingIssueListURL, payload);
        setIssueTypes(data);
      } catch (err) {
        console.error("Error in fetchIssueTypes", err);
      }
    };
    fetchIssueTypes();
  }, []);

  const fetchSubIssueTypes = async (issueId) => {
    try {
      const data =
        process.env.REACT_APP_ENV === "mockserver"
          ? await client.get(reschedulingIssueListURL)
          : await client.get(`${reschedulingIssueListURL}${issueId}`);
      setSubIssueTypes(data);
    } catch (err) {
      console.error("Error in fetchSubIssueTypes", err);
    }
  };

  const addIssue = () => {
    formik.setFieldValue("issues", [
      ...formik.values.issues,
      {
        id: uuidv4(),
        issueChecked: false,
        issueType: {},
        subIssueType: {},
        issueStartDate: null,
        issueEndDate: null,
      },
    ]);
  };

  const handleRemoveClick = (id) => {
    const updatedIssues = formik.values.issues.filter(
      (issue) => issue.id !== id
    );
    formik.setFieldValue("issues", updatedIssues);
  };

  const handleFieldChange = (id, field, value) => {
    const updatedIssues = formik.values.issues.map((issue) =>
      issue.id === id ? { ...issue, [field]: value } : issue
    );
    formik.setFieldValue("issues", updatedIssues);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        {formik.values.issues.map((element, index) => (
          <Stack key={element.id} spacing={2}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <FormControl
                variant="outlined"
                sx={{ minWidth: 150 }}
                size="small"
              >
                <InputLabel id="IssueType">Issue Type</InputLabel>
                <Select
                  label="Issue Type"
                  value={element.issueType.issueDesc}
                  onChange={(e) => {
                    const issueType = issueTypes.find(
                      (i) => i.issueDesc === e.target.value
                    );
                    handleFieldChange(element.id, "issueType", issueType);
                    fetchSubIssueTypes(issueType.issueId);
                  }}
                  required
                >
                  {issueTypes?.map((issue) => (
                    <MenuItem key={issue.issueId} value={issue.issueDesc}>
                      {issue.issueDesc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                sx={{ minWidth: 150 }}
                size="small"
              >
                <InputLabel id="IssueSubType">Issue SubType</InputLabel>
                <Select
                  label="Issue SubType"
                  value={element.subIssueType.issueDesc}
                  onChange={(e) => {
                    const subIssueType = subIssueTypes.find(
                      (s) => s.issueDesc === e.target.value
                    );
                    handleFieldChange(element.id, "subIssueType", subIssueType);
                  }}
                >
                  {subIssueTypes?.map((subIssue) => (
                    <MenuItem key={subIssue.issueId} value={subIssue.issueDesc}>
                      {subIssue.issueDesc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                sx={{ minWidth: 150 }}
                size="small"
              >
                <InputLabel id="Employer">Employer</InputLabel>
                <Select
                  label="Employer"
                  value={element.subIssueType.issueDesc}
                  onChange={(e) => {
                    const subIssueType = subIssueTypes.find(
                      (s) => s.issueDesc === e.target.value
                    );
                    handleFieldChange(element.id, "subIssueType", subIssueType);
                  }}
                >
                  {subIssueTypes?.map((subIssue) => (
                    <MenuItem key={subIssue.issueId} value={subIssue.issueDesc}>
                      {subIssue.issueDesc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={1}>
                  <DatePicker
                    label="Detection Date"
                    slotProps={{
                      textField: { size: "small" },
                    }}
                    value={element.issueStartDate}
                    onChange={(date) => {
                      handleFieldChange(element.id, "issueStartDate", date);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} size="small" variant="outlined" />
                    )}
                  />
                  {formik.touched.issues?.[index]?.issueStartDate &&
                    formik.errors.issues?.[index]?.issueStartDate && (
                      <FormHelperText error>
                        {formik.errors.issues[index].issueStartDate}
                      </FormHelperText>
                    )}
                </Stack>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={1}>
                  <DatePicker
                    label="Start Date"
                    slotProps={{
                      textField: { size: "small" },
                    }}
                    value={element.issueStartDate}
                    onChange={(date) => {
                      handleFieldChange(element.id, "issueStartDate", date);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} size="small" variant="outlined" />
                    )}
                  />
                  {formik.touched.issues?.[index]?.issueStartDate &&
                    formik.errors.issues?.[index]?.issueStartDate && (
                      <FormHelperText error>
                        {formik.errors.issues[index].issueStartDate}
                      </FormHelperText>
                    )}
                </Stack>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={1}>
                  <DatePicker
                    label="End Date"
                    slotProps={{
                      textField: { size: "small" },
                    }}
                    value={element.issueEndDate}
                    onChange={(date) => {
                      handleFieldChange(element.id, "issueEndDate", date);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} size="small" variant="outlined" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>

              <FormControlLabel
                sx={{
                  minWidth: 136,
                  "& .MuiFormControlLabel-label": {
                    color: "#183084", // Change label color to blue
                    fontWeight: "bold", // Make label text bold
                    fontSize:"14px"
                  },
                }}
                control={
                  <Checkbox
                  // checked={newIssue.assignToSelf === "Yes"} // Set checked state
                  // onChange={(e) =>
                  //   handleNewIssueChange({
                  //     target: {
                  //       name: "assignToSelf",
                  //       value: e.target.checked ? "Yes" : "No",
                  //     },
                  //   })
                  // }
                  />
                }
                label="Assign To Self" // No label needed since the text is already provided
                labelPlacement="start"
              />

              {/* <IconButton
                sx={{ padding: "0px", marginRight: "20px !important" }}
                onClick={() => handleRemoveClick(element.id)}
                disabled={element.id === formik?.values?.issues[0]?.id}
              >
                <RemoveCircleIcon fontSize="small" />
              </IconButton> */}
            </Stack>
          </Stack>
        ))}

        {/* <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button variant="text" type="Button" onClick={addIssue}>
            + Add more
          </Button>
        </Stack> */}
      </Stack>
    </form>
  );
};

export default IssueSubIssueType;

