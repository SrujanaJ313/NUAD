import React from "react";
import { Stack, Typography, Paper } from "@mui/material";

function OpenIssuesTitle() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        minWidth: "440px",
        bgcolor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ width: "30%" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              flex: 1,
            }}
          >
            Issue Type
          </Typography>
        </Stack>
        <Stack sx={{ width: "68%" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              flex: 1,
              textAlign: "left",
            }}
          >
            Issue Sub-Type
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3} mt={1}>
        <Stack sx={{ flex: 1 }}>
          <Typography>Deductible Income</Typography>
          <Typography>Availability</Typography>
          <Typography>Fired</Typography>
          <Typography>Pension/Retirement</Typography>
        </Stack>

        <Stack sx={{ flex: 1 }}>
          <Typography>Deductible Income</Typography>
          <Typography>Transportation Issue</Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Damaged Employee Property/Materials/Equipment
          </Typography>
          <Typography>Pension/Retirement</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default OpenIssuesTitle;
