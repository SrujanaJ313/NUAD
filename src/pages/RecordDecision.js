import {
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NavigationArrows from "./NavigationArrows";
import WeeklyDistribution from "./WeeklyDistribution";

const initialIssues = [
  {
    issueType: "Deductible Income/Deductible Income",
    startDate: "01/12/2025",
    endDate: "",
    employer: "LONDONDERRY SCHOOL DISTRICT",
  },
  {
    issueType: "Availability / Transportation",
    startDate: "01/19/2025",
    endDate: "01/24/2025",
    employer: "",
  },
  {
    issueType: "Fixed / Do not meet performance",
    startDate: "01/21/2025",
    endDate: "",
    employer: "LONDONDERRY SCHOOL DISTRICT",
  },
  {
    issueType: "Ability / IIlness or injury",
    startDate: "01/20/2025",
    endDate: "01/24/2025",
    employer: "",
  },
];

function RecordDecision({
  handleNextNavigation,
  handleBackNavigation,
  activeStep,
}) {
  return (
    <Stack spacing={2}>
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
                "Actions",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{ fontWeight: "bold", color: "white", width: "150px" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {initialIssues.map((issue, index) => (
              <TableRow key={index}>
                <TableCell sx={{ width: "200px" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <Typography>{issue.issueType}</Typography>
                    <Typography>....</Typography>
                  </Stack>
                </TableCell>

                <TableCell sx={{ width: "100px" }}>{issue.startDate}</TableCell>
                <TableCell sx={{ width: "100px" }}>
                  {issue.endDate || "--"}
                </TableCell>

                {/* Editable Employer */}
                <TableCell sx={{ width: "200px" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <Typography>{issue.employer || "--"}</Typography>
                  </Stack>
                </TableCell>

                {/* Actions Column */}
                <TableCell sx={{ width: "100px" }}>
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
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
        sx={{ width: "20%" }}
      >
        Calculate For Weekly Distribution
      </Button> */}
      <WeeklyDistribution />
    </Stack>
  );
}

export default RecordDecision;

