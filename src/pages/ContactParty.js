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
  // RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormControl,
  InputLabel,
  styled,
  IconButton,
  Box,
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NavigationArrows from "./NavigationArrows";
import AttemptContactDetails from "./AttemptContactDetails";
import ExpandContactDetails from "./ExpandContactDetails";

const StyledTableCell = styled(TableCell)({
  color: "inherit",
  paddingRight: "2px",
});

function ContactParty({
  handleNextNavigation,
  handleBackNavigation,
  activeStep,
}) {
  const [isAddContactVisible, setIsAddContactVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const TruncatedTableCell = ({ text, maxLength = 35 }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return (
      <TableCell>
        <Stack direction={"row"}>
          <Typography sx={{ width: "70%" }}>{truncatedText}</Typography>
          <IconButton
            size="small"
            onClick={() => {
              setIsExpanded(true);
              setIsAddContactVisible(false);
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </TableCell>
    );
  };

  return (
    <Stack spacing={2}>
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
          <Stack direction={"row"} justifyContent="end" sx={{ width: "35%" }}>
            <NavigationArrows
              activeStep={activeStep}
              handleBackNavigation={handleBackNavigation}
              handleNextNavigation={handleNextNavigation}
            />
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
                  // height: "100%",
                }}
              >
                <VisibilityIcon fontSize="medium" sx={{ marginTop: "9px" }} />
              </TableCell>
              <TableCell>
                <Typography>Employer</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Premium Retail Services, Inc.- Jennifer Graf
                </Typography>
              </TableCell>
              <TableCell>01/15/2025</TableCell>
              <TableCell>10:15 AM</TableCell>
              <TableCell>Original</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>01/17/2025 10:15 AM</TableCell>
              <TruncatedTableCell text="Provided email address for response to fact finding with message also left for a return phone call MTyrie025800" />
            </TableRow>

            <TableRow>
              <TableCell colSpan={9}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  onClick={() => {
                    setIsAddContactVisible(true);
                    setIsExpanded(false);
                  }}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <AddIcon fontSize="medium" />
                  <Typography variant="h6" fontSize={"16px"}>
                    Add New Contact Attempt
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>

            {isAddContactVisible && (
              <TableRow>
                <TableCell colSpan={9}>
                  <AttemptContactDetails />
                </TableCell>
              </TableRow>
            )}

            {isExpanded && (
              <TableRow>
                <TableCell colSpan={9}>
                  <ExpandContactDetails />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Paper
        elevation={2}
        sx={{ p: isAddContactVisible || isExpanded ? 2 : 1 }}
      > 
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => {
            setIsAddContactVisible(true);
            setIsExpanded(false);
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            paddingBottom: isAddContactVisible || isExpanded ? "10px" : "",
          }}
        >
          <AddIcon fontSize="medium" color="white" />
          <Typography variant="h6" fontSize={"18px"}>
            Add New Contact Attempt
          </Typography>
        </Stack> 
        {isAddContactVisible && <AttemptContactDetails />}

        {isExpanded && <ExpandContactDetails />} 
       </Paper> */}
    </Stack>
  );
}

export default ContactParty;

