import React from "react";
import {
  TableCell,
  TableRow,
  Radio,
  FormControlLabel,
  Paper,
  Stack,
} from "@mui/material";
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
const StyledTableCell = styled(TableCell)(({ theme, indicator, width }) => ({
  padding: "10px 5px",
  width: width || "auto",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
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
        <StyledTableCell>{row.openIssues}</StyledTableCell>
      </CustomWidthTooltip>
      <CustomWidthTooltip title={<FFOptions />}>
        <StyledTableCell indicator="FF">
          {row?.ff?.split(",").map((f) => (
            <div
              key={f}
              style={{ color: "green", textDecoration: "underline", fontSize:"12px" }}
            >
              {f}
            </div>
          ))}
        </StyledTableCell>
      </CustomWidthTooltip>
      <StyledTableCell>{row.weeksFiled}</StyledTableCell>
      <CustomWidthTooltip title={row.indicators}>
        <StyledTableCell>
          <Paper
            elevate={2}
            style={{
              width: "50px",
              padding: "5px",
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
        </StyledTableCell>
      </CustomWidthTooltip>
    </TableRow>
  );
};

export default CaseModeTableRow;

