import React from "react";
import {
  TableCell,
  TableRow,
  Radio,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomWidthTooltip from "../../../components/Tooltip";
import OpenIssuesTitle from "./OpenIssuesTitle";
import FFOptions from "./FFOptions";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// const indicatorColors = {
//   LATE: "#ab0c0c",
//   HI: "red",
//   WL: "#f36d6d",
// };
const StyledTableCell = styled(TableCell)(({ theme, indicator, width }) => ({
  padding: "10px 5px",
  width: width || "auto",
  whiteSpace: "nowrap",
  // overflow: "hidden",
  // textOverflow: "ellipsis",
  lineHeight: "1rem",
  color: "inherit",
}));

const CaseModeTableRow = ({ row, selectedRow, setSelectedRow }) => {
  return (
    <TableRow key={row?.caseNum}>
      <StyledTableCell padding="checkbox">
        <FormControlLabel
          value={row?.caseNum}
          control={<Radio />}
          label=""
          // checked={row?.caseNum === selectedRow.caseNum}
          checked={row?.claimantName === selectedRow.claimantName}
          onChange={() => {
            // const row = rows?.find((r) => r.caseNum === Number(e.target.value));
            setSelectedRow(row);
          }}
        />
      </StyledTableCell>
      <StyledTableCell>{row.dueDate}</StyledTableCell>
      <StyledTableCell>{row.claimantName}</StyledTableCell>
      <CustomWidthTooltip title={row.ssn.slice(-4)} placement="bottom" arrow>
        <StyledTableCell>....</StyledTableCell>
      </CustomWidthTooltip>
      <StyledTableCell>{row.byeDt}</StyledTableCell>
      <StyledTableCell>{row.complexity}</StyledTableCell>
      <StyledTableCell>{row.assignedDate}</StyledTableCell>
      <CustomWidthTooltip title={<OpenIssuesTitle />}>
        <TableCell>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{row.openIssues} ...</Typography>
            {/* <InfoOutlinedIcon sx={{ width: "16px" }} fontSize="small" /> */}
          </Stack>
        </TableCell>
      </CustomWidthTooltip>
      <CustomWidthTooltip title={<FFOptions />}>
        <StyledTableCell>
          {row?.ff?.split(",").map((f) => (
            <Box
              key={f}
              sx={{
                display: "flex",
                alignItems: "center", // Align items vertically in the center
                gap: 0.5, // Add a small gap between the text and icon
                color: "black",
                fontSize: "12px",
              }}
            >
              <Typography variant="body2">{f} ...</Typography>
              {/* <InfoOutlinedIcon sx={{ width: "16px" }} fontSize="small" /> */}
            </Box>
          ))}
        </StyledTableCell>
      </CustomWidthTooltip>
      <TableCell>{row.weeksFiled}</TableCell>

      <CustomWidthTooltip title={row.indicators}>
        <StyledTableCell>
          {row.indicators && (
            <Paper
              elevate={2}
              style={{
                width: "auto",
                padding: "5px 0px",
                fontWeight: "bolder",
                color: "blue",
                textAlign: "center",
                position: "relative",
              }}
            >
              {row.indicators}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 10,
                  width: "10px",
                  borderTop: "1px solid black",
                }}
              />
            </Paper>
          )}
        </StyledTableCell>
      </CustomWidthTooltip>
    </TableRow>
  );
};

export default CaseModeTableRow;

