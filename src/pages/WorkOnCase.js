import React from "react";
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
  InputLabel
} from "@mui/material";

const WorkonCase = () => {
  return (
    <Stack spacing={2} sx={{ p: 3 }}>
      {/* Steps Navigation */}
      <Stack direction="row" spacing={1}>
        {[
          { label: "Contact", active: true },
          { label: "Charging", active: false },
          { label: "Fact Finding", active: false },
          { label: "Record Decision", active: false },
          { label: "End Date", active: false },
        ].map((step, index) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              bgcolor: step.active ? "#004d00" : "#4CAF50",
              color: "white",
              textAlign: "center",
              flex: 1,
              borderRadius: 0,
              clipPath:
                "polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%)",
            }}
          >
            <Typography variant="h6" fontSize={"medium"}>
              {index + 1}. {step.label}
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
          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="-label">Party</InputLabel>
            <Select
              displayEmpty
              // sx={{ height: "35px" }}
              labelId="-label"
              id=""
              label="Party"
            >
              <MenuItem value="" disabled>
                Party
              </MenuItem>
              <MenuItem value="Employer">Employer</MenuItem>
              <MenuItem value="Claimant">Claimant</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Checkbox />}
            label="A: All parties - deadline passed"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="A: All parties - upcoming deadline"
          />
        </Stack>
      </TableContainer>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Party</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Response Deadline</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Employer</TableCell>
              <TableCell>Premium Retail Services, Inc.</TableCell>
              <TableCell>01/15/2025</TableCell>
              <TableCell>10:15 AM</TableCell>
              <TableCell>Original</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>01/17/2025 10:15 AM</TableCell>
              <TableCell>Provided email address for response...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* New Contact Button */}
      <Button variant="contained" color="primary" sx={{ width: "20%" }}>
        + New Contact
      </Button>

      {/* Attempt to Contact Entry Section */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{ bgcolor: "#003366", color: "white", p: 1 }}
        >
          Attempt to Contact Entry
        </Typography>
        <Stack spacing={2} mt={2}>
          <Stack direction="row" spacing={2}>
            <Select displayEmpty sx={{ width: "12%", height: "50%" }}>
              <MenuItem value="" disabled>
                Entity
              </MenuItem>
              <MenuItem value="Employer">Employer</MenuItem>
              <MenuItem value="Claimant">Claimant</MenuItem>
            </Select>
            <TextField
              label="Name"
              variant="outlined"
              sx={{ width: "15%", height: "50%" }}
            />
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              sx={{ width: "12%", height: "50%" }}
              InputLabelProps={{ shrink: true }}
            />
            <Select displayEmpty sx={{ width: "12%", height: "50%" }}>
              <MenuItem value="" disabled>
                Time
              </MenuItem>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
            </Select>
            <Select displayEmpty sx={{ width: "12%", height: "50%" }}>
              <MenuItem value="" disabled>
                Method
              </MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
            </Select>
            <TextField
              label="Phone"
              type="number"
              variant="outlined"
              sx={{ width: "15%", height: "50%" }}
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "15%", height: "50%" }}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Response Deadline"
              type="date"
              variant="outlined"
              sx={{ width: "25%", height: "50%" }}
              InputLabelProps={{ shrink: true }}
            />
            <Select displayEmpty sx={{ width: "25%", height: "50%" }}>
              <MenuItem value="" disabled>
                Response Type
              </MenuItem>
              <MenuItem value="Urgent">Urgent</MenuItem>
              <MenuItem value="Standard">Standard</MenuItem>
            </Select>
          </Stack>
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
          </RadioGroup>
          <Stack direction="row" spacing={2} sx={{ width: "80%" }}>
            <TextField
              label="Comments"
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
              <Button variant="outlined" color="secondary">
                CANCEL
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default WorkonCase;

