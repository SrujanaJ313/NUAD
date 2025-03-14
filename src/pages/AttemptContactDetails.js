import {
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function AttemptContactDetails() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ bgcolor: "#183084", color: "white", p: 1 }}
      >
        Attempt to Contact Details
      </Typography>
      <Stack spacing={2} mt={2}>
        <Stack direction="row" spacing={2}>
          <FormControl size="small" sx={{ width: "15%" }}>
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
          <TextField
            label="*Name"
            size="small"
            variant="outlined"
            sx={{ width: "15%" }}
            name="name"
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="*Date"
              value={null}
              slotProps={{
                textField: { size: "small" },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="date"
                  name="date"
                  size="small"
                  fullWidth
                  sx={{
                    width: "20%",
                    height: "32px",
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <FormControl size="small" sx={{ width: "15%" }}>
            <InputLabel id="time-dropdown">*Time</InputLabel>
            <Select label="Time" value={""} name="time">
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ width: "15%" }}>
            <InputLabel id="type-dropdown">*Type</InputLabel>
            <Select label="Type" value={""} name="time">
              <MenuItem value="typeA">Type A</MenuItem>
              <MenuItem value="typeB">Type B</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ width: "15%" }}>
            <InputLabel id="method-dropdown">*Method</InputLabel>
            <Select label="Method" value={""} name="time">
              <MenuItem value="methodA">Method A</MenuItem>
              <MenuItem value="methodB">Method B</MenuItem>
            </Select>
          </FormControl>

          {/* <TextField
            label="Phone"
            size="small"
            variant="outlined"
            name="phoneNumber"
            onChange={(event) => {
              const { value } = event.target;
              if (/^\d{0,10}$/.test(value)) {
                // formik.setFieldValue("entityTeleNumber", value);
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+1</InputAdornment>
              ),
            }}
          /> */}
        </Stack>

        <TextField
          label="Response Deadline"
          id="responseDeadline"
          name="responseDeadline"
          size="small"
          sx={{
            width: "25%",
          }}
        />

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
          <FormControlLabel
            value="unsuccessful"
            control={<Radio />}
            label="Unauthorized person contacted"
          />
        </RadioGroup>
        <Stack direction="row" spacing={2} sx={{ width: "80%" }}>
          <TextField
            label="*Comments"
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
            <Button
              variant="outlined"
              onClick={() => setIsAddContactVisible(false)}
            >
              CANCEL
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default AttemptContactDetails;
