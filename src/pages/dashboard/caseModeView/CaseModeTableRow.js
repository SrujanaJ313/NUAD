import React, { useState } from "react";
import {
  TableCell,
  TableRow,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ToolTip from "../../../components/Tooltip";

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
      <StyledTableCell>{row.dueDate}</StyledTableCell>
      <StyledTableCell>{row.claimantName}</StyledTableCell>
      <StyledTableCell>{row.ssn}</StyledTableCell>
      <StyledTableCell>{row.byeDt}</StyledTableCell>
      <StyledTableCell>{row.complexity}</StyledTableCell>
      <StyledTableCell>{row.assignedDate}</StyledTableCell>
      <ToolTip>
        <StyledTableCell>{row.openIssues}</StyledTableCell>
      </ToolTip>
      <StyledTableCell>{row.ff}</StyledTableCell>
      <StyledTableCell>{row.weeksFiled}</StyledTableCell>
      <StyledTableCell>{row.indicators}</StyledTableCell>
    </TableRow>
  );
};

export default CaseModeTableRow;

