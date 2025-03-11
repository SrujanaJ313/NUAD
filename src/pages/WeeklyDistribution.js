import React from "react";
import {
  Paper,
  Typography,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  IconButton,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import EditIcon from "@mui/icons-material/Edit";

const WeeklyDistribution = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{ bgcolor: "#183084", color: "white", p: 1 }}
      >
        + Calculation for Weekly Distribution
      </Typography>

      <Stack spacing={2} mt={2}>
        <Stack sx={{border:"2px solid #183084"}} padding={1}>
          {/* Start Date, Amount Earned, Total Amount, Normal Weekly Wage */}
          <Stack direction="row" spacing={2} alignItems="center" marginBottom={2}>
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Start Date:
            </Typography>
            <TextField size="small" type="date" />
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Amount Earned in Separating Week:
            </Typography>
            <TextField size="small" defaultValue="$0.00" />
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Total Amount:
            </Typography>
            <TextField size="small" defaultValue="$0.00" />
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Normal Weekly Wage:
            </Typography>
            <TextField size="small" defaultValue="$0.00" />
            <IconButton>
              <SyncIcon />
            </IconButton>
          </Stack>

          {/* Explanation */}
          <Stack>
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Explanation:
            </Typography>
            <TextField size="small" sx={{ width: "84%" }} />
          </Stack>
        </Stack>

        <Stack direction={"row"}>
          <Stack sx={{ width: "55%" }}>
            {/* Decision & Turning Point */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              marginBottom={2}
            >
              <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
                Decision:
              </Typography>
              <TextField size="small" />
              <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
                Turning Point:
              </Typography>
              <TextField size="small" />
            </Stack>

            {/* Free-form Text */}
            <Stack>
              <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
                Enter free-form text that you would like to be included in the
                determination (Warning! This text will be sent to all interested
                parties)
              </Typography>
              <TextField multiline rows={3} />
            </Stack>
          </Stack>

          {/* Save Options */}
          <Stack alignItems={"center"} sx={{ width: "45%" }}>
            <RadioGroup>
              <FormControlLabel
                value="no-mail"
                control={<Radio />}
                label="Save - Do not Mail"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#183084",
                    fontWeight: "bold",
                  },
                }}
              />
              <FormControlLabel
                value="mail"
                control={<Radio />}
                label="Save - Mail"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#183084",
                    fontWeight: "bold",
                  },
                }}
              />
            </RadioGroup>
          </Stack>
        </Stack>

        {/* Certified Reasoning */}
        <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
          + Certified reasoning from Fact Finding
        </Typography>

        {/* Interested Party & Cause */}
        <Stack direction="column" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Add Interested Party to Issue:
            </Typography>
            <EditIcon />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
              Cause:
            </Typography>
            <EditIcon />
          </Stack>
        </Stack>

        {/* Bundle ID */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ color: "#183084", fontWeight: "bold" }}>
            Bundle with DTM ID:
          </Typography>
          <TextField size="small" />
        </Stack>

        {/* Checkboxes */}
        <Stack>
          <FormControlLabel
            control={<Checkbox />}
            label="This decision is ready to mail"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I have reviewed all information along with Free-Form"
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default WeeklyDistribution;

