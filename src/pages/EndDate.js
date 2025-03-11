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
  TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NavigationArrows from "./NavigationArrows";

const initialIssues = [
  {
    issueType: "Availability / Transportation",
    startDate: "07/05/2024",
    endDate: "01/24/2025",
    employer: "",
  },
  {
    issueType: "Fired / Accident at work",
    startDate: "01/02/2024",
    endDate: "",
    employer: "Bank of New Hampshire",
  },
];

function EndDate({
  handleNextNavigation,
  handleBackNavigation,
  activeStep,
}) {
  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack width={"50%"}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#183084" }}>
            End Date
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
                <TableCell sx={{ width: "150px" }}>
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
                  {/* {issue.endDate || "--"} */}
                  <TextField size="small" type="date" />
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
    </Stack>
  );
}

export default EndDate;

