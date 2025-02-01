import React, { useState } from "react";
import {
  TableCell,
  TableRow,
  Radio,
  Stack,
  Typography,
  Tooltip,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StyledTableCell = styled(TableCell)(({ theme, indicator }) => ({
  lineHeight: "1rem",
  color: indicatorColors[indicator] || "inherit",
}));

const indicatorColors = {
  LATE: "#ab0c0c",
  HI: "red",
  WL: "#f36d6d",
};

const CaseModeTableRow = ({ row, selectedRow, setSelectedRow }) => {
  console.log(row);
  return (
    <TableRow key={row?.caseNum}>
      <StyledTableCell padding="checkbox">
        <FormControlLabel
          value={row?.caseNum}
          control={<Radio />}
          label=""
          checked={row?.caseNum === selectedRow.caseNum}
          onChange={() => {
            // const row = rows?.find((r) => r.caseNum === Number(e.target.value));
            setSelectedRow(row);
          }}
        />
      </StyledTableCell>
      {/* <StyledTableCell>{row.claimantName}</StyledTableCell> */}
      <StyledTableCell>
        <Stack spacing={1.5} direction="row">
          <Typography>{row.dueDate}</Typography>
          {row.partialSsn && (
            <Tooltip title={row.partialSsn} placement="right-start">
              <MoreHorizIcon />
            </Tooltip>
          )}
        </Stack>
      </StyledTableCell>
      <StyledTableCell>{row.claimantName}</StyledTableCell>
      <StyledTableCell>{row.ssn}</StyledTableCell>
      <StyledTableCell>{row.byeDt}</StyledTableCell>
      {/* <StyledTableCell>
        <Stack spacing={1.5} direction="row">
          {row.status}
          &nbsp; &nbsp; &nbsp;
          {row.byeDt || ""}
        </Stack>
      </StyledTableCell> */}
      <StyledTableCell>{row.complexity}</StyledTableCell>
      <StyledTableCell>{row.assignedDate}</StyledTableCell>
      <StyledTableCell>{row.openIssues}</StyledTableCell>
      <StyledTableCell>{row.ff}</StyledTableCell>
      <StyledTableCell>{row.weeksFiled}</StyledTableCell>
      <StyledTableCell>{row.indicators}</StyledTableCell>
      {/* <StyledTableCell
        style={{ color: row.indicatorColor }}
        indicator={row.indicator}
      >
        {row.indicator === "LATE" ? ">21" : row.indicator}
      </StyledTableCell> */}
    </TableRow>
  );
};

export default CaseModeTableRow;
