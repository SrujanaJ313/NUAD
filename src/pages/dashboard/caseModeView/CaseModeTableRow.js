import React, { useState } from "react";
import { TableCell, TableRow, Radio, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomWidthTooltip from "../../../components/Tooltip";
import OpenIssuesTitle from "./OpenIssuesTitle";
import FFOptions from "./FFOptions";

const indicatorColors = {
  LATE: "#ab0c0c",
  HI: "red",
  WL: "#f36d6d",
  FF: "Green",
};
const StyledTableCell = styled(TableCell)(({ theme, indicator}) => ({
  lineHeight: "1rem",
  color: indicatorColors[indicator] || "inherit",
}));

const CaseModeTableRow = ({ row, selectedRow, setSelectedRow }) => {
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
      <CustomWidthTooltip title={row.ssn.slice(-4)} placement="bottom" arrow>
        <StyledTableCell>....</StyledTableCell>
      </CustomWidthTooltip>
      <StyledTableCell>{row.byeDt}</StyledTableCell>
      <StyledTableCell>{row.complexity}</StyledTableCell>
      <StyledTableCell>{row.assignedDate}</StyledTableCell>
      <CustomWidthTooltip title={<OpenIssuesTitle />}>
        <StyledTableCell>{row.openIssues}</StyledTableCell>
      </CustomWidthTooltip>
      <CustomWidthTooltip title={<FFOptions />}>
        <StyledTableCell indicator="FF">{row.ff}</StyledTableCell>
      </CustomWidthTooltip>
      <StyledTableCell>{row.weeksFiled}</StyledTableCell>
      <StyledTableCell>{row.indicators}</StyledTableCell>
    </TableRow>
  );
};

export default CaseModeTableRow;

