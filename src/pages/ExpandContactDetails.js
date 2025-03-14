import {
  Stack,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Radio,
  Box,
} from "@mui/material";

function ExpandContactDetails() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ bgcolor: "#183084", color: "white", p: 1 }}
      >
        Attempt to Contact Details
      </Typography>
      <Stack spacing={2} mt={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Party</b>
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <b>Date</b>
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <b>Time</b>
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <b>Type</b>
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <b>Method</b>
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <b>Response Deadline</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  E: Premium Retail Services, Inc.- Jennifer Graf
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>01/15/2025</TableCell>
                <TableCell sx={{ padding: "6px" }}>10:15 AM</TableCell>
                <TableCell sx={{ padding: "6px" }}>Original</TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  Phone: 603-856-7771
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>1/17/2025 10:15am</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <Radio checked size="small" sx={{ mr: 1 }} />
          <Typography variant="body1">
            <b>Left Message:</b> Advising party that failure to respond by
            MM/DD/YYYY 00:00 AM/PM will result in determination based on
            available information.
          </Typography>
        </Box>
        <Paper
          elevation={1}
          sx={{ p: 2, bgcolor: "#f5f5f5", border: "1px solid #ccc" }}
        >
          <Typography variant="body1">
            <b>Comments:</b> Provided email address for response to fact finding
            with message also left for a return phone call MTyrie025800
          </Typography>
        </Paper>
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

export default ExpandContactDetails;

